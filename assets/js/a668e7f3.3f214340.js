(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{1052:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return s}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),c=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,s=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return t?i.a.createElement(s,o(o({ref:n},p),{},{components:t})):i.a.createElement(s,o({ref:n},p))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},705:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return c}));var r=t(3),i=t(8),a=(t(0),t(1052)),l={id:"knex.knex.poolconfig",title:"Interface: PoolConfig",sidebar_label:"PoolConfig",hide_title:!0},o={unversionedId:"api/interfaces/knex.knex.poolconfig",id:"version-4.4/api/interfaces/knex.knex.poolconfig",isDocsHomePage:!1,title:"Interface: PoolConfig",description:"Interface: PoolConfig",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.poolconfig.md",slug:"/api/interfaces/knex.knex.poolconfig",permalink:"/docs/api/interfaces/knex.knex.poolconfig",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.poolconfig.md",version:"4.4",lastUpdatedBy:"Juan Ignacio Restrepo",lastUpdatedAt:1614985768,sidebar_label:"PoolConfig",sidebar:"version-4.4/API",previous:{title:"Interface: PgConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.pgconnectionconfig"},next:{title:"Interface: PostgreSqlColumnBuilder",permalink:"/docs/api/interfaces/knex.knex.postgresqlcolumnbuilder"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"acquireTimeoutMillis",id:"acquiretimeoutmillis",children:[]},{value:"afterCreate",id:"aftercreate",children:[]},{value:"createRetryIntervalMillis",id:"createretryintervalmillis",children:[]},{value:"createTimeoutMillis",id:"createtimeoutmillis",children:[]},{value:"destroyTimeoutMillis",id:"destroytimeoutmillis",children:[]},{value:"idleTimeoutMillis",id:"idletimeoutmillis",children:[]},{value:"log",id:"log",children:[]},{value:"max",id:"max",children:[]},{value:"min",id:"min",children:[]},{value:"name",id:"name",children:[]},{value:"priorityRange",id:"priorityrange",children:[]},{value:"propagateCreateError",id:"propagatecreateerror",children:[]},{value:"reapIntervalMillis",id:"reapintervalmillis",children:[]},{value:"refreshIdle",id:"refreshidle",children:[]},{value:"returnToHead",id:"returntohead",children:[]}]}],p={toc:b};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-poolconfig"},"Interface: PoolConfig"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".PoolConfig"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PoolConfig"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"acquiretimeoutmillis"},"acquireTimeoutMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"acquireTimeoutMillis"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2089"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"aftercreate"},"afterCreate"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"afterCreate"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," Function"),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2074"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"createretryintervalmillis"},"createRetryIntervalMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"createRetryIntervalMillis"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2086"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"createtimeoutmillis"},"createTimeoutMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"createTimeoutMillis"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2087"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"destroytimeoutmillis"},"destroyTimeoutMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"destroyTimeoutMillis"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2088"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"idletimeoutmillis"},"idleTimeoutMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"idleTimeoutMillis"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2078"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"log"},"log"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"log"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(a.b)("inlineCode",{parentName:"p"},"message"),": ",Object(a.b)("em",{parentName:"p"},"string"),", ",Object(a.b)("inlineCode",{parentName:"p"},"logLevel"),": ",Object(a.b)("em",{parentName:"p"},"string"),") => ",Object(a.b)("em",{parentName:"p"},"void")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2082"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"max"},"max"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"max"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2076"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"min"},"min"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"min"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2075"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"name"},"name"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"name"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2073"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"priorityrange"},"priorityRange"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"priorityRange"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2081"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"propagatecreateerror"},"propagateCreateError"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"propagateCreateError"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2085"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"reapintervalmillis"},"reapIntervalMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"reapIntervalMillis"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2079"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"refreshidle"},"refreshIdle"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"refreshIdle"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2077"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"returntohead"},"returnToHead"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"returnToHead"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2080"))}c.isMDXComponent=!0}}]);