// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js');
// eslint-disable-next-line no-undef
importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.10.0/localforage.min.js');

const config = {
	apiKey: 'AIzaSyBYL4QAhRMPghTiFm0P9dRG6za5I9pXnoc',
	authDomain: 'konnex-client.firebaseapp.com',
	databaseURL: 'https://konnex-client.firebaseio.com',
	projectId: 'konnex-client',
	storageBucket: 'konnex-client.appspot.com',
	messagingSenderId: '285415707623',
	appId: '1:285415707623:web:867663ac4a06fbe8632342'
};

const domain = 'new.kennekt.com';

// let messaging;

firebase.initializeApp(config);
const messaging = firebase.messaging();

// if (firebase.messaging.isSupported()) {
// 	messaging = firebase.messaging();
// }

messaging.setBackgroundMessageHandler((payload) => {
	console.log('BACKGROUND MESSAGEE', payload);
	let title;
	let options;

	const { message_id, custom_uuid, push_type } = payload.data;

	if (payload.data.push_type === 'staff_invitation_push') {
		const company = JSON.parse(payload.data.company);
		title = 'Staff invitation';
		options = {
			body: `You have been invited to join ${company.name} as a staff ${payload?.data?.role}. Please Accept to join. `,
			data: payload.data,
			requireInteraction: true
		};
	} else {
		title = payload?.data?.custom_title;
		let bodyMessage;
		switch (payload.data.file_type) {
			case 'AUDIO':
				bodyMessage = 'Audio';
				break;
			case 'IMAGE':
				bodyMessage = 'Image';
				break;
			case 'VIDEO':
				bodyMessage = 'Video';
				break;
			case 'CONTACT':
				bodyMessage = 'Contact';
				break;
			case 'LOCATION':
				bodyMessage = 'Location';
				break;
			case 'FILE':
				bodyMessage = 'File';
				break;
			default:
				// bodyMessage = payload?.data?.custom_body.replace(/<\/br>/g, " ");
				// bodyMessage = removeBr(payload?.data?.custom_body);
				bodyMessage = payload?.data?.custom_body_clean;
		}

		let senderName;

		if (payload?.data?.name) {
			senderName = `${payload?.data?.name
				.split(' ')
				.map((n) => n[0].toUpperCase())
				.join('')}:`;
		} else {
			senderName = '';
		}

		options = {
			body: `${senderName} ${bodyMessage}`,
			icon: payload?.data?.photo,
			data: payload.data,
			requireInteraction: true
		};
	}

	if (push_type !== 'read_action') {
		// eslint-disable-next-line no-undef
		localforage.getItem('user').then(function (readValue) {
			fetch(
				`https://api.kennekt.com/unread_message/?user_id=${readValue.id}&message_id=${message_id}&custom_uuid=${custom_uuid}`
			)
				.then((res) => res.status === 404 && self.registration.showNotification(title, options))
				.catch(function () {});
		});
	}
	if (
		push_type === 'staff_invitation_push' ||
		push_type === 'staff_invitation_acceptance' ||
		push_type === 'staff_invitation_rejection' ||
		push_type === 'company_connection_new' ||
		push_type === 'company_connection' ||
		push_type === 'user_connection' ||
		push_type === 'new_case' ||
		push_type === 'member_added' ||
		push_type === 'member_deleted' ||
		push_type === 'NEWS'
	) {
		return self.registration.showNotification(title, options);
	}

	// eslint-disable-next-line no-undef
});

self.addEventListener('notificationclick', (event) => {
	// console.log("notificationclick", event);
	event.preventDefault();

	const {
		client_company,
		company,
		entity_id,
		entity_type,
		case_status_id,
		push_type,
		current_company,
		business_company
	} = event.notification.data;
	const clientCompanyFromPush = client_company && JSON.parse(client_company);

	const businessCompany = business_company && JSON.parse(business_company);
	const companyFromPush = company && JSON.parse(company);
	const companyIdFromPush = companyFromPush && companyFromPush.id;
	const clientCompanyIdFromPush = clientCompanyFromPush && clientCompanyFromPush.id;
	const isStaff = Number(companyIdFromPush) === Number(clientCompanyIdFromPush);

	if (push_type === 'staff_invitation_push') {
		self.clients.openWindow(`https://${domain}/switch-business/business-requests`);
	}
	//TODO: implement when client management is ready
	if (push_type === 'company_connection_new') {
		self.clients.openWindow(
			`https://${domain}/${JSON.parse(company).id}/client-management/requests/`
		);
	}

	if (
		event.notification.data.client_company &&
		event.notification.data.push_type !== 'staff_invitation_push'
	) {
		self.clients.openWindow(
			`https://${domain}/preloader?entity_type=${entity_type}
			&entity_id=${entity_id}&status=${case_status_id}&caseType=${isStaff ? 'Staff' : 'Client'}
			&business_company=${businessCompany?.id}&type=${push_type}`
		);
	}

	// return event;
});
