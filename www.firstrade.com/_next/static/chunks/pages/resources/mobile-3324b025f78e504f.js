(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8515],{43011:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/mobile",function(){return t(37587)}])},99392:function(e,s,t){"use strict";t.d(s,{UA:function(){return i.UA},l7:function(){return i.l7},mN:function(){return i.ZP}});var i=t(99348)},57655:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var i=t(8014),a=(t(16703),t(87508)),o=t(50862),l=t.n(o),n=t(56168);var r=function(e){var s=e.clickHandler,t=e.label;return(0,i.jsx)("button",{type:"button","aria-label":t,onClick:s,className:"z-10 block absolute top-0 bottom-0 left-0 p-1",children:(0,i.jsx)("div",{className:"border-ft-slate border-b-4 border-l-4 rotate-45 border-solid p-2"})})};var d=function(e){var s=e.clickHandler,t=e.label;return(0,i.jsx)("button",{type:"button","aria-label":t,onClick:s,className:"absolute top-0 bottom-0 right-0 z-10 block p-1",children:(0,i.jsx)("div",{className:"border-ft-slate rotate-45 border-t-4 border-r-4 border-solid p-2"})})};l().propTypes={options:l().shape({showArrows:l().bool,showIndicators:l().bool,infiniteLoop:l().bool,autoPlay:l().bool,stopOnHover:l().bool,showThumbs:l().bool,showStatus:l().bool,interval:l().number}),children:l().node.isRequired};var c=function(e){var s=e.options,t=e.children,o=e.className,l=n.useCallback((function(e,s,t){return s&&(0,i.jsx)(r,{clickHandler:e,label:t})}),[]),c=n.useCallback((function(e,s,t){return s&&(0,i.jsx)(d,{clickHandler:e,label:t})}),[]);return(0,i.jsx)(a.lr,{className:o,showArrows:s.showArrows,showIndicators:s.showIndicators,infiniteLoop:s.infiniteLoop,autoPlay:s.autoPlay,stopOnHover:s.stopOnHover,showThumbs:s.showThumbs,showStatus:s.showStatus,interval:s.interval,renderArrowPrev:l,renderArrowNext:c,children:t})}},86924:function(e,s,t){"use strict";t.d(s,{Z:function(){return f}});var i=t(21157),a=t(8014),o=t(50862),l=t.n(o),n=t(56168),r=t(46834),d=t(62044),c=t(39225),m=t(57655),h=t(41833),u=t(61739);function x(e){var s=e.videos,t=e.options,o=(0,i.Z)(n.useState(null),2),l=o[0],x=o[1],p=(0,i.Z)(n.useState(!1),2),f=p[0],_=p[1],j=n.useRef(null),b=(0,d.Z)("video").t,v=n.useCallback((function(e){x(e),_(!0)}),[]),w=n.useCallback((function(){_(!1)}),[]);return(0,a.jsxs)("div",{className:"globals",children:[(0,a.jsx)(m.Z,{className:"md:hidden",options:t,children:s.map((function(e){return(0,a.jsx)(h.Z,{title:e.title,subTitle:e.subTitle,classNames:e.classNames,handleClick:function(){return v(e)}},"sm-".concat(e.title))}))}),(0,a.jsx)(m.Z,{className:"hidden md:block lg:hidden",options:t,children:(0,u.F3)(s,2).map((function(e,s){return(0,a.jsx)("div",{className:"flex flex-row items-center justify-around",children:e.map((function(e){return(0,a.jsx)(h.Z,{title:e.title,subTitle:e.subTitle,classNames:e.classNames,handleClick:function(){return v(e)}},"md-".concat(e.title))}))},"md-group-".concat(s))}))}),(0,a.jsx)(m.Z,{className:"hidden lg:block xl:hidden",options:t,children:(0,u.F3)(s,3).map((function(e,s){return(0,a.jsx)("div",{className:"flex flex-row items-center justify-around",children:e.map((function(e){return(0,a.jsx)(h.Z,{title:e.title,subTitle:e.subTitle,classNames:e.classNames,handleClick:function(){return v(e)}},"lg-".concat(e.title))}))},"lg-group-".concat(s))}))}),(0,a.jsx)(m.Z,{className:"hidden xl:block",options:t,children:(0,u.F3)(s,4).map((function(e,s){return(0,a.jsx)("div",{className:"flex flex-row items-center justify-around",children:e.map((function(e){return(0,a.jsx)(h.Z,{title:e.title,subTitle:e.subTitle,classNames:e.classNames,handleClick:function(){return v(e)}},"xl-".concat(e.title))}))},"xl-group-".concat(s))}))}),(0,a.jsx)(c.Z,{show:f,title:null===l||void 0===l?void 0:l.title,showTitle:!1,handleClose:w,initialFocus:j,children:l&&(0,a.jsx)("div",{className:"my-10",children:(0,a.jsxs)("video",{controls:!0,autoPlay:!0,muted:!0,ref:j,className:"h-auto w-full md:max-h-[480px] lg:max-h-[550px]",children:[l.sources.map((function(e){return e.type?(0,a.jsx)("source",{src:e.src,type:e.type},e.src):(0,a.jsx)("source",{src:e.src},e.src)})),l.sources.length>0&&(0,a.jsx)("p",{children:(0,a.jsx)(r.Z,{i18nKey:"video_not_support",ns:"video",components:{a:(0,a.jsx)("a",{href:l.sources[0].src,rel:"noopener noreferrer","aria-label":b("video:download_video")})}})})]})})})]})}var p=l().shape({src:l().string.isRequired,type:l().string});x.defaultProps={options:{showArrows:!0,showIndicators:!1,infiniteLoop:!0,autoPlay:!0,stopOnHover:!0,showThumbs:!1,showStatus:!1,interval:5e3}},x.propTypes={videos:l().arrayOf(l().shape({title:l().string.isRequired,subTitle:l().string,classNames:l().string.isRequired,type:l().string,sources:l().arrayOf(p).isRequired})).isRequired,options:l().shape({showArrows:l().bool,showIndicators:l().bool,infiniteLoop:l().bool,autoPlay:l().bool,stopOnHover:l().bool,showThumbs:l().bool,showStatus:l().bool,interval:l().number})};var f=x},37587:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return z},default:function(){return C}});var i=t(21157),a=t(8014),o=t(56168),l=t(80241),n=t.n(l),r=t(22319),d=t(62044),c=t(29331),m=t(61739),h=t(99392),u=t(86924),x=t(50862),p=t.n(x),f=t(50744),_=t.n(f),j=t(46834),b={"quick-action":{"en-US":"https://s3.amazonaws.com/ft_videos/en-us/tutorials/mobile/_/01_smartmenu_C_framefin_sm.mp4","zh-TW":"https://s3.amazonaws.com/ft_videos/zh-tw/tutorials/mobile/_/01_smartmenu_C_framefin_sm.mp4","zh-CN":"https://s3.amazonaws.com/ft_videos/zh-tw/tutorials/mobile/_/01_smartmenu_C_framefin_sm.mp4"},dashboard:{"en-US":"https://s3.amazonaws.com/ft_videos/en-us/tutorials/mobile/_/02_consolidated_C_framefin_sm.mp4","zh-TW":"https://s3.amazonaws.com/ft_videos/zh-tw/tutorials/mobile/_/02_consolidated_C_framefin_sm.mp4","zh-CN":"https://s3.amazonaws.com/ft_videos/zh-tw/tutorials/mobile/_/02_consolidated_C_framefin_sm.mp4"},"trading-flow":{"en-US":"https://s3.amazonaws.com/ft_videos/en-us/tutorials/mobile/_/03_tradeworkflow_C_framefin_sm.mp4","zh-TW":"https://s3.amazonaws.com/ft_videos/zh-tw/tutorials/mobile/_/03_tradeworkflow_C_framefin_sm.mp4","zh-CN":"https://s3.amazonaws.com/ft_videos/zh-tw/tutorials/mobile/_/03_tradeworkflow_C_framefin_sm.mp4"},"fast-options":{"en-US":"https://s3.amazonaws.com/ft_videos/en-us/tutorials/mobile/_/04_options_C_framefin_sm.mp4","zh-TW":"https://s3.amazonaws.com/ft_videos/zh-tw/tutorials/mobile/_/04_options_C_framefin_sm.mp4","zh-CN":"https://s3.amazonaws.com/ft_videos/zh-tw/tutorials/mobile/_/04_options_C_framefin_sm.mp4"},"top-list":{"en-US":"https://s3.amazonaws.com/ft_videos/en-us/tutorials/mobile/_/05_watchlist_C_framefin_sm.mp4","zh-TW":"https://s3.amazonaws.com/ft_videos/zh-tw/tutorials/mobile/_/05_watchlist_C_framefin_sm.mp4","zh-CN":"https://s3.amazonaws.com/ft_videos/zh-tw/tutorials/mobile/_/05_watchlist_C_framefin_sm.mp4"},chart:{"en-US":"/images/en-us/05_research_ov.jpg","zh-TW":"/images/zh-tw/05_research_ov.png","zh-CN":"/images/zh-tw/05_research_ov.png"},"order-history":{"en-US":"https://s3.amazonaws.com/ft_videos/en-us/tutorials/mobile/_/07_orderhistory_C_framefin_sm.mp4","zh-TW":"https://s3.amazonaws.com/ft_videos/zh-tw/tutorials/mobile/_/07_orderhistory_C_framefin_sm.mp4","zh-CN":"https://s3.amazonaws.com/ft_videos/zh-tw/tutorials/mobile/_/07_orderhistory_C_framefin_sm.mp4"},funding:{"en-US":"/images/en-us/07_fund_ov.png","zh-TW":"/images/zh-tw/07_fund_ov.png","zh-CN":"/images/zh-tw/07_fund_ov.png"}};function v(e){var s,t,i,o,l,r,c,m,h,u,x,p,f,v,w=e.active,N=(0,d.Z)("common"),g=N.t,y=N.lang,z=g("video:download_video");return(0,a.jsxs)("div",{className:"mx-auto flex flex-col items-center justify-center",children:[(0,a.jsxs)("video",{autoPlay:!0,muted:!0,className:_()({hidden:"quick-action"!==w}),width:268,height:558,children:[(0,a.jsx)("source",{src:null!==(s=b["quick-action"][y])&&void 0!==s?s:b["quick-action"]["en-US"],type:"video/mp4"}),(0,a.jsx)("p",{children:(0,a.jsx)(j.Z,{i18nKey:"video_not_support",ns:"video",components:{a:(0,a.jsx)("a",{"aria-label":z,href:null!==(t=b["quick-action"][y])&&void 0!==t?t:b["quick-action"]["en-US"]})}})})]}),(0,a.jsxs)("video",{autoPlay:!0,muted:!0,className:_()({hidden:"dashboard"!==w}),width:268,height:558,children:[(0,a.jsx)("source",{src:null!==(i=b.dashboard[y])&&void 0!==i?i:b.dashboard["en-US"],type:"video/mp4"}),(0,a.jsx)(j.Z,{i18nKey:"video_not_support",ns:"video",components:{a:(0,a.jsx)("a",{"aria-label":z,href:null!==(o=b.dashboard[y])&&void 0!==o?o:b.dashboard["en-US"]})}})]}),(0,a.jsxs)("video",{autoPlay:!0,muted:!0,className:_()({hidden:"trading-flow"!==w}),width:268,height:558,children:[(0,a.jsx)("source",{src:null!==(l=b["trading-flow"][y])&&void 0!==l?l:b["trading-flow"]["en-US"],type:"video/mp4"}),(0,a.jsx)(j.Z,{i18nKey:"video_not_support",ns:"video",components:{a:(0,a.jsx)("a",{"aria-label":z,href:null!==(r=b["trading-flow"][y])&&void 0!==r?r:b["trading-flow"]["en-US"]})}})]}),(0,a.jsxs)("video",{autoPlay:!0,muted:!0,className:_()({hidden:"fast-options"!==w}),width:268,height:558,children:[(0,a.jsx)("source",{src:null!==(c=b["fast-options"][y])&&void 0!==c?c:b["fast-option"]["en-US"],type:"video/mp4"}),(0,a.jsx)(j.Z,{i18nKey:"video_not_support",ns:"video",components:{a:(0,a.jsx)("a",{"aria-label":z,href:null!==(m=b["fast-options"][y])&&void 0!==m?m:b["fast-options"]["en-US"]})}})]}),(0,a.jsxs)("video",{autoPlay:!0,muted:!0,className:_()({hidden:"top-list"!==w}),width:268,height:558,children:[(0,a.jsx)("source",{src:null!==(h=b["top-list"][y])&&void 0!==h?h:b["top-list"]["en-US"],type:"video/mp4"}),(0,a.jsx)(j.Z,{i18nKey:"video_not_support",ns:"video",components:{a:(0,a.jsx)("a",{"aria-label":z,href:null!==(u=b["top-list"][y])&&void 0!==u?u:b["top-list"]["en-US"]})}})]}),(0,a.jsx)("div",{className:_()({hidden:"chart"!==w}),children:(0,a.jsx)(n(),{src:null!==(x=b.chart[y])&&void 0!==x?x:b.chart["en-US"],alt:"Chart",height:268,width:558})}),(0,a.jsxs)("video",{autoPlay:!0,muted:!0,className:_()({hidden:"order-history"!==w}),width:268,height:558,children:[(0,a.jsx)("source",{src:null!==(p=b["order-history"][y])&&void 0!==p?p:b["order-history"]["en-US"],type:"video/mp4"}),(0,a.jsx)(j.Z,{i18nKey:"video_not_support",ns:"video",components:{a:(0,a.jsx)("a",{"aria-label":z,href:null!==(f=b["order-history"][y])&&void 0!==f?f:b["order-history"]["en-US"],rel:"noopener noreferrer"})}})]}),(0,a.jsx)("div",{className:_()({hidden:"funding"!==w}),children:(0,a.jsx)(n(),{src:null!==(v=b.funding[y])&&void 0!==v?v:b.funding["en-US"],alt:"Funding",width:268,height:558})})]})}v.propTypes={active:p().string.isRequired};var w=v,N="group  w-full cursor-pointer border-0 pt-4 text-left aria-expanded:text-azure",g="text-xl group-aria-expanded:before:rotate-135 before:mr-3 before:inline-block before:h-2.5 before:w-2.5 before:rotate-45 before:border-t-2 before:border-r-2 before:border-solid",y="list-inside list-disc pt-2 pl-1";var z=!0,C=function(e){var s=e.videos,t=(0,d.Z)("mobile"),l=t.t,x=t.lang,p=(0,i.Z)(o.useState("quick-action"),2),f=p[0],_=p[1],j=(0,m.oe)("/resources/mobile",x,l("title"),l("description")),b=j.title,v=j.description,z=j.canonical,C=j.languageAlternates,k=o.useCallback((function(e){_(e.length>0?e[0]:"quick-action")}),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.PB,{title:b,description:v,canonical:z,languageAlternates:C}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"bg-ft-blue pt-5 lg:pt-11",children:(0,a.jsxs)("div",{className:"container flex max-w-7xl flex-col md:flex-row",children:[(0,a.jsxs)("div",{className:"md:flex md:w-1/2 md:flex-col md:justify-center",children:[(0,a.jsx)("h1",{className:"mx-14 text-center text-3xl text-white md:mx-6 md:text-left md:text-3xl lg:text-4xl xl:text-5xl xl:leading-snug",children:l("header")}),(0,a.jsx)("div",{className:"mx-4 my-8 md:mx-6",children:(0,a.jsx)(h.mN,{showApk:!0,showQRCode:!0,isDark:!1})})]}),(0,a.jsx)("div",{className:"flex flex-col md:w-1/2",children:(0,a.jsx)(n(),{alt:"phones",src:"/images/hero_pub_2phones.png",width:"900px",height:"700px",priority:!0})})]})}),(0,a.jsx)("div",{className:"bg-white py-11",children:(0,a.jsx)("div",{className:"container flex max-w-7xl flex-col",children:(0,a.jsx)(u.Z,{videos:s})})}),(0,a.jsx)("div",{className:"bg-smoke py-11",children:(0,a.jsxs)("div",{className:"container max-w-7xl md:flex md:flex-row",children:[(0,a.jsxs)("div",{className:"md:w-3/5",children:[(0,a.jsx)("h3",{className:"pb-5 text-center text-ft-blue md:text-left",children:l("Trade Smarter and Faster With These New Features")}),(0,a.jsx)("div",{className:"md:hidden",children:(0,a.jsx)(w,{active:f})}),(0,a.jsxs)(c.UQ,{allowZeroExpanded:!0,className:"border-0",onChange:k,preExpanded:["quick-action"],children:[(0,a.jsxs)(c.Qd,{uuid:"quick-action",children:[(0,a.jsx)(c.Ol,{children:(0,a.jsx)(c.on,{className:N,children:(0,a.jsx)("h5",{className:g,children:l("Smart Menus for Faster Trades")})})}),(0,a.jsx)(c.Mt,{children:(0,a.jsxs)("ul",{className:y,children:[(0,a.jsx)("li",{className:"text-base",children:l("action_item1")}),(0,a.jsx)("li",{className:"text-base",children:l("action_item2")}),(0,a.jsx)("li",{className:"text-base",children:l("action_item3")})]})})]}),(0,a.jsxs)(c.Qd,{uuid:"dashboard",children:[(0,a.jsx)(c.Ol,{children:(0,a.jsx)(c.on,{className:N,children:(0,a.jsx)("h5",{className:g,children:l("Consolidated Portfolio Dashboard")})})}),(0,a.jsx)(c.Mt,{children:(0,a.jsxs)("ul",{className:y,children:[(0,a.jsx)("li",{className:"text-base",children:l("dashboard_item1")}),(0,a.jsx)("li",{className:"text-base",children:l("dashboard_item2")}),(0,a.jsx)("li",{className:"text-base",children:l("dashboard_item3")}),(0,a.jsx)("li",{className:"text-base",children:l("dashboard_item4")}),(0,a.jsx)("li",{className:"text-base",children:l("dashboard_item5")}),(0,a.jsx)("li",{className:"text-base",children:l("dashboard_item6")})]})})]}),(0,a.jsxs)(c.Qd,{uuid:"trading-flow",children:[(0,a.jsx)(c.Ol,{children:(0,a.jsx)(c.on,{className:N,children:(0,a.jsx)("h5",{className:g,children:l("Enhanced Trading Workflow")})})}),(0,a.jsx)(c.Mt,{children:(0,a.jsxs)("ul",{className:y,children:[(0,a.jsx)("li",{className:"text-base",children:l("flow_item1")}),(0,a.jsx)("li",{className:"text-base",children:l("flow_item2")}),(0,a.jsx)("li",{className:"text-base",children:l("flow_item3")})]})})]}),(0,a.jsxs)(c.Qd,{uuid:"fast-options",children:[(0,a.jsx)(c.Ol,{children:(0,a.jsx)(c.on,{className:N,children:(0,a.jsx)("h5",{className:g,children:l("Fast Options Trading with Advanced Strategies")})})}),(0,a.jsx)(c.Mt,{children:(0,a.jsxs)("ul",{className:y,children:[(0,a.jsx)("li",{className:"text-base",children:l("options_item1")}),(0,a.jsx)("li",{className:"text-base",children:l("options_item2")}),(0,a.jsx)("li",{className:"text-base",children:l("options_item3")}),(0,a.jsx)("li",{className:"text-base",children:l("options_item4")}),(0,a.jsx)("li",{className:"text-base",children:l("options_item5")}),(0,a.jsx)("li",{className:"text-base",children:l("options_item6")})]})})]}),(0,a.jsxs)(c.Qd,{uuid:"top-list",children:[(0,a.jsx)(c.Ol,{children:(0,a.jsx)(c.on,{className:N,children:(0,a.jsx)("h5",{className:g,children:l("Watchlists with Pre-defined Top Lists")})})}),(0,a.jsx)(c.Mt,{children:(0,a.jsxs)("ul",{className:y,children:[(0,a.jsx)("li",{className:"text-base",children:l("toplist_item1")}),(0,a.jsx)("li",{className:"text-base",children:l("toplist_item2")}),(0,a.jsx)("li",{className:"text-base",children:l("toplist_item3")}),(0,a.jsx)("li",{className:"text-base",children:l("toplist_item4")}),(0,a.jsx)("li",{className:"text-base",children:l("toplist_item5")})]})})]}),(0,a.jsxs)(c.Qd,{uuid:"chart",children:[(0,a.jsx)(c.Ol,{children:(0,a.jsx)(c.on,{className:N,children:(0,a.jsx)("h5",{className:g,children:l("Upgraded Research with Advanced Charts")})})}),(0,a.jsx)(c.Mt,{children:(0,a.jsxs)("ul",{className:y,children:[(0,a.jsx)("li",{className:"text-base",children:l("chart_item1")}),(0,a.jsx)("li",{className:"text-base",children:l("chart_item2")})]})})]}),(0,a.jsxs)(c.Qd,{uuid:"order-history",children:[(0,a.jsx)(c.Ol,{children:(0,a.jsx)(c.on,{className:N,children:(0,a.jsx)("h5",{className:g,children:l("Order History")})})}),(0,a.jsx)(c.Mt,{children:(0,a.jsxs)("ul",{className:y,children:[(0,a.jsx)("li",{className:"text-base",children:l("order_history_item1")}),(0,a.jsx)("li",{className:"text-base",children:l("order_history_item2")})]})})]}),(0,a.jsxs)(c.Qd,{uuid:"funding",children:[(0,a.jsx)(c.Ol,{children:(0,a.jsx)(c.on,{className:N,children:(0,a.jsx)("h5",{className:g,children:l("Easy Account Funding")})})}),(0,a.jsx)(c.Mt,{children:(0,a.jsxs)("ul",{className:y,children:[(0,a.jsx)("li",{className:"text-base",children:l("funding_item1")}),(0,a.jsx)("li",{className:"text-base",children:l("funding_item2")})]})})]})]})]}),(0,a.jsx)("div",{className:"hidden md:flex md:flex-1 lg:flex-none",children:(0,a.jsx)(w,{active:f})})]})})]})]})}}},function(e){e.O(0,[2319,7826,9331,9002,9774,2888,179],(function(){return s=43011,e(e.s=s);var s}));var s=e.O();_N_E=s}]);