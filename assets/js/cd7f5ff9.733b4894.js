(window.webpackJsonp=window.webpackJsonp||[]).push([[836],{1131:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=r,f=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return t?a.a.createElement(f,c(c({ref:n},p),{},{components:t})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},908:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),i=(t(0),t(1131)),o={id:"knex.knex-1.sql",title:"Interface: Sql",sidebar_label:"Sql",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.sql",id:"api/interfaces/knex.knex-1.sql",isDocsHomePage:!1,title:"Interface: Sql",description:"Interface: Sql",source:"@site/docs/api/interfaces/knex.knex-1.sql.md",slug:"/api/interfaces/knex.knex-1.sql",permalink:"/docs/next/api/interfaces/knex.knex-1.sql",editUrl:null,version:"current",sidebar_label:"Sql",sidebar:"API",previous:{title:"Interface: SocketConnectionConfig",permalink:"/docs/next/api/interfaces/knex.knex-1.socketconnectionconfig"},next:{title:"Interface: SqlNative",permalink:"/docs/next/api/interfaces/knex.knex-1.sqlnative"}},l=[{value:"Properties",id:"properties",children:[{value:"bindings",id:"bindings",children:[]},{value:"method",id:"method",children:[]},{value:"options",id:"options",children:[]},{value:"sql",id:"sql",children:[]}]},{value:"Methods",id:"methods",children:[{value:"toNative",id:"tonative",children:[]}]}],p={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-sql"},"Interface: Sql"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex.knex-1"},"Knex"),".Sql"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"bindings"},"bindings"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"bindings"),": readonly ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex.knex-1#value"},Object(i.b)("em",{parentName:"a"},"Value")),"[]"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1711"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"method"},"method"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"method"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1709"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"options"},"options"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"options"),": ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1710"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"sql"},"sql"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"sql"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1712"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"tonative"},"toNative"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"toNative"),"(): ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.sqlnative"},Object(i.b)("em",{parentName:"a"},"SqlNative"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.sqlnative"},Object(i.b)("em",{parentName:"a"},"SqlNative"))),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1713"))}s.isMDXComponent=!0}}]);