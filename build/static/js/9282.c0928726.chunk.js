"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[9282],{9282:function(e,n,i){i.r(n),i.d(n,{default:function(){return y}});var t=i(70885),l=i(47313),s=i(51474),r=i(77344),a=i(95762),o=i(26926),c=i(65188),d=i(981),u=i(94024),m=i(92241),h=i(93905);function x(){var e=(0,r.m)().companyId,n=(0,m.I0)(),i=(0,c.eC)().showNotification,t=(0,c.iR)(),l=t.visible,s=t.showVisible,a=t.loading,o=t.toggleLoading,d=t.closePopup,u=(0,c.iR)(),x=u.visible,p=u.showVisible,f=u.closePopup;return{deleteLinkedClientHandler:function(){return function(){return t=l,o(),void n((0,h.Bi)({entity:"linkedClientsRole",name:"AllLinkedClientsRole",method:"delete",url:"/".concat(e,"/my/company/client/roles/").concat(t.id,"/"),deleteData:!0,id:t.id,cb:{success:function(){i({message:"Successfully deleted",variant:"success"})},error:function(e){i({message:"Something went wrong",variant:"error"})},finally:function(){o(),d()}},params:{},primaryKey:"id",values:{}}));var t}},deleteVisible:l,showDeleteVisible:s,deleteLoading:a,closeDeletePopup:d,showEditVisible:p,closeEditPopup:f,editVisible:x}}var p=i(84365),f=i(90335),v=i(46417);function j(e){var n=e.onSuccess,i=e.entity,t=(0,r.m)().companyId,l=(0,c.eC)().showNotification;return i?(0,v.jsx)("div",{className:"max-w-[446px]",children:(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(p.Z.Main,{entity:"linkedClientsRole",name:"AllLinkedClientsRole",url:"/".concat(t,"/my/company/client/roles/").concat(i.id,"/"),method:"put",primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},updateData:!0,fields:[{name:"name",onSubmitKey:"",required:!0,value:i.name},{name:"description",onSubmitKey:"",required:!0,value:i.description}],onSuccess:function(e,i){l({message:"Successfully updated.."}),n(),i()},onError:function(e,n){var i,t,s=(null===e||void 0===e||null===(i=e.response)||void 0===i||null===(t=i.data)||void 0===t?void 0:t.message)||"Something went wrong";l({message:s,variant:"error"})},children:function(e){var i=e.isSubmitting,t=(e.values,e.resetForm);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s.ph,{resetForm:t,title:"Edit Client Group",isEditing:!0}),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"flex items-center",children:[(0,v.jsx)(f.Z,{isSubmitting:i,onSuccess:n,isEditing:!0}),i&&(0,v.jsx)(s.aN,{tiled:!0,withOverlay:!0})]})})]})}})})}):null}function g(){var e=(0,r.m)().companyId,n=(0,c.h0)(),i=n.page,m=n.handlePage,h=n.removePage,p=(0,d.k0)().searchQuery,f=(0,u.Z)(p,500),g=(0,t.Z)(f,1)[0];(0,l.useEffect)((function(){return function(){return h()}}),[]);var y=x(),b=y.deleteLinkedClientHandler,k=y.deleteVisible,w=y.showDeleteVisible,C=y.deleteLoading,E=y.closeDeletePopup,S=y.showEditVisible,N=y.closeEditPopup,P=y.editVisible;return(0,v.jsx)("div",{children:e?(0,v.jsx)(a.Z.All,{entity:"linkedClientsRole",name:"AllLinkedClientsRole",url:"/".concat(e,"/my/company/client/roles/"),params:{limit:10,extra:{search:g},page:i},children:function(e){var n=e.items,t=e.isFetched,l=e.meta,r=n;return(0,v.jsxs)("div",{children:[(0,v.jsxs)(o.xJ,{classes:{root:"relative "},children:[(0,v.jsxs)(s.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,v.jsx)(o.ss,{children:(0,v.jsxs)(s.AF,{children:[(0,v.jsx)(s.EU,{style:{width:"60%"},children:"Role name"}),(0,v.jsx)(s.EU,{style:{width:"20%"},children:"Description"}),(0,v.jsx)(s.EU,{style:{width:"20%"},children:(0,v.jsx)("div",{className:"flex items-center justify-end ",children:"Actions"})})]})}),(0,v.jsx)(o.RM,{children:r.map((function(e){var n=e.description,i=e.name,t=e.id;return(0,v.jsxs)(s.AF,{children:[(0,v.jsx)(s.Yk,{children:i}),(0,v.jsx)(s.Yk,{children:n}),(0,v.jsx)(s.Yk,{children:(0,v.jsxs)("div",{className:"flex items-center justify-end ",children:[(0,v.jsx)(s.cP.DeleteButton,{clickHandler:function(){return w(e)}}),(0,v.jsx)(s.cP.EditButton,{clickHandler:function(){return S(e)}})]})})]},t)}))})]}),!t&&(0,v.jsx)(s.aN,{tiled:!0,withOverlay:!0})]}),(0,v.jsx)(s.sm,{featureHandler:b(),isOpen:Boolean(k),toggleHandler:E,title:"Are you sure to delete  ".concat(null===k||void 0===k?void 0:k.name,"?"),hasLoader:!0,isLoading:C}),(0,v.jsx)(o.Cx,{handleModalOpen:N,open:Boolean(P),children:(0,v.jsx)(j,{onSuccess:N,entity:P})}),(0,v.jsx)("div",{className:"news__pagination my-4",children:n.length?(0,v.jsx)(o.tl,{count:null===l||void 0===l?void 0:l.last_page,page:i?+i:1,defaultPage:6,siblingCount:1,color:"primary",onChange:m}):null})]})}}):(0,v.jsx)("div",{className:"flex justify-center",children:(0,v.jsx)(s.aN,{})})})}var y=function(){return(0,v.jsx)(s.SV,{children:(0,v.jsx)(g,{})})}}}]);