(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4770],{32097:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/webinars",function(){return n(24185)}])},44786:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(8014),a=n(75657),i=n.n(a);function l(t){var e=t.href,n=t.children;if(/.xls|.csv|.pdf|.xml|.doc/.test(e))return(0,r.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:n});var a=/^https?:\/\//.test(e)&&!/www.firstrade|invest.firstrade|signup.firstrade/.test(e);return(0,r.jsx)(i(),{href:e,legacyBehavior:!0,children:(0,r.jsx)("a",{ref:e,target:a?"_blank":null,rel:a?"noopener noreferrer":null,children:n})})}},61739:function(t,e,n){"use strict";n.d(e,{Af:function(){return v},F3:function(){return f},lj:function(){return p},oe:function(){return d},xG:function(){return h}});var r=n(43692),a=n(12042),i=n(99728),l=n(21157),s=n(61557),o=n(65954),u=function(t){return"zh-CN"===t?"zh-CN":"zh-Hant"===t?"zh-TW":"en-US"},c=function(t,e,n){return("en-US"===n?"".concat(t).concat(e):"".concat(t,"/").concat(n).concat(e)).replace(/\/+$/,"")},d=function(t,e,n,r){var a="https://www.proultimatewealth.com",i={title:n||"",description:r||""};return i.canonical=c(a,t,e),i.languageAlternates=[{href:c(a,t,"en-US"),hrefLang:"en"},{href:c(a,t,"zh-CN"),hrefLang:"zh-hans"},{href:c(a,t,"zh-TW"),hrefLang:"zh-hant"},{href:c(a,t,"en-US"),hrefLang:"x-default"}],i},f=function(t,e){if(t.length<=e)return[t];for(var n=[],r=0;r<t.length;)n.push(t.slice(r,r+e)),r+=e;return n},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,i.Z)((0,a.Z)({style:"currency"},n),{currency:e})).format(t)},p=function(t,e,n){return 1===t?e*(1+n):p(t-1,e,n)+e*Math.pow(1+n,t)},v=(function(){var t=(0,r.Z)((function(t,e){var n,r,a,i,l,c,d,f,h,p,v,g=arguments;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return n=g.length>2&&void 0!==g[2]&&g[2],r=[],a=function(n){var r={fields:["Slug","locale"],locale:"all",pagination:{page:n,pageSize:100}};return e&&(r.filters=e),(0,o.s1)(t,{params:r})},i=function(t){t.length&&t.forEach((function(t){var e=u(t.attributes.locale);r.push({params:n?{slug:[t.attributes.Slug]}:{slug:t.attributes.Slug},locale:e})}))},[4,a(1)];case 1:if(l=s.sent(),c=l.data,d=c.data,f=c.meta,i(d),!(f.pagination.pageCount>1))return[3,3];for(h=[],p=2;p<=f.pagination.pageCount;p+=1)v=a(p),h.push(v);return[4,Promise.all(h)];case 2:s.sent().forEach((function(t){var e=t.data.data;i(e)})),s.label=3;case 3:return[2,r]}}))}))}(),function(){var t=(0,r.Z)((function(t,e,n){var r,a,i,u,c,d,f,h,p,v,g,m,_,b,x,w,S,j,N;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return c=t.params.slug,d=t.locale,f=function(t){return"zh-CN"===t?"zh-CN":"zh-TW"===t?"zh-Hant":"en"}(d),h={},p=[(0,o.s1)("/api/guides",{params:{locale:f,filters:{Slug:{$eq:c},Category:{$eq:e}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],n&&p.push((0,o.s1)("/api/videos",{params:{locale:f,filters:{Slug:{$eq:n}},populate:"Videos"}})),[4,Promise.all(p)];case 1:return v=l.Z.apply(void 0,[s.sent(),2]),g=v[0],m=v[1],_=g.data,(null===(b=_.data)||void 0===b?void 0:b.length)?(x=(0,l.Z)(b,1),w=x[0],h.title=w.attributes.Title,h.subTitle=w.attributes.Subtitle||"",h.slug=w.attributes.Slug,h.content=w.attributes.Content||"",h.sections=w.attributes.Section||null,h.seo={title:(null===(r=w.attributes)||void 0===r||null===(a=r.SEO)||void 0===a?void 0:a.Title)||null,description:(null===(i=w.attributes)||void 0===i||null===(u=i.SEO)||void 0===u?void 0:u.Description)||null},h.videos=[],n&&(S=m.data,(null===(j=S.data)||void 0===j?void 0:j.length)&&(N=(0,l.Z)(j,1),N[0].attributes.Videos.forEach((function(t){var e={title:t.Title,subTitle:t.Time,classNames:"bg-".concat(t.Theme),alt:t.Alt,sources:[{src:t.URL,type:"video/mp4"}]};h.videos.push(e)})))),[2,h]):[2,!1]}}))}))}(),function(t,e){for(var n=null,r=0;r<t.length;r+=1){if(e.includes(t[r].value)){n=t[r];break}if(t[r].options&&(n=v(t[r].options,e)))break}return n})},24185:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return g},default:function(){return m}});var r=n(8014),a=n(62044),i=n(80241),l=n.n(i),s=n(22319),o=n(4510),u=n(96787),c=n(44786),d=n(33237),f=n.n(d);var h=function(t){var e=t.data;return(0,r.jsx)("div",{className:f().box,children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(o.D,{remarkPlugins:[u.Z],components:{a:c.Z},children:e.Content})})})})};var p=function(t){var e=t.data;return(0,r.jsx)("div",{className:f().box,children:(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:e.URL,target:"_blank",rel:"noopener noreferrer",className:"button-primary button-primary-orange",children:e.Label})})})},v=n(61739),g=!0;function m(t){var e=t.events,n=(0,a.Z)("events"),i=n.t,o=n.lang,u=(0,v.oe)("/resources/webinars",o,i("title"),i("description")),c=u.title,d=u.description,g=u.canonical,m=u.languageAlternates;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.PB,{title:c,description:d,canonical:g,languageAlternates:m}),(0,r.jsx)("div",{className:f().container,children:(0,r.jsxs)("div",{className:f().wrapper,children:[(0,r.jsx)("h1",{className:f().title,children:i("header")}),e.map((function(t){return(0,r.jsxs)("div",{className:f().item,children:[t.image&&t.image.Media&&(0,r.jsx)(l(),{src:t.image.Media.data.attributes.url,alt:t.image.Alt||t.image.Media.data.attributes.alternativeText||t.title,width:"100%",height:"46.875%",layout:"responsive",objectFit:"fill",priority:!0}),t.contents.map((function(e){var n=e.__component;switch(n){case"shared.content-block-no-image":return(0,r.jsx)(h,{data:e},"".concat(t.title,"-").concat(n,"-").concat(e.id));case"shared.button":return(0,r.jsx)(p,{data:e},"".concat(t.title,"-").concat(n,"-").concat(e.id));default:return null}}))]},t.title)}))]})})]})}},33237:function(t){t.exports={container:"Events_container__MiIOz",wrapper:"Events_wrapper__MM4XY",title:"Events_title___fa__",item:"Events_item__nEOpf",box:"Events_box__sIysm"}}},function(t){t.O(0,[2319,1854,9774,2888,179],(function(){return e=32097,t(t.s=e);var e}));var e=t.O();_N_E=e}]);