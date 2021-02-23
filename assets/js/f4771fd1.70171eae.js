(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{1051:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=c.a.createContext({}),b=function(e){var t=c.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=b(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,y=s["".concat(o,".").concat(m)]||s[m]||l[m]||a;return r?c.a.createElement(y,u(u({ref:t},p),{},{components:r})):c.a.createElement(y,u({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var p=2;p<a;p++)o[p]=r[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},989:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),c=r(8),a=(r(0),r(1051)),o={id:"knex.querytype",title:"Enumeration: QueryType",sidebar_label:"QueryType",custom_edit_url:null,hide_title:!0},u={unversionedId:"api/enums/knex.querytype",id:"api/enums/knex.querytype",isDocsHomePage:!1,title:"Enumeration: QueryType",description:"Enumeration: QueryType",source:"@site/docs/api/enums/knex.querytype.md",slug:"/api/enums/knex.querytype",permalink:"/docs/next/api/enums/knex.querytype",editUrl:null,version:"current",sidebar_label:"QueryType",sidebar:"API",previous:{title:"Enumeration: ReferenceType",permalink:"/docs/next/api/enums/core.referencetype"},next:{title:"Class: CLIConfigurator",permalink:"/docs/next/api/classes/cli.cliconfigurator"}},i=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"COUNT",id:"count",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"INSERT",id:"insert",children:[]},{value:"SELECT",id:"select",children:[]},{value:"TRUNCATE",id:"truncate",children:[]},{value:"UPDATE",id:"update",children:[]}]}],p={toc:i};function b(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"enumeration-querytype"},"Enumeration: QueryType"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".QueryType"),Object(a.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(a.b)("h3",{id:"count"},"COUNT"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"COUNT"),': = "COUNT"'),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/34c6792/packages/knex/src/query/enums.ts#L4"},"packages/knex/src/query/enums.ts:4")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"delete"},"DELETE"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"DELETE"),': = "DELETE"'),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/34c6792/packages/knex/src/query/enums.ts#L7"},"packages/knex/src/query/enums.ts:7")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"insert"},"INSERT"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"INSERT"),': = "INSERT"'),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/34c6792/packages/knex/src/query/enums.ts#L5"},"packages/knex/src/query/enums.ts:5")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"select"},"SELECT"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"SELECT"),': = "SELECT"'),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/34c6792/packages/knex/src/query/enums.ts#L3"},"packages/knex/src/query/enums.ts:3")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"truncate"},"TRUNCATE"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"TRUNCATE"),': = "TRUNCATE"'),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/34c6792/packages/knex/src/query/enums.ts#L2"},"packages/knex/src/query/enums.ts:2")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"update"},"UPDATE"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"UPDATE"),': = "UPDATE"'),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/34c6792/packages/knex/src/query/enums.ts#L6"},"packages/knex/src/query/enums.ts:6")))}b.isMDXComponent=!0}}]);