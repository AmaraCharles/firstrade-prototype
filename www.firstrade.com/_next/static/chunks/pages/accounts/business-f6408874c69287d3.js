(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1353],{20959:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accounts/business",function(){return a(98710)}])},61739:function(e,n,a){"use strict";a.d(n,{Af:function(){return m},F3:function(){return h},lj:function(){return p},oe:function(){return u},xG:function(){return f}});var t=a(43692),s=a(12042),r=a(99728),i=a(21157),l=a(61557),o=a(65954),c=function(e){return"zh-CN"===e?"zh-CN":"zh-Hant"===e?"zh-TW":"en-US"},d=function(e,n,a){return("en-US"===a?"".concat(e).concat(n):"".concat(e,"/").concat(a).concat(n)).replace(/\/+$/,"")},u=function(e,n,a,t){var s="https://www.firstrade.com",r={title:a||"",description:t||""};return r.canonical=d(s,e,n),r.languageAlternates=[{href:d(s,e,"en-US"),hrefLang:"en"},{href:d(s,e,"zh-CN"),hrefLang:"zh-hans"},{href:d(s,e,"zh-TW"),hrefLang:"zh-hant"},{href:d(s,e,"en-US"),hrefLang:"x-default"}],r},h=function(e,n){if(e.length<=n)return[e];for(var a=[],t=0;t<e.length;)a.push(e.slice(t,t+n)),t+=n;return a},f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,r.Z)((0,s.Z)({style:"currency"},a),{currency:n})).format(e)},p=function(e,n,a){return 1===e?n*(1+a):p(e-1,n,a)+n*Math.pow(1+a,e)},m=(function(){var e=(0,t.Z)((function(e,n){var a,t,s,r,i,d,u,h,f,p,m,x=arguments;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return a=x.length>2&&void 0!==x[2]&&x[2],t=[],s=function(a){var t={fields:["Slug","locale"],locale:"all",pagination:{page:a,pageSize:100}};return n&&(t.filters=n),(0,o.s1)(e,{params:t})},r=function(e){e.length&&e.forEach((function(e){var n=c(e.attributes.locale);t.push({params:a?{slug:[e.attributes.Slug]}:{slug:e.attributes.Slug},locale:n})}))},[4,s(1)];case 1:if(i=l.sent(),d=i.data,u=d.data,h=d.meta,r(u),!(h.pagination.pageCount>1))return[3,3];for(f=[],p=2;p<=h.pagination.pageCount;p+=1)m=s(p),f.push(m);return[4,Promise.all(f)];case 2:l.sent().forEach((function(e){var n=e.data.data;r(n)})),l.label=3;case 3:return[2,t]}}))}))}(),function(){var e=(0,t.Z)((function(e,n,a){var t,s,r,c,d,u,h,f,p,m,x,_,j,v,g,w,N,b,q;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return d=e.params.slug,u=e.locale,h=function(e){return"zh-CN"===e?"zh-CN":"zh-TW"===e?"zh-Hant":"en"}(u),f={},p=[(0,o.s1)("/api/guides",{params:{locale:h,filters:{Slug:{$eq:d},Category:{$eq:n}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],a&&p.push((0,o.s1)("/api/videos",{params:{locale:h,filters:{Slug:{$eq:a}},populate:"Videos"}})),[4,Promise.all(p)];case 1:return m=i.Z.apply(void 0,[l.sent(),2]),x=m[0],_=m[1],j=x.data,(null===(v=j.data)||void 0===v?void 0:v.length)?(g=(0,i.Z)(v,1),w=g[0],f.title=w.attributes.Title,f.subTitle=w.attributes.Subtitle||"",f.slug=w.attributes.Slug,f.content=w.attributes.Content||"",f.sections=w.attributes.Section||null,f.seo={title:(null===(t=w.attributes)||void 0===t||null===(s=t.SEO)||void 0===s?void 0:s.Title)||null,description:(null===(r=w.attributes)||void 0===r||null===(c=r.SEO)||void 0===c?void 0:c.Description)||null},f.videos=[],a&&(N=_.data,(null===(b=N.data)||void 0===b?void 0:b.length)&&(q=(0,i.Z)(b,1),q[0].attributes.Videos.forEach((function(e){var n={title:e.Title,subTitle:e.Time,classNames:"bg-".concat(e.Theme),alt:e.Alt,sources:[{src:e.URL,type:"video/mp4"}]};f.videos.push(n)})))),[2,f]):[2,!1]}}))}))}(),function(e,n){for(var a=null,t=0;t<e.length;t+=1){if(n.includes(e[t].value)){a=e[t];break}if(e[t].options&&(a=m(e[t].options,n)))break}return a})},98710:function(e,n,a){"use strict";a.r(n),a.d(n,{__N_SSG:function(){return q},default:function(){return y}});var t=a(8014),s=a(22319),r=a(62044),i=a(61739),l=a(10486),o=a.n(l);var c=function(){var e=(0,r.Z)("businessplanning"),n=e.t,a=e.lang;return(0,t.jsx)("div",{className:o().container,children:(0,t.jsxs)("div",{className:o().wrapper,children:[(0,t.jsxs)("div",{className:o().left,children:[(0,t.jsx)("h1",{className:o().header,children:n("businessplanning.header")}),(0,t.jsx)("div",{className:o().subheader,children:n("businessplanning.subheader")})]}),(0,t.jsxs)("div",{className:o().right,children:[(0,t.jsx)("div",{className:o().getStarted,children:n("businessplanning.text_1")}),(0,t.jsx)("a",{href:"https://signup.firstrade.com/apply/".concat(a.toLowerCase()),className:"button-primary button-primary-orange",children:n("businessplanning.btn")})]})]})})},d=(a(17719),a(46834)),u=a(34512),h=a(14808),f=a(50744),p=a.n(f),m=a(17582),x=a(62697),_=a(45969),j=a.n(_),v="border-grayish-blue border-b border-solid",g="flex w-full flex-row items-center justify-between pt-5 pb-5",w="max-w-[80%] text-left text-lg lg:text-xl",N="pb-6 text-sm lg:text-base";function b(){var e=(0,r.Z)("businessplanning").t;return(0,t.jsx)("div",{className:j().container,children:(0,t.jsxs)("div",{className:j().wrapper,children:[(0,t.jsx)("h2",{className:j().header,children:e("faqs.header_1")}),(0,t.jsx)(u.p,{children:function(n){var a=n.open;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.p.Button,{className:p()(g,!a&&v),children:[(0,t.jsx)("div",{className:w,children:e("faqs.q_1")}),a?(0,t.jsx)(x.Z,{className:"h-6 w-6","aria-hidden":"true"}):(0,t.jsx)(m.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,t.jsx)(h.u,{show:a,enter:"transition duration-100 ease-linear",enterFrom:"transform opacity-0",enterTo:"transform opacity-100",leave:"transition duration-75 ease-linear",leaveFrom:"transform opacity-100",leaveTo:"transform opacity-0",children:(0,t.jsx)(u.p.Panel,{static:!0,className:p()(N,a&&v),children:e("faqs.a_1")})})]})}}),(0,t.jsx)(u.p,{children:function(n){var a=n.open;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.p.Button,{className:p()(g,!a&&v),children:[(0,t.jsx)("div",{className:w,children:e("faqs.q_2")}),a?(0,t.jsx)(x.Z,{className:"h-6 w-6","aria-hidden":"true"}):(0,t.jsx)(m.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,t.jsx)(h.u,{show:a,enter:"transition duration-100 ease-linear",enterFrom:"transform opacity-0",enterTo:"transform opacity-100",leave:"transition duration-75 ease-linear",leaveFrom:"transform opacity-100",leaveTo:"transform opacity-0",children:(0,t.jsxs)(u.p.Panel,{static:!0,className:p()(N,a&&v),children:[(0,t.jsx)("div",{children:e("faqs.a_2.section_1.title")}),(0,t.jsx)("p",{children:e("faqs.a_2.section_1.text")}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:e("faqs.a_2.section_1.list.item_1")}),(0,t.jsx)("li",{children:e("faqs.a_2.section_1.list.item_2")}),(0,t.jsx)("li",{children:e("faqs.a_2.section_1.list.item_3")})]}),(0,t.jsx)("div",{children:e("faqs.a_2.section_2.title")}),(0,t.jsx)("p",{children:e("faqs.a_2.section_2.text")}),(0,t.jsx)("div",{children:e("faqs.a_2.section_3.title")}),(0,t.jsx)("p",{children:e("faqs.a_2.section_3.text")})]})})]})}}),(0,t.jsx)(u.p,{children:function(n){var a=n.open;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.p.Button,{className:p()(g,!a&&v),children:[(0,t.jsx)("div",{className:w,children:e("faqs.q_3")}),a?(0,t.jsx)(x.Z,{className:"h-6 w-6","aria-hidden":"true"}):(0,t.jsx)(m.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,t.jsx)(h.u,{show:a,enter:"transition duration-100 ease-linear",enterFrom:"transform opacity-0",enterTo:"transform opacity-100",leave:"transition duration-75 ease-linear",leaveFrom:"transform opacity-100",leaveTo:"transform opacity-0",children:(0,t.jsx)(u.p.Panel,{static:!0,className:p()(N,a&&v),children:(0,t.jsx)(d.Z,{i18nKey:"faqs.a_3",ns:"businessplanning",components:{0:(0,t.jsx)("a",{href:"https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-seps#contributions",target:"_blank",rel:"noreferrer noopener",children:"IRS website"})}})})})]})}}),(0,t.jsx)(u.p,{children:function(n){var a=n.open;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.p.Button,{className:p()(g,!a&&v),children:[(0,t.jsx)("div",{className:w,children:e("faqs.q_4")}),a?(0,t.jsx)(x.Z,{className:"h-6 w-6","aria-hidden":"true"}):(0,t.jsx)(m.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,t.jsx)(h.u,{show:a,enter:"transition duration-100 ease-linear",enterFrom:"transform opacity-0",enterTo:"transform opacity-100",leave:"transition duration-75 ease-linear",leaveFrom:"transform opacity-100",leaveTo:"transform opacity-0",children:(0,t.jsxs)(u.p.Panel,{static:!0,className:p()(N,a&&v),children:[(0,t.jsx)("div",{children:e("faqs.a_4.text_1")}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:e("faqs.a_4.list.item_1")}),(0,t.jsx)("li",{children:e("faqs.a_4.list.item_2")}),(0,t.jsx)("li",{children:e("faqs.a_4.list.item_3")})]}),(0,t.jsx)("p",{children:e("faqs.a_4.text_2")}),(0,t.jsx)("p",{children:e("faqs.a_4.text_3")})]})})]})}}),(0,t.jsx)("div",{children:(0,t.jsx)(u.p,{children:function(n){var a=n.open;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.p.Button,{className:p()(g,!a&&v),children:[(0,t.jsx)("div",{className:w,children:e("faqs.q_5")}),a?(0,t.jsx)(x.Z,{className:"h-6 w-6","aria-hidden":"true"}):(0,t.jsx)(m.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,t.jsx)(h.u,{show:a,enter:"transition duration-100 ease-linear",enterFrom:"transform opacity-0",enterTo:"transform opacity-100",leave:"transition duration-75 ease-linear",leaveFrom:"transform opacity-100",leaveTo:"transform opacity-0",children:(0,t.jsx)(u.p.Panel,{static:!0,className:p()(N,a&&v),children:e("faqs.a_5")})})]})}})}),(0,t.jsx)("h2",{className:j().header,children:e("faqs.header_2")}),(0,t.jsxs)("div",{children:[(0,t.jsx)(u.p,{children:function(n){var a=n.open;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.p.Button,{className:p()(g,!a&&v),children:[(0,t.jsx)("div",{className:w,children:e("faqs.q_6")}),a?(0,t.jsx)(x.Z,{className:"h-6 w-6","aria-hidden":"true"}):(0,t.jsx)(m.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,t.jsx)(h.u,{show:a,enter:"transition duration-100 ease-linear",enterFrom:"transform opacity-0",enterTo:"transform opacity-100",leave:"transition duration-75 ease-linear",leaveFrom:"transform opacity-100",leaveTo:"transform opacity-0",children:(0,t.jsx)(u.p.Panel,{static:!0,className:p()(N,a&&v),children:e("faqs.a_6")})})]})}}),(0,t.jsx)(u.p,{children:function(n){var a=n.open;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.p.Button,{className:p()(g,!a&&v),children:[(0,t.jsx)("div",{className:w,children:e("faqs.q_7")}),a?(0,t.jsx)(x.Z,{className:"h-6 w-6","aria-hidden":"true"}):(0,t.jsx)(m.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,t.jsx)(h.u,{show:a,enter:"transition duration-100 ease-linear",enterFrom:"transform opacity-0",enterTo:"transform opacity-100",leave:"transition duration-75 ease-linear",leaveFrom:"transform opacity-100",leaveTo:"transform opacity-0",children:(0,t.jsx)(u.p.Panel,{static:!0,className:p()(N,a&&v),children:e("faqs.a_7")})})]})}}),(0,t.jsx)(u.p,{children:function(n){var a=n.open;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.p.Button,{className:p()(g,!a&&v),children:[(0,t.jsx)("div",{className:w,children:e("faqs.q_8")}),a?(0,t.jsx)(x.Z,{className:"h-6 w-6","aria-hidden":"true"}):(0,t.jsx)(m.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,t.jsx)(h.u,{show:a,enter:"transition duration-100 ease-linear",enterFrom:"transform opacity-0",enterTo:"transform opacity-100",leave:"transition duration-75 ease-linear",leaveFrom:"transform opacity-100",leaveTo:"transform opacity-0",children:(0,t.jsxs)(u.p.Panel,{static:!0,className:p()(N,a&&v),children:[(0,t.jsx)("div",{children:e("faqs.a_8.text")}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:e("faqs.a_8.list.item_1")}),(0,t.jsx)("li",{children:e("faqs.a_8.list.item_2")})]})]})})]})}}),(0,t.jsx)(u.p,{children:function(n){var a=n.open;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.p.Button,{className:p()(g,!a&&v),children:[(0,t.jsx)("div",{className:w,children:e("faqs.q_9")}),a?(0,t.jsx)(x.Z,{className:"h-6 w-6","aria-hidden":"true"}):(0,t.jsx)(m.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,t.jsx)(h.u,{show:a,enter:"transition duration-100 ease-linear",enterFrom:"transform opacity-0",enterTo:"transform opacity-100",leave:"transition duration-75 ease-linear",leaveFrom:"transform opacity-100",leaveTo:"transform opacity-0",children:(0,t.jsxs)(u.p.Panel,{static:!0,className:p()(N,a&&v),children:[(0,t.jsx)(d.Z,{i18nKey:"faqs.a_9.text_1",ns:"businessplanning",components:{0:(0,t.jsx)("a",{href:"https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-simple-ira-contribution-limits",target:"_blank",rel:"noreferrer noopener",children:"IRS website"})}}),(0,t.jsx)("div",{children:e("faqs.a_9.text_2")}),(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:e("faqs.a_9.row_1.item_1")}),(0,t.jsx)("th",{children:e("faqs.a_9.row_1.item_2")}),(0,t.jsx)("th",{children:e("faqs.a_9.row_1.item_3")})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e("faqs.a_9.row_2.item_1")}),(0,t.jsx)("td",{children:e("faqs.a_9.row_2.item_2")}),(0,t.jsx)("td",{children:e("faqs.a_9.row_2.item_3")})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e("faqs.a_9.row_3.item_1")}),(0,t.jsx)("td",{children:e("faqs.a_9.row_3.item_2")}),(0,t.jsx)("td",{children:e("faqs.a_9.row_3.item_3")})]})]})]}),(0,t.jsx)(d.Z,{i18nKey:"faqs.a_9.note",ns:"businessplanning",components:{0:(0,t.jsx)("a",{href:"https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-simple-ira-contribution-limits",target:"_blank",rel:"noreferrer noopener",children:"IRS website"})}})]})})]})}})]}),(0,t.jsx)("div",{className:"my-10 text-sm",children:e("faqs.note")})]})})}var q=!0;function y(){var e=(0,r.Z)("businessplanning"),n=e.t,a=e.lang,l=(0,i.oe)("/accounts/business",a,n("title"),n("description")),o=l.title,d=l.description,u=l.languageAlternates,h=l.canonical;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.PB,{title:o,description:d,languageAlternates:u,canonical:h}),(0,t.jsxs)("div",{children:[(0,t.jsx)(c,{}),(0,t.jsx)(b,{})]})]})}},10486:function(e){e.exports={container:"BusinessPlanning_container__e5Iei",wrapper:"BusinessPlanning_wrapper__mQeSe",left:"BusinessPlanning_left__Sf_qa",header:"BusinessPlanning_header__6dPHV",subheader:"BusinessPlanning_subheader__I5RSv",right:"BusinessPlanning_right__TD2NT",getStarted:"BusinessPlanning_getStarted___p1BX"}},45969:function(e){e.exports={container:"Faqs_container__8JJKY",wrapper:"Faqs_wrapper__jzL7Z",header:"Faqs_header__pp7EE",subheader:"Faqs_subheader__ozy78",plusBtn:"Faqs_plusBtn__ZItuj"}},17719:function(){},62697:function(e,n,a){"use strict";var t=a(56168);const s=t.forwardRef((function({title:e,titleId:n,...a},s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":n},a),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12h-15"}))}));n.Z=s},17582:function(e,n,a){"use strict";var t=a(56168);const s=t.forwardRef((function({title:e,titleId:n,...a},s){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":n},a),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"}))}));n.Z=s}},function(e){e.O(0,[2319,9774,2888,179],(function(){return n=20959,e(e.s=n);var n}));var n=e.O();_N_E=n}]);