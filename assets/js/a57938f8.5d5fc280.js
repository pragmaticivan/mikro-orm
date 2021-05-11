(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25687],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,c=u["".concat(o,".").concat(m)]||u[m]||k[m]||i;return n?r.createElement(c,l(l({ref:t},s),{},{components:n})):r.createElement(c,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5285:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return s}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),l={id:"knex.knex-1.mysqlconnectionconfig",title:"Interface: MySqlConnectionConfig",sidebar_label:"MySqlConnectionConfig",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/knex.knex-1.mysqlconnectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.mysqlconnectionconfig",isDocsHomePage:!1,title:"Interface: MySqlConnectionConfig",description:"knex.Knex.MySqlConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.mysqlconnectionconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.mysqlconnectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1620716360,formattedLastUpdatedAt:"5/11/2021",sidebar_label:"MySqlConnectionConfig",frontMatter:{id:"knex.knex-1.mysqlconnectionconfig",title:"Interface: MySqlConnectionConfig",sidebar_label:"MySqlConnectionConfig",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: MySqlAlterColumnBuilder",permalink:"/docs/api/interfaces/knex.knex-1.mysqlaltercolumnbuilder"},next:{title:"Interface: OnConflictQueryBuilder<TRecord, TResult\\>",permalink:"/docs/api/interfaces/knex.knex-1.onconflictquerybuilder"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"bigNumberStrings",id:"bignumberstrings",children:[]},{value:"charset",id:"charset",children:[]},{value:"connectTimeout",id:"connecttimeout",children:[]},{value:"database",id:"database",children:[]},{value:"dateStrings",id:"datestrings",children:[]},{value:"debug",id:"debug",children:[]},{value:"decimalNumbers",id:"decimalnumbers",children:[]},{value:"flags",id:"flags",children:[]},{value:"host",id:"host",children:[]},{value:"insecureAuth",id:"insecureauth",children:[]},{value:"localAddress",id:"localaddress",children:[]},{value:"multipleStatements",id:"multiplestatements",children:[]},{value:"password",id:"password",children:[]},{value:"port",id:"port",children:[]},{value:"queryFormat",id:"queryformat",children:[]},{value:"socketPath",id:"socketpath",children:[]},{value:"ssl",id:"ssl",children:[]},{value:"stringifyObjects",id:"stringifyobjects",children:[]},{value:"supportBigNumbers",id:"supportbignumbers",children:[]},{value:"timezone",id:"timezone",children:[]},{value:"trace",id:"trace",children:[]},{value:"typeCast",id:"typecast",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],d={toc:o};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MySqlConnectionConfig"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"MySqlConnectionConfig")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysql2connectionconfig"},(0,i.kt)("em",{parentName:"a"},"MySql2ConnectionConfig"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"bignumberstrings"},"bigNumberStrings"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"bigNumberStrings"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2000"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"charset"},"charset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"charset"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1992"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"connecttimeout"},"connectTimeout"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"connectTimeout"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1994"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"database"},"database"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"database"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1991"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"datestrings"},"dateStrings"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"dateStrings"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2001"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"debug"},"debug"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"debug"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"decimalnumbers"},"decimalNumbers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"decimalNumbers"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2007"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"flags"},"flags"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"flags"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2005"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"host"},"host"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"host"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1985"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"insecureauth"},"insecureAuth"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"insecureAuth"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1996"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"localaddress"},"localAddress"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"localAddress"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1987"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"multiplestatements"},"multipleStatements"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"multipleStatements"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2004"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"password"},"password"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"password"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1990"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"port"},"port"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"port"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1986"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"queryformat"},"queryFormat"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"queryFormat"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"query"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"values"),": ",(0,i.kt)("em",{parentName:"p"},"any"),") => ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"query"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"values"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"query")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"values")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1998"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1998"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"socketpath"},"socketPath"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"socketPath"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1988"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ssl"},"ssl"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ssl"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mariasslconfiguration"},(0,i.kt)("em",{parentName:"a"},"MariaSslConfiguration"))),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2006"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stringifyobjects"},"stringifyObjects"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"stringifyObjects"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1995"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"supportbignumbers"},"supportBigNumbers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"supportBigNumbers"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1999"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"timezone"},"timezone"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"timezone"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1993"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"trace"},"trace"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"trace"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2003"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"typecast"},"typeCast"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"typeCast"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1997"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"user"},"user"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"user"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1989"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"expirationchecker"},"expirationChecker"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional"),(0,i.kt)("strong",{parentName:"p"},"expirationChecker"),"(): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2008"))}s.isMDXComponent=!0}}]);