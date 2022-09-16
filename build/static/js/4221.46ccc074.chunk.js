"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[4221],{14221:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=t(1413),i=(t(47313),t(28303)),r=t(90182),o=t(57730),s=t(51474),u=t(18573),c=t(46417),l=function(){return(0,c.jsxs)("div",{className:"news-page py-4",children:[(0,c.jsxs)(r.Z,{children:[(0,c.jsx)("title",{children:"KENNEKT | Edit News"}),(0,c.jsx)("meta",{name:"description",content:"KENNEKT Announcement"})]}),(0,c.jsx)("h1",{className:"font-bold text-2xl mb-2 dark:text-white -mt-12",children:"Edit News"}),(0,c.jsx)("div",{className:"mb-4",children:(0,c.jsx)(o.Z,{"aria-label":"breadcrumb",children:(0,c.jsx)(i.rU,{to:"/news/news-list/",children:(0,c.jsx)("span",{className:"text-primary transition hover:text-primary-dark text-sm",children:"News List"})})})}),(0,c.jsx)("div",{className:"uni-page__content",children:(0,c.jsx)(u.T,{})})]})};var d=function(e){return(0,c.jsx)(s.SV,{children:(0,c.jsx)(l,(0,a.Z)({},e))})}},18573:function(e,n,t){t.d(n,{T:function(){return _}});var a=t(1413),i=t(42982),r=(t(47313),t(84365)),o=t(50474),s=t(69706),u=t.n(s),c=t(95762),l=t(51474),d=t(90146),m=t(65188),v=t(77344),p=t(46417),y=[{name:"Reader First Name",code:"{reader_first_name}"},{name:"Reader Last Name",code:"{reader_last_name}"},{name:"Reader Company",code:"{business_company}"},{name:"Author First Name",code:"{author_first_name}"},{name:"Author Last Name",code:"{author_last_name}"},{name:"Author company",code:"{client_company}"}],b=[{name:"Daily",code:"DAILY"},{name:"Weekly",code:"WEEKLY"},{name:"Monthly",code:"MONTHLY"},{name:"Yearly",code:"YEARLY"},{name:"Quarterly",code:"QUARTERLY"}],f=[{value:"ACTIVE",label:"Active"},{label:"On hold",value:"ON_HOLD"}],h=function(e){var n=(0,m.tv)(),t=n.params,a=n.history,s=(0,v.m)().companyId,h=parseInt(null===t||void 0===t?void 0:t.campaignId),_=parseInt(null===t||void 0===t?void 0:t.newsId),j=(0,m.eC)().showNotification,S=function(e){switch(e){case"ONE_TIME":default:return"ONE_TIME";case"DAILY":case"WEEKLY":case"MONTHLY":case"YEARLY":case"QUARTERLY":return"REPEAT";case"EVENTS":return"EVENTS"}};return s?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(c.Z.One,{id:_,entity:"news",name:"news-".concat(h),url:"/".concat(s,"/notifications/").concat(_,"/"),params:{},relations:"",children:function(e){var n,t,c=e.item,m=e.isFetched,v=c;return(0,p.jsx)("div",{className:"uni-page__content",children:m?(0,p.jsx)(r.Z.Main,{id:_,entity:"news",name:"".concat(h?"AllCampaignNews":"AllRegularNews"),url:"/".concat(s,"/notifications/").concat(v.id,"/"),method:"put",sendAsFormData:!1,fields:[{name:"subject",required:!0,value:v.subject,onSubmitKey:""},{name:"body",required:!0,value:v.body,onSubmitKey:""},{name:"files",value:v.files,onSubmitKey:"",type:"object"},{name:"type",value:null===v||void 0===v?void 0:v.receiver.type,onSubmitKey:"",type:"object"},{name:"status",value:v.status,onSubmitKey:""},{name:"open_for_cases",value:v.open_for_cases,onSubmitKey:""},{name:"frequency",value:S(v.frequency),onSubmitKey:""},{name:"timezone",onSubmitValue:function(e){return{id:u()(e,"id")}},value:v.timezone,onSubmitKey:"",type:"object"},{name:"campaign",value:null!==v&&void 0!==v&&v.receiver.campaign?null===v||void 0===v||null===(n=v.receiver)||void 0===n||null===(t=n.campaign)||void 0===t?void 0:t.id:void 0,onSubmitKey:""},{name:"start_time",value:v.start_time,onSubmitValue:function(e){return(0,o.L)(e)},onSubmitKey:""},{name:"end_time",value:v.end_time,onSubmitValue:function(e){return(0,o.L)(e)},onSubmitKey:""},{name:"event_times",value:v.event_times||[],onSubmitKey:"",type:"object"},{name:"department",value:v.department,onSubmitValue:function(e){return u()(e,"id")},onSubmitKey:"",type:"object"},{name:"sub_department",onSubmitValue:function(e){return u()(e,"id")},value:v.sub_department,onSubmitKey:"",type:"object"},{name:"staff_departments",value:null===v||void 0===v?void 0:v.receiver.staff_departments,onSubmitValue:function(e,n){return e&&"staff"===n.type?null===e||void 0===e?void 0:e.reduce((function(e,n){return[].concat((0,i.Z)(e),[n.id])}),[]):void 0},onSubmitKey:"",type:"object"},{name:"categories",value:null===v||void 0===v?void 0:v.receiver.categories,onSubmitValue:function(e,n){return e&&"client"===(null===n||void 0===n?void 0:n.type)?null===e||void 0===e?void 0:e.reduce((function(e,n){return[].concat((0,i.Z)(e),[n.id])}),[]):void 0},onSubmitKey:"",type:"object"}],onSuccess:function(e,n){n(),j({message:"Successfully Updated",variant:"success"}),h||null!==e&&void 0!==e&&e.receiver.campaign?a.push("/news/campaigns/view/".concat(h)):a.push("/news/news-list")},onError:function(e,n){var t,a,i=(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)||"Something went wrong";j({message:i,variant:"error"})},children:function(e){var n=e.isSubmitting,t=e.values,a=e.setFieldValue,i=e.errors,r=e.setFieldError;return(0,p.jsx)(d.Z,{isUpdate:c,isSubmitting:n,values:t,setFieldValue:a,keywords:y,frequencies:b,statuses:f,campaignId:h,setFieldError:r,errors:i})}}):(0,p.jsx)(l.aN,{tiled:!0,withOverlay:!0})})}})}):(0,p.jsx)(l.aN,{})};function _(e){return(0,p.jsx)(l.SV,{children:(0,p.jsx)(h,(0,a.Z)({},e))})}}}]);