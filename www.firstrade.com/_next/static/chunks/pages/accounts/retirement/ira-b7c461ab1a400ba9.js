(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1643],{43767:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accounts/retirement/ira",function(){return r(25964)}])},61739:function(e,t,r){"use strict";r.d(t,{Af:function(){return f},F3:function(){return h},lj:function(){return x},oe:function(){return u},xG:function(){return _}});var l=r(43692),s=r(12042),i=r(99728),n=r(21157),a=r(61557),o=r(65954),c=function(e){return"zh-CN"===e?"zh-CN":"zh-Hant"===e?"zh-TW":"en-US"},d=function(e,t,r){return("en-US"===r?"".concat(e).concat(t):"".concat(e,"/").concat(r).concat(t)).replace(/\/+$/,"")},u=function(e,t,r,l){var s="https://www.firstrade.com",i={title:r||"",description:l||""};return i.canonical=d(s,e,t),i.languageAlternates=[{href:d(s,e,"en-US"),hrefLang:"en"},{href:d(s,e,"zh-CN"),hrefLang:"zh-hans"},{href:d(s,e,"zh-TW"),hrefLang:"zh-hant"},{href:d(s,e,"en-US"),hrefLang:"x-default"}],i},h=function(e,t){if(e.length<=t)return[e];for(var r=[],l=0;l<e.length;)r.push(e.slice(l,l+t)),l+=t;return r},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,i.Z)((0,s.Z)({style:"currency"},r),{currency:t})).format(e)},x=function(e,t,r){return 1===e?t*(1+r):x(e-1,t,r)+t*Math.pow(1+r,e)},f=(function(){var e=(0,l.Z)((function(e,t){var r,l,s,i,n,d,u,h,_,x,f,b=arguments;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return r=b.length>2&&void 0!==b[2]&&b[2],l=[],s=function(r){var l={fields:["Slug","locale"],locale:"all",pagination:{page:r,pageSize:100}};return t&&(l.filters=t),(0,o.s1)(e,{params:l})},i=function(e){e.length&&e.forEach((function(e){var t=c(e.attributes.locale);l.push({params:r?{slug:[e.attributes.Slug]}:{slug:e.attributes.Slug},locale:t})}))},[4,s(1)];case 1:if(n=a.sent(),d=n.data,u=d.data,h=d.meta,i(u),!(h.pagination.pageCount>1))return[3,3];for(_=[],x=2;x<=h.pagination.pageCount;x+=1)f=s(x),_.push(f);return[4,Promise.all(_)];case 2:a.sent().forEach((function(e){var t=e.data.data;i(t)})),a.label=3;case 3:return[2,l]}}))}))}(),function(){var e=(0,l.Z)((function(e,t,r){var l,s,i,c,d,u,h,_,x,f,b,p,m,v,g,j,N,w,y;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return d=e.params.slug,u=e.locale,h=function(e){return"zh-CN"===e?"zh-CN":"zh-TW"===e?"zh-Hant":"en"}(u),_={},x=[(0,o.s1)("/api/guides",{params:{locale:h,filters:{Slug:{$eq:d},Category:{$eq:t}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],r&&x.push((0,o.s1)("/api/videos",{params:{locale:h,filters:{Slug:{$eq:r}},populate:"Videos"}})),[4,Promise.all(x)];case 1:return f=n.Z.apply(void 0,[a.sent(),2]),b=f[0],p=f[1],m=b.data,(null===(v=m.data)||void 0===v?void 0:v.length)?(g=(0,n.Z)(v,1),j=g[0],_.title=j.attributes.Title,_.subTitle=j.attributes.Subtitle||"",_.slug=j.attributes.Slug,_.content=j.attributes.Content||"",_.sections=j.attributes.Section||null,_.seo={title:(null===(l=j.attributes)||void 0===l||null===(s=l.SEO)||void 0===s?void 0:s.Title)||null,description:(null===(i=j.attributes)||void 0===i||null===(c=i.SEO)||void 0===c?void 0:c.Description)||null},_.videos=[],r&&(N=p.data,(null===(w=N.data)||void 0===w?void 0:w.length)&&(y=(0,n.Z)(w,1),y[0].attributes.Videos.forEach((function(e){var t={title:e.Title,subTitle:e.Time,classNames:"bg-".concat(e.Theme),alt:e.Alt,sources:[{src:e.URL,type:"video/mp4"}]};_.videos.push(t)})))),[2,_]):[2,!1]}}))}))}(),function(e,t){for(var r=null,l=0;l<e.length;l+=1){if(t.includes(e[l].value)){r=e[l];break}if(e[l].options&&(r=f(e[l].options,t)))break}return r})},25964:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return j},default:function(){return N}});var l=r(8014),s=r(22319),i=r(62044),n=r(75657),a=r.n(n),o=r(67294),c=r.n(o);var d=function(){var e=(0,i.Z)("ira").t;return(0,l.jsx)("div",{className:c().container,children:(0,l.jsxs)("div",{className:"border-t border-grayish-blue max-w-7xl m-auto p-4 py-8 lg:py-10",children:[(0,l.jsx)("h3",{className:"font-futura font-bold text-ft-blue mb-4",children:e("moreInfo.header")}),(0,l.jsx)("div",{className:"text-lg font-bold mt-6",children:(0,l.jsx)(a(),{href:"/accounts/retirement",children:e("moreInfo.title_1")})}),(0,l.jsx)("div",{children:e("moreInfo.text_1")}),(0,l.jsx)("div",{className:"text-lg font-bold mt-6",children:(0,l.jsx)(a(),{href:"/accounts/retirement/rollover-401k",children:e("moreInfo.title_3")})}),(0,l.jsx)("div",{children:e("moreInfo.text_3")})]})})},u=r(2617),h=r.n(u);var _=function(){var e=(0,i.Z)("ira").t;return(0,l.jsx)("div",{className:h().container,children:(0,l.jsxs)("div",{className:"border-t border-grayish-blue max-w-7xl m-auto p-4 lg:flex lg:py-10",children:[(0,l.jsxs)("div",{className:"w-full lg:w-3/5",children:[(0,l.jsx)("h2",{className:"font-futura font-bold text-ft-blue mt-4 mb-8",children:e("whyFirstrade.header")}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:e("whyFirstrade.text_1")}),(0,l.jsx)("li",{children:e("whyFirstrade.text_2")}),(0,l.jsx)("li",{children:e("whyFirstrade.text_3")}),(0,l.jsx)("li",{children:e("whyFirstrade.text_4")})]})]}),(0,l.jsx)("div",{className:"w-full lg:w-2/5 text-lg py-6 lg:pl-8 lg:py-20",children:(0,l.jsx)(a(),{href:"/accounts/retirement/traditional-vs-roth",className:"{styles.box_2}",children:e("whyFirstrade.text_5")})})]})})},x=r(73751),f=r.n(x);var b=function(){var e=(0,i.Z)("ira"),t=e.t,r=e.lang;return(0,l.jsx)("div",{className:f().container,children:(0,l.jsxs)("div",{className:f().wrapper,children:[(0,l.jsxs)("div",{className:"w-full lg:w-3/5 pr-8",children:[(0,l.jsx)("h1",{className:"mb-4",children:t("traditionalIRA.header")}),(0,l.jsx)("div",{className:"text-xl",children:t("traditionalIRA.subheader")})]}),(0,l.jsxs)("div",{className:"w-full pt-4 lg:w-2/5 lg:border-l lg:border-grayish-blue lg:pt-2 lg:pl-8",children:[(0,l.jsx)("div",{className:"text-2xl my-4",children:t("traditionalIRA.text_1")}),(0,l.jsx)("a",{href:"https://signup.firstrade.com/apply/".concat(r.toLowerCase()),className:"button-primary button-primary-orange",children:t("traditionalIRA.btn")})]})]})})},p=r(67040),m=r.n(p);var v=function(){var e=(0,i.Z)("ira").t;return(0,l.jsx)("div",{className:m().container,children:(0,l.jsxs)("div",{className:"border-t border-grayish-blue max-w-7xl m-auto p-4",children:[(0,l.jsx)("h2",{className:"font-futura font-bold text-ft-blue my-4",children:e("rules.header")}),(0,l.jsxs)("div",{className:m().table,children:[(0,l.jsxs)("div",{className:m().box_row,children:[(0,l.jsx)("div",{className:m().box_left,children:(0,l.jsx)("div",{className:m().title,children:e("rules.title_1")})}),(0,l.jsx)("div",{className:m().box_right,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:e("rules.list_1a")}),(0,l.jsx)("li",{children:e("rules.list_1b")}),(0,l.jsx)("li",{children:e("rules.list_1c")})]})})]}),(0,l.jsxs)("div",{className:m().box_row,children:[(0,l.jsx)("div",{className:m().box_left,children:(0,l.jsx)("div",{className:m().title,children:e("rules.title_2")})}),(0,l.jsxs)("div",{className:m().box_right,children:[(0,l.jsx)("p",{children:e("rules.list_2")}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:e("rules.list_2a")}),(0,l.jsx)("br",{}),e("rules.list_2b"),(0,l.jsx)("br",{}),e("rules.list_2c")]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:e("rules.list_2d")}),(0,l.jsx)("br",{}),e("rules.list_2e"),(0,l.jsx)("br",{}),e("rules.list_2f")]})]})]}),(0,l.jsxs)("div",{className:m().box_row,children:[(0,l.jsx)("div",{className:m().box_left,children:(0,l.jsx)("div",{className:m().title,children:e("rules.title_3")})}),(0,l.jsxs)("div",{className:m().box_right,children:[(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:e("rules.list_3a")}),(0,l.jsx)("br",{}),e("rules.list_3b"),(0,l.jsx)("br",{}),e("rules.list_3c")]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:e("rules.list_3d")}),(0,l.jsx)("br",{}),e("rules.list_3e"),(0,l.jsx)("br",{}),e("rules.list_3f")]})]})]}),(0,l.jsxs)("div",{className:m().box_row,children:[(0,l.jsx)("div",{className:m().box_left,children:(0,l.jsx)("div",{className:m().title,children:e("rules.title_4")})}),(0,l.jsx)("div",{className:m().box_right,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:e("rules.list_4a")}),(0,l.jsx)("li",{children:e("rules.list_4b")}),(0,l.jsx)("li",{children:e("rules.list_4c")})]})})]})]}),(0,l.jsx)("div",{className:"text-sm text-ft-slate",children:e("rules.note")})]})})},g=r(61739),j=!0;function N(){var e=(0,i.Z)("ira"),t=e.t,r=e.lang,n=(0,g.oe)("/accounts/retirement/ira",r,t("title"),t("description")),a=n.title,o=n.description,c=n.languageAlternates,u=n.canonical;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.PB,{title:a,description:o,languageAlternates:c,canonical:u}),(0,l.jsx)(b,{}),(0,l.jsx)(_,{}),(0,l.jsx)(v,{}),(0,l.jsx)(d,{})]})}},67294:function(e){e.exports={container:"MoreInfo_container__rkU42",wrapper:"MoreInfo_wrapper__wRu6R",title:"MoreInfo_title__TcIlg"}},67040:function(e){e.exports={container:"Rules_container__3R1Ng",wrapper:"Rules_wrapper__9KewN",header:"Rules_header__LC1Ja",table:"Rules_table__H7BSH",box_row:"Rules_box_row__akz7g",box_left:"Rules_box_left__06c96",title:"Rules_title___hddr",box_right:"Rules_box_right__DzFQA"}},73751:function(e){e.exports={container:"TraditionalIRA_container__VTdy_",wrapper:"TraditionalIRA_wrapper__I_ma9",box_1:"TraditionalIRA_box_1__eBCBC",header:"TraditionalIRA_header__G_CXf",subheader:"TraditionalIRA_subheader__ZmWYN",box_2:"TraditionalIRA_box_2__f9ZG8",getStarted:"TraditionalIRA_getStarted__CDkqh"}},2617:function(e){e.exports={container:"WhyFirstrade_container__J2lUo",wrapper:"WhyFirstrade_wrapper__KPIwO",box_1:"WhyFirstrade_box_1__PAVIU",header:"WhyFirstrade_header__oq30v",box_2:"WhyFirstrade_box_2__sZs7W"}}},function(e){e.O(0,[2319,9774,2888,179],(function(){return t=43767,e(e.s=t);var t}));var t=e.O();_N_E=t}]);