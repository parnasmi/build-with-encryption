"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[9660],{81934:function(e,n,t){t.d(n,{p:function(){return i}});t(47313);var a=t(46417);function i(e){var n=e.onSuccess,t=e.isSubmitting,i=e.disableOptions,r=void 0!==i&&i,o=e.submitText,s=void 0===o?"Invite Client":o;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"mr-5 border border-kgrey text-kgrey  rounded-lg px-5 py-2 transition hover:border-primary hover:text-primary focus:ring focus:ring-primary",onClick:n,type:"button",children:"Cancel"}),(0,a.jsx)("button",{className:"bg-primary-dark rounded-lg text-white px-5 py-2 border border-transparent hover:border-primary-dark transition-colors hover:bg-white hover:text-primary-dark dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none focus:ring focus:ring-primary dark:hover:bg-primary-300 dark:focus:ring-primary-300",type:"submit",disabled:t||r,children:s})]})}},63256:function(e,n,t){t.d(n,{s:function(){return b},F:function(){return v}});var a=t(47313),i=t(77344),r=t(65188),o=t(84365),s=t(51474),l=t(61818),c=t(85700),u=t(94715),d=t(17480),m=t(81934),p=t(52654),f=t(26926),h=t(46417);var g=function(e){var n=e.isSubmitting,t=e.onSuccess,o=e.setFieldValue,s=e.isEditing,g=void 0!==s&&s,b=(0,i.m)().companyId,v=(0,r.h9)({open_for_cases:!1}),y=v.checked,w=v.handleChange;return(0,a.useEffect)((function(){o("open_for_cases",y.open_for_cases)}),[y]),(0,h.jsxs)("div",{className:"w-full",children:[(0,h.jsx)(u.gN,{label:"Campaign Name:",labelClasses:"ml-6 text-xs font-light mb-2 text-kgrey-welcome block",name:"name",component:d.Mg,placeholder:"Type your campaign name..",required:!0,autoComplete:"off",maxLength:"250"}),(0,h.jsx)(f.D8,{control:(0,h.jsx)(p.k,{checked:y.open_for_cases,onChange:w,name:"open_for_cases"}),label:"Allow Case Creation",className:"!mb-4"}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("label",{className:"ml-6 text-xs font-light text-kgrey-welcome mb-2 block",children:(0,h.jsx)("span",{children:"Search Client:"})}),(0,h.jsx)("div",{className:"react-select-dropdown",children:(0,h.jsx)(u.gN,{component:l.Z,customStylesProps:c.gb,name:"categories",placeholder:"Select Clients Groups here",optionLabel:"name",optionValue:"id",isSearchable:!0,isMulti:!0,isClearable:!0,loadOptionsKey:"results",loadOptionsUrl:"/".concat(b,"/categories/"),loadOptionsParams:function(e){return{extra:{search:e}}}})})]}),(0,h.jsx)("div",{className:"mt-8 flex-center-between",children:(0,h.jsx)(m.p,{onSuccess:t,isSubmitting:n,submitText:"".concat(g?"Edit":"Create"," Campaign")})})]})};function b(e){var n=e.onSuccess,t=(0,i.m)().companyId,a=(0,r.eC)().showNotification;return(0,h.jsx)("div",{children:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(o.Z.Main,{entity:"campaigns",name:"AllCampaigns",url:"/".concat(t,"/campaigns/"),method:"post",primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},prependData:!0,fields:[{name:"categories",onSubmitKey:"",required:!1,type:"object",value:[]},{name:"name",onSubmitKey:"",required:!0},{name:"open_for_cases",onSubmitKey:"",value:!1,required:!0}],onSuccess:function(e,t){a({message:"Successfully created.."}),n(),t()},onError:function(e,n){var t,i,r=(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.message)||"Something went wrong";a({message:r,variant:"error"})},children:function(e){var t=e.isSubmitting,a=(e.values,e.resetForm),i=e.setFieldValue;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.ph,{resetForm:a,title:"Create Templates"}),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"flex items-center",children:[(0,h.jsx)(g,{isSubmitting:t,onSuccess:n,setFieldValue:i}),t&&(0,h.jsx)(s.aN,{tiled:!0,withOverlay:!0})]})})]})}})})})}function v(e){var n=e.onSuccess,t=e.entity,a=(0,i.m)().companyId,l=(0,r.eC)().showNotification;return t?(0,h.jsx)("div",{children:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(o.Z.Main,{entity:"campaigns",name:"AllCampaigns",url:"/".concat(a,"/campaigns/").concat(null===t||void 0===t?void 0:t.id,"/"),method:"put",primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},updateData:!0,fields:[{name:"categories",onSubmitKey:"",required:!1,type:"object",value:t.categories},{name:"name",onSubmitKey:"",required:!0,value:t.name},{name:"open_for_cases",onSubmitKey:"",value:t.open_for_cases,required:!0}],onSuccess:function(e,t){l({message:"Successfully edited.."}),n(),t()},onError:function(e,n){var t,a,i=(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)||"Something went wrong";l({message:i,variant:"error"})},children:function(e){var t=e.isSubmitting,a=(e.values,e.resetForm),i=e.setFieldValue;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.ph,{resetForm:a,title:"Edit Templates",isEditing:!0}),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"flex items-center",children:[(0,h.jsx)(g,{isSubmitting:t,onSuccess:n,setFieldValue:i,isEditing:!0}),t&&(0,h.jsx)(s.aN,{tiled:!0,withOverlay:!0})]})})]})}})})}):null}},22206:function(e,n,t){t.d(n,{ZQ:function(){return c},vd:function(){return u}});var a=t(70885),i=t(1413),r=t(47313),o=t(46417),s=(0,r.createContext)(null),l=function(e,n){switch(n.type){case"SET_SEARCH_QUERY":return(0,i.Z)((0,i.Z)({},e),{},{searchQuery:n.payload});case"SET_IS_STAFF":return(0,i.Z)((0,i.Z)({},e),{},{isStaff:n.payload});case"SET_AUDIO_CANCEL_SENDING":return(0,i.Z)((0,i.Z)({},e),{},{cancelAudioUpload:n.payload});case"SET_AUDIO_UPLOAD_PROGRESS":return(0,i.Z)((0,i.Z)({},e),{},{audioUploadProgress:n.payload});case"SET_AUDIO_RESPONSE":return(0,i.Z)((0,i.Z)({},e),{},{audioResponse:n.payload});default:return e}};function c(e){var n=e.children,t=(0,r.useReducer)(l,{searchQuery:null,isStaff:!1,cancelAudioUpload:!1,audioUploadProgress:null,audioResponse:null}),i=(0,a.Z)(t,2),c=i[0],u=i[1],d=c.searchQuery,m=c.isStaff,p=c.cancelAudioUpload,f=c.audioUploadProgress,h=c.audioResponse,g={searchQuery:d,isStaff:m,setSearchQuery:(0,r.useCallback)((function(e){u({type:"SET_SEARCH_QUERY",payload:e})}),[]),setIsStaff:(0,r.useCallback)((function(e){u({type:"SET_IS_STAFF",payload:e})}),[]),cancelAudioUpload:p,audioUploadProgress:f,setAudioCancelSending:(0,r.useCallback)((function(e){return u({type:"SET_AUDIO_CANCEL_SENDING",payload:e})}),[]),setAudioUploadProgress:(0,r.useCallback)((function(e){return u({type:"SET_AUDIO_UPLOAD_PROGRESS",payload:e})}),[]),setAudioResponse:(0,r.useCallback)((function(e){return u({type:"SET_AUDIO_RESPONSE",payload:e})}),[]),audioResponse:h};return(0,o.jsx)(s.Provider,{value:g,children:n})}var u=function(){var e=(0,r.useContext)(s);if(!e)throw new Error("useNewsContext must be used within the NewsContextProvider");return e}},62238:function(e,n,t){t.d(n,{n8:function(){return p},c2:function(){return d},SD:function(){return s},Ip:function(){return m},fd:function(){return y}});var a=t(70885),i=t(47313),r=t(65188),o=t(22206);function s(){var e=i.useState(0),n=(0,a.Z)(e,2),t=n[0],s=n[1],l=i.useState("Clients List"),c=(0,a.Z)(l,2),u=c[0],d=c[1],m=(0,i.useState)(!1),p=(0,a.Z)(m,2),f=p[0],h=p[1],g=(0,i.useState)(!1),b=(0,a.Z)(g,2),v=b[0],y=b[1],w=(0,r.tv)(),x=w.location,C=w.match,S=w.history,Z=C.url,k=C.path,N=(0,r.gQ)("News"),T=N.unreadCasesQuantity,_=N.isHidden,A=(0,r.h9)({isStaff:!1}),j=A.checked,D=A.handleChange,P=(0,o.vd)().setIsStaff;return(0,i.useEffect)((function(){var e=x.pathname.split("/").filter(Boolean).filter(String),n=e[e.length-1]||"";!function(){switch(n){case"news-list":s(0),d("News List");break;case"campaigns":s(1),d("Campaigns");break;case"templates":s(2),d("News Templates");break;case"groups":s(3),d("Client groups");break;default:;}}()}),[x]),(0,i.useEffect)((function(){P(j.isStaff)}),[j]),{primeTab:t,pageName:u,url:Z,path:k,unreadCasesQuantity:T,isHidden:_,handleChangePrime:function(e,n){s(n)},groupVisible:f,toggleGroupForm:function(){return h((function(e){return!e}))},toggleCampaignCreateForm:function(){return y((function(e){return!e}))},navigateToCreatePage:function(){return S.push("/news/create")},navigateToEditPage:function(e){return function(){return S.push("/news/news-list/edit/".concat(e))}},campaignVisible:v,navigateToTemplateCreate:function(){return S.push("/news/create-template")},location:x,handleChange:D,checked:j}}var l=t(77344),c=t(93905),u=t(92241);function d(){var e=(0,l.m)().companyId,n=(0,u.I0)(),t=(0,r.eC)().showNotification,a=(0,r.iR)(),i=a.visible,o=a.showVisible,s=a.loading,d=a.toggleLoading,m=a.closePopup;return{deleteLoading:s,handleNewsDelete:function(a){d(),n((0,c.Bi)({entity:"news",name:"AllNews",method:"delete",url:"/".concat(e,"/notifications/").concat(a.id,"/"),deleteData:!0,id:a.id,cb:{success:function(){t({message:"Successfully deleted",variant:"success"})},error:function(e){t({message:"Something went wrong",variant:"error"})},finally:function(){d(),m()}},params:{},primaryKey:"id",values:{}}))},showDeleteVisible:o,closeDeletePopup:m,deleteVisible:i}}function m(){var e=(0,l.m)().companyId,n=(0,u.I0)(),t=(0,r.eC)().showNotification,a=(0,r.iR)(),o=a.visible,s=a.showVisible,d=a.loading,m=a.toggleLoading,p=a.closePopup,f=(0,i.useCallback)((function(a){m(),n((0,c.Bi)({entity:"templates",name:"AllTemplates",method:"delete",url:"/".concat(e,"/notification-templates/").concat(a.id,"/"),deleteData:!0,id:a.id,cb:{success:function(){t({message:"Successfully deleted",variant:"success"})},error:function(e){t({message:"Something went wrong",variant:"error"})},finally:function(){m(),p()}},params:{},primaryKey:"id",values:{}}))}),[]);return{deleteLoading:d,deleteTemplateHandler:function(){return function(){return f(o)}},showDeleteVisible:s,closeDeletePopup:p,deleteVisible:o}}function p(){var e=(0,u.I0)(),n=(0,r.eC)().showNotification,t=(0,l.m)().companyId,a=(0,r.iR)(),i=a.visible,o=a.showVisible,s=a.loading,d=a.toggleLoading,m=a.closePopup;return{deleteVisible:i,showDeleteVisible:o,deleteLoading:s,toggleDeleteLoading:d,closeDeletePopup:m,handleCampaignNewsDelete:function(a){d(),e((0,c.Bi)({entity:"campaignNews",name:"AllCampaignNews",method:"delete",url:"/".concat(t,"/notifications/").concat(a.id,"/"),deleteData:!0,id:a.id,values:{},cb:{success:function(){n({message:"Successfully deleted!",variant:"success"})},error:function(e){n({message:"Something went wrong",variant:"error"})},finally:function(){d(),m()}},params:{},primaryKey:"id"}))}}}var f=t(1413),h=t(31881),g=t.n(h),b=t(32335),v=t(11760);function y(){var e=(0,l.m)().companyId,n=(0,v.a)().token,t=(0,i.useState)({uuids:{},audioCancelToken:null,audioUploadProgress:null}),r=(0,a.Z)(t,2),s=r[0],c=r[1],u=s.audioUploadProgress,d=s.audioCancelToken,m=(0,o.vd)(),p=m.cancelAudioUpload,h=m.setAudioCancelSending,y=m.setAudioUploadProgress,w=m.setAudioResponse,x="".concat(b.Z.API_ROOT,"/").concat(e,"/upload/");(0,i.useEffect)((function(){u&&y(u)}),[u]),(0,i.useEffect)((function(){if(p&&d){null===d||void 0===d||d.cancel("Uploading canceled by the user."),y(null),h(!1),c((function(e){return(0,f.Z)((0,f.Z)({},e),{},{audioCancelToken:null})}))}}),[p]);return{uploadAudioFile:function(e){var t=new FormData,a="".concat(Math.random()).slice(2)+".mp3";t.append("file",e,a);var i=g().CancelToken.source();c((function(e){return(0,f.Z)((0,f.Z)({},e),{},{audioCancelToken:i})})),g().post(x,t,{headers:{Authorization:"Token ".concat(n)},onUploadProgress:function(e){var n=e.total,t=e.loaded;c((function(e){return(0,f.Z)((0,f.Z)({},e),{},{audioUploadProgress:Number(Math.round(t/n*100).toFixed(2))})}))},cancelToken:i.token}).then((function(e){var n=e.data;w(n),c((function(e){return(0,f.Z)((0,f.Z)({},e),{},{audioUploadProgress:null})})),y(null)})).catch((function(e){console.log("error audio upload",e)}))}}}},89660:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var a=t(1413),i=t(47313),r=t(90325),o=t(90182),s=t(51474),l=t(28303),c=t(63830),u=t(22206),d=t(62238),m=t(3925),p=t(46417);function f(){var e=(0,u.vd)(),n=e.searchQuery,t=e.setSearchQuery;return(0,p.jsxs)("div",{className:"group-sidebar__search relative",children:[(0,p.jsx)("input",{type:"search",value:n,className:"group-sidebar__search-input w-36 outline-none border-b border-kgrey-border-solid dark:border-white focus:border-primary dark:focus:border-primary transition pl-7 dark:text-white placeholder-[rgba(45, 45, 45, 0.3)] pt-2 pb-2 dark:bg-kdark",placeholder:"Search",onChange:function(e){return t(e.target.value)}}),(0,p.jsx)("div",{className:"absolute top-1/2 -translate-y-1/2 left-0",children:(0,p.jsx)("div",{className:"text-kgrey",children:(0,p.jsx)(m.lnn,{})})})]})}var h=t(26926),g=t(63256),b=t(83061),v=t(77344),y=t(11760),w=t(51865),x=t(1568),C=(0,i.lazy)((function(){return t.e(7230).then(t.bind(t,57230))})),S=(0,i.lazy)((function(){return t.e(8193).then(t.bind(t,38193))})),Z=(0,i.lazy)((function(){return t.e(7320).then(t.bind(t,97320))})),k=(0,i.lazy)((function(){return Promise.all([t.e(2359),t.e(3696)]).then(t.bind(t,73696))})),N=(0,i.lazy)((function(){return Promise.all([t.e(2359),t.e(4221)]).then(t.bind(t,14221))})),T=(0,i.lazy)((function(){return t.e(9404).then(t.bind(t,69404))})),_=(0,i.lazy)((function(){return t.e(658).then(t.bind(t,20658))})),A=(0,i.lazy)((function(){return Promise.all([t.e(2359),t.e(1786)]).then(t.bind(t,71786))})),j=(0,i.lazy)((function(){return Promise.all([t.e(2359),t.e(8094)]).then(t.bind(t,98094))})),D=(0,i.lazy)((function(){return t.e(9538).then(t.bind(t,49538))})),P=(0,i.lazy)((function(){return t.e(3558).then(t.bind(t,53558))})),E=(0,i.lazy)((function(){return t.e(6916).then(t.bind(t,46916))})),F=(0,i.lazy)((function(){return t.e(574).then(t.bind(t,30574))}));function I(e){return{id:"news-tabpanel-".concat(e),"aria-controls":"news-tab-".concat(e)}}function U(){var e=(0,d.SD)(),n=e.primeTab,t=e.pageName,u=e.url,m=e.path,p=e.unreadCasesQuantity,U=e.isHidden,V=e.handleChangePrime,z=e.groupVisible,W=e.toggleGroupForm,L=e.toggleCampaignCreateForm,Q=e.navigateToCreatePage,B=e.campaignVisible,K=e.navigateToTemplateCreate,G=e.location,q=e.handleChange,M=e.checked,H=(0,v.m)().isPermitted,X=(0,y.a)().userData,J=null===X||void 0===X?void 0:X.can_send_news,$=["campaigns/view","campaigns/news","news-list/view","news-list/edit","campaigns/edit","campaigns/view","news/create","templates/edit","templates/view"].find((function(e){return G.pathname.includes(e)})),Y=G.pathname.includes("news/create"),ee=G.pathname.includes("edit"),ne=G.pathname.includes("news-list");return(0,x.tZ)(r.d,{children:(0,x.BX)("div",{className:"p-4 max-w-full flex flex-col min-h-full flex-grow",children:[(!U||0===p)&&(0,x.tZ)(o.q,{children:(0,x.tZ)("title",{children:"KENNEKT | ".concat(t)})}),(0,x.tZ)("div",{className:"flex justify-between items-center mb-5",children:(0,x.tZ)("div",{className:"w-full flex items-center justify-between flex-wrap",children:(0,x.BX)("div",{className:"flex items-center ml-auto",children:[!Boolean($)&&(0,x.tZ)(f,{}),ne&&(0,x.BX)("div",{className:"flex-center-y ml-5",children:[(0,x.tZ)(O,{title:"Client News"}),(0,x.tZ)(w.h,{checked:M.isStaff,onChange:q,name:"isStaff"}),(0,x.tZ)(O,{title:"Staff News"})]}),!Y&&!ee&&(J||H)&&(0,x.tZ)(R,{primeTab:n,navigateToCreatePage:Q,toggleCampaignCreateForm:L,navigateToTemplateCreate:K,toggleGroupForm:W,isPermitted:H}),(0,x.tZ)(h.Cx,{handleModalOpen:L,open:B,maxWidth:446,children:(0,x.tZ)(g.s,{onSuccess:L})}),(0,x.tZ)(h.Cx,{handleModalOpen:W,open:z,maxWidth:446,children:(0,x.tZ)("p",{children:"Client Group Create Form"})})]})})}),!Y&&!ee&&(0,x.tZ)("div",{className:(0,b.Z)("prime-tabs",{"prime-tabs_no-bottom-extend":$}),children:(0,x.BX)(s.sJ.Tabs,{roundedTop:!$,value:n,onChange:V,"aria-label":"simple tabs",children:[(0,x.tZ)(s.sJ.Tab,(0,a.Z)({label:"News",component:l.rU,to:"".concat(u,"/news-list")},I(0))),(0,x.tZ)(s.sJ.Tab,(0,a.Z)({label:"Campaigns",component:l.rU,to:"".concat(u,"/campaigns")},I(1))),(0,x.tZ)(s.sJ.Tab,(0,a.Z)({label:"Templates",component:l.rU,to:"".concat(u,"/templates")},I(2))),(0,x.tZ)(s.sJ.Tab,(0,a.Z)({label:"Client Groups",component:l.rU,to:"/clients-management/categories"},I(3)))]})}),(0,x.tZ)("div",{className:"max-w-full flex-grow flex flex-col relative",children:(0,x.tZ)("div",{className:"relative flex-grow",children:(0,x.tZ)(i.Suspense,{fallback:(0,x.tZ)(s.aN,{tiled:!0}),children:(0,x.BX)(c.rs,{children:[(0,x.tZ)(c.AW,{exact:!0,path:"".concat(m,"/news-list"),component:C}),(0,x.tZ)(c.AW,{exact:!0,path:"".concat(m,"/create"),component:k}),(0,x.tZ)(c.AW,{exact:!0,path:"/news/news-list/edit/:newsId",component:N}),(0,x.tZ)(c.AW,{exact:!0,path:"/news/news-list/view/:newsId",component:T}),(0,x.tZ)(c.AW,{exact:!0,path:"".concat(m,"/campaigns"),component:S}),(0,x.tZ)(c.AW,{exact:!0,path:"/news/campaigns/news/create/:campaignId",component:A}),(0,x.tZ)(c.AW,{exact:!0,path:"/news/campaigns/view/:campaignId",component:_}),(0,x.tZ)(c.AW,{exact:!0,path:"/news/campaigns/view/:campaignId/:newsId",component:T}),(0,x.tZ)(c.AW,{exact:!0,path:"/news/campaigns/edit/:campaignId/:newsId",component:j}),(0,x.tZ)(c.AW,{exact:!0,path:"".concat(m,"/templates"),component:D}),(0,x.tZ)(c.AW,{exact:!0,path:"".concat(m,"/create-template"),component:P}),(0,x.tZ)(c.AW,{exact:!0,path:"".concat(m,"/templates/view/:templateId"),component:F}),(0,x.tZ)(c.AW,{exact:!0,path:"".concat(m,"/templates/edit/:templateId"),component:E}),(0,x.tZ)(c.AW,{exact:!0,path:"".concat(m,"/groups"),component:Z})]})})})})]})})}function R(e){var n=e.primeTab,t=e.navigateToCreatePage,a=e.toggleCampaignCreateForm,i=e.navigateToTemplateCreate,r=e.toggleGroupForm,o=e.isPermitted;return(0,x.BX)(x.HY,{children:[0===n?(0,x.tZ)(V,{isDisabled:!o,handler:t,btnText:"Create News"}):null,1===n?(0,x.tZ)(V,{isDisabled:!o,handler:a,btnText:"Create New Campaign"}):null,2===n?(0,x.tZ)(V,{isDisabled:!o,handler:i,btnText:"Create New Template"}):null,3===n?(0,x.tZ)(V,{isDisabled:!o,handler:r,btnText:"Create New Client Group"}):null]})}function V(e){var n=e.handler,t=e.btnText,a=e.isDisabled,i=void 0!==a&&a;return(0,x.tZ)(s.Ik,{isDisabled:i,onClick:n,className:"ml-4 disabled:opacity-60",children:t})}function O(e){var n=e.title;return(0,x.tZ)("dl",{className:"mr-3.5",children:(0,x.tZ)("dd",{className:"text-md font-semibold",children:n})})}var z=function(){return(0,x.tZ)(s.SV,{children:(0,x.tZ)(u.ZQ,{children:(0,x.tZ)(U,{})})})}},51865:function(e,n,t){t.d(n,{h:function(){return d}});var a=t(1413),i=t(45987),r=(t(47313),t(80454)),o=t(88137),s=t(97241),l=(t(56446),t(90431)),c=t(46417),u=["classes"],d=(0,r.Z)((function(e){return(0,o.Z)({root:{width:30,height:18,padding:0,margin:e.spacing(1)},switchBase:{padding:1,top:"1px",left:"1px","&$checked":{transform:"translateX(13px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#00A09D",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#00A09D",border:"2px solid #fff"}},thumb:{width:13,height:13},track:{borderRadius:13,backgroundColor:"#00A09D",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},disabled:{}})}))((function(e){var n=e.classes,t=(0,i.Z)(e,u);return(0,c.jsx)(l.Z,(0,a.Z)({focusVisibleClassName:n.focusVisible,disableRipple:!0,classes:{root:n.root,switchBase:n.switchBase,thumb:n.thumb,track:n.track,checked:n.checked}},t))}));(0,s.Z)((function(){return(0,o.Z)({formControlRoot:{margin:0}})}))}}]);