(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3767],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=m(t),u=a,c=k["".concat(l,".").concat(u)]||k[u]||s[u]||i;return t?r.createElement(c,o(o({ref:n},d),{},{components:t})):r.createElement(c,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=k;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var m=2;m<i;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},86617:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=t(74034),a=t(79973),i=(t(67294),t(3905)),o={id:"knex.knex-1.mssqlconnectionconfig",title:"Interface: MsSqlConnectionConfig",sidebar_label:"MsSqlConnectionConfig",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/knex.knex-1.mssqlconnectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.mssqlconnectionconfig",isDocsHomePage:!1,title:"Interface: MsSqlConnectionConfig",description:"knex.Knex.MsSqlConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.mssqlconnectionconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.mssqlconnectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.mssqlconnectionconfig",editUrl:null,version:"4.5",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1623424521,formattedLastUpdatedAt:"6/11/2021",sidebar_label:"MsSqlConnectionConfig",frontMatter:{id:"knex.knex-1.mssqlconnectionconfig",title:"Interface: MsSqlConnectionConfig",sidebar_label:"MsSqlConnectionConfig",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: MigratorConfig",permalink:"/docs/api/interfaces/knex.knex-1.migratorconfig"},next:{title:"Interface: MultikeyForeignConstraintBuilder",permalink:"/docs/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder"}},l=[{value:"Properties",id:"properties",children:[{value:"connectionTimeout",id:"connectiontimeout",children:[]},{value:"database",id:"database",children:[]},{value:"domain",id:"domain",children:[]},{value:"driver",id:"driver",children:[]},{value:"options",id:"options",children:[]},{value:"parseJSON",id:"parsejson",children:[]},{value:"password",id:"password",children:[]},{value:"pool",id:"pool",children:[]},{value:"port",id:"port",children:[]},{value:"requestTimeout",id:"requesttimeout",children:[]},{value:"server",id:"server",children:[]},{value:"stream",id:"stream",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],m={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MsSqlConnectionConfig"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"connectiontimeout"},"connectionTimeout"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"connectionTimeout"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1913"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"database"},"database"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"database"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1912"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"domain"},"domain"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"domain"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1911"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"driver"},"driver"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"driver"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1906"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"options"),": ",(0,i.kt)("em",{parentName:"p"},"Readonly"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"abortTransactionOnError?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"appName?"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"enableArithAbort?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypt?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceName?"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"isolationLevel?"),": ",(0,i.kt)("em",{parentName:"p"},"READ_UNCOMMITTED")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"READ_COMMITTED")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"REPEATABLE_READ")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"SERIALIZABLE")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"SNAPSHOT")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"maxRetriesOnTransientErrors?"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"multiSubnetFailover?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"packetSize?"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"tdsVersion?"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"trustedConnection?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"useUTC?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"  }",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1918"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"parsejson"},"parseJSON"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"parseJSON"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1916"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"password"},"password"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"password"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1908"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pool"},"pool"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"pool"),": ",(0,i.kt)("em",{parentName:"p"},"Readonly"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise?"),": ",(0,i.kt)("em",{parentName:"p"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"acquireTimeoutMillis?"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"autostart?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"evictionRunIntervalMillis?"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"fifo?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"idleTimeoutMillis?"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"max?"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"maxWaitingClients?"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"min?"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"numTestsPerRun?"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"priorityRange?"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"softIdleTimeoutMillis?"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"testOnBorrow?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"  }",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1932"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"port"},"port"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"port"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1910"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requesttimeout"},"requestTimeout"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"requestTimeout"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1914"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"server"},"server"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"server"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1909"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stream"},"stream"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"stream"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1915"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"user"},"user"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"user"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1907"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"expirationchecker"},"expirationChecker"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional"),(0,i.kt)("strong",{parentName:"p"},"expirationChecker"),"(): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1917"))}d.isMDXComponent=!0}}]);