"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[6923],{96923:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var a=n(1413),l=n(47313),s=n(84365),r=n(45522),i=n.n(r),o=n(11760),d=n(85700),c=n(92241),u=n(32),m=n(49835),p=n(94715),b=n(17480),h=n(61818),g=n(77344),y=n(37753),x=n(51474),f=n(83061),v=n(4058),k=n(54070),j=n(46417);function N(e){var t,n=e.field,s=e.setFieldValue,r=(0,m.j)(),i=r.uploadMeta,o=r.setUploadMeta,d=r.cancelSending,c=r.setCancelSending,u=r.setFiles,p=r.files;return(0,l.useEffect)((function(){p[n]&&s(n,p[n])}),[p]),(0,j.jsxs)("div",{className:"lg:flex",children:[(0,j.jsx)(x.bA,{uploadMeta:i,setUploadMeta:o,cancelSending:d,setCancelSending:c,setFile:u,isBusinessProfile:!0,field:n}),(0,j.jsxs)("div",{className:"flex-grow-1 lg:ml-6 mt-4 lg:mt-0",children:[(0,j.jsxs)("div",{className:(0,f.Z)("overflow-hidden relative border border-kgrey-border-solid",{"w-24 h-24 rounded-full":"icon"===n,"w-64 h-16 rounded-md":"logo"===n}),children:[(0,j.jsx)("img",{src:(null===p||void 0===p||null===(t=p[n])||void 0===t?void 0:t.url)||("icon"===n?"https://via.placeholder.com/96x96/":"https://via.placeholder.com/263x60/"),alt:n,className:"object-content w-full-max h-full"}),null!==i.progress&&i.field===n&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"absolute z-10  position-centered",children:(0,j.jsx)(x.aN,{variant:"static",value:i.progress})}),(0,j.jsx)(k.Z,{onClick:function(){c(!0),o((function(e){return(0,a.Z)((0,a.Z)({},e),{},{progress:null})}))},className:"!absolute z-20 position-centered text-white",children:(0,j.jsx)(v.Z,{className:"text-primary"})})]})]}),(0,j.jsx)("div",{className:"text-xs text-kgrey mt-1",children:"icon"===n?"Please use 1:1 image for best fit":"Please use (260x63)px or 4:1 image for best fit"})]})]})}var w=n(69082),S={width:"100%",height:"400px"};function E(e){var t,n,a,s=(0,g.m)().isAdmin,r=(0,o.a)(),c=r.company,u=r.userData,f=(null===c||void 0===c||null===(t=c.company)||void 0===t||null===(n=t.owner)||void 0===n?void 0:n.id)===u.id,v=(0,m.j)(!0),k=v.searchInputRef,E=v.calcedLat,C=v.calcedLng,F=v.onLoad,K=v.onUnmount,_=v.selected,M=v.onMarkerDrag,Z=v.isLoaded,z=v.placeAddress,L=v.files,V=v.map,I=e.values,O=e.setFieldValue,T=e.isSubmitting,D=e.errors,U=e.setFieldError;return(0,w.Y)({setFieldValue:O,searchInputRef:k}),(0,l.useEffect)((function(){i()(z)||(O("city",z.city),O("address",z.plain()),O("state",z.state),O("country",z.country),O("zipcode",z.zip))}),[z]),(0,l.useEffect)((function(){_&&"lat"in _&&"lng"in _&&(O("lat",Number(null===_||void 0===_?void 0:_.lat).toFixed(9)),O("lng",Number(null===_||void 0===_?void 0:_.lng).toFixed(9)))}),[_]),(0,l.useEffect)((function(){L.icon&&O("icon",L.icon),L.logo&&O("logo",L.logo)}),[L]),(0,l.useEffect)((function(){i()(D)||(0,d.lZ)("business-profile-form")}),[D]),(0,l.useEffect)((function(){O("sub_industry",null)}),[I.industry]),(0,l.useEffect)((function(){T&&!i()(D)&&Object.keys(D).forEach((function(e){return U(e,!1)}))}),[T]),(0,l.useEffect)((function(){if(Z&&V){var e=new google.maps.LatLng(Number(null===I||void 0===I?void 0:I.lat),Number(null===I||void 0===I?void 0:I.lng));V.panTo(e)}}),[Z,V]),(0,j.jsxs)("div",{className:"lg:grid w-100 lg:grid-cols-2 mt-6 gap-x-11",id:"business-profile-form",children:[(0,j.jsxs)("div",{className:"col-1",children:[(0,j.jsx)(p.gN,{label:"Name",name:"name",component:b.Mg,placeholder:"Enter name here",inputElementClassNames:"dark:bg-kdark-lighter dark:text-white",disabled:!f}),(0,j.jsx)(p.gN,{label:"Website",name:"website",component:b.Mg,placeholder:"Enter Website here",inputElementClassNames:"dark:bg-kdark-lighter dark:text-white"}),(0,j.jsxs)("div",{className:"mb-4 react-select-dropdown",children:[(0,j.jsxs)("div",{className:"ml-2 text-sm font-light text-kgrey-menuText mb-2 block",children:[(0,j.jsx)("span",{children:"Industry"}),(0,j.jsx)("sup",{children:"*"})]}),(0,j.jsx)(p.gN,{component:h.Z,customStylesProps:d.gb,name:"industry",placeholder:"Industry name here",optionLabel:"name",optionValue:"id",isSearchable:!0,isClearable:!1,loadOptionsKey:"results",isDisabled:!s,loadOptionsUrl:"/industries/",loadOptionsParams:function(e){return{extra:{search:e}}}})]}),I.industry?(0,j.jsxs)("div",{className:"mb-4 react-select-dropdown",id:"industry",children:[(0,j.jsxs)("div",{className:"ml-2 text-sm font-light text-kgrey-menuText mb-2 block",children:[(0,j.jsx)("span",{children:"Sub Industry"}),(0,j.jsx)("sup",{children:"*"})]}),(0,j.jsx)(p.gN,{component:h.Z,customStylesProps:d.gb,name:"sub_industry",placeholder:"Sub industry name here",optionLabel:"name",optionValue:"id",isSearchable:!0,isClearable:!1,loadOptionsKey:"results",isDisabled:!s,loadOptionsUrl:"/industries/".concat(null===(a=I.industry)||void 0===a?void 0:a.id,"/sub_industries/"),loadOptionsParams:function(e){return{extra:{search:e}}}})]}):null,(0,j.jsx)(p.gN,{label:"About",name:"about",type:"textarea",component:b.Mg,placeholder:"Enter Company description here",rows:"5",inputElementClassNames:"dark:bg-kdark-lighter dark:text-white"}),(0,j.jsxs)("div",{className:"mb-4 react-select-dropdown",children:[(0,j.jsx)("div",{className:"ml-2 text-sm font-light text-kgrey-menuText mb-2 block",children:(0,j.jsx)("span",{children:"Business icon"})}),(0,j.jsx)(N,{field:"icon",setFieldValue:O})]}),(0,j.jsxs)("div",{className:"mb-4 react-select-dropdown",children:[(0,j.jsx)("div",{className:"ml-2 text-sm font-light text-kgrey-menuText mb-2 block",children:(0,j.jsx)("span",{children:"Business logo"})}),(0,j.jsx)(N,{field:"logo",setFieldValue:O})]}),(0,j.jsx)("h1",{className:"font-bold text-2xl mb-4 dark:text-white",children:"Social connection"}),(0,j.jsx)(p.gN,{label:"Facebook",name:"facebook_url",component:b.Mg,placeholder:"Enter facebook address here",disabled:!s,inputElementClassNames:"dark:bg-kdark-lighter dark:text-white"}),(0,j.jsx)(p.gN,{label:"Twitter",name:"twitter_url",component:b.Mg,placeholder:"Enter twitter address here",disabled:!s,inputElementClassNames:"dark:bg-kdark-lighter dark:text-white"})]}),(0,j.jsxs)("div",{className:"col-2",children:[(0,j.jsxs)("div",{className:"mb-4",children:[(0,j.jsx)("label",{htmlFor:"address",className:"ml-2 text-sm font-light text-kgrey-menuText mb-2 block",children:"Address"}),(0,j.jsx)("input",{id:"xyz123",name:"xyz123",autoComplete:"xyz123",type:"search",ref:k,disabled:!s,className:"border bg-kgrey-light-grey-1 border-transparent rounded-lg text-xs px-6 py-3.5 outline-none transition focus:border-primary focus:shadow-lg w-full placeholder-current placeholder-kgrey dark:bg-kdark-lighter dark:text-white hover:border-primary"})]}),(0,j.jsx)(p.gN,{label:"City",name:"city",component:b.Mg,placeholder:"Enter City here",disabled:!s,inputElementClassNames:"dark:bg-kdark-lighter dark:text-white"}),(0,j.jsx)(p.gN,{label:"State",name:"state",component:b.Mg,disabled:!s,placeholder:"Enter State here",inputElementClassNames:"dark:bg-kdark-lighter dark:text-white"}),(0,j.jsx)(p.gN,{label:"Zipcode",name:"zipcode",component:b.Mg,disabled:!s,placeholder:"Enter zipcode here",inputElementClassNames:"dark:bg-kdark-lighter dark:text-white"}),(0,j.jsx)(p.gN,{label:"Country",name:"country",component:b.Mg,disabled:!s,placeholder:"Enter country here",inputElementClassNames:"dark:bg-kdark-lighter dark:text-white"}),(0,j.jsx)(p.gN,{label:"Phone number",name:"phone",component:b.UO,disabled:!s,placeholder:"Enter company mobile phone number",enableSearch:!0,onChangeHandler:O,className:"tel-input-profile"}),(0,j.jsxs)("div",{className:"mb-4 react-select-dropdown",children:[(0,j.jsx)("div",{className:"ml-2 text-sm font-light text-kgrey-menuText mb-2 block",children:(0,j.jsx)("span",{children:"Map"})}),Z?(0,j.jsx)(y.b6,{mapContainerStyle:S,center:{lat:Number(E)||-3.745,lng:Number(C)||-38.523},zoom:10,onLoad:F,onUnmount:K,onClick:M,children:(0,j.jsx)(y.Jx,{draggable:!0,position:{lat:Number(null===_||void 0===_?void 0:_.lat)||Number(E),lng:Number(null===_||void 0===_?void 0:_.lng)||Number(C)},onDragEnd:M})}):(0,j.jsx)("p",{className:"dark:text-white",children:"There is problem with loading map or location has not been set."})]}),(0,j.jsx)("div",{className:"flex justify-start",children:(0,j.jsx)(x.Ik,{className:"dark:hover:bg-primary-300 dark:focus:ring-primary-300 dark:text-white",type:"submit",isSubmitting:T,isDisabled:!s||T,color:"primary",children:"Update"})})]})]})}var C=n(65188),F=u.Z.user.setUserCompany;var K=function(){var e,t,n=(0,o.a)().company,l=(0,m.j)(!0),r=l.files,u=l.selected,p=l.placeAddress,b=l.calcedLat,h=l.calcedLng,g=l.companyId,y=(0,C.eC)().showNotification,x=(0,c.I0)();return(0,j.jsx)("div",{className:"business-profile",children:n?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.Z.Main,{entity:"profile",name:"business-profile",url:"/".concat(g,"/my/company/"),method:"patch",sendAsFormData:!1,normalizeData:"",prependData:!0,fields:[{name:"name",value:n.company.name||"",onSubmitKey:""},{name:"status",value:"ACTIVE",onSubmitKey:""},{name:"created_date",value:n.company.created_date,onSubmitKey:""},{name:"website",value:n.company.website||"",type:"website",onSubmitKey:""},{name:"city",value:(i()(p)?n.company.city:p.city)||"",onSubmitKey:""},{name:"address",value:(i()(p)?n.company.address:p.plain())||"",onSubmitKey:""},{name:"address_2",value:n.company.address_2||"",onSubmitKey:""},{name:"zipcode",value:(i()(p)?n.company.zipcode:p.zip)||"",onSubmitKey:""},{name:"country",value:(i()(p)?"object"===typeof n.company.country&&null!==n.company.country?null===(e=n.company.country)||void 0===e?void 0:e.name:n.company.country:p.country)||"",required:!0,onSubmitKey:""},{name:"state",value:(i()(p)?"object"===typeof n.company.state&&null!==n.company.state?null===(t=n.company.state)||void 0===t?void 0:t.name:n.company.state:p.state)||"",required:!0,onSubmitKey:""},{name:"phone",value:n.company.phone||"",onSubmitKey:""},{name:"about",value:n.company.about||"",onSubmitKey:""},{name:"industry",value:n.company.industry,onSubmitKey:"",type:"object",required:!0},{name:"sub_industry",value:n.company.sub_industry,onSubmitKey:"",type:"object",required:!1},{name:"icon",value:r.icon,onSubmitKey:"",type:"object"},{name:"logo",value:r.logo,onSubmitKey:"",type:"object"},{name:"facebook_url",value:n.company.facebook_url,onSubmitKey:"",type:"website"},{name:"twitter_url",value:n.company.twitter_url||"",onSubmitKey:"",type:"website"},{name:"lat",value:(u?Number(u.lat).toFixed(9):String(b))||"",onSubmitKey:""},{name:"lng",value:(u?Number(u.lng).toFixed(9):String(h))||"",onSubmitKey:""}],onSuccess:function(e,t){var l,s=(0,a.Z)((0,a.Z)({},n),{},{company:(0,a.Z)((0,a.Z)({},e),{},{owner:(null===n||void 0===n||null===(l=n.company)||void 0===l?void 0:l.owner)||{}})});d.tO.set("company",JSON.stringify(s)),x(F(s)),y({message:"Successfully updated!",variant:"success"})},onError:function(e,t){t(),y({message:"Something went wrong!",variant:"error"})},children:function(e){var t=e.isSubmitting,n=e.values,a=e.setFieldValue,l=e.errors,s=e.setFieldError;return(0,j.jsx)(E,{values:n,setFieldValue:a,isSubmitting:t,errors:l,setFieldError:s})}})," "]}):null})}},69082:function(e,t,n){n.d(t,{Y:function(){return l}});var a=n(47313);function l(e){var t=e.setFieldValue,n=e.searchInputRef,l=e.field,s=void 0===l?"address":l,r=(0,a.useCallback)((function(e){var n=e.target.value;t(s,n)}),[]);(0,a.useEffect)((function(){var e=n.current;return n.current&&n.current.addEventListener("change",r),function(){e.removeEventListener("change",r)}}),[n,r])}}}]);