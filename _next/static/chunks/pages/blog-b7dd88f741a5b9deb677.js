_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"284h":function(e,t,n){var r=n("cDf5").default;function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var c=a?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n},e.exports.default=e.exports,e.exports.__esModule=!0},"8/g6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n("kNCj")},BfKq:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var r=n("cpVT"),o=n("nKUr"),a=n("xvhg"),i=n("q1tI"),c=n("R/WZ"),s=n("tRbT"),u=n("wx14"),l=n("Ff2n"),d=(n("17x9"),n("iuhU")),f=n("kKAo"),b=n("H2TA"),p=i.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.raised,a=void 0!==o&&o,c=Object(l.a)(e,["classes","className","raised"]);return i.createElement(f.a,Object(u.a)({className:Object(d.a)(n.root,r),elevation:a?8:1,ref:t},c))})),j=Object(b.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(p),h=n("VD++"),O=i.forwardRef((function(e,t){var n=e.children,r=e.classes,o=e.className,a=e.focusVisibleClassName,c=Object(l.a)(e,["children","classes","className","focusVisibleClassName"]);return i.createElement(h.a,Object(u.a)({className:Object(d.a)(r.root,o),focusVisibleClassName:Object(d.a)(a,r.focusVisible),ref:t},c),n,i.createElement("span",{className:r.focusHighlight}))})),m=Object(b.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(O),v=i.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.component,a=void 0===o?"div":o,c=Object(l.a)(e,["classes","className","component"]);return i.createElement(a,Object(u.a)({className:Object(d.a)(n.root,r),ref:t},c))})),g=Object(b.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(v),x=n("YFqc"),y=n.n(x),w=n("wEEd"),N=n("AM0q");function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=Object(c.a)((function(e){return{card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160},cardContainer:{opacity:.7}}}));function P(e){var t=C(),n=e.children,r=e.link,i=e.minWidth,c=Object(w.useSpring)((function(){return{scale:1,config:{mass:5,tension:350,friction:40}}})),u=Object(a.a)(c,2),l=u[0],d=u[1],f=Object(N.b)((function(e){return e.active?d.start({scale:1.1}):d.start({scale:1})}),{}),b=Object(w.animated)(s.a);return Object(o.jsx)(b,k(k({style:l},f()),{},{item:!0,xs:i?12:void 0,md:i?6:void 0,className:t.cardContainer,children:Object(o.jsx)(y.a,{href:r,children:Object(o.jsx)(m,{component:"a",children:Object(o.jsx)(j,{className:t.card,children:Object(o.jsx)("div",{className:t.cardDetails,children:Object(o.jsx)(g,{children:n})})})})})}))}},HfOp:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return P})),n.d(t,"default",(function(){return S}));var r=n("nKUr"),o=n("AZTU"),a=n("q1tI"),i=n("tRbT"),c=n("RwSH"),s=n.n(c),u=n("R/WZ"),l=n("ofer"),d=n("BfKq");function f(e){var t=e.post,n=e.tag;return Object(r.jsxs)(d.a,{link:"/blog/posts/".concat(t.id),minWidth:!0,children:[Object(r.jsx)(l.a,{component:"h2",variant:"h5",children:n}),Object(r.jsx)(l.a,{variant:"subtitle1",color:"textSecondary",children:t.date}),Object(r.jsx)(l.a,{variant:"subtitle1",paragraph:!0,children:t.title}),Object(r.jsx)(l.a,{variant:"body2",children:t.description}),Object(r.jsx)(l.a,{variant:"caption",color:"primary",children:"Continue reading..."})]})}var b=n("wx14"),p=n("Ff2n"),j=(n("17x9"),n("iuhU")),h=n("NqtD"),O=n("H2TA"),m=n("G7As"),v=n("bfFb"),g=a.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.color,i=void 0===o?"primary":o,c=e.component,s=void 0===c?"a":c,u=e.onBlur,d=e.onFocus,f=e.TypographyClasses,O=e.underline,g=void 0===O?"hover":O,x=e.variant,y=void 0===x?"inherit":x,w=Object(p.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),N=Object(m.a)(),_=N.isFocusVisible,k=N.onBlurVisible,C=N.ref,P=a.useState(!1),S=P[0],D=P[1],M=Object(v.a)(t,C);return a.createElement(l.a,Object(b.a)({className:Object(j.a)(n.root,n["underline".concat(Object(h.a)(g))],r,S&&n.focusVisible,"button"===s&&n.button),classes:f,color:i,component:s,onBlur:function(e){S&&(k(),D(!1)),u&&u(e)},onFocus:function(e){_(e)&&D(!0),d&&d(e)},ref:M,variant:y},w))})),x=Object(O.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(g),y=n("YFqc"),w=n.n(y),N=Object(u.a)((function(e){return{sidebarAboutBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200]},sidebarSection:{marginTop:e.spacing(3)},sidebarLinks:{cursor:"pointer"}}}));function _(e){var t=N(),n=e.archives,o=e.social;return Object(r.jsxs)(i.a,{item:!0,xs:12,md:4,children:[Object(r.jsx)(l.a,{variant:"h6",gutterBottom:!0,className:t.sidebarSection,children:"Archives"}),n.map((function(e){return Object(r.jsx)(w.a,{href:e.url,children:Object(r.jsx)(x,{display:"block",variant:"body1",className:t.sidebarLinks,children:e.title},e.title)})})),Object(r.jsx)(l.a,{variant:"h6",gutterBottom:!0,className:t.sidebarSection,children:"Social"}),o.map((function(e){return Object(r.jsx)(x,{display:"block",variant:"body1",href:e.url,className:t.sidebarLinks,children:Object(r.jsxs)(i.a,{container:!0,direction:"row",spacing:1,alignItems:"center",children:[Object(r.jsx)(i.a,{item:!0,children:Object(r.jsx)(e.icon,{})}),Object(r.jsx)(i.a,{item:!0,children:e.name})]})},e.title)}))]})}var k=Object(u.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)}}})),C={archives:[{title:"Blog List",url:"/blog/blog-list"}],social:[{name:"GitHub",icon:s.a,url:"https://github.com/basheim"}]},P=!0;function S(e){var t=e.tagPostData,n=k();return Object(r.jsx)(o.a,{identity:{title:"Blog"},back:{href:"/",title:"Home"},children:Object(r.jsxs)(i.a,{container:!0,spacing:5,className:n.mainGrid,children:[Object(r.jsx)(i.a,{container:!0,spacing:4,children:Object.keys(t).map((function(e){return Object(r.jsx)(f,{post:t[e][0],tag:e},e)}))}),Object(r.jsx)(_,{archives:C.archives,social:C.social})]})})}},RwSH:function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("q1tI")),i=(0,r(n("8/g6")).default)(a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub");t.default=i},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},kNCj:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return o.a})),n.d(t,"createSvgIcon",(function(){return a.a})),n.d(t,"debounce",(function(){return i.a})),n.d(t,"deprecatedPropType",(function(){return c})),n.d(t,"isMuiElement",(function(){return s.a})),n.d(t,"ownerDocument",(function(){return u.a})),n.d(t,"ownerWindow",(function(){return l.a})),n.d(t,"requirePropFactory",(function(){return d.a})),n.d(t,"setRef",(function(){return f.a})),n.d(t,"unsupportedProp",(function(){return b})),n.d(t,"useControlled",(function(){return p.a})),n.d(t,"useEventCallback",(function(){return j.a})),n.d(t,"useForkRef",(function(){return h.a})),n.d(t,"unstable_useId",(function(){return O.a})),n.d(t,"useIsFocusVisible",(function(){return m.a}));var r=n("NqtD"),o=n("x6Ns"),a=n("5AJ6"),i=n("l3Wi");function c(e,t){return function(){return null}}var s=n("ucBr"),u=n("gk1O"),l=n("g+pH"),d=n("ueBp"),f=n("GIek");function b(e,t,n,r,o){return null}var p=n("yCxk"),j=n("Ovef"),h=n("bfFb"),O=n("wRgb"),m=n("G7As")},ueBp:function(e,t,n){"use strict";function r(e){return function(){return null}}n.d(t,"a",(function(){return r}))},uh6c:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("HfOp")}])}},[["uh6c",0,2,1,3,4,5,6]]]);