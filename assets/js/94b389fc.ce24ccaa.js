(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{1052:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,u=s["".concat(i,".").concat(d)]||s[d]||m[d]||c;return r?a.a.createElement(u,l(l({ref:t},o),{},{components:r})):a.a.createElement(u,l({ref:t},o))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<c;o++)i[o]=r[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},625:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),c=(r(0),r(1052)),i={id:"knex.knex.withschema",title:"Interface: WithSchema<TRecord, TResult>",sidebar_label:"WithSchema",hide_title:!0},l={unversionedId:"api/interfaces/knex.knex.withschema",id:"version-4.4/api/interfaces/knex.knex.withschema",isDocsHomePage:!1,title:"Interface: WithSchema<TRecord, TResult>",description:"Interface: WithSchema",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.withschema.md",slug:"/api/interfaces/knex.knex.withschema",permalink:"/docs/api/interfaces/knex.knex.withschema",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.withschema.md",version:"4.4",lastUpdatedBy:"Juan Ignacio Restrepo",lastUpdatedAt:1614985768,sidebar_label:"WithSchema",sidebar:"version-4.4/API",previous:{title:"Interface: WithRaw<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.withraw"},next:{title:"Interface: WithWrapped<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.withwrapped"}},b=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],o={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-withschematrecord-tresult"},"Interface: WithSchema<TRecord, TResult",">"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".WithSchema"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"TRecord")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"any"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"TResult")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"WithSchema"))),Object(c.b)("h2",{id:"callable"},"Callable"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"WithSchema"),"(",Object(c.b)("inlineCode",{parentName:"p"},"schema"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"schema")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1190"))}p.isMDXComponent=!0}}]);