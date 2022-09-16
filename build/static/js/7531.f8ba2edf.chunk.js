"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[7531],{17531:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(1413),r=n(70885),l=n(47313),s=n(51474),i=n(90182),u=n(65188),o=n(3925),c=n(15103),d=n(46417);function m(){var e=(0,c.tT)(),t=e.searchQuery,n=e.setSearchQuery;return(0,d.jsxs)("div",{className:"group-sidebar__search relative",children:[(0,d.jsx)("input",{type:"search",value:t,className:"group-sidebar__search-input w-full md:w-36 outline-none border-b border-kgrey-border-solid dark:border-white dark:text-white focus:border-primary transition pl-7 placeholder-[rgba(45, 45, 45, 0.3)] pt-2 pb-2 dark:bg-kdark dark:focus:border-primary",placeholder:"Search",onChange:function(e){return n(e.target.value)}}),(0,d.jsx)("div",{className:"absolute top-1/2 -translate-y-1/2 left-0",children:(0,d.jsx)("div",{className:"text-kgrey",children:(0,d.jsx)(o.lnn,{})})})]})}var f=n(28303),p=n(63830),h=n(26926),b=n(84365),x=n(77344),v=n(8279);function y(e){var t=e.handleModalOpen,n=e.page,a=e.isStaff,r=e.hasToShowGuard,s=e.formValuesSetter,i=(0,x.m)().companyId,o=(0,l.useCallback)((function(){return t(null)}),[]),m=(0,u.eC)().showNotification,f=(0,u.Zp)().reloadEntityAll,p=(0,c.tT)().searchQuery;return(0,d.jsx)("div",{children:i?(0,d.jsx)(b.Z.Main,{entity:"departments",name:"AllDepartments-".concat(i),url:"".concat(i,"/departments/"),method:"post",primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},appendData:!0,fields:[{name:"icon",required:!1,value:null,onSubmitKey:"",type:"object",onSubmitValue:function(e){return e||null}},{name:"name",required:!0,value:"",onSubmitKey:""},{name:"link",required:!1,value:null,onSubmitKey:"",onSubmitValue:function(e){return e||null}},{name:"phone",required:!1,value:null,onSubmitKey:""},{name:"is_staff",required:!1,value:"staff",onSubmitKey:""},{name:"case_escalation_time",required:!1,value:null,onSubmitKey:"",onSubmitValue:function(e){return e?parseInt(e):null}},{name:"case_escalation_time_unit",required:!1,value:{label:"minutes",value:"MINUTES"},onSubmitKey:"",onSubmitValue:function(e){return e.value},type:"object"},{name:"initial_response_time",required:!1,value:null,onSubmitKey:""},{name:"initial_response_time_unit",required:!1,value:{label:"minutes",value:"MINUTES"},onSubmitKey:"",onSubmitValue:function(e){return e.value},type:"object"}],onSuccess:function(e,t){m({message:"Success! "}),t(),f({entity:"departments",name:"AllDepartments-".concat(i),url:"/".concat(i,"/departments/"),params:{page:n,limit:10,extra:{is_staff:a,search:p}}}),o()},onError:function(e,t){m({message:"Already exist",variant:"error"}),t()},children:function(e){var t=e.isSubmitting,n=e.values,a=e.setFieldValue,l=e.errors,i=e.setFieldError,u=e.resetForm;return(0,d.jsx)(v.Z,{values:n,setFieldValue:a,setFieldError:i,isSubmitting:t,errors:l,resetForm:u,formValuesSetter:s,closeModal:r})}}):null})}s.Dy.defaultProps={onSuccess:function(){}};var j=(0,l.lazy)((function(){return n.e(4760).then(n.bind(n,54760))}));function S(e){return{id:"simple-tabpanel-".concat(e),"aria-controls":"simple-tab-".concat(e)}}function k(e){var t=e.match,n=(0,x.m)(),o=n.isPermitted,b=n.isAdmin,v=l.useState(0),k=(0,r.Z)(v,2),g=k[0],w=k[1],N=t.url,_=t.path,C=(0,u.gQ)("Departments"),T=C.unreadCasesQuantity,V=C.isHidden,K=(0,c.tT)(),q=K.setIsStaff,E=K.isStaff,D=(0,p.k6)(),A=(0,l.useState)(!1),Z=(0,r.Z)(A,2),F=Z[0],M=Z[1],O=(0,u.h0)().page,I=(0,u.Tn)(),Q=I.formValues,U=I.guardOpen,G=I.setGuardOpen,H=I.formValuesSetter,J=function(){return M((function(e){return!e}))},P=(0,l.useCallback)((function(){G((function(e){return!e}))}),[]),W=(0,l.useCallback)((function(){G(!1),H([]),J()}),[F]),z=(0,l.useCallback)((function(){Q.length?G(!0):J()}),[Q]);return(0,l.useEffect)((function(){0===g&&D.push("".concat(N,"?is-staff=true"))}),[D]),(0,l.useEffect)((function(){w("true"===E?0:1),D.push("".concat(N,"?is-staff=").concat(E))}),[E]),(0,d.jsxs)("div",{className:"p-4 w-full flex flex-col min-h-full flex-grow relative",children:[(!V||0===T)&&(0,d.jsx)(i.q,{children:(0,d.jsx)("title",{children:"KENNEKT | Departments "})}),(0,d.jsxs)("div",{className:"mb-5",children:[(0,d.jsx)("div",{className:" w-full bg-kred-pink-200 absolute top-0 left-0",children:b?null:(0,d.jsx)("p",{className:"text-kred-pink text-center text-xs my-1",children:"You do not have permission to perform some actions, please check with admin"})}),(0,d.jsxs)("div",{className:"flex items-center justify-between flex-wrap w-full mt-5",children:[(0,d.jsx)("h2",{className:"text-xl md:text-3xl font-bold dark:text-white py-4 mr-5",children:"Departments"}),(0,d.jsxs)("div",{className:"flex items-center w-full md:w-auto",children:[(0,d.jsx)(m,{}),(0,d.jsx)("button",{disabled:!o,className:"bg-kgrey-bg rounded-xl ml-2 sm:ml-5 text-sm md:text-base font-poppins text-center px-4 py-2 hover:bg-primary-200 transition dark:bg-primary-300 dark:text-white disabled:opacity-60",onClick:J,children:"New department"})]})]})]}),(0,d.jsx)("div",{className:"prime-tabs",children:(0,d.jsxs)(s.sJ.Tabs,{roundedTop:!0,value:g,onChange:function(e,t){switch(t){case 0:q("true");break;case 1:q("false");break;default:return null}w(t)},"aria-label":"simple tabs",children:[(0,d.jsx)(s.sJ.Tab,(0,a.Z)({label:"Staff departments",component:f.rU,to:"".concat(N,"?is-staff=true")},S(0))),(0,d.jsx)(s.sJ.Tab,(0,a.Z)({label:"Client departments",component:f.rU,to:"".concat(N,"?is-staff=false")},S(1)))]})}),(0,d.jsx)("div",{className:"max-w-full flex-grow flex flex-col relative",children:(0,d.jsx)("div",{className:"relative flex-grow",children:(0,d.jsx)(l.Suspense,{fallback:(0,d.jsx)(s.aN,{tiled:!0}),children:(0,d.jsx)(p.rs,{children:(0,d.jsx)(p.AW,{exact:!0,path:_,component:j})})})})}),(0,d.jsx)(h.Cx,{maxWidth:466,minWidth:466,handleModalOpen:function(){Q.length?G(!0):J()},open:Boolean(F),scrollable:!0,noPadding:!0,children:(0,d.jsx)(y,{page:O,isStaff:E,hasToShowGuard:z,formValuesSetter:H,handleModalOpen:J})}),(0,d.jsx)(s.sm,{featureHandler:W,isOpen:U,toggleHandler:P,title:"You have unsaved changes, Are you sure to cancel?"})]})}var g=function(e){return(0,d.jsx)(s.SV,{children:(0,d.jsx)(c.$i,{children:(0,d.jsx)(k,(0,a.Z)({},e))})})}}}]);