(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94063],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return k}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),k=o,f=u["".concat(p,".").concat(k)]||u[k]||d[k]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},23593:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(74034),o=t(79973),i=(t(67294),t(3905)),a={id:"knex.knex-1.socketconnectionconfig",title:"Interface: SocketConnectionConfig",sidebar_label:"SocketConnectionConfig",custom_edit_url:null,hide_title:!0},c="Interface: SocketConnectionConfig",p={unversionedId:"api/interfaces/knex.knex-1.socketconnectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.socketconnectionconfig",isDocsHomePage:!1,title:"Interface: SocketConnectionConfig",description:"knex.Knex.SocketConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.socketconnectionconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.socketconnectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.socketconnectionconfig",editUrl:null,version:"4.5",lastUpdatedBy:"Wybren Kortstra",lastUpdatedAt:1629787807,formattedLastUpdatedAt:"8/24/2021",frontMatter:{id:"knex.knex-1.socketconnectionconfig",title:"Interface: SocketConnectionConfig",sidebar_label:"SocketConnectionConfig",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Select",permalink:"/docs/api/interfaces/knex.knex-1.select"},next:{title:"Sql",permalink:"/docs/api/interfaces/knex.knex-1.sql"}},s=[{value:"Properties",id:"properties",children:[{value:"database",id:"database",children:[]},{value:"debug",id:"debug",children:[]},{value:"password",id:"password",children:[]},{value:"socketPath",id:"socketpath",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],l={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-socketconnectionconfig"},"Interface: SocketConnectionConfig"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".SocketConnectionConfig"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"database"},"database"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"database"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2073"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"debug"},"debug"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"debug"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2074"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"password"},"password"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"password"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2072"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"socketpath"},"socketPath"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"socketPath"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2070"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"user"},"user"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"user"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2071"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"expirationchecker"},"expirationChecker"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional"),(0,i.kt)("strong",{parentName:"p"},"expirationChecker"),"(): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2075"))}d.isMDXComponent=!0}}]);