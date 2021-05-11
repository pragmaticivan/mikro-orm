(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17815],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return c}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=d(t),c=i,m=k["".concat(p,".").concat(c)]||k[c]||u[c]||a;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},99156:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var r=t(74034),i=t(79973),a=(t(67294),t(3905)),l={id:"knex.knex-1.mariasqlconnectionconfig",title:"Interface: MariaSqlConnectionConfig",sidebar_label:"MariaSqlConnectionConfig",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/knex.knex-1.mariasqlconnectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.mariasqlconnectionconfig",isDocsHomePage:!1,title:"Interface: MariaSqlConnectionConfig",description:"knex.Knex.MariaSqlConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.mariasqlconnectionconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.mariasqlconnectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.mariasqlconnectionconfig",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1620716360,formattedLastUpdatedAt:"5/11/2021",sidebar_label:"MariaSqlConnectionConfig",frontMatter:{id:"knex.knex-1.mariasqlconnectionconfig",title:"Interface: MariaSqlConnectionConfig",sidebar_label:"MariaSqlConnectionConfig",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: Logger",permalink:"/docs/api/interfaces/knex.knex-1.logger"},next:{title:"Interface: MariaSslConfiguration",permalink:"/docs/api/interfaces/knex.knex-1.mariasslconfiguration"}},p=[{value:"Properties",id:"properties",children:[{value:"charset",id:"charset",children:[]},{value:"compress",id:"compress",children:[]},{value:"connTimeout",id:"conntimeout",children:[]},{value:"db",id:"db",children:[]},{value:"host",id:"host",children:[]},{value:"keepQueries",id:"keepqueries",children:[]},{value:"local_infile",id:"local_infile",children:[]},{value:"multiStatements",id:"multistatements",children:[]},{value:"password",id:"password",children:[]},{value:"pingInterval",id:"pinginterval",children:[]},{value:"port",id:"port",children:[]},{value:"protocol",id:"protocol",children:[]},{value:"read_default_file",id:"read_default_file",children:[]},{value:"read_default_group",id:"read_default_group",children:[]},{value:"secureAuth",id:"secureauth",children:[]},{value:"ssl",id:"ssl",children:[]},{value:"streamHWM",id:"streamhwm",children:[]},{value:"unixSocket",id:"unixsocket",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],d={toc:p};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MariaSqlConnectionConfig"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"charset"},"charset"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"charset"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1968"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"compress"},"compress"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"compress"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1963"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"conntimeout"},"connTimeout"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"connTimeout"),": ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1960"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"db"},"db"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"db"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1957"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"host"},"host"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"host"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1953"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"keepqueries"},"keepQueries"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"keepQueries"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1958"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"local_infile"},"local","_","infile"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"local","_","infile"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1965"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"multistatements"},"multiStatements"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"multiStatements"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1959"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"password"},"password"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"password"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1952"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pinginterval"},"pingInterval"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"pingInterval"),": ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1961"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"port"},"port"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"port"),": ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1954"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"protocol"},"protocol"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"protocol"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1956"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"read_default_file"},"read","_","default","_","file"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"read","_","default","_","file"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1966"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"read_default_group"},"read","_","default","_","group"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"read","_","default","_","group"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1967"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"secureauth"},"secureAuth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"secureAuth"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1962"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ssl"},"ssl"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"ssl"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mariasslconfiguration"},(0,a.kt)("em",{parentName:"a"},"MariaSslConfiguration"))),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1964"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"streamhwm"},"streamHWM"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"streamHWM"),": ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1969"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"unixsocket"},"unixSocket"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"unixSocket"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1955"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"user"},"user"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"user"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1951"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"expirationchecker"},"expirationChecker"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional"),(0,a.kt)("strong",{parentName:"p"},"expirationChecker"),"(): ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1970"))}s.isMDXComponent=!0}}]);