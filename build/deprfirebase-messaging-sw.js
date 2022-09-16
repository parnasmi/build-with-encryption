/*eslint no-restricted-globals: off*/
importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.10.0/localforage.min.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js');

const config = {
	apiKey: 'AIzaSyBYL4QAhRMPghTiFm0P9dRG6za5I9pXnoc',
	authDomain: 'konnex-client.firebaseapp.com',
	databaseURL: 'https://konnex-client.firebaseio.com',
	projectId: 'konnex-client',
	storageBucket: 'konnex-client.appspot.com',
	messagingSenderId: '285415707623',
	appId: '1:285415707623:web:867663ac4a06fbe8632342'
};

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

	if (payload.data.push_type === 'client_invitation_push') {
		const company = JSON.parse(payload.data.company);
		title = 'Client invitation';
		options = {
			body: `You have been invited to join ${company.name} as a client. Please Accept to join. `,
			data: payload.data
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
			data: payload.data
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
		push_type === 'client_invitation_push' ||
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
	console.log('notificationclick', event.notification.data);
	event.preventDefault();

	const {
		client_company,
		// company,
		entity_id,
		entity_type,
		case_status_id,
		push_type,
		// current_company,
		business_company
	} = event.notification.data;
	const clientCompanyFromPush = client_company && JSON.parse(client_company);
	// const companyFromPush = company && JSON.parse(company);
	const businessCompany = business_company && JSON.parse(business_company);
	// const companyIdFromPush = companyFromPush && companyFromPush.id;
	// const clientCompanyIdFromPush = clientCompanyFromPush && clientCompanyFromPush.id;

	if (push_type === 'client_invitation_push') {
		self.clients.openWindow(`https://client.kennekt.com/switch-business/business-requests`);
	}

	// if (push_type === 'company_connection_new') {
	// 	self.clients.openWindow(
	// 		`https://client.kennekt.com/${JSON.parse(company).id}/app/client-management/requests/`
	// 	);
	// }

	if (push_type === 'member_added' && entity_type === 'ims') {
		const url = `https://client.kennekt.com/preloader?entity_type=${entity_type}
			&entity_id=${entity_id}&business_company=${clientCompanyFromPush?.id}&type=${push_type}&test=test`;
		console.log('member adding url leaving', url);

		self.clients.openWindow(url);
		return;
	}

	if (event.notification.data.client_company) {
		//https://app.kennekt.com
		//localhost:3000
		self.clients.openWindow(
			`https://localhost:3002/preloader?entity_type=${entity_type}
			&entity_id=${entity_id}&status=${case_status_id}
			&business_company=${businessCompany?.id}&type=${push_type}`
		);
	}

	// return event;
});
