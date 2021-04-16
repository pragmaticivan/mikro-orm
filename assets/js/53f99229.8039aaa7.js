(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{1131:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),m=o(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||l[f]||c;return n?r.a.createElement(d,s(s({ref:t},p),{},{components:n})):r.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=f;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<c;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},413:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),c=(n(0),n(1131)),i={id:"knex.schemadifference",title:"Interface: SchemaDifference",sidebar_label:"SchemaDifference",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/interfaces/knex.schemadifference",id:"api/interfaces/knex.schemadifference",isDocsHomePage:!1,title:"Interface: SchemaDifference",description:"Interface: SchemaDifference",source:"@site/docs/api/interfaces/knex.schemadifference.md",slug:"/api/interfaces/knex.schemadifference",permalink:"/docs/next/api/interfaces/knex.schemadifference",editUrl:null,version:"current",sidebar_label:"SchemaDifference",sidebar:"API",previous:{title:"Interface: Knex<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-2"},next:{title:"Interface: Table",permalink:"/docs/next/api/interfaces/knex.table"}},b=[{value:"Properties",id:"properties",children:[{value:"changedTables",id:"changedtables",children:[]},{value:"fromSchema",id:"fromschema",children:[]},{value:"newNamespaces",id:"newnamespaces",children:[]},{value:"newTables",id:"newtables",children:[]},{value:"orphanedForeignKeys",id:"orphanedforeignkeys",children:[]},{value:"removedNamespaces",id:"removednamespaces",children:[]},{value:"removedTables",id:"removedtables",children:[]}]}],p={toc:b};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-schemadifference"},"Interface: SchemaDifference"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".SchemaDifference"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"changedtables"},"changedTables"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"changedTables"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.tabledifference"},Object(c.b)("em",{parentName:"a"},"TableDifference")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/05f15a3/packages/knex/src/typings.ts#L96"},"packages/knex/src/typings.ts:96")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fromschema"},"fromSchema"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"fromSchema"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databaseschema"},Object(c.b)("em",{parentName:"a"},"DatabaseSchema"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/05f15a3/packages/knex/src/typings.ts#L100"},"packages/knex/src/typings.ts:100")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"newnamespaces"},"newNamespaces"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"newNamespaces"),": ",Object(c.b)("em",{parentName:"p"},"Set"),"<string",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/05f15a3/packages/knex/src/typings.ts#L94"},"packages/knex/src/typings.ts:94")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"newtables"},"newTables"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"newTables"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databasetable"},Object(c.b)("em",{parentName:"a"},"DatabaseTable")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/05f15a3/packages/knex/src/typings.ts#L95"},"packages/knex/src/typings.ts:95")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"orphanedforeignkeys"},"orphanedForeignKeys"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"orphanedForeignKeys"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.foreignkey"},Object(c.b)("em",{parentName:"a"},"ForeignKey")),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/05f15a3/packages/knex/src/typings.ts#L99"},"packages/knex/src/typings.ts:99")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"removednamespaces"},"removedNamespaces"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"removedNamespaces"),": ",Object(c.b)("em",{parentName:"p"},"Set"),"<string",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/05f15a3/packages/knex/src/typings.ts#L98"},"packages/knex/src/typings.ts:98")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"removedtables"},"removedTables"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"removedTables"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databasetable"},Object(c.b)("em",{parentName:"a"},"DatabaseTable")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/05f15a3/packages/knex/src/typings.ts#L97"},"packages/knex/src/typings.ts:97")))}o.isMDXComponent=!0}}]);