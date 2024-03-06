(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7102],{40137:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/press/[slug]",function(){return r(30816)}])},36137:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(8014),a=r(62044),i=r(75657),s=r.n(i),l=r(75332);function o(){var e=(0,a.Z)("about-tab-nav").t,t=(0,l.useRouter)().pathname;return(0,n.jsx)("nav",{className:"bg-smoke",children:(0,n.jsxs)("ul",{className:"m-0 mx-auto flex max-w-md list-none justify-around",children:[(0,n.jsx)("li",{className:"flex",children:(0,n.jsx)(s(),{href:"/about",className:"text-2xl",children:(0,n.jsx)("a",{"aria-current":"/about"===t?"page":void 0,className:"block px-2 py-4 text-sm text-ft-slate aria-[current=page]:border-b-2 md:text-base",children:e("aboutTab")})})}),(0,n.jsx)("li",{className:"flex",children:(0,n.jsx)(s(),{href:"/history",children:(0,n.jsx)("a",{"aria-current":"/history"===t?"page":void 0,className:"block px-2 py-4 text-sm text-ft-slate aria-[current=page]:border-b-2 md:text-base",children:e("historyTab")})})}),(0,n.jsx)("li",{className:"flex",children:(0,n.jsx)(s(),{href:"/corporate-responsibility",children:(0,n.jsx)("a",{"aria-current":"/corporate-responsibility"===t?"page":void 0,className:"block px-2 py-4 text-sm text-ft-slate aria-[current=page]:border-b-2 md:text-base",children:e("corporateResponsibilityTab")})})}),(0,n.jsx)("li",{className:"flex",children:(0,n.jsx)(s(),{href:"/press",children:(0,n.jsx)("a",{"aria-current":"/press"===t?"page":void 0,className:"block px-2 py-4 text-sm text-ft-slate aria-[current=page]:border-b-2 md:text-base",children:e("pressTab")})})})]})})}},44786:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(8014),a=r(75657),i=r.n(a);function s(e){var t=e.href,r=e.children;if(/.xls|.csv|.pdf|.xml|.doc/.test(t))return(0,n.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:r});var a=/^https?:\/\//.test(t)&&!/www.firstrade|invest.firstrade|signup.firstrade/.test(t);return(0,n.jsx)(i(),{href:t,legacyBehavior:!0,children:(0,n.jsx)("a",{ref:t,target:a?"_blank":null,rel:a?"noopener noreferrer":null,children:r})})}},61739:function(e,t,r){"use strict";r.d(t,{Af:function(){return p},F3:function(){return b},lj:function(){return f},oe:function(){return d},xG:function(){return h}});var n=r(43692),a=r(12042),i=r(99728),s=r(21157),l=r(61557),o=r(65954),u=function(e){return"zh-CN"===e?"zh-CN":"zh-Hant"===e?"zh-TW":"en-US"},c=function(e,t,r){return("en-US"===r?"".concat(e).concat(t):"".concat(e,"/").concat(r).concat(t)).replace(/\/+$/,"")},d=function(e,t,r,n){var a="https://www.proultimatewealth.com",i={title:r||"",description:n||""};return i.canonical=c(a,e,t),i.languageAlternates=[{href:c(a,e,"en-US"),hrefLang:"en"},{href:c(a,e,"zh-CN"),hrefLang:"zh-hans"},{href:c(a,e,"zh-TW"),hrefLang:"zh-hant"},{href:c(a,e,"en-US"),hrefLang:"x-default"}],i},b=function(e,t){if(e.length<=t)return[e];for(var r=[],n=0;n<e.length;)r.push(e.slice(n,n+t)),n+=t;return r},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,i.Z)((0,a.Z)({style:"currency"},r),{currency:t})).format(e)},f=function(e,t,r){return 1===e?t*(1+r):f(e-1,t,r)+t*Math.pow(1+r,e)},p=(function(){var e=(0,n.Z)((function(e,t){var r,n,a,i,s,c,d,b,h,f,p,g=arguments;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return r=g.length>2&&void 0!==g[2]&&g[2],n=[],a=function(r){var n={fields:["Slug","locale"],locale:"all",pagination:{page:r,pageSize:100}};return t&&(n.filters=t),(0,o.s1)(e,{params:n})},i=function(e){e.length&&e.forEach((function(e){var t=u(e.attributes.locale);n.push({params:r?{slug:[e.attributes.Slug]}:{slug:e.attributes.Slug},locale:t})}))},[4,a(1)];case 1:if(s=l.sent(),c=s.data,d=c.data,b=c.meta,i(d),!(b.pagination.pageCount>1))return[3,3];for(h=[],f=2;f<=b.pagination.pageCount;f+=1)p=a(f),h.push(p);return[4,Promise.all(h)];case 2:l.sent().forEach((function(e){var t=e.data.data;i(t)})),l.label=3;case 3:return[2,n]}}))}))}(),function(){var e=(0,n.Z)((function(e,t,r){var n,a,i,u,c,d,b,h,f,p,g,v,x,m,_,j,C,S,N;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return c=e.params.slug,d=e.locale,b=function(e){return"zh-CN"===e?"zh-CN":"zh-TW"===e?"zh-Hant":"en"}(d),h={},f=[(0,o.s1)("/api/guides",{params:{locale:b,filters:{Slug:{$eq:c},Category:{$eq:t}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],r&&f.push((0,o.s1)("/api/videos",{params:{locale:b,filters:{Slug:{$eq:r}},populate:"Videos"}})),[4,Promise.all(f)];case 1:return p=s.Z.apply(void 0,[l.sent(),2]),g=p[0],v=p[1],x=g.data,(null===(m=x.data)||void 0===m?void 0:m.length)?(_=(0,s.Z)(m,1),j=_[0],h.title=j.attributes.Title,h.subTitle=j.attributes.Subtitle||"",h.slug=j.attributes.Slug,h.content=j.attributes.Content||"",h.sections=j.attributes.Section||null,h.seo={title:(null===(n=j.attributes)||void 0===n||null===(a=n.SEO)||void 0===a?void 0:a.Title)||null,description:(null===(i=j.attributes)||void 0===i||null===(u=i.SEO)||void 0===u?void 0:u.Description)||null},h.videos=[],r&&(C=v.data,(null===(S=C.data)||void 0===S?void 0:S.length)&&(N=(0,s.Z)(S,1),N[0].attributes.Videos.forEach((function(e){var t={title:e.Title,subTitle:e.Time,classNames:"bg-".concat(e.Theme),alt:e.Alt,sources:[{src:e.URL,type:"video/mp4"}]};h.videos.push(t)})))),[2,h]):[2,!1]}}))}))}(),function(e,t){for(var r=null,n=0;n<e.length;n+=1){if(t.includes(e[n].value)){r=e[n];break}if(e[n].options&&(r=p(e[n].options,t)))break}return r})},30816:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return x}});var n=r(8014),a=r(4510),i=r(80241),s=r.n(i),l=r(75657),o=r.n(l),u=r(96787),c=r(22319),d=r(20632),b=r(62044),h=r(36137),f=r(44786),p=r(86169),g=r.n(p),v=r(61739);var x=!0;t.default=function(e){var t,r,i,l,p,x,m,_=e.data.current,j=(0,b.Z)("press"),C=j.t,S=j.lang,N=(0,v.oe)("/press/".concat(_.attributes.Slug),S,null!==(x=null===(t=_.attributes)||void 0===t||null===(r=t.SEO)||void 0===r?void 0:r.Title)&&void 0!==x?x:_.attributes.Title,null!==(m=null===(i=_.attributes)||void 0===i||null===(l=i.SEO)||void 0===l?void 0:l.Description)&&void 0!==m?m:""),T=N.title,w=N.description,y=N.canonical,D=N.languageAlternates;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.PB,{title:T,description:w,canonical:y,languageAlternates:D}),(0,n.jsxs)("div",{className:g().container,children:[(0,n.jsx)(h.Z,{}),(0,n.jsxs)("div",{className:g().wrapper,children:[(0,n.jsx)("div",{className:g().header,children:(0,n.jsx)(o(),{href:"/press",children:C("pressCenter")})}),(0,n.jsxs)("div",{className:g().blogWrapper,children:[(0,n.jsx)("div",{className:g().blogTitle,children:_.attributes.Title}),_.attributes.Subtitle&&(0,n.jsx)("div",{className:g().blogSubTitle,children:_.attributes.Subtitle}),(0,n.jsx)("div",{className:g().blogDate,children:(0,d.Z)(new Date(_.attributes.Date),"America/New_York","MMMM dd, yyyy")}),(0,n.jsxs)("div",{className:g().blogContent,children:[(null===(p=_.attributes.ArticleImg.data)||void 0===p?void 0:p.attributes)&&(0,n.jsx)("div",{className:g().blogContentImage,children:(0,n.jsx)(s(),{src:_.attributes.ArticleImg.data.attributes.url,alt:_.attributes.ArticleImg.data.attributes.name,width:"350px",height:"425px"})}),(0,n.jsxs)("div",{className:g().blogContentText,children:[(0,n.jsx)("div",{className:g().blogContentTextContainer,children:(0,n.jsx)(a.D,{remarkPlugins:[u.Z],components:{a:f.Z},children:_.attributes.ArticleText})}),_.attributes.SourceURL&&(0,n.jsxs)("div",{className:g().blogContentSourceUrl,children:["- ",C("source"),":"," ",(0,n.jsx)("a",{href:_.attributes.SourceURL.URL,target:"_blank",rel:"noreferrer",children:_.attributes.SourceURL.LinkText})]})]})]})]})]})]})]})}},86169:function(e){e.exports={container:"PressCenterDetail_container__wWod6",wrapper:"PressCenterDetail_wrapper___Rpwe",header:"PressCenterDetail_header__bjfpO",blogWrapper:"PressCenterDetail_blogWrapper__ryFAo",blogTitle:"PressCenterDetail_blogTitle__ru7ft",blogSubTitle:"PressCenterDetail_blogSubTitle__blaAp",blogDate:"PressCenterDetail_blogDate__SY_6r",blogContent:"PressCenterDetail_blogContent__wMwjH",blogContentImage:"PressCenterDetail_blogContentImage__5JCF3",blogContentText:"PressCenterDetail_blogContentText__umu1Z",blogContentSourceUrl:"PressCenterDetail_blogContentSourceUrl__1Y63p",navigation:"PressCenterDetail_navigation__FwVoM"}}},function(e){e.O(0,[2319,1854,9774,2888,179],(function(){return t=40137,e(e.s=t);var t}));var t=e.O();_N_E=t}]);