(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{1131:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),o=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(n),s=r,m=d["".concat(b,".").concat(s)]||d[s]||u[s]||c;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var p=2;p<c;p++)b[p]=n[p];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},462:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(8),c=(n(0),n(1131)),b={id:"knex.knex-1.as",title:"Interface: As<TRecord, TResult>",sidebar_label:"As",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/interfaces/knex.knex-1.as",id:"api/interfaces/knex.knex-1.as",isDocsHomePage:!1,title:"Interface: As<TRecord, TResult>",description:"Interface: As",source:"@site/docs/api/interfaces/knex.knex-1.as.md",slug:"/api/interfaces/knex.knex-1.as",permalink:"/docs/next/api/interfaces/knex.knex-1.as",editUrl:null,version:"current",sidebar_label:"As",sidebar:"API",previous:{title:"Interface: AlterTableBuilder",permalink:"/docs/next/api/interfaces/knex.knex-1.altertablebuilder"},next:{title:"Interface: AsymmetricAggregation<TRecord, TResult, TValue>",permalink:"/docs/next/api/interfaces/knex.knex-1.asymmetricaggregation"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Callable",id:"callable",children:[]}],p={toc:i};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-astrecord-tresult"},"Interface: As<TRecord, TResult",">"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex.knex-1"},"Knex"),".As"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"TRecord"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"TResult"))))),Object(c.b)("h2",{id:"callable"},"Callable"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"As"),"(",Object(c.b)("inlineCode",{parentName:"p"},"columnName"),": keyof TRecord): ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"columnName")),Object(c.b)("td",{parentName:"tr",align:"left"},"keyof TRecord")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:940"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"As"),"(",Object(c.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"columnName")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:941"))}o.isMDXComponent=!0}}]);