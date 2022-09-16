"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[3013],{25434:function(e,t,n){n.d(t,{I:function(){return i},m:function(){return m}});var a=n(70885),r=n(47313),s=n(65188);function i(){var e=r.useState(0),t=(0,a.Z)(e,2),n=t[0],i=t[1],l=r.useState("Billing"),o=(0,a.Z)(l,2),c=o[0],u=o[1],d=(0,s.tv)(),m=d.location,f=d.match,h=f.url,p=f.path,x=(0,s.gQ)("Billing"),v=x.unreadCasesQuantity,b=x.isHidden;return(0,r.useEffect)((function(){var e=m.pathname.split("/").filter(Boolean).filter(String),t=e[e.length-1]||"";!function(){switch(t){case"billing":i(0),u("Billing");break;case"invoice":i(1),u("Invoice");break;default:;}}()}),[m]),{primeTab:n,pageName:c,url:h,path:p,unreadCasesQuantity:v,setPrimeTab:i,isHidden:b,handleChangePrime:function(e,t){i(t)}}}var l=n(15861),o=n(64687),c=n.n(o),u=n(77344),d=n(11760);function m(){var e=(0,u.m)().companyId,t=(0,d.a)().companies,n=(0,s.tv)().history,i=(0,r.useState)(!1),o=(0,a.Z)(i,2),m=o[0],f=o[1],h=(0,r.useState)(!1),p=(0,a.Z)(h,2),x=p[0],v=p[1],b=(0,s.eC)().showNotification,g=(0,r.useState)(null),y=(0,a.Z)(g,2),j=y[0],k=y[1],w=(0,s.bK)({url:"/".concat(e,"/payment/").concat(e,"/cancel-subscription/"),method:"put",cb:{success:function(){b({message:"Your subscription has been cancelled",variant:"success"}),f(!1),v(!1)},error:function(e,t){var n,a;b({message:(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message)||"Something went wrong",variant:"error"}),f(!1)}}}).fetchData;(0,r.useEffect)((function(){if(e&&t.length){var n=t.find((function(t){return t.company.id===e})),a=null===n||void 0===n?void 0:n.company.comp_subscription;a&&k(a)}}),[t,e]);var S=(0,r.useCallback)((0,l.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,w();case 3:case"end":return e.stop()}}),e)}))),[]);return{navigateToCheckout:(0,r.useCallback)((function(){return n.push("/checkout")}),[]),subscription:j,handleCancelRequest:S,setCancelSubscription:v,cancelSubscription:x,cancelLoading:m}}},2213:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(42982),r=(n(47313),n(84365)),s=n(77344),i=n(65188),l=n(87180),o=n(46417);function c(e){switch(e){case"member":return{label:"Member",value:"member"};case"admin":return{label:"Admin",value:"admin"};case"manager":return{label:"Manager",value:"manager"};default:return null}}function u(e){var t=e.entity,n=e.onSuccess,u=(0,s.m)().companyId,d=(0,i.eC)().showNotification;return t?(0,o.jsx)("div",{children:u?(0,o.jsx)(r.Z.Main,{entity:"staffEmployee",name:"staffEmployee-".concat(u),url:"".concat(u,"/employee/").concat(t.id,"/"),method:"patch",id:t.id,primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},updateData:!0,fields:[{name:"avatar",required:!1,value:null===t||void 0===t?void 0:t.avatar,onSubmitKey:"",type:"object",onSubmitValue:function(e){return e||null}},{name:"first_name",required:!0,value:null===t||void 0===t?void 0:t.first_name,onSubmitKey:""},{name:"username",required:!0,value:null===t||void 0===t?void 0:t.username,onSubmitKey:""},{name:"last_name",required:!0,value:null===t||void 0===t?void 0:t.last_name,onSubmitKey:""},{name:"mobile",required:!0,value:null===t||void 0===t?void 0:t.mobile,onSubmitKey:""},{name:"roles",required:!0,value:c(null===t||void 0===t?void 0:t.roles[0]),type:"object",onSubmitKey:"",onSubmitValue:function(e){return[e.value]}},{name:"departments",onSubmitValue:function(e){return e.reduce((function(e,t){return[].concat((0,a.Z)(e),[{id:t}])}),[])},required:!1,type:"object",onSubmitKey:""},{name:"can_send_news",required:!1,value:null===t||void 0===t?void 0:t.can_send_news,onSubmitKey:""}],onSuccess:function(e,t){d({message:"Success! "}),t(),n()},onError:function(e,t){d({message:"Already exist",variant:"error"}),t()},children:function(e){var a=e.isSubmitting,r=e.values,s=e.setFieldValue,i=e.errors,c=e.setFieldError,u=e.resetForm;return(0,o.jsx)(l.Z,{values:r,setFieldValue:s,setFieldError:c,isSubmitting:a,errors:i,closeModal:n,resetForm:u,departments:null===t||void 0===t?void 0:t.departments,isCreate:!1})}}):null}):null}u.defaultProps={onSuccess:function(){}}},87180:function(e,t,n){n.d(t,{Z:function(){return _}});var a=n(1413),r=n(42982),s=n(70885),i=n(47313),l=n(94715),o=n(17480),c=n(51474),u=n(85700),d=n(46225),m=n(77344),f=n(26402),h=n(69706),p=n.n(h),x=n(57864),v=n(32335),b=n(95762),g=n(12715),y=n(52654),j=n(26926),k=n(65188),w=n(46417),S="".concat(v.Z.PUBLIC_ASSETS,"img"),N=[{label:"Admin",value:"admin"},{label:"Manager",value:"manager"},{label:"Member",value:"member"}];function _(e){var t=e.values,n=e.setFieldValue,h=(e.setFieldError,e.isSubmitting),v=(e.errors,e.closeModal),_=e.resetForm,C=e.isCreate,E=e.departments,Z=e.formValuesSetter,P=void 0===Z?function(){return null}:Z,V=(0,m.m)().companyId,D=(0,k.h9)({canSend:!C&&t.can_send_news}),F=D.checked,A=D.handleChange,T=(0,i.useState)(null),K=(0,s.Z)(T,2),M=K[0],L=K[1],q=(0,i.useState)(!1),H=(0,s.Z)(q,2),B=H[0],R=H[1],I=(0,i.useState)(C?null===t||void 0===t?void 0:t.avatar:null),O=(0,s.Z)(I,2),U=O[0],Q=O[1],Y=(0,i.useState)({clientDeps:E?E.reduce((function(e,t){return t.is_staff?(0,r.Z)(e):[].concat((0,r.Z)(e),[t.id])}),[]):[],staffDeps:E?E.reduce((function(e,t){return t.is_staff?[].concat((0,r.Z)(e),[t.id]):(0,r.Z)(e)}),[]):[]}),z=(0,s.Z)(Y,2),G=z[0],W=z[1],X=[],J=[];(0,i.useEffect)((function(){U&&n("avatar",U)}),[U]);var $=G.clientDeps,ee=G.staffDeps;return(0,i.useEffect)((function(){n("departments",[].concat((0,r.Z)($),(0,r.Z)(ee)))}),[G]),(0,i.useEffect)((function(){if(C){var e=["first_name","username","last_name","mobile","departments"],n=Object.keys(t).filter((function(n){if((Array.isArray(t[n])?t[n].length:t[n])&&e.includes(n))return t[n]}));P(n)}}),[t]),(0,i.useEffect)((function(){n("can_send_news",F.canSend)}),[F.canSend]),(0,w.jsxs)("div",{id:"department-form",children:[(0,w.jsxs)("div",{className:"branch-form__header border-b border-kgrey-dark-1/30 px-6 py-4 -mt-5 flex-center-between",children:[(0,w.jsx)("div",{className:"branch-form__heading font-base font-medium",children:"".concat(C?"Create new":"Update"," staff")}),C?(0,w.jsx)("div",{className:"branch-form__reset text-kgrey text-sm cursor-pointer hover:text-kdark transition",onClick:_,children:"Clear"}):null]}),(0,w.jsxs)("div",{className:" w-100 p-6",children:[(0,w.jsx)("div",{className:"text-sm font-light mb-2 ml-2 text-kgrey-menuText",children:"Icon"}),(0,w.jsxs)("div",{className:"flex items-center mb-5",children:[(0,w.jsxs)("div",{className:"user-avatar-box__display relative dark:bg-kdark-lighter  w-20 h-20 rounded-full overflow-hidden flex-centered",children:[(0,w.jsx)("img",{src:C?p()(U,"thumbnail_150")||"".concat(S,"/chat-placeholder.png"):p()(null===t||void 0===t?void 0:t.avatar,"thumbnail_150")||"".concat(S,"/chat-placeholder.png"),alt:"",className:"object-fit"}),null!==M&&(0,w.jsxs)("div",{className:"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 z-10",children:[(0,w.jsx)("div",{className:"upload-media-spinner",children:(0,w.jsx)(c.aN,{variant:"determinate",value:M})}),(0,w.jsx)("div",{onClick:function(){R(!0),L(null)},className:"absolute w-8 h-8 z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl text-primary-dark hover:text-primary transition cursor-pointer",children:(0,w.jsx)(x.SV5,{})})]})]}),(0,w.jsx)("div",{className:"ml-5",children:(0,w.jsx)(c.bA,{uploadMeta:M,setUploadMeta:L,cancelSending:B,setCancelSending:R,setFile:Q})})]}),(0,w.jsx)(l.gN,{label:"First name:",name:"first_name",component:o.Mg,placeholder:"Enter First name"}),(0,w.jsx)(l.gN,{label:"Last name",name:"last_name",component:o.Mg,placeholder:"Enter Last name"}),(0,w.jsx)(l.gN,{label:"Email",name:"username",component:o.Mg,placeholder:"Enter Email"}),(0,w.jsx)(l.gN,{label:"Phone number",name:"mobile",component:o.UO,placeholder:"Enter company mobile phone number",enableSearch:!0,onChangeHandler:n}),(0,w.jsxs)("div",{className:"row align-user-start remove-inner-label mb-3.5",children:[(0,w.jsx)("div",{className:"text-sm font-light mb-2 ml-2 text-kgrey-menuText",children:"Staff Departments"}),(0,w.jsx)(b.Z.All,{entity:"tree",name:"AllTreeDepartments-Staff-".concat(V),url:"/".concat(V,"/departments/tree/"),params:{limit:100,extra:{is_staff:"True"}},children:function(e){var t=e.items,n=e.isFetched;return X=n&&(0,g.w)(t),(0,w.jsx)(w.Fragment,{children:n?(0,w.jsx)(f.ZP,(0,a.Z)({getPopupContainer:function(e){return e.parentNode},className:"w-full",transitionName:"rc-tree-select-dropdown-slide-up",choiceTransitionName:"rc-tree-select-selection__choice-zoom",dropdownStyle:{overflow:"auto"},dropdownPopupAlign:{overflow:{adjustY:0,adjustX:0},offset:[0,2]},placeholder:(0,w.jsx)("i",{children:"Select Staff Departments"}),searchPlaceholder:"please search",treeLine:!0,maxTagTextLength:10,multiple:!0,allowClear:!0,autoClearSearchValue:!0,treeData:X,treeNodeFilterProp:"title",treeCheckable:!0,showCheckedStrategy:f.hT,onChange:function(e){W((function(t){return(0,a.Z)((0,a.Z)({},t),{},{staffDeps:e})}))}},C?null:{value:(0,r.Z)(ee)})):(0,w.jsx)("div",{className:"flex justify-center",children:(0,w.jsx)(c.aN,{})})})}})]}),(0,w.jsxs)("div",{className:"mb-3.5",children:[(0,w.jsx)("div",{className:"text-sm font-light mb-2 ml-2 text-kgrey-menuText",children:"Client Departments"}),(0,w.jsx)(b.Z.All,{entity:"tree",name:"AllTreeDepartments-Client-".concat(V),url:"/".concat(V,"/departments/tree/"),params:{limit:100,extra:{is_staff:"False"}},children:function(e){var t=e.items,n=e.isFetched;return J=n&&(0,g.w)(t),(0,w.jsx)(w.Fragment,{children:n?(0,w.jsx)(f.ZP,(0,a.Z)({getPopupContainer:function(e){return e.parentNode},className:"w-full",transitionName:"rc-tree-select-dropdown-slide-up",choiceTransitionName:"rc-tree-select-selection__choice-zoom",dropdownStyle:{overflow:"auto"},dropdownPopupAlign:{overflow:{adjustY:0,adjustX:0},offset:[0,2]},placeholder:(0,w.jsx)("i",{children:"Select \u0421lient Departments"}),searchPlaceholder:"please search",treeLine:!0,maxTagTextLength:10,multiple:!0,allowClear:!0,autoClearSearchValue:!0,treeData:J,treeNodeFilterProp:"title",treeCheckable:!0,showCheckedStrategy:f.hT,onChange:function(e){W((function(t){return(0,a.Z)((0,a.Z)({},t),{},{clientDeps:e})}))}},C?null:{value:(0,r.Z)($)})):(0,w.jsx)("div",{className:"flex justify-center",children:(0,w.jsx)(c.aN,{})})})}})]}),(0,w.jsxs)("div",{className:"mb-3.5",children:[(0,w.jsx)("div",{className:"text-sm font-light mb-2 text-kgrey-menuText ml-2",children:"Roles"}),(0,w.jsx)(l.gN,{component:o.mg,styles:u.gb,name:"roles",defaultValue:N[2],options:N,isSearchable:!d.tq})]}),(0,w.jsx)("div",{children:(0,w.jsx)(j.D8,{control:(0,w.jsx)(y.k,{checked:F.canSend,onChange:A,name:"canSend"}),label:"Can send news",className:"mb-4",classes:{label:"!text-xs font-light text-kgrey-welcome"}})})]}),(0,w.jsxs)("div",{className:"branch-form__footer px-6 pt-4 pb-9 flex justify-end",children:[(0,w.jsx)(c.Ik,{className:"text-kgrey border-kgrey border mr-5",color:"default",onClick:v,children:"Cancel"}),(0,w.jsx)(c.Ik,{className:"dark:hover:bg-primary-300 dark:focus:ring-primary-300 dark:text-white",type:"submit",isSubmitting:h,color:"primary",children:C?"Create":"Update"})]}),h?(0,w.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-white bg-opacity-70",children:(0,w.jsx)(c.aN,{})}):null]})}_.defaultProps={isCreate:!0,department:null,resetForm:function(){}}},23867:function(e,t,n){n.d(t,{O:function(){return f}});var a=n(15861),r=n(70885),s=n(64687),i=n.n(s),l=n(65188),o=n(77344),c=n(93905),u=n(92241),d=n(47313),m=n(11760);function f(){var e=(0,o.m)().companyId,t=(0,m.a)().companies,n=(0,u.I0)(),s=(0,l.eC)().showNotification,f=(0,d.useState)(0),h=(0,r.Z)(f,2),p=h[0],x=h[1],v=(0,l.iR)(),b=v.visible,g=v.showVisible,y=v.loading,j=v.toggleLoading,k=v.closePopup,w=(0,l.iR)(),S=w.visible,N=w.showVisible,_=w.closePopup,C=(0,l.bK)({url:"/".concat(e,"/companies/staffs_count/")}),E=C.fetchData,Z=C.response,P=C.loading;(0,d.useEffect)((function(){e&&(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:case"end":return e.stop()}}),e)})))()}),[e]),(0,d.useEffect)((function(){if(e&&t.length){var n=t.find((function(t){return t.company.id===e})),a=null===n||void 0===n?void 0:n.company.comp_subscription;a&&x(a.paid_staffs_count)}}),[t,e]);return{deleteLoading:y,handleClientDelete:function(t){j(),n((0,c.Bi)({entity:"staffEmployee",name:"staffEmployee-".concat(e),method:"delete",url:"/".concat(e,"/employee/").concat(t.id,"/"),deleteData:!0,id:t.id,cb:{success:function(){s({message:"Successfully deleted",variant:"success"})},error:function(e){s({message:"Something went wrong",variant:"error"})},finally:function(){j(),k()}},params:{},primaryKey:"id",values:{}}))},showDeleteVisible:g,closeDeletePopup:k,deleteVisible:b,editVisible:S,showEditVisible:N,closeEditPopup:_,staffCountLoading:P,staffCountResponse:Z,paidMemberCount:p}}},53013:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(70885),r=n(47313),s=n(51474),i=n(1413),l=n(46417),o=(0,r.createContext)(null),c=function(e,t){return"SET_SEARCH_QUERY"===t.type?(0,i.Z)((0,i.Z)({},e),{},{searchQuery:t.payload}):e};function u(e){var t=e.children,n=(0,r.useReducer)(c,{searchQuery:""}),s=(0,a.Z)(n,2),i=s[0],u=s[1],d=(0,r.useCallback)((function(e){u({type:"SET_SEARCH_QUERY",payload:e})}),[]),m={searchQuery:i.searchQuery,setSearchQuery:d};return(0,l.jsx)(o.Provider,{value:m,children:t})}var d=function(){var e=(0,r.useContext)(o);if(!e)throw new Error("useBusinessContext must be used within the BusinessContextProvider");return e},m=n(90182),f=n(65188),h=n(3925);function p(){var e=d(),t=e.searchQuery,n=e.setSearchQuery;return(0,l.jsxs)("div",{className:"group-sidebar__search relative",children:[(0,l.jsx)("input",{type:"search",value:t,className:"group-sidebar__search-input w-full md:w-36 outline-none border-b border-kgrey-border-solid dark:border-white dark:text-white focus:border-primary dark:focus:border-primary transition pl-7 placeholder-[rgba(45, 45, 45, 0.3)] pt-2 pb-2 dark:bg-kdark",placeholder:"Search for staff",onChange:function(e){return n(e.target.value)}}),(0,l.jsx)("div",{className:"absolute top-1/2 -translate-y-1/2 left-0",children:(0,l.jsx)("div",{className:"text-kgrey",children:(0,l.jsx)(h.lnn,{})})})]})}var x=n(77344),v=n(95762),b=n(26926),g=n(58821),y=n(44329),j=n(94024),k=n(2213),w=n(23867),S=n(30806),N=n(28303),_=n(83061),C=n(93905),E=n(92241),Z="No mobile number";function P(){var e=(0,x.m)(),t=e.companyId,n=e.isAdmin,i=d().searchQuery,o=(0,f.h0)(),c=o.page,u=o.handlePage,m=o.removePage,h=(0,f.tv)(),p=h.match,P=h.history,V=(0,f.eC)().showNotification,D=(0,E.I0)(),F=(0,f.Zp)().reloadEntityAll,A=(0,w.O)(),T=A.deleteLoading,K=A.handleClientDelete,M=A.showDeleteVisible,L=A.closeDeletePopup,q=A.deleteVisible,H=A.editVisible,B=A.showEditVisible,R=A.closeEditPopup,I=A.staffCountLoading,O=(0,j.Z)(i,500),U=(0,a.Z)(O,1)[0];(0,r.useEffect)((function(){return function(){return m()}}),[]);var Q=(0,f.iR)(),Y=Q.visible,z=Q.showVisible,G=Q.loading,W=Q.toggleLoading,X=Q.closePopup,J=function(){return function(){return e=Y,W(),void D((0,C.Bi)({entity:"staffEmployee",name:"staffEmployee-".concat(t),method:"post",url:"/".concat(t,"/employee/").concat(e,"/resend_invitation/"),values:{},cb:{success:function(){F({entity:"staffEmployee",name:"staffEmployee-".concat(t),url:"/".concat(t,"/employee/"),params:{page:1,limit:10}}),X(),V({message:"Successfully resended",variant:"success"})},error:function(e){V({message:"Something went wrong",variant:"error"})},finally:function(){W()}},params:{},primaryKey:"id"}));var e}};return(0,l.jsx)("div",{children:t?(0,l.jsx)(v.Z.All,{entity:"staffEmployee",name:"staffEmployee-".concat(t),url:"/".concat(t,"/employee/"),params:{limit:10,extra:{search:U},page:c},children:function(e){var t=e.items,a=e.isFetched,r=e.meta,i=t.map((function(e){return e}));return(0,l.jsxs)("div",{children:[(0,l.jsxs)(b.xJ,{classes:{root:"relative "},children:[(0,l.jsxs)(s.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,l.jsx)(b.ss,{children:(0,l.jsxs)(s.AF,{children:[(0,l.jsx)(s.EU,{style:{width:"22%"},children:"Full name"}),(0,l.jsx)(s.EU,{style:{width:"24%"},children:"Email"}),(0,l.jsx)(s.EU,{style:{width:"18%"},children:"Phone number"}),(0,l.jsx)(s.EU,{style:{width:"12%"},children:"Role"}),(0,l.jsx)(s.EU,{style:{width:"10%"},children:"Status"}),(0,l.jsx)(s.EU,{style:{width:"14%"},children:"Actions"})]})}),(0,l.jsx)(b.RM,{children:i.map((function(e){var t=e.id,a=e.first_name,r=e.last_name,i=e.username,o=e.mobile,c=e.roles,u=e.state,d=e.avatar,m=e.is_business_owner,f=o?"+"===o[0]?o:"+".concat(o):Z;return(0,l.jsxs)(s.AF,{children:[(0,l.jsx)(s.Yk,{children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"w-9 h-9 flex-shrink-0",children:(0,S.w)((null===d||void 0===d?void 0:d.thumbnail)||(null===d||void 0===d?void 0:d.thumbnail_150),a)}),"Pending"===u?(0,l.jsx)("div",{className:"truncate",children:(0,l.jsxs)("span",{className:"ml-2 text-sm font-medium",children:[a," ",r]})}):(0,l.jsx)(N.rU,{className:"truncate",to:"".concat(p.path,"/view/").concat(e.id),children:(0,l.jsxs)("span",{className:"ml-2 text-sm font-medium text-primary transition hover:text-primary-dark",children:[a," ",r]})})]})}),(0,l.jsx)(s.Yk,{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:(0,l.jsx)("span",{className:"text-sm test-kdark-text",children:i})}),(0,l.jsx)(s.Yk,{children:f?(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(g.lfG,{color:"#979797",size:"15px"}),(0,l.jsx)("a",{href:"tel:".concat(f),className:(0,_.Z)("ml-2 text-sm test-kdark-text align-middle ",{"text-primary hover:text-primary-dark":f!==Z,"pointer-events-none":f===Z}),children:f})]}):null}),(0,l.jsxs)(s.Yk,{children:[c.map((function(e,t){return(0,l.jsxs)("span",{className:"text-sx text-kgrey",children:[" "+e+" ",c.length>1?(0,l.jsx)("span",{className:"text-kgrey",children:"|"}):null,m?(0,l.jsx)("span",{children:"| owner"}):null]},"".concat(t,"_").concat(e))})),"Pending"===u?(0,l.jsx)(s.Ik,{color:"primary",onClick:function(){return z(t)},children:"Resend"}):null]}),(0,l.jsx)(s.Yk,{children:(0,l.jsx)("span",{className:(0,_.Z)("inline-block bg-primary text-white py-0.5 px-5 uppercase text-10px leading-4 rounded-4xl",{"bg-kgrey-inputBg text-kdark":"Pending"===u,"bg-primary-dark":"Logged"===u}),children:u})}),(0,l.jsx)(s.Yk,{children:(0,l.jsxs)("div",{className:"flex items-center justify-end ",children:[(0,l.jsx)(s.cP.DeleteButton,{isDisabled:!n,clickHandler:function(){return M(e)}}),(0,l.jsx)(s.cP.ViewButton,{isDisabled:!n,clickHandler:function(){return P.push("".concat(p.path,"/view/").concat(t))}}),(0,l.jsx)(s.cP.EditButton,{isDisabled:!n||"Pending"===u,clickHandler:function(){return B(e)}})]})})]},t)}))})]}),!(a||I)&&(0,l.jsx)(s.aN,{tiled:!0,withOverlay:!0})]}),(0,l.jsx)(s.sm,{featureHandler:function(){return K(q)},isOpen:Boolean(q),toggleHandler:L,title:"Are you sure to delete staff ".concat(null===q||void 0===q?void 0:q.first_name," ").concat(null===q||void 0===q?void 0:q.last_name),hasLoader:!0,isLoading:T}),(0,l.jsx)(s.sm,{featureHandler:J(),isOpen:Boolean(Y),toggleHandler:X,title:"Are you sure to resend the Request",hasLoader:!0,isLoading:G}),(0,l.jsx)(b.Cx,{handleModalOpen:R,open:Boolean(H),maxWidth:490,minWidth:490,scrollable:!0,noPadding:!0,children:(0,l.jsx)(k.Z,{entity:H,onSuccess:R})}),(0,l.jsxs)("div",{className:"news__pagination my-4 flex items-center justify-between",children:[t.length?(0,l.jsx)(y.Z,{count:null===r||void 0===r?void 0:r.last_page,page:c?+c:1,defaultPage:6,siblingCount:1,color:"primary",onChange:u}):null,(0,l.jsx)("div",{className:"ml-4",children:(0,l.jsxs)("div",{className:"text-base font-medium",children:["Staff Count:"," ",(0,l.jsx)("span",{className:"ml-2 text-base font-semibold text-primary ",children:null===r||void 0===r?void 0:r.count})]})})]})]})}}):(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)(s.aN,{})})})}function V(){return(0,l.jsx)(s.SV,{children:(0,l.jsx)(P,{})})}var D=n(42982),F=n(84365),A=n(87180);function T(e){var t=e.modalHandler,n=e.hasToShowGuard,a=e.formValuesSetter,s=(0,x.m)().companyId,i=(0,r.useCallback)((function(){return t(null)}),[]),o=(0,f.eC)().showNotification;return(0,l.jsx)("div",{children:s?(0,l.jsx)(F.Z.Main,{entity:"staffEmployee",name:"staffEmployee-".concat(s),url:"".concat(s,"/employee/"),method:"post",primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},prependData:!0,fields:[{name:"avatar",required:!1,value:null,onSubmitKey:"",type:"object",onSubmitValue:function(e){return e||null}},{name:"first_name",required:!0,value:"",onSubmitKey:""},{name:"username",required:!0,value:"",onSubmitKey:""},{name:"last_name",required:!0,value:"",onSubmitKey:""},{name:"mobile",required:!0,value:"",onSubmitKey:""},{name:"roles",required:!0,value:{label:"Member",value:"member"},type:"object",onSubmitKey:"",onSubmitValue:function(e){return[e.value]}},{name:"departments",onSubmitValue:function(e){return e.reduce((function(e,t){return[].concat((0,D.Z)(e),[{id:t}])}),[])},value:null,required:!1,type:"object",onSubmitKey:""},{name:"can_send_news",required:!1,onSubmitKey:""}],onSuccess:function(e,t){o({message:"Success! "}),t(),i()},onError:function(e,t){o({message:"Already exist",variant:"error"}),t()},children:function(e){var t=e.isSubmitting,r=e.values,s=e.setFieldValue,i=e.errors,o=e.setFieldError,c=e.resetForm;return(0,l.jsx)(A.Z,{values:r,setFieldValue:s,setFieldError:o,isSubmitting:t,errors:i,formValuesSetter:a,closeModal:n,resetForm:c})}}):null})}T.defaultProps={onSuccess:function(){}};var K=n(25434);function M(){var e,t=(0,x.m)(),n=t.isAdmin,i=t.isPermitted,o=(0,f.gQ)("Staff Management"),c=o.unreadCasesQuantity,u=o.isHidden,d=(0,r.useState)(!1),h=(0,a.Z)(d,2),v=h[0],g=h[1],y=(0,f.Tn)(),j=y.formValues,k=y.guardOpen,S=y.setGuardOpen,N=y.formValuesSetter,C=(0,r.useState)(!1),E=(0,a.Z)(C,2),Z=E[0],P=E[1],D=(0,w.O)(),F=D.staffCountLoading,A=D.staffCountResponse,M=D.paidMemberCount,L=(0,f.tv)().history,q=(0,K.m)().subscription,H=function(){(null===A||void 0===A?void 0:A.staffs_count)<M||"TRIAL"===(null===q||void 0===q?void 0:q.subscription_type)&&null!==q&&void 0!==q&&q.is_available?g((function(e){return!e})):P(!0)},B=(0,r.useCallback)((function(){S((function(e){return!e}))}),[]),R=(0,r.useCallback)((function(){S(!1),N([]),H()}),[v]),I=(0,r.useCallback)((function(){j.length?S(!0):H()}),[j]);return(0,l.jsxs)("div",{className:"p-4 max-w-full flex flex-col min-h-full flex-grow relative",children:[(!u||0===c)&&(0,l.jsx)(m.q,{children:(0,l.jsx)("title",{children:"KENNEKT | Staff Management"})}),(0,l.jsxs)("div",{className:"mb-5",children:[(0,l.jsx)("div",{className:" w-full bg-kred-pink-200 absolute top-0 left-0",children:n?null:(0,l.jsx)("p",{className:"text-kred-pink text-center text-xs my-1",children:"You do not have permission to perform some actions, please check with admin"})}),(0,l.jsxs)("div",{className:"flex items-center justify-between flex-wrap w-full mt-6",children:[(0,l.jsxs)("div",{className:"flex flex-1 items-center font-bold mb-4",children:[(0,l.jsx)("h2",{className:"text-xl md:text-3xl dark:text-white ",children:"Staff Management"}),q&&q.order&&q.paid_staffs_count?(0,l.jsxs)("span",{className:"ml-4",children:[(0,l.jsx)("span",{className:"mr-1 text-sm text-kgrey-dark-3 font-light dark:text-white",children:"Users count:"}),(0,l.jsxs)("span",{className:"text-base font-semibold text-primary",children:[null!==(e=null===A||void 0===A?void 0:A.staffs_count)&&void 0!==e?e:0,"/",q.paid_staffs_count]})]}):null]}),(0,l.jsxs)("div",{className:"flex items-center  ml-auto max-w-full mb-4",children:[(0,l.jsx)(p,{}),(0,l.jsx)("button",{disabled:!i,type:"button",onClick:H,className:(0,_.Z)("bg-kgrey-bg rounded-xl text-sm md:text-base font-poppins text-center ml-5 px-4 py-2 hover:bg-primary-200 transition dark:bg-primary-300 dark:text-white",{"opacity-20 pointer-events-none":F}),children:"Add staff"})]})]})]}),(0,l.jsx)(V,{}),(0,l.jsx)(s.sm,{featureHandler:function(){return L.push("/checkout")},isOpen:Z,toggleHandler:function(){P(!1)},title:"You have reached limit to add staffs. Open checkout page?"}),(0,l.jsx)(b.Cx,{handleModalOpen:function(){j.length?S(!0):H()},open:v,maxWidth:446,noPadding:!0,scrollable:!0,children:(0,l.jsx)(T,{modalHandler:H,hasToShowGuard:I,formValuesSetter:N})}),(0,l.jsx)(s.sm,{featureHandler:R,isOpen:k,toggleHandler:B,title:"You have unsaved changes, Are you sure to cancel?"})]})}var L=function(){return(0,l.jsx)(s.SV,{children:(0,l.jsx)(u,{children:(0,l.jsx)(M,{})})})}},12715:function(e,t,n){n.d(t,{w:function(){return r}});var a=n(42982),r=function e(t){return t.reduce((function(t,n){if(!(n.sub_departments.length>0))return[].concat((0,a.Z)(t),[{title:n.name,key:n.id,value:n.id}]);for(;n.sub_departments.length>0;)return[].concat((0,a.Z)(t),[{title:n.name,key:n.id,value:n.id,children:e(n.sub_departments)}])}),[])}},30806:function(e,t,n){n.d(t,{w:function(){return s}});var a=n(3187),r=n(46417),s=function(e,t){return e?(0,r.jsx)(a.Z,{className:"inline-block",alt:t||"Business icon",src:e,style:{width:"100%",height:"100%"}}):(0,r.jsx)(a.Z,{className:"inline-block",style:{color:"#fff",width:"100%",height:"100%"},children:t?t[0].toUpperCase():null})}}}]);