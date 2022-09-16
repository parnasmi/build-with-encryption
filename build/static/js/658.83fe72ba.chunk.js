"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[658],{20658:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var s=n(47313),a=n(65188),i=n(95762),l=n(77344),r=n(51474),c=n(26926),d=n(4901),o=n(26672),m=n(10658),x=n.n(m),h=n(22539),u=n(46417);function j(e){var t=e.campaignEntity||{},n=t.name,s=t.created_date,a=t.created_by;t.categories;return(0,u.jsxs)("div",{className:"flex items-center mb-8 flex-wrap",children:[(0,u.jsx)(c.ev,{text:n,title:"Name",wrapperClassnames:"bg-kgrey-bgmenu",textClassName:"!text-lg font-semibold",children:(0,u.jsx)(d.g3P,{className:"text-kgrey"})}),(0,u.jsx)(c.ev,{text:x()(s).format("MMMM D YYYY"),title:"Published Date",wrapperClassnames:"bg-kgrey-bgmenu",textClassName:"!text-lg font-semibold",children:(0,u.jsx)(h.f$3,{className:"text-kgrey"})}),(0,u.jsx)(c.ev,{text:"".concat(a.first_name," ").concat(a.last_name),title:"Created By",wrapperClassnames:"bg-kgrey-bgmenu",textClassName:"!text-lg font-semibold",children:(0,u.jsx)(o.VRY,{className:"text-kgrey"})})]})}function g(e){var t,n=e.categories;return(0,u.jsxs)("div",{className:"mb-8",children:[(0,u.jsx)("h2",{className:"font-bold text-xl mb-6 dark:text-white",children:"Client Groups"}),(0,u.jsx)(c.xJ,{classes:{root:"relative "},children:(0,u.jsxs)(r.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,u.jsx)(c.ss,{children:(0,u.jsxs)(r.AF,{children:[(0,u.jsx)(r.EU,{style:{width:"5%"},children:"#"}),(0,u.jsx)(r.EU,{style:{width:"95%"},children:"Client Group"})]})}),(0,u.jsx)(c.RM,{children:(null!==(t=n)&&void 0!==t?t:[]).map((function(e,t){var n=e.name,s=e.id;return(0,u.jsxs)(r.AF,{children:[(0,u.jsx)(r.Yk,{children:t+1}),(0,u.jsx)(r.Yk,{children:n})]},s)}))})]})})]})}var p=n(62238),f=n(28303),v=n(11760);function y(e){var t=e.campaignId,n=(0,l.m)(),d=n.companyId,o=n.isPermitted,m=(0,a.h0)(),h=m.page,j=m.handlePage,g=m.removePage,y=(0,a.A3)(),b=y.query,w=y.setQuery,k=y.searchQuery,N=(0,a.tv)(),C=N.match,Y=N.history,_=(0,v.a)().userData,D=null===_||void 0===_?void 0:_.can_send_news,E=(0,p.n8)(),A=E.handleCampaignNewsDelete,F=E.deleteVisible,P=E.showDeleteVisible,M=E.deleteLoading,U=E.closeDeletePopup;(0,s.useEffect)((function(){return function(){return g()}}),[]);return(0,u.jsxs)("div",{className:"relative mb-8",children:[(0,u.jsx)(c.Bu,{title:"Campaign News",query:b,placeholder:"Search For News",handleSearch:function(e){return w(e.target.value)},btnHandler:function(){return Y.push("/news/campaigns/news/create/".concat(t))},btnText:"Add News",isPermitted:o||!D}),d?(0,u.jsx)(i.Z.All,{entity:"news",name:"AllCampaignNews",url:"/".concat(d,"/notifications/"),params:{page:h,limit:5,extra:{search:k,campaign:t}},children:function(e){var n=e.items,s=e.isFetched,a=e.meta,i=n;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{children:[(0,u.jsxs)(c.xJ,{classes:{root:"relative "},children:[(0,u.jsxs)(r.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,u.jsx)(c.ss,{children:(0,u.jsxs)(r.AF,{children:[(0,u.jsx)(r.EU,{style:{width:"20%"},children:"Title"}),(0,u.jsx)(r.EU,{style:{width:"10%"},children:"Status"}),(0,u.jsx)(r.EU,{style:{width:"10%"},children:"Frequency"}),(0,u.jsx)(r.EU,{style:{width:"20%"},children:"Author"}),(0,u.jsx)(r.EU,{style:{width:"20%"},children:"Date"}),(0,u.jsx)(r.EU,{style:{width:"20%"},children:(0,u.jsx)("div",{className:"ml-2 mb-2",children:"Actions"})})]})}),(0,u.jsx)(c.RM,{children:i.map((function(e){var n=null!==e&&void 0!==e?e:{},s=n.frequency,a=n.start_time,i=n.status,l=n.author,c=n.subject,d=n.id;return(0,u.jsxs)(r.AF,{children:[(0,u.jsx)(r.Yk,{children:(0,u.jsx)(f.rU,{to:"".concat(C.url,"/").concat(e.id),children:(0,u.jsx)("span",{className:"text-primary transition hover:text-primary-dark",children:c})})}),(0,u.jsx)(r.Yk,{children:i}),(0,u.jsx)(r.Yk,{children:s}),(0,u.jsx)(r.Yk,{children:l.name}),(0,u.jsx)(r.Yk,{children:x()(a).format("MMMM D YYYY, h:mm a")}),(0,u.jsx)(r.Yk,{children:(0,u.jsxs)("div",{className:"flex items-center justify-end ",children:[(0,u.jsx)(r.cP.DeleteButton,{clickHandler:function(){return P(e)},isDisabled:!o||!D}),(0,u.jsx)(r.cP.ViewButton,{clickHandler:function(){return Y.push("/news/campaigns/view/".concat(t,"/").concat(e.id))},isDisabled:!o||!D}),(0,u.jsx)(r.cP.EditButton,{clickHandler:function(){return Y.push("/news/campaigns/edit/".concat(t,"/").concat(e.id))},isDisabled:!o||!D})]})})]},d)}))})]}),!s&&(0,u.jsx)(r.aN,{tiled:!0,withOverlay:!0})]}),(0,u.jsx)(r.sm,{featureHandler:function(){return A(F)},isOpen:Boolean(F),toggleHandler:U,title:"Are you sure to delete  ".concat(null===F||void 0===F?void 0:F.subject,"?"),hasLoader:!0,isLoading:M}),(0,u.jsx)("div",{className:"news__pagination my-4",children:n.length?(0,u.jsx)(c.tl,{count:null===a||void 0===a?void 0:a.last_page,page:h?+h:1,defaultPage:6,siblingCount:1,color:"primary",onChange:j}):null})]})})}}):null]})}function b(){var e=(0,a.tv)().params,t=(0,l.m)().companyId,n=parseInt(null===e||void 0===e?void 0:e.campaignId);return t?(0,u.jsxs)("div",{className:"py-8",children:[(0,u.jsx)("h1",{className:"font-semibold text-2xl mb-6 dark:text-white",children:"Campaign Details"}),(0,u.jsx)(i.Z.One,{id:n,relations:"",entity:"campaigns",name:"Campaign-".concat(n),url:"/".concat(t,"/campaigns/").concat(n,"/"),params:{},children:function(e){var t=e.item,n=e.isFetched,s=t;return(0,u.jsx)(u.Fragment,{children:n?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(j,{campaignEntity:s}),(0,u.jsx)(g,{categories:s.categories}),(0,u.jsx)(y,{campaignId:s.id})]}):(0,u.jsx)(r.aN,{tiled:!0,withOverlay:!0})})}})]}):null}}}]);