(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{1131:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(i,".").concat(d)]||s[d]||u[d]||c;return n?r.a.createElement(f,o(o({ref:t},b),{},{components:n})):r.a.createElement(f,o({ref:t},b))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),c=(n(0),n(1131)),i={id:"knex.knex-1.joincallback",title:"Interface: JoinCallback",sidebar_label:"JoinCallback",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/knex.knex-1.joincallback",id:"version-4.5/api/interfaces/knex.knex-1.joincallback",isDocsHomePage:!1,title:"Interface: JoinCallback",description:"Interface: JoinCallback",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.joincallback.md",slug:"/api/interfaces/knex.knex-1.joincallback",permalink:"/docs/api/interfaces/knex.knex-1.joincallback",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1618607567,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"JoinCallback",sidebar:"version-4.5/API",previous:{title:"Interface: Join<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex-1.join"},next:{title:"Interface: JoinClause",permalink:"/docs/api/interfaces/knex.knex-1.joinclause"}},l=[{value:"Callable",id:"callable",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-joincallback"},"Interface: JoinCallback"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".JoinCallback"),Object(c.b)("h2",{id:"callable"},"Callable"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"JoinCallback"),"(",Object(c.b)("inlineCode",{parentName:"p"},"join"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.joinclause"},Object(c.b)("em",{parentName:"a"},"JoinClause")),"): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"join")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.joinclause"},Object(c.b)("em",{parentName:"a"},"JoinClause")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1035"))}p.isMDXComponent=!0}}]);