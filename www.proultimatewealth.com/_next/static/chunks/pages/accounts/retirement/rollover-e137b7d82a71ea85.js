(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6427],{66376:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accounts/retirement/rollover",function(){return t(10730)}])},61739:function(e,r,t){"use strict";t.d(r,{Af:function(){return f},F3:function(){return h},lj:function(){return x},oe:function(){return u},xG:function(){return _}});var l=t(43692),a=t(12042),n=t(99728),i=t(21157),s=t(61557),o=t(65954),c=function(e){return"zh-CN"===e?"zh-CN":"zh-Hant"===e?"zh-TW":"en-US"},d=function(e,r,t){return("en-US"===t?"".concat(e).concat(r):"".concat(e,"/").concat(t).concat(r)).replace(/\/+$/,"")},u=function(e,r,t,l){var a="https://www.proultimatewealth.com",n={title:t||"",description:l||""};return n.canonical=d(a,e,r),n.languageAlternates=[{href:d(a,e,"en-US"),hrefLang:"en"},{href:d(a,e,"zh-CN"),hrefLang:"zh-hans"},{href:d(a,e,"zh-TW"),hrefLang:"zh-hant"},{href:d(a,e,"en-US"),hrefLang:"x-default"}],n},h=function(e,r){if(e.length<=r)return[e];for(var t=[],l=0;l<e.length;)t.push(e.slice(l,l+r)),l+=r;return t},_=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,n.Z)((0,a.Z)({style:"currency"},t),{currency:r})).format(e)},x=function(e,r,t){return 1===e?r*(1+t):x(e-1,r,t)+r*Math.pow(1+t,e)},f=(function(){var e=(0,l.Z)((function(e,r){var t,l,a,n,i,d,u,h,_,x,f,v=arguments;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return t=v.length>2&&void 0!==v[2]&&v[2],l=[],a=function(t){var l={fields:["Slug","locale"],locale:"all",pagination:{page:t,pageSize:100}};return r&&(l.filters=r),(0,o.s1)(e,{params:l})},n=function(e){e.length&&e.forEach((function(e){var r=c(e.attributes.locale);l.push({params:t?{slug:[e.attributes.Slug]}:{slug:e.attributes.Slug},locale:r})}))},[4,a(1)];case 1:if(i=s.sent(),d=i.data,u=d.data,h=d.meta,n(u),!(h.pagination.pageCount>1))return[3,3];for(_=[],x=2;x<=h.pagination.pageCount;x+=1)f=a(x),_.push(f);return[4,Promise.all(_)];case 2:s.sent().forEach((function(e){var r=e.data.data;n(r)})),s.label=3;case 3:return[2,l]}}))}))}(),function(){var e=(0,l.Z)((function(e,r,t){var l,a,n,c,d,u,h,_,x,f,v,m,b,p,g,j,w,N,y;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return d=e.params.slug,u=e.locale,h=function(e){return"zh-CN"===e?"zh-CN":"zh-TW"===e?"zh-Hant":"en"}(u),_={},x=[(0,o.s1)("/api/guides",{params:{locale:h,filters:{Slug:{$eq:d},Category:{$eq:r}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],t&&x.push((0,o.s1)("/api/videos",{params:{locale:h,filters:{Slug:{$eq:t}},populate:"Videos"}})),[4,Promise.all(x)];case 1:return f=i.Z.apply(void 0,[s.sent(),2]),v=f[0],m=f[1],b=v.data,(null===(p=b.data)||void 0===p?void 0:p.length)?(g=(0,i.Z)(p,1),j=g[0],_.title=j.attributes.Title,_.subTitle=j.attributes.Subtitle||"",_.slug=j.attributes.Slug,_.content=j.attributes.Content||"",_.sections=j.attributes.Section||null,_.seo={title:(null===(l=j.attributes)||void 0===l||null===(a=l.SEO)||void 0===a?void 0:a.Title)||null,description:(null===(n=j.attributes)||void 0===n||null===(c=n.SEO)||void 0===c?void 0:c.Description)||null},_.videos=[],t&&(w=m.data,(null===(N=w.data)||void 0===N?void 0:N.length)&&(y=(0,i.Z)(N,1),y[0].attributes.Videos.forEach((function(e){var r={title:e.Title,subTitle:e.Time,classNames:"bg-".concat(e.Theme),alt:e.Alt,sources:[{src:e.URL,type:"video/mp4"}]};_.videos.push(r)})))),[2,_]):[2,!1]}}))}))}(),function(e,r){for(var t=null,l=0;l<e.length;l+=1){if(r.includes(e[l].value)){t=e[l];break}if(e[l].options&&(t=f(e[l].options,r)))break}return t})},10730:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return y},default:function(){return R}});var l=t(8014),a=t(22319),n=t(62044),i=t(75657),s=t.n(i);var o=function(){var e=(0,n.Z)("rolloverira").t;return(0,l.jsxs)("div",{className:"border-t border-grayish-blue max-w-7xl m-auto p-4 py-8 lg:py-10",children:[(0,l.jsx)("h3",{className:"font-futura font-bold text-ft-blue mb-4",children:e("moreInfo.header")}),(0,l.jsx)("div",{className:"text-lg font-bold mt-6",children:(0,l.jsx)(s(),{href:"/accounts/retirement",children:e("moreInfo.title_1")})}),(0,l.jsx)("div",{children:e("moreInfo.text_1")}),(0,l.jsx)("div",{className:"text-lg font-bold mt-6",children:(0,l.jsx)(s(),{href:"/accounts/retirement/rollover-401k",children:e("moreInfo.title_3")})}),(0,l.jsx)("div",{children:e("moreInfo.text_3")})]})},c=t(5768),d=t.n(c);var u=function(){var e=(0,n.Z)("rolloverira").t;return(0,l.jsx)("div",{className:d().container,children:(0,l.jsxs)("div",{className:"border-t border-grayish-blue max-w-7xl m-auto p-4 lg:flex lg:py-10",children:[(0,l.jsxs)("div",{className:"w-full lg:w-3/5",children:[(0,l.jsx)("h2",{className:"font-futura font-bold text-ft-blue mt-4 mb-8",children:e("whyFirstrade.header")}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:e("whyFirstrade.text_1")}),(0,l.jsx)("li",{children:e("whyFirstrade.text_2")}),(0,l.jsx)("li",{children:e("whyFirstrade.text_3")}),(0,l.jsx)("li",{children:e("whyFirstrade.text_4")})]})]}),(0,l.jsxs)("div",{className:"w-full lg:w-2/5 text-lg py-6 lg:pl-8 lg:py-15",children:[(0,l.jsx)(s(),{href:"/accounts/retirement/rollover-401k",className:d().box_2,children:e("whyFirstrade.text_5")}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{className:"font-bold text-lg",children:e("whyFirstrade.text_6")}),(0,l.jsx)(s(),{href:"/accounts/acat-transfer",children:e("whyFirstrade.text_7")})]})]})})},h=t(74291),_=t.n(h);var x=function(){var e=(0,n.Z)("rolloverira"),r=e.t,t=e.lang;return(0,l.jsx)("div",{className:_().container,children:(0,l.jsxs)("div",{className:_().wrapper,children:[(0,l.jsxs)("div",{className:"w-full lg:w-3/5 pr-8",children:[(0,l.jsx)("h1",{className:"mb-4",children:r("rolloverIRA.header")}),(0,l.jsx)("div",{className:"text-xl",children:r("rolloverIRA.subheader")})]}),(0,l.jsxs)("div",{className:"w-full pt-4 lg:w-2/5 lg:border-l lg:border-grayish-blue lg:pt-2 lg:pl-8",children:[(0,l.jsx)("div",{className:"text-2xl my-4",children:r("rolloverIRA.text_1")}),(0,l.jsx)("a",{href:"https://signup.proultimatewealth.com/apply/".concat(t.toLowerCase()),className:"button-primary button-primary-orange",children:r("rolloverIRA.btn")})]})]})})},f=t(69595),v=t.n(f);var m=function(){var e=(0,n.Z)("rolloverira").t;return(0,l.jsx)("div",{className:v().container,children:(0,l.jsxs)("div",{className:"border-t border-grayish-blue max-w-7xl m-auto p-4",children:[(0,l.jsx)("h2",{className:"font-futura font-bold text-ft-blue my-4",children:e("rules.header")}),(0,l.jsxs)("div",{className:v().table,children:[(0,l.jsxs)("div",{className:v().box_row,children:[(0,l.jsx)("div",{className:v().box_left,children:(0,l.jsx)("div",{className:v().title,children:e("rules.title_1")})}),(0,l.jsx)("div",{className:v().box_right,children:(0,l.jsx)("div",{children:e("rules.list_1")})})]}),(0,l.jsxs)("div",{className:v().box_row,children:[(0,l.jsx)("div",{className:v().box_left,children:(0,l.jsx)("div",{className:v().title,children:e("rules.title_2")})}),(0,l.jsx)("div",{className:v().box_right,children:e("rules.list_2")})]}),(0,l.jsxs)("div",{className:v().box_row,children:[(0,l.jsx)("div",{className:v().box_left,children:(0,l.jsx)("div",{className:v().title,children:e("rules.title_3")})}),(0,l.jsx)("div",{className:v().box_right,children:e("rules.list_3")})]}),(0,l.jsxs)("div",{className:v().box_row,children:[(0,l.jsx)("div",{className:v().box_left,children:(0,l.jsx)("div",{className:v().title,children:e("rules.title_4")})}),(0,l.jsx)("div",{className:v().box_right,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:e("rules.list_4a")}),(0,l.jsx)("li",{children:e("rules.list_4b")}),(0,l.jsx)("li",{children:e("rules.list_4c")})]})})]})]})]})})},b=t(80241),p=t.n(b),g=t(15921),j=t.n(g);var w=function(){var e=(0,n.Z)("rolloverira").t;return(0,l.jsx)("div",{className:j().container,children:(0,l.jsxs)("div",{className:"border-t border-grayish-blue max-w-7xl m-auto p-4",children:[(0,l.jsx)("h2",{className:"font-futura font-bold text-ft-blue my-4",children:e("howTo.header")}),(0,l.jsxs)("div",{className:j().box,children:[(0,l.jsxs)("div",{className:j().box2,children:[(0,l.jsx)("div",{className:j().imgContainer,children:(0,l.jsx)(p(),{layout:"fill",objectFit:"contain",src:"/images/rollover1.svg",alt:e("howTo.title_1")})}),(0,l.jsx)(s(),{href:"/accounts/retirement/rollover-401k",children:e("howTo.title_1")})]}),(0,l.jsxs)("div",{className:j().box2,children:[(0,l.jsx)("div",{className:j().imgContainer,children:(0,l.jsx)(p(),{layout:"fill",objectFit:"contain",src:"/images/rollover2.svg",alt:e("howTo.title_2")})}),(0,l.jsx)(s(),{href:"/accounts/retirement/rollover-401k",children:e("howTo.title_2")})]}),(0,l.jsxs)("div",{className:j().box2,children:[(0,l.jsx)("div",{className:j().imgContainer,children:(0,l.jsx)(p(),{layout:"fill",objectFit:"contain",src:"/images/rollover3.svg",alt:e("howTo.title_3")})}),(0,l.jsx)(s(),{href:"/accounts/retirement/rollover-401k",children:e("howTo.title_3")})]})]})]})})},N=t(61739),y=!0;function R(){var e=(0,n.Z)("rolloverira"),r=e.t,t=e.lang,i=(0,N.oe)("/accounts/retirement/rollover",t,r("title"),r("description")),s=i.title,c=i.description,d=i.languageAlternates,h=i.canonical;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.PB,{title:s,description:c,languageAlternates:d,canonical:h}),(0,l.jsx)(x,{}),(0,l.jsx)(u,{}),(0,l.jsx)(m,{}),(0,l.jsx)(w,{}),(0,l.jsx)(o,{})]})}},15921:function(e){e.exports={container:"HowTo_container__vnsWb",wrapper:"HowTo_wrapper__QWb0T",header:"HowTo_header__2AEdy",title:"HowTo_title__fDXnp",box:"HowTo_box__DocSs",box2:"HowTo_box2__5Bt62",imgContainer:"HowTo_imgContainer__WJnRV"}},74291:function(e){e.exports={container:"RolloverIRA_container__Pa61W",wrapper:"RolloverIRA_wrapper__KNPAg",box_1:"RolloverIRA_box_1__q9bfm",header:"RolloverIRA_header__Bg1_b",subheader:"RolloverIRA_subheader__fOQaY",box_2:"RolloverIRA_box_2__C_6Ja"}},69595:function(e){e.exports={container:"Rules_container__Ip630",wrapper:"Rules_wrapper__X_Wic",header:"Rules_header__7vayG",table:"Rules_table__t010f",box_row:"Rules_box_row__e0D5C",box_left:"Rules_box_left__xRSXE",title:"Rules_title__xP9Fx",box_right:"Rules_box_right__offSD"}},5768:function(e){e.exports={container:"WhyFirstrade_container__ZWDCC",wrapper:"WhyFirstrade_wrapper__JGGp8",box_1:"WhyFirstrade_box_1__9mmCb",header:"WhyFirstrade_header__G9Epp",box_2:"WhyFirstrade_box_2__RewJa"}}},function(e){e.O(0,[2319,9774,2888,179],(function(){return r=66376,e(e.s=r);var r}));var r=e.O();_N_E=r}]);