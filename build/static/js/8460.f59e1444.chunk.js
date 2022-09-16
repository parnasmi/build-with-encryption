"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[8460],{68460:function(e,n,t){t.r(n),t.d(n,{default:function(){return ce}});var a=t(70885),i=t(47313),r=t(51474),l=t(77344),s=t(95762),o=t(63830),d=t(30806),c=t(89376),u=t(34636),m=t(1413),h=t(42982),x=t(26926),p=t(85768),v=t(58821),f=t(14636),b=t(73002),j=t(54070),g=t(57864),y=t(22539),C=t(65188),k=t(28303),N=t(73923),S=t(46417);function _(e){var n=e.handleModalOpen,t=e.open,s=(0,l.m)().companyId,o=(0,i.useState)(!1),d=(0,a.Z)(o,2),c=d[0],u=d[1],m=(0,C.eC)().showNotification,h=(0,N.v)({entity:"subDepartments",name:"SubDepartments-".concat(s),method:"delete",url:"/".concat(s,"/departments/").concat(null===t||void 0===t?void 0:t.id,"/"),deleteData:!0,id:null===t||void 0===t?void 0:t.id,cb:{success:function(e){n(null),u(!1),m({message:"Successfully deleted",variant:"success"})},error:function(e){u(!1)},finally:function(){}}}).handleRequest,p=function(){n(null)};return(0,S.jsx)("div",{className:"relative",children:(0,S.jsxs)(x.Cx,{handleModalOpen:p,open:Boolean(t),children:[(0,S.jsxs)(x.$N,{id:"alert-dialog-title",children:["Are you sure to delete ",(0,S.jsx)("strong",{children:null===t||void 0===t?void 0:t.name}),"?"]}),(0,S.jsxs)(x.kX,{children:[(0,S.jsx)(x.zx,{onClick:p,autoFocus:!0,variant:"contained",children:"Cancel"}),(0,S.jsx)(x.zx,{onClick:function(){t&&(u(!0),h())},variant:"contained",color:"secondary",children:"Delete"})]}),c&&(0,S.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-white bg-opacity-70",children:(0,S.jsx)(r.aN,{})})]})})}function w(e){return(0,S.jsx)(r.SV,{children:(0,S.jsx)(_,(0,m.Z)({},e))})}var Z=t(84365),D=t(94715),M=t(17480),A=t(69706),F=t.n(A),V=t(32335),I=t(79773),E=t(85700),O=t(68323),q=t(46225),K=t(41931),H="".concat(V.Z.PUBLIC_ASSETS,"img"),P=[{label:"minutes",value:"MINUTES"},{label:"hours",value:"HOURS"},{label:"days",value:"DAYS"}];function U(e){var n=e.values,t=e.setFieldValue,s=(e.setFieldError,e.isSubmitting),o=e.errors,d=e.closeModal,c=e.resetForm,u=e.isCreate,m=e.id,h=e.departmentId,p=((0,l.m)().companyId,(0,i.useState)(null!==n&&void 0!==n&&n.link?"link":"caseChat")),v=(0,a.Z)(p,2),f=v[0],b=v[1],y=(0,i.useState)(!1),C=(0,a.Z)(y,2),k=C[0],N=C[1],_=(0,i.useState)(!1),w=(0,a.Z)(_,2),Z=w[0],A=w[1],V=function(){return A((function(e){return!e}))},U=(0,i.useState)(null),z=(0,a.Z)(U,2),B=z[0],Y=z[1],R=(0,i.useState)(!1),T=(0,a.Z)(R,2),L=T[0],W=T[1],$=(0,i.useState)(u?null===n||void 0===n?void 0:n.icon:null),J=(0,a.Z)($,2),Q=J[0],X=J[1];(0,i.useEffect)((function(){Q&&t("icon",Q)}),[Q]),(0,i.useEffect)((function(){u&&t("department",{id:m})}),[o]);return(0,S.jsxs)("div",{id:"department-form",children:[(0,S.jsxs)("div",{className:"branch-form__header border-b border-kgrey-dark-1/30 px-6 py-4 -mt-5 flex-center-between",children:[(0,S.jsx)("div",{className:"branch-form__heading font-base font-medium",children:"".concat(u?"Create new":"Update"," department")}),u?(0,S.jsx)("div",{className:"branch-form__reset text-kgrey text-sm cursor-pointer hover:text-kdark transition",onClick:c,children:"Clear"}):null]}),(0,S.jsxs)("div",{className:" w-100 p-6",children:[(0,S.jsx)("div",{className:"text-sm font-light mb-2 text-kgrey-menuText",children:"Icon"}),(0,S.jsxs)("div",{className:"flex items-center mb-5",children:[(0,S.jsxs)("div",{className:"user-avatar-box__display relative w-20 h-20 rounded-full overflow-hidden",children:[(0,S.jsx)("img",{src:u?F()(Q,"thumbnail")||"".concat(H,"/chat-placeholder.png"):F()(null===n||void 0===n?void 0:n.icon,"thumbnail"),alt:"",className:"object-fit"}),null!==B&&(0,S.jsxs)("div",{className:"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 z-10",children:[(0,S.jsx)("div",{className:"upload-media-spinner",children:(0,S.jsx)(r.aN,{variant:"determinate",value:B})}),(0,S.jsx)("div",{onClick:function(){W(!0),Y(null)},className:"absolute w-8 h-8 z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl text-primary-dark hover:text-primary transition cursor-pointer",children:(0,S.jsx)(g.SV5,{})})]})]}),(0,S.jsx)("div",{className:"ml-5",children:(0,S.jsx)(r.bA,{uploadMeta:B,setUploadMeta:Y,cancelSending:L,setCancelSending:W,setFile:X,classNames:"rounded-tl-10 rounded-tr-10 rounded-br-10 border-dashed border"})})]}),(0,S.jsx)("div",{onClick:function(){return N(!0)},className:"cursor-pointer inline-block mb-4 rounded-tl-10 rounded-tr-10 rounded-br-10 border-dashed border p-3.5 bg-kgrey-bg dark:bg-primary-300 darl:text-white",children:"Choose from icon library"}),(0,S.jsx)(D.gN,{label:"Title",name:"name",component:M.Mg,placeholder:""}),(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"text-sm font-light mb-2 text-kgrey-menuText",children:"Function"}),(0,S.jsxs)(x.Ee,{value:f,onChange:function(e){var n=e.target.value;b(n),"caseChat"===n&&t("link",null)},"aria-label":"Function",className:"!flex-row font-base text-kgrey",children:[(0,S.jsx)(x.D8,{value:"caseChat",control:(0,S.jsx)(x.Y8,{color:"primary"}),label:"Case Chat"}),(0,S.jsx)(x.D8,{value:"link",control:(0,S.jsx)(x.Y8,{color:"primary"}),label:"Hyperlink"})]}),"link"===f?(0,S.jsx)(D.gN,{label:"Hyperlink",name:"link",component:M.Mg,placeholder:"Hyperlink"}):null]}),(0,S.jsx)(D.gN,{label:"Phone number",name:"phone",component:M.UO,placeholder:"Enter company mobile phone number",enableSearch:!0,onChangeHandler:t}),u?null:(0,S.jsx)("div",{children:(0,S.jsxs)("div",{className:"mb-3.5",children:[(0,S.jsx)("div",{className:"text-sm font-light mb-2 text-kgrey-menuText ml-2",children:"Initial required response time"}),(0,S.jsxs)("div",{className:"flex items-center mb-3.5",children:[(0,S.jsx)(O.ZP,{title:"By defining this time, the system will alert the admins of this department when managers do not respond to a staff escalation within the timeframe designated for a specific case, when the case is initially created",placement:"top",children:(0,S.jsx)(j.Z,{className:"p-0 mr-20",children:(0,S.jsx)(g.kA6,{})})}),(0,S.jsx)(D.gN,{name:"case_escalation_time",component:M.Mg,type:"number",placeholder:"time",classNames:"!mb-0",labelClasses:"hidden"}),(0,S.jsx)("div",{className:"flex-grow ml-4",children:(0,S.jsx)(D.gN,{className:"flex-1",component:M.mg,styles:E.gb,name:"case_escalation_time_unit",defaultValue:P[0],options:P,isSearchable:!q.tq})})]}),(0,S.jsxs)("div",{className:"flex items-center",children:[(0,S.jsx)(O.ZP,{title:"By defining this time, the system will alert the admins of this department when managers do not respond to a staff escalation within the timeframe designated for a specific case, when the case is initially created",placement:"top",children:(0,S.jsx)(j.Z,{className:"p-0 mr-20",children:(0,S.jsx)(g.kA6,{})})}),(0,S.jsx)(D.gN,{name:"initial_response_time",component:M.Mg,type:"number",placeholder:"time",classNames:"!mb-0",labelClasses:"hidden"}),(0,S.jsx)("div",{className:"flex-grow ml-4",children:(0,S.jsx)(D.gN,{component:M.mg,styles:E.gb,name:"initial_response_time_unit",defaultValue:P[0],options:P,isSearchable:!q.tq,className:"flex-1"})})]})]})})]}),(0,S.jsxs)("div",{className:"branch-form__footer px-6 pt-4 pb-9 flex justify-between",children:[u?null:(0,S.jsx)(r.Ik,{className:"dark:hover:bg-primary-300 dark:focus:ring-primary-300 dark:text-white",type:"button",onClick:V,color:"primary",children:"Case chat data field"}),(0,S.jsxs)("div",{children:[(0,S.jsx)(r.Ik,{className:"text-kgrey border-kgrey border mr-5",color:"default",onClick:d,children:"Cancel"}),(0,S.jsx)(r.Ik,{className:"dark:hover:bg-primary-300 dark:focus:ring-primary-300 dark:text-white",type:"submit",isSubmitting:s,color:"primary",children:u?"Create":"Update"})]})]}),(0,S.jsx)(x.Cx,{handleModalOpen:function(){return N((function(e){return!e}))},open:Boolean(k),children:(0,S.jsx)(I.Z,{setFieldValue:t,setChooseIcon:N,setIcon:X,closeModal:function(){return N(!1)}})}),u?null:(0,S.jsx)(x.Cx,{handleModalOpen:V,open:Boolean(Z),scrollable:!0,noPadding:!0,children:(0,S.jsx)(K.Z,{dataFields:null===n||void 0===n?void 0:n.data_field,departmentId:h,departmentName:null===n||void 0===n?void 0:n.name,closeModalCaseChat:function(){return A(!1)}})}),s?(0,S.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-white bg-opacity-70",children:(0,S.jsx)(r.aN,{})}):null]})}function z(e){var n=e.handleModalOpen,t=e.open,a=e.id,r=e.searchQuery,s=e.page,o=(0,l.m)().companyId,d=(0,i.useCallback)((function(){return n(null)}),[]),c=(0,C.eC)().showNotification,u=(0,C.Zp)().reloadEntityAll;return(0,S.jsx)("div",{children:(0,S.jsx)(x.Cx,{minWidth:466,maxWidth:466,handleModalOpen:n,open:Boolean(t),scrollable:!0,noPadding:!0,children:o?(0,S.jsx)(Z.Z.Main,{entity:"subDepartments",name:"SubDepartments-".concat(o),url:"".concat(o,"/departments/"),method:"post",primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},appendData:!0,fields:[{name:"icon",required:!1,value:null,onSubmitKey:"",type:"object",onSubmitValue:function(e){return e||null}},{name:"name",required:!0,value:"",onSubmitKey:""},{name:"link",required:!1,value:null,onSubmitKey:"",onSubmitValue:function(e){return e||null}},{name:"phone",required:!1,value:null,onSubmitKey:""}],onSuccess:function(e,n){c({message:"Success! "}),n(),u({entity:"subDepartments",name:"SubDepartments-".concat(o),url:"/".concat(o,"/departments/").concat(a,"/sub_departments/"),params:{page:s,limit:10,extra:{search:r}}}),d()},onError:function(e,n){c({message:"Already exist",variant:"error"}),n()},children:function(e){var n=e.isSubmitting,t=e.values,i=e.setFieldValue,r=e.errors,l=e.setFieldError,s=e.resetForm;return(0,S.jsx)(U,{values:t,setFieldValue:i,setFieldError:l,isSubmitting:n,errors:r,closeModal:d,resetForm:s,id:a})}}):null})})}function B(e){switch(e){case"MINUTES":return{label:"minutes",value:"MINUTES"};case"HOURS":return{label:"hours",value:"HOURS"};case"DAYS":return{label:"days",value:"DAYS"};default:return null}}function Y(e){var n=e.handleModalOpen,t=e.open,a=(0,l.m)().companyId,o=(0,i.useCallback)((function(){return n(null)}),[]),d=(0,C.eC)().showNotification,c=(0,C.r1)().updateEntities;return(0,S.jsx)("div",{children:a&&null!==t&&void 0!==t&&t.id?(0,S.jsx)("div",{children:(0,S.jsx)(s.Z.One,{id:null===t||void 0===t?void 0:t.id,relations:"",entity:"subDepartments",name:"SubDepartments-".concat(a),url:"/".concat(a,"/departments/").concat(null===t||void 0===t?void 0:t.id,"/"),params:{},children:function(e){var n=e.item,i=e.isFetched,l=n;return(0,S.jsx)(S.Fragment,{children:i?(0,S.jsx)(x.Cx,{minWidth:466,maxWidth:466,handleModalOpen:o,open:Boolean(t),scrollable:!0,noPadding:!0,children:(0,S.jsx)(Z.Z.Main,{entity:"subDepartments",name:"SubDepartments-".concat(a),url:"".concat(a,"/departments/").concat(null===l||void 0===l?void 0:l.id,"/"),method:"patch",primaryKey:"id",id:null===l||void 0===l?void 0:l.id,sendAsFormData:!1,updateData:!0,normalizeData:function(e){return e},fields:[{name:"icon",required:!1,value:null===l||void 0===l?void 0:l.icon,onSubmitKey:"",onSubmitValue:function(e){return e||null},type:"object"},{name:"name",required:!0,value:null===l||void 0===l?void 0:l.name,onSubmitKey:""},{name:"link",required:!1,value:null===l||void 0===l?void 0:l.link,onSubmitKey:"",onSubmitValue:function(e){return e||null}},{name:"phone",required:!1,value:null===l||void 0===l?void 0:l.phone,onSubmitKey:""},{name:"is_staff",required:!1,value:!1,onSubmitKey:""},{name:"case_escalation_time",required:!1,value:null===l||void 0===l?void 0:l.case_escalation_time,onSubmitValue:function(e){return e?parseInt(e):null},onSubmitKey:""},{name:"case_escalation_time_unit",required:!1,value:B(null===l||void 0===l?void 0:l.case_escalation_time_unit),onSubmitValue:function(e){return null===e||void 0===e?void 0:e.value},type:"object",onSubmitKey:""},{name:"initial_response_time",required:!1,value:null===l||void 0===l?void 0:l.initial_response_time,onSubmitValue:function(e){return e?parseInt(e):null},onSubmitKey:""},{name:"initial_response_time_unit",required:!1,value:B(null===l||void 0===l?void 0:l.initial_response_time_unit),onSubmitValue:function(e){return null===e||void 0===e?void 0:e.value},type:"object",onSubmitKey:""},{name:"data_field",required:!1,onSubmitKey:"",type:"object",value:null===l||void 0===l?void 0:l.data_field}],onSuccess:function(e,n){var a,i;(null===e||void 0===e||null===(a=e.default_assignees)||void 0===a?void 0:a.length)<(null===t||void 0===t||null===(i=t.default_assignees)||void 0===i?void 0:i.length)&&c({entity:"departments",entityId:null===t||void 0===t?void 0:t.id,updatingData:{default_assignees:(null===e||void 0===e?void 0:e.default_assignees)||[]}}),n(),o(),d({message:"Success! "})},onError:function(e,n){d({message:"Already exist",variant:"error"}),n()},children:function(e){var n=e.isSubmitting,t=e.values,a=e.setFieldValue,i=e.errors,r=e.setFieldError,s=e.resetForm;return(0,S.jsx)(U,{values:t,setFieldValue:a,setFieldError:r,isSubmitting:n,errors:i,closeModal:o,isCreate:!1,resetForm:s,id:null===l||void 0===l?void 0:l.id,departmentId:null===l||void 0===l?void 0:l.id})}})}):(0,S.jsx)("div",{className:"flex justify-center mb-4",children:(0,S.jsx)(r.aN,{})})})}})}):null})}U.defaultProps={isCreate:!0,department:null,resetForm:function(){}},z.defaultProps={onSuccess:function(){}},Y.defaultProps={onSuccess:function(){}};var R=t(94024),T=t(3925),L=t(82546);function W(e){var n=e.departmentId,t=(0,l.m)(),o=t.companyId,d=t.isAdmin,c=t.isPermitted,u=(0,C.h0)("subPage"),m=u.page,N=u.handlePage,_=u.removePage,Z=(0,i.useState)(null),D=(0,a.Z)(Z,2),M=D[0],A=D[1],F=(0,i.useState)(!1),V=(0,a.Z)(F,2),I=V[0],E=V[1],O=(0,i.useState)(null),q=(0,a.Z)(O,2),K=q[0],H=q[1],P=(0,i.useCallback)((function(e){return A(e)}),[]),U=function(){return E((function(e){return!e}))},B=(0,i.useCallback)((function(e){return H(e)}),[]),W=(0,i.useState)(""),$=(0,a.Z)(W,2),J=$[0],Q=$[1],X=(0,R.Z)(J,500),G=(0,a.Z)(X,1)[0],ee=(0,L.x)("subDepartment",G,n).handleDepOrderChange;(0,i.useEffect)((function(){return function(){return _()}}),[]);return(0,S.jsx)("div",{children:o&&n?(0,S.jsxs)("div",{children:[(0,S.jsxs)("div",{className:"flex prime-tabs justify-between items-center text-base font-medium px-4 pt-3 pb-4 bg-kgrey-bg rounded-t-lg dark:text-white dark:bg-primary-300",children:[(0,S.jsx)("h4",{children:"Sub-departments"}),(0,S.jsxs)("div",{className:"flex items-center",children:[(0,S.jsxs)("div",{className:"group-sidebar__search relative pr-2 flex-grow",children:[(0,S.jsx)("input",{type:"search",value:J,className:"group-sidebar__search-input text-sm w-full outline-none border-b rounded-10 border-kgrey-border-solid focus:border-primary transition pl-9 placeholder-[rgba(45, 45, 45, 0.3)] py-2 dark:bg-kdark",placeholder:"Search for members",onChange:function(e){Q(e.target.value)}}),(0,S.jsx)("div",{className:"absolute top-1/2 -translate-y-1/2 left-2",children:(0,S.jsx)("div",{className:"text-kgrey",children:(0,S.jsx)(T.lnn,{})})})]}),(0,S.jsx)("button",{type:"button",disabled:!c,onClick:U,className:"bg-white rounded-xl text-sm md:text-base font-poppins mr-4 text-center px-4 py-2 hover:bg-primary-200 transition dark:bg-primary-300 dark:text-white disabled:opacity-70",children:"New SubDepartment"})]})]}),(0,S.jsx)(s.Z.All,{entity:"subDepartments",name:"SubDepartments-".concat(o),url:"/".concat(o,"/departments/").concat(n,"/sub_departments/"),params:{limit:10,extra:{search:G},page:m},children:function(e){var n=e.items,t=e.isFetched,a=e.meta,i=n.map((function(e){return e}));return(0,S.jsxs)("div",{children:[(0,S.jsxs)(x.xJ,{classes:{root:"relative "},children:[(0,S.jsxs)(r.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,S.jsx)(x.ss,{children:(0,S.jsxs)(r.AF,{children:[(0,S.jsx)(r.EU,{style:{width:"30%"},children:"Name"}),(0,S.jsx)(r.EU,{style:{width:"25%"},children:"Phone Number"}),(0,S.jsx)(r.EU,{style:{width:"25%"},children:"Order"}),(0,S.jsx)(r.EU,{style:{textAlign:"center",width:"15%"},children:"Actions"})]})}),(0,S.jsx)(x.RM,{children:i.map((function(e){var t,i=e.id,l=e.icon,s=e.name,o=e.phone,u=(e.sorder,o?"+"===o[0]?o:"+".concat(o):null);return(0,S.jsx)(r.AF,{children:n.length?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(p.Z,{icon:l,name:s,id:i}),(0,S.jsx)(r.Yk,{children:u?(0,S.jsxs)("div",{className:"flex items-center",children:[(0,S.jsx)(v.lfG,{color:"#979797",size:"15px"}),(0,S.jsx)("a",{href:"tel:".concat(u),className:"ml-2 text-sm test-kdark-text text-primary align-middle hover:text-primary-dark",children:u})]}):null}),(0,S.jsx)(r.Yk,{children:(0,S.jsx)("div",{className:"flex items-center px-2",children:(0,S.jsx)(b.Z,{disabled:!d,value:Number(e.sorder),onChange:function(n){return ee(n,e.id)},children:(t=a.count,(0,h.Z)(Array(t)).map((function(e,n){return(0,S.jsx)(f.Z,{value:n+1,children:Number(n+1)},n)})))})})}),(0,S.jsx)(r.Yk,{children:(0,S.jsxs)("div",{className:"flex items-center",children:[(0,S.jsx)(j.Z,{disabled:!d,onClick:function(){return P(e)},children:(0,S.jsx)(g.YK6,{color:"#979797",size:"18px"})}),(0,S.jsx)(j.Z,{disabled:!d,"aria-label":"view",color:"primary",children:(0,S.jsx)(k.rU,{to:"/departments/view/".concat(i,"/"),children:(0,S.jsx)(g.w8I,{size:"18px"})})}),(0,S.jsx)(j.Z,{disabled:!c,onClick:function(){return B(e)},children:(0,S.jsx)(y.oTc,{color:"#979797",size:"18px"})})]})})]}):(0,S.jsx)(r.Yk,{children:(0,S.jsx)("div",{children:"No information"})})},i)}))})]}),!t&&(0,S.jsx)(r.aN,{tiled:!0,withOverlay:!0})]}),(0,S.jsx)("div",{className:"news__pagination my-4",children:n.length?(0,S.jsx)(x.tl,{count:null===a||void 0===a?void 0:a.last_page,page:m?+m:1,defaultPage:6,siblingCount:1,color:"primary",onChange:N}):null})]})}}),(0,S.jsx)(w,{handleModalOpen:P,open:M}),(0,S.jsx)(z,{handleModalOpen:U,open:I,id:n,page:m,searchQuery:G}),(0,S.jsx)(Y,{handleModalOpen:B,open:K})]}):(0,S.jsx)("div",{className:"flex justify-center",children:(0,S.jsx)(r.aN,{})})})}function $(e){return(0,S.jsx)(r.SV,{children:(0,S.jsx)(W,(0,m.Z)({},e))})}var J=t(61818);function Q(e){var n=e.handleModalOpen,t=e.open,a=e.id,r=(0,l.m)().companyId,s=(0,i.useCallback)((function(){return n(null)}),[]),o=(0,C.eC)().showNotification;return(0,S.jsx)("div",{children:(0,S.jsx)(x.Cx,{handleModalOpen:n,className:"h-full",open:Boolean(t),noPadding:!0,children:r?(0,S.jsx)(Z.Z.Main,{entity:"usersDepartment",name:"usersDepartment-".concat(r),url:"".concat(r,"/departments/").concat(a,"/users/"),method:"post",primaryKey:"id",sendAsFormData:!1,prependData:!0,normalizeData:function(e){return e},fields:[{name:"department",required:!0,value:{id:a},type:"object",onSubmitKey:""},{name:"user",required:!0,onSubmitValue:function(e){return{id:e.id}},value:null,type:"object",onSubmitKey:""}],onSuccess:function(e,n){o({message:"Success! "}),n(),s()},onError:function(e,n){o({message:"Already exist",variant:"error"}),n()},children:function(e){var n=e.isSubmitting;e.values,e.setFieldValue,e.errors,e.setFieldError,e.resetForm;return(0,S.jsxs)("div",{className:"px-4 react-select-dropdown",children:[(0,S.jsx)("h3",{className:"branch-form__heading font-base font-medium mb-4",children:"Add member"}),(0,S.jsx)("label",{className:"text-xs font-light ml-2 text-kgrey-welcome mb-2 block",children:"Member"}),(0,S.jsx)(D.gN,{component:J.Z,customStylesProps:E.gb,name:"user",placeholder:"Choose member here",optionLabel:function(e){return"".concat(null===e||void 0===e?void 0:e.first_name," ").concat(null===e||void 0===e?void 0:e.last_name)},optionValue:"id",isSearchable:!q.tq,isClearable:!0,isCached:!0,openMenuOnFocu:!0,loadOptionsKey:"results",loadOptionsUrl:"/".concat(r,"/employee/"),loadOptionsParams:function(e){return{extra:{search:e}}}}),(0,S.jsxs)("div",{className:"branch-form__footer px-4 pt-4 pb-9 flex justify-end",children:[(0,S.jsx)(x.Ik,{className:"text-kgrey border-kgrey border mr-5",color:"default",onClick:s,children:"Cancel"}),(0,S.jsx)(x.Ik,{className:"dark:hover:bg-primary-300 dark:focus:ring-primary-300 dark:text-white",type:"submit",isSubmitting:n,color:"primary",children:"Add"})]})]})}}):null})})}function X(e){var n=e.handleModalOpen,t=e.open,s=e.departmentId,o=(0,l.m)().companyId,d=(0,i.useState)(!1),c=(0,a.Z)(d,2),u=c[0],m=c[1],h=(0,C.eC)().showNotification,p=(0,N.v)({entity:"usersDepartment",name:"usersDepartment-".concat(o),method:"delete",url:"/".concat(o,"/departments/").concat(s,"/users/").concat(null===t||void 0===t?void 0:t.id,"/"),deleteData:!0,id:null===t||void 0===t?void 0:t.id,cb:{success:function(e){n(null),m(!1),h({message:"Successfully deleted",variant:"success"})},error:function(e){m(!1)},finally:function(){}}}).handleRequest,v=function(){n(null)};return(0,S.jsx)("div",{className:"relative",children:(0,S.jsxs)(x.Cx,{handleModalOpen:v,open:Boolean(t),children:[(0,S.jsxs)(x.$N,{id:"alert-dialog-title",children:["Are you sure to delete ",(0,S.jsx)("strong",{children:null===t||void 0===t?void 0:t.name}),"?"]}),(0,S.jsxs)(x.kX,{children:[(0,S.jsx)(x.zx,{onClick:v,autoFocus:!0,variant:"contained",children:"Cancel"}),(0,S.jsx)(x.zx,{onClick:function(){t&&(m(!0),p())},variant:"contained",color:"secondary",children:"Delete"})]}),u&&(0,S.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-white bg-opacity-70",children:(0,S.jsx)(r.aN,{})})]})})}function G(e){return(0,S.jsx)(r.SV,{children:(0,S.jsx)(X,(0,m.Z)({},e))})}Q.defaultProps={onSuccess:function(){}};var ee=t(92241),ne=t(32).Z.entity.formRequest;function te(e){var n=e.departmentId,t=(0,ee.I0)(),o=(0,l.m)(),c=o.companyId,u=o.isAdmin,m=o.isPermitted,h=(0,C.h0)("memberPage"),p=h.page,v=h.handlePage,f=h.removePage,b=(0,i.useState)(!1),y=(0,a.Z)(b,2),k=y[0],N=y[1],_=(0,i.useState)(null),w=(0,a.Z)(_,2),Z=w[0],D=w[1],M=(0,i.useState)(""),A=(0,a.Z)(M,2),F=A[0],V=A[1],I=(0,R.Z)(F,500),E=(0,a.Z)(I,1)[0],O=(0,C.Zp)().reloadEntityAll,q=(0,i.useCallback)((function(e){return D(e)}),[]);(0,i.useEffect)((function(){return function(){return f()}}),[]);var K=function(){return N((function(e){return!e}))},H=function(e){V(e.target.value)};return(0,S.jsx)("div",{children:c&&n?(0,S.jsxs)("div",{children:[(0,S.jsx)(s.Z.All,{entity:"usersDepartment",name:"usersDepartment-".concat(c),url:"/".concat(c,"/departments/").concat(n,"/users/"),params:{limit:10,extra:{search:E},page:p},children:function(e){var a=e.items,i=e.isFetched,l=e.meta,s=a.map((function(e){return e}));return(0,S.jsxs)("div",{children:[(0,S.jsxs)("div",{className:"flex prime-tabs justify-between items-center text-base font-medium px-4 pt-3 pb-4 bg-kgrey-bg rounded-t-lg dark:text-white dark:bg-primary-300",children:[(0,S.jsx)("h4",{children:"Members"}),(0,S.jsxs)("div",{className:"flex items-center",children:[(0,S.jsxs)("div",{className:"group-sidebar__search relative pr-2 flex-grow",children:[(0,S.jsx)("input",{type:"search",value:F,className:"group-sidebar__search-input w-full text-sm outline-none border-b rounded-10 border-kgrey-border-solid focus:border-primary transition pl-9 placeholder-[rgba(45, 45, 45, 0.3)] placeholder:text-base py-2 dark:bg-kdark",placeholder:"Search for members",onChange:H}),(0,S.jsx)("div",{className:"absolute top-1/2 -translate-y-1/2 left-2",children:(0,S.jsx)("div",{className:"text-kgrey",children:(0,S.jsx)(T.lnn,{})})})]}),(0,S.jsx)("button",{type:"button",disabled:!m,onClick:K,className:"bg-white rounded-xl text-sm md:text-base font-poppins text-center px-4 py-2 hover:bg-primary-200 transition dark:bg-primary-300 dark:text-white disabled:opacity-70",children:"Add members"})]})]}),(0,S.jsxs)(x.xJ,{classes:{root:"relative "},children:[(0,S.jsxs)(r.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,S.jsx)(x.ss,{children:(0,S.jsxs)(r.AF,{children:[(0,S.jsx)(r.EU,{style:{width:"20%"},children:"Full name"}),(0,S.jsx)(r.EU,{style:{width:"17%"},children:"Email"}),(0,S.jsx)(r.EU,{style:{textAlign:"center",width:"13%",paddingLeft:"80px"},children:"Actions"})]})}),(0,S.jsx)(x.RM,{children:s.map((function(e){var i=e.id,l=e.user,s=e.is_department_manager;return(0,S.jsx)(r.AF,{children:a.length?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(r.Yk,{children:(0,S.jsxs)("div",{className:"flex items-center",children:[(0,S.jsx)("div",{className:"w-9 h-9 mr-2.5 flex-shrink-0",children:(0,d.w)("",l.name)}),(0,S.jsx)("p",{className:"font-medium text-sm",children:l.name})]})}),(0,S.jsx)(r.Yk,{children:(0,S.jsx)("div",{className:"text-sm",children:l.username})}),(0,S.jsx)(r.Yk,{children:(0,S.jsxs)("div",{className:"flex items-center justify-end",children:[s?(0,S.jsxs)("button",{disabled:!u,className:" flex items-center py-1.5 px-4 text-sm rounded-10 border text-kgrey border-kgrey disabled:opacity-50",children:[(0,S.jsx)(g.bzc,{color:"#979797",size:"18px"}),(0,S.jsx)("span",{className:"ml-2.5",children:"Manager"})]}):(0,S.jsx)("button",{disabled:!u,className:"bg-primary py-1.5 px-4 text-white text-sm rounded-10 disabled:opacity-50",onClick:function(){return function(e){e&&t(ne({entity:"role",name:"Rolechanging",url:"/".concat(c,"/departments/").concat(n,"/change_manager/").concat(e,"/"),params:{},method:"put",values:{},cb:{success:function(){O({url:"/".concat(c,"/departments/").concat(n,"/users/"),entity:"usersDepartment",name:"usersDepartment-".concat(c),params:{page:p,limit:10,extra:{search:E}}})},error:function(){},finally:function(){}}}))}(null===l||void 0===l?void 0:l.id)},children:"Set as manager"}),(0,S.jsx)(j.Z,{disabled:!u,onClick:function(){return q(e)},children:(0,S.jsx)(g.YK6,{color:"#979797",size:"18px"})})]})})]}):(0,S.jsx)(r.Yk,{children:(0,S.jsx)("div",{children:"No information"})},i)},i)}))})]}),!i&&(0,S.jsx)(r.aN,{tiled:!0,withOverlay:!0})]}),(0,S.jsx)("div",{className:"news__pagination my-4",children:a.length?(0,S.jsx)(x.tl,{count:null===l||void 0===l?void 0:l.last_page,page:p?+p:1,defaultPage:6,siblingCount:1,color:"primary",onChange:v}):null})]})}}),(0,S.jsx)(Q,{handleModalOpen:K,open:k,id:n}),(0,S.jsx)(G,{handleModalOpen:q,open:Z,departmentId:n})]}):(0,S.jsx)("div",{className:"flex justify-center",children:(0,S.jsx)(r.aN,{})})})}function ae(e){return(0,S.jsx)(r.SV,{children:(0,S.jsx)(te,(0,m.Z)({},e))})}var ie=t(28361),re=t(15103);function le(e){var n=e.className,t=void 0===n?"":n;return(0,S.jsxs)("svg",{className:t,width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,S.jsx)("path",{d:"M0.375 0.4375H2.25V2.3125H0.375V0.4375Z",fill:"#A5A7B2"}),(0,S.jsx)("path",{d:"M7.875 13.5625H4.125V0.4375H7.875C8.86956 0.4375 9.82339 0.832588 10.5266 1.53585C11.2299 2.23911 11.625 3.19294 11.625 4.1875V9.8125C11.625 10.8071 11.2299 11.7609 10.5266 12.4641C9.82339 13.1674 8.86956 13.5625 7.875 13.5625ZM6 11.6875H7.875C8.37228 11.6875 8.84919 11.49 9.20082 11.1383C9.55246 10.7867 9.75 10.3098 9.75 9.8125V4.1875C9.75 3.69022 9.55246 3.21331 9.20082 2.86168C8.84919 2.51004 8.37228 2.3125 7.875 2.3125H6V11.6875Z",fill:"#A5A7B2"}),(0,S.jsx)("path",{d:"M0.375 4.1875H2.25V13.5625H0.375V4.1875Z",fill:"#A5A7B2"})]})}function se(e){var n=e.className,t=void 0===n?"":n;return(0,S.jsx)("svg",{className:t,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,S.jsx)("path",{d:"M3.5 4C3.10218 4 2.72064 4.15804 2.43934 4.43934C2.15804 4.72064 2 5.10218 2 5.5V7.5C2 7.89782 2.15804 8.27936 2.43934 8.56066C2.72064 8.84196 3.10218 9 3.5 9H5.5C5.89782 9 6.27936 8.84196 6.56066 8.56066C6.84196 8.27936 7 7.89782 7 7.5V5.5C7 5.10218 6.84196 4.72064 6.56066 4.43934C6.27936 4.15804 5.89782 4 5.5 4H3.5ZM9.5 5C9.36739 5 9.24021 5.05268 9.14645 5.14645C9.05268 5.24021 9 5.36739 9 5.5C9 5.63261 9.05268 5.75979 9.14645 5.85355C9.24021 5.94732 9.36739 6 9.5 6H17.5C17.6326 6 17.7598 5.94732 17.8536 5.85355C17.9473 5.75979 18 5.63261 18 5.5C18 5.36739 17.9473 5.24021 17.8536 5.14645C17.7598 5.05268 17.6326 5 17.5 5H9.5ZM9.5 7C9.36739 7 9.24021 7.05268 9.14645 7.14645C9.05268 7.24021 9 7.36739 9 7.5C9 7.63261 9.05268 7.75979 9.14645 7.85355C9.24021 7.94732 9.36739 8 9.5 8H15.5C15.6326 8 15.7598 7.94732 15.8536 7.85355C15.9473 7.75979 16 7.63261 16 7.5C16 7.36739 15.9473 7.24021 15.8536 7.14645C15.7598 7.05268 15.6326 7 15.5 7H9.5ZM3.5 11C3.10218 11 2.72064 11.158 2.43934 11.4393C2.15804 11.7206 2 12.1022 2 12.5V14.5C2 14.8978 2.15804 15.2794 2.43934 15.5607C2.72064 15.842 3.10218 16 3.5 16H5.5C5.89782 16 6.27936 15.842 6.56066 15.5607C6.84196 15.2794 7 14.8978 7 14.5V12.5C7 12.1022 6.84196 11.7206 6.56066 11.4393C6.27936 11.158 5.89782 11 5.5 11H3.5ZM9.5 12C9.36739 12 9.24021 12.0527 9.14645 12.1464C9.05268 12.2402 9 12.3674 9 12.5C9 12.6326 9.05268 12.7598 9.14645 12.8536C9.24021 12.9473 9.36739 13 9.5 13H17.5C17.6326 13 17.7598 12.9473 17.8536 12.8536C17.9473 12.7598 18 12.6326 18 12.5C18 12.3674 17.9473 12.2402 17.8536 12.1464C17.7598 12.0527 17.6326 12 17.5 12H9.5ZM9.5 14C9.36739 14 9.24021 14.0527 9.14645 14.1464C9.05268 14.2402 9 14.3674 9 14.5C9 14.6326 9.05268 14.7598 9.14645 14.8536C9.24021 14.9473 9.36739 15 9.5 15H15.5C15.6326 15 15.7598 14.9473 15.8536 14.8536C15.9473 14.7598 16 14.6326 16 14.5C16 14.3674 15.9473 14.2402 15.8536 14.1464C15.7598 14.0527 15.6326 14 15.5 14H9.5Z",fill:"#A5A7B2"})})}function oe(e){var n=e.className,t=void 0===n?"":n;return(0,S.jsx)("svg",{className:t,width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,S.jsx)("path",{d:"M12.7062 13.925L14.1062 12.525C14.2948 12.3388 14.5334 12.2113 14.793 12.1581C15.0526 12.1048 15.3221 12.1281 15.5687 12.225L17.275 12.9063C17.5243 13.0074 17.738 13.1801 17.8892 13.4026C18.0405 13.625 18.1225 13.8873 18.125 14.1563V17.2813C18.1235 17.4643 18.0851 17.6451 18.0119 17.8128C17.9388 17.9805 17.8324 18.1317 17.6993 18.2573C17.5661 18.3828 17.409 18.4801 17.2372 18.5433C17.0655 18.6065 16.8828 18.6343 16.7 18.625C4.74375 17.8813 2.33125 7.75628 1.875 3.88128C1.85382 3.69099 1.87317 3.49837 1.93178 3.31609C1.99039 3.13382 2.08693 2.96602 2.21504 2.82374C2.34316 2.68145 2.49995 2.5679 2.6751 2.49057C2.85025 2.41323 3.03979 2.37385 3.23125 2.37503H6.25C6.51938 2.37582 6.78236 2.45719 7.00512 2.60867C7.22788 2.76015 7.40023 2.9748 7.5 3.22503L8.18125 4.93128C8.28141 5.17694 8.30696 5.44668 8.25472 5.70678C8.20247 5.96689 8.07475 6.20584 7.8875 6.39378L6.4875 7.79378C6.4875 7.79378 7.29375 13.25 12.7062 13.925Z",fill:"#A5A7B2"})})}function de(){var e=(0,l.m)(),n=e.companyId,t=e.isAdmin,m=(0,o.UO)().id,h=(0,i.useState)(null),x=(0,a.Z)(h,2),p=x[0],v=x[1],f=(0,i.useCallback)((function(e){return v(e)}),[]);return(0,S.jsx)("div",{className:"p-4 max-w-full flex flex-col min-h-full flex-grow relative",children:n?(0,S.jsxs)("div",{className:"mt-5",children:[(0,S.jsx)(s.Z.One,{primaryKey:"id",id:m,entity:"departments",name:"AllDepartments-".concat(n),url:"".concat(n,"/departments/").concat(m,"/"),params:{},relations:"",children:function(e){var n=e.item,a=e.isFetched,i=n,l=i.icon,s=i.name,o=i.id,m=i.phone,h=i.members_count,x=m&&"+"===m[0]?m:"+".concat(m);return(0,S.jsx)(S.Fragment,{children:a?(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:" w-full bg-kred-pink-200 absolute top-0 left-0",children:t?null:(0,S.jsx)("p",{className:"text-kred-pink text-center text-xs my-1",children:"You do not have permission to perform some actions, please check with admin"})}),(0,S.jsx)("h2",{className:"text-xl md:text-3xl font-bold mb-6 dark:text-white",children:"Department Details"}),(0,S.jsxs)("div",{className:"flex items-center mb-2 sm:mb-16 flex-wrap",children:[(0,S.jsx)("div",{className:"w-28 h-28 p-7 order-1 flex-shrink-0 bg-kgrey-bg dark:bg-kdark-lighter rounded-full mr-4 sm:mr-12",children:(0,d.w)((null===l||void 0===l?void 0:l.thumbnail)||(null===l||void 0===l?void 0:l.thumbnail_150)||"",s)}),(0,S.jsxs)("div",{className:"flex ml-auto flex-wrap sm:flex-nowrap py-4 order-last lg:order-2 lg:ml-0 lg:py-0",children:[(0,S.jsx)("div",{className:"mr-4 mb-4 sm:mr-7 sm:mb-0",children:(0,S.jsx)(u.Z,{fontSize:"text-lg",color:"text-kred-pink",bgColor:"bg-kgrey-bg",title:"Department id:",count:o,children:(0,S.jsx)(le,{})})}),(0,S.jsx)("div",{className:"mr-4 mb-4 sm:mr-7 sm:mb-0",children:(0,S.jsx)(u.Z,{fontSize:"text-lg",bgColor:"bg-kgrey-bg",title:"Department name:",count:s,children:(0,S.jsx)(se,{})})}),(0,S.jsx)("div",{className:"mr-4 mb-4 sm:mr-7 sm:mb-0",children:(0,S.jsx)(u.Z,{fontSize:"text-lg",bgColor:"bg-kgrey-bg",title:"Members count:",count:h,children:(0,S.jsx)(c.hc,{})})}),m?(0,S.jsx)("div",{className:"mr-4 mb-4 sm:mr-7 sm:mb-0",children:(0,S.jsx)("a",{href:"tel:".concat(x),className:"",children:(0,S.jsx)(u.Z,{fontSize:"text-lg",bgColor:"bg-kgrey-bg",title:"Phone:",count:m,children:(0,S.jsx)(oe,{})})})}):null]}),(0,S.jsx)("div",{className:"py-4 ml-auto order-3",children:(0,S.jsx)("button",{disabled:!t,type:"button",onClick:function(){return f(i)},className:"bg-kgrey-bg rounded-xl text-sm md:text-base font-poppins text-center px-4 py-2 hover:bg-primary-200 transition dark:bg-primary-300 dark:text-white disabled:opacity-60",children:"Edit department"})})]})]}):(0,S.jsx)("div",{className:"flex justify-center mb-4",children:(0,S.jsx)(r.aN,{})})})}}),(0,S.jsx)($,{departmentId:m}),(0,S.jsx)(ae,{departmentId:m}),(0,S.jsx)(ie.Z,{handleModalOpen:f,open:p})]}):(0,S.jsx)("div",{className:"flex justify-center",children:(0,S.jsx)(r.aN,{})})})}var ce=function(){return(0,S.jsx)(r.SV,{children:(0,S.jsx)(re.$i,{children:(0,S.jsx)(de,{})})})}},28361:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(47313),i=t(84365),r=t(77344),l=t(8279),s=t(26926),o=t(65188),d=t(46417);function c(e){switch(e){case"MINUTES":return{label:"minutes",value:"MINUTES"};case"HOURS":return{label:"hours",value:"HOURS"};case"DAYS":return{label:"days",value:"DAYS"};default:return null}}function u(e){var n,t,u=e.handleModalOpen,m=e.open,h=(0,r.m)().companyId,x=(0,a.useCallback)((function(){return u(null)}),[]),p=(0,o.eC)().showNotification,v=(0,o.r1)().updateEntities;return(0,d.jsx)("div",{children:h?(0,d.jsx)("div",{children:(0,d.jsx)(s.Cx,{maxWidth:466,minWidth:466,handleModalOpen:x,open:Boolean(m),scrollable:!0,noPadding:!0,children:(0,d.jsx)(i.Z.Main,{entity:"departments",name:"AllDepartments-".concat(h),url:"".concat(h,"/departments/").concat(null===m||void 0===m?void 0:m.id,"/"),method:"patch",id:null===m||void 0===m?void 0:m.id,updateData:!0,primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},fields:[{name:"icon",required:!1,value:null===m||void 0===m?void 0:m.icon,type:"object",onSubmitKey:"",onSubmitValue:function(e){return e||null}},{name:"name",required:!0,value:null===m||void 0===m?void 0:m.name,onSubmitKey:""},{name:"link",required:!1,value:null===m||void 0===m?void 0:m.link,onSubmitKey:"",onSubmitValue:function(e){return e||null}},{name:"phone",required:!1,value:null===m||void 0===m?void 0:m.phone,onSubmitKey:""},{name:"case_escalation_time",required:!1,value:null!==(n=null===m||void 0===m?void 0:m.case_escalation_time)&&void 0!==n?n:"",onSubmitValue:function(e){return e?parseInt(e):null},onSubmitKey:""},{name:"case_escalation_time_unit",required:!1,value:c(null===m||void 0===m?void 0:m.case_escalation_time_unit),onSubmitValue:function(e){return null===e||void 0===e?void 0:e.value},type:"object",onSubmitKey:""},{name:"assign_required",required:!1,value:null===m||void 0===m?void 0:m.assign_required,onSubmitKey:""},{name:"initial_response_time",required:!1,value:null!==(t=null===m||void 0===m?void 0:m.initial_response_time)&&void 0!==t?t:"",onSubmitValue:function(e){return e?parseInt(e):null},onSubmitKey:""},{name:"initial_response_time_unit",required:!1,value:c(null===m||void 0===m?void 0:m.initial_response_time_unit),onSubmitValue:function(e){return null===e||void 0===e?void 0:e.value},type:"object",onSubmitKey:""},{name:"default_assignees",required:!1,onSubmitKey:"",type:"object",value:null===m||void 0===m?void 0:m.default_assignees,onSubmitValue:function(e){return e.length?e.map((function(e){return e.id})):[]}},{name:"data_field",required:!1,onSubmitKey:"",type:"object",value:null===m||void 0===m?void 0:m.data_field}],onSuccess:function(e,n){var t,a;p({message:"Success! "}),(null===e||void 0===e||null===(t=e.default_assignees)||void 0===t?void 0:t.length)<(null===m||void 0===m||null===(a=m.default_assignees)||void 0===a?void 0:a.length)&&v({entity:"departments",entityId:null===m||void 0===m?void 0:m.id,updatingData:{default_assignees:(null===e||void 0===e?void 0:e.default_assignees)||[]}}),n(),x()},onError:function(e,n){p({message:"Already exist",variant:"error"}),n()},children:function(e){var n=e.isSubmitting,t=e.values,a=e.setFieldValue,i=e.errors,r=e.setFieldError,s=e.resetForm;return(0,d.jsx)(l.Z,{values:t,setFieldValue:a,setFieldError:r,isSubmitting:n,errors:i,closeModal:x,isCreate:!1,resetForm:s,departmentId:null===m||void 0===m?void 0:m.id})}})})}):null})}u.defaultProps={onSuccess:function(){}}},85768:function(e,n,t){t.d(n,{Z:function(){return s}});t(47313);var a=t(30806),i=t(51474),r=t(28303),l=t(46417);function s(e){var n=e.icon,t=e.name,s=e.id;return(0,l.jsx)(i.Yk,{children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"w-9 h-9 flex-shrink-0",children:(0,a.w)((null===n||void 0===n?void 0:n.thumbnail)||(null===n||void 0===n?void 0:n.thumbnail_150)||"",t)}),(0,l.jsx)(r.rU,{to:"/departments/view/".concat(s,"/"),children:(0,l.jsx)("p",{className:"text-sm font-medium ml-2.5 text-primary transition hover:text-primary-dark",children:t})})]})})}},82546:function(e,n,t){t.d(n,{x:function(){return s}});var a=t(77344),i=t(65188),r=t(92241),l=t(32).Z.entity.formRequest;function s(e,n,t,s){var o=(0,a.m)().companyId,d=(0,i.h0)("department"===e?"page":"subPage").page,c=(0,r.I0)(),u=(0,i.Zp)().reloadEntityAll;return{handleDepOrderChange:function(a,i){i&&c(l({entity:"sorder",name:"AllSorder",url:"/".concat(o,"/departments/").concat(i,"/change_order/").concat(a.target.value,"/"),params:{},method:"put",values:{},cb:{success:function(){u({entity:"department"===e?"departments":"subDepartments",name:"department"===e?"AllDepartments-".concat(o):"SubDepartments-".concat(o),url:"department"===e?"/".concat(o,"/departments/"):"/".concat(o,"/departments/").concat(t,"/sub_departments/"),params:{page:d,limit:10,extra:{is_staff:s||null,search:n}}})},error:function(){},finally:function(){}}}))}}}},34636:function(e,n,t){t(47313);var a=t(83061),i=t(46417);n.Z=function(e){var n=e.title,t=e.children,r=e.count,l=e.bgColor,s=e.color,o=e.fontSize;return(0,i.jsxs)("div",{className:(0,a.Z)("p-3.5 rounded-10 dark:bg-kdark-lighter dark:border-zinc-700 dark:border-sm",l||"bg-white"),children:[(0,i.jsx)("h4",{className:"mb-2.5 text-sm font-medium text-kgrey",children:n}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("span",{className:"flex w-9 h-9 justify-center items-center bg-kgrey-bgDashboardItem dark:bg-black rounded-full",children:t}),(0,i.jsx)("p",{className:(0,a.Z)("ml-4 leading-5 font-semibold",s||"text-primary-dark",o||"text-2xl"),children:r})]})]})}},30806:function(e,n,t){t.d(n,{w:function(){return r}});var a=t(3187),i=t(46417),r=function(e,n){return e?(0,i.jsx)(a.Z,{className:"inline-block",alt:n||"Business icon",src:e,style:{width:"100%",height:"100%"}}):(0,i.jsx)(a.Z,{className:"inline-block",style:{color:"#fff",width:"100%",height:"100%"},children:n?n[0].toUpperCase():null})}}}]);