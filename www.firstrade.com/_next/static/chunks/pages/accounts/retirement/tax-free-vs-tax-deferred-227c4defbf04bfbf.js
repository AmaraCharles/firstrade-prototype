(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6468],{94758:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accounts/retirement/tax-free-vs-tax-deferred",function(){return n(61491)}])},61739:function(t,e,n){"use strict";n.d(e,{Af:function(){return x},F3:function(){return f},lj:function(){return p},oe:function(){return d},xG:function(){return h}});var r=n(43692),a=n(12042),i=n(99728),o=n(21157),s=n(61557),l=n(65954),c=function(t){return"zh-CN"===t?"zh-CN":"zh-Hant"===t?"zh-TW":"en-US"},u=function(t,e,n){return("en-US"===n?"".concat(t).concat(e):"".concat(t,"/").concat(n).concat(e)).replace(/\/+$/,"")},d=function(t,e,n,r){var a="https://www.firstrade.com",i={title:n||"",description:r||""};return i.canonical=u(a,t,e),i.languageAlternates=[{href:u(a,t,"en-US"),hrefLang:"en"},{href:u(a,t,"zh-CN"),hrefLang:"zh-hans"},{href:u(a,t,"zh-TW"),hrefLang:"zh-hant"},{href:u(a,t,"en-US"),hrefLang:"x-default"}],i},f=function(t,e){if(t.length<=e)return[t];for(var n=[],r=0;r<t.length;)n.push(t.slice(r,r+e)),r+=e;return n},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,i.Z)((0,a.Z)({style:"currency"},n),{currency:e})).format(t)},p=function(t,e,n){return 1===t?e*(1+n):p(t-1,e,n)+e*Math.pow(1+n,t)},x=(function(){var t=(0,r.Z)((function(t,e){var n,r,a,i,o,u,d,f,h,p,x,m=arguments;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return n=m.length>2&&void 0!==m[2]&&m[2],r=[],a=function(n){var r={fields:["Slug","locale"],locale:"all",pagination:{page:n,pageSize:100}};return e&&(r.filters=e),(0,l.s1)(t,{params:r})},i=function(t){t.length&&t.forEach((function(t){var e=c(t.attributes.locale);r.push({params:n?{slug:[t.attributes.Slug]}:{slug:t.attributes.Slug},locale:e})}))},[4,a(1)];case 1:if(o=s.sent(),u=o.data,d=u.data,f=u.meta,i(d),!(f.pagination.pageCount>1))return[3,3];for(h=[],p=2;p<=f.pagination.pageCount;p+=1)x=a(p),h.push(x);return[4,Promise.all(h)];case 2:s.sent().forEach((function(t){var e=t.data.data;i(e)})),s.label=3;case 3:return[2,r]}}))}))}(),function(){var t=(0,r.Z)((function(t,e,n){var r,a,i,c,u,d,f,h,p,x,m,g,_,v,b,j,S,C,N;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return u=t.params.slug,d=t.locale,f=function(t){return"zh-CN"===t?"zh-CN":"zh-TW"===t?"zh-Hant":"en"}(d),h={},p=[(0,l.s1)("/api/guides",{params:{locale:f,filters:{Slug:{$eq:u},Category:{$eq:e}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],n&&p.push((0,l.s1)("/api/videos",{params:{locale:f,filters:{Slug:{$eq:n}},populate:"Videos"}})),[4,Promise.all(p)];case 1:return x=o.Z.apply(void 0,[s.sent(),2]),m=x[0],g=x[1],_=m.data,(null===(v=_.data)||void 0===v?void 0:v.length)?(b=(0,o.Z)(v,1),j=b[0],h.title=j.attributes.Title,h.subTitle=j.attributes.Subtitle||"",h.slug=j.attributes.Slug,h.content=j.attributes.Content||"",h.sections=j.attributes.Section||null,h.seo={title:(null===(r=j.attributes)||void 0===r||null===(a=r.SEO)||void 0===a?void 0:a.Title)||null,description:(null===(i=j.attributes)||void 0===i||null===(c=i.SEO)||void 0===c?void 0:c.Description)||null},h.videos=[],n&&(S=g.data,(null===(C=S.data)||void 0===C?void 0:C.length)&&(N=(0,o.Z)(C,1),N[0].attributes.Videos.forEach((function(t){var e={title:t.Title,subTitle:t.Time,classNames:"bg-".concat(t.Theme),alt:t.Alt,sources:[{src:t.URL,type:"video/mp4"}]};h.videos.push(e)})))),[2,h]):[2,!1]}}))}))}(),function(t,e){for(var n=null,r=0;r<t.length;r+=1){if(e.includes(t[r].value)){n=t[r];break}if(t[r].options&&(n=x(t[r].options,e)))break}return n})},61491:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return m},default:function(){return g}});var r=n(8014),a=n(22319),i=n(62044),o=n(75657),s=n.n(o),l=n(59205),c=n.n(l);var u=function(){var t=(0,i.Z)("tax").t;return(0,r.jsx)("div",{className:c().container,children:(0,r.jsxs)("div",{className:"border-t border-grayish-blue max-w-7xl m-auto p-4 py-8 lg:py-10",children:[(0,r.jsx)("h3",{className:"font-futura font-bold text-ft-blue mb-4",children:t("moreInfo.header")}),(0,r.jsx)("div",{className:"text-lg font-bold mt-6",children:(0,r.jsx)(s(),{href:"/accounts/retirement/traditional-vs-roth",children:t("moreInfo.title_1")})}),(0,r.jsx)("div",{children:t("moreInfo.text_1")}),(0,r.jsx)("div",{className:"text-lg font-bold mt-6",children:(0,r.jsx)(s(),{href:"/support/funding",children:t("moreInfo.title_2")})}),(0,r.jsx)("div",{children:t("moreInfo.text_2")})]})})},d=n(46834),f=n(3193),h=n.n(f);var p=function(){var t=(0,i.Z)("tax"),e=t.t,n=t.lang;return(0,r.jsx)("div",{className:h().container,children:(0,r.jsxs)("div",{className:h().wrapper,children:[(0,r.jsxs)("div",{className:"w-full lg:w-3/5 pr-8",children:[(0,r.jsx)("h1",{className:"mb-4",children:e("taxComparison.header")}),(0,r.jsx)("p",{className:"text-xl",children:e("taxComparison.text_1")}),(0,r.jsx)("p",{children:(0,r.jsx)(d.Z,{i18nKey:"taxComparison.text_2",ns:"tax",components:[(0,r.jsx)(s(),{href:"/accounts/retirement/roth",children:"Roth IRAs"},"/accounts/retirement/roth")]})}),(0,r.jsx)("p",{children:(0,r.jsx)(d.Z,{i18nKey:"taxComparison.text_3",ns:"tax",components:[(0,r.jsx)(s(),{href:"/accounts/retirement/ira",legacyBehavior:!0,children:"Traditional IRAs"},"/accounts/retirement/ira")]})})]}),(0,r.jsxs)("div",{className:"w-full pt-4 lg:w-2/5 lg:border-l lg:border-grayish-blue lg:pt-2 lg:pl-8",children:[(0,r.jsx)("div",{className:"text-2xl my-4",children:e("taxComparison.text_4")}),(0,r.jsx)("a",{className:"button-primary button-primary-orange",href:"https://signup.firstrade.com/apply/".concat(n.toLowerCase()),children:e("taxComparison.btn")})]})]})})},x=n(61739),m=!0;function g(){var t=(0,i.Z)("tax"),e=t.t,n=t.lang,o=(0,x.oe)("/accounts/retirement/tax-free-vs-tax-deferred",n,e("title"),e("description")),s=o.title,l=o.description,c=o.languageAlternates,d=o.canonical;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.PB,{title:s,description:l,languageAlternates:c,canonical:d}),(0,r.jsx)(p,{}),(0,r.jsx)(u,{})]})}},59205:function(t){t.exports={container:"MoreInfo_container__oqOQG",wrapper:"MoreInfo_wrapper__cxbZ_",header:"MoreInfo_header__387H_",title:"MoreInfo_title__AJmDg"}},3193:function(t){t.exports={container:"TaxComparison_container__tgtCy",wrapper:"TaxComparison_wrapper__dBmqr",box_1:"TaxComparison_box_1__RSjPS",header:"TaxComparison_header__l7Z1p",box_2:"TaxComparison_box_2__cEp4U",getStarted:"TaxComparison_getStarted__KxUj7"}}},function(t){t.O(0,[2319,9774,2888,179],(function(){return e=94758,t(t.s=e);var e}));var e=t.O();_N_E=e}]);