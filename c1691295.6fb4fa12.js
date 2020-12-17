(window.webpackJsonp=window.webpackJsonp||[]).push([[750],{1086:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(r),O=n,d=l["".concat(o,".").concat(O)]||l[O]||m[O]||c;return r?a.a.createElement(d,i(i({ref:t},b),{},{components:r})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=O;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},819:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(1086)),o={id:"connectionexception",title:"Class: ConnectionException",sidebar_label:"ConnectionException"},i={unversionedId:"api/classes/connectionexception",id:"version-4.2/api/classes/connectionexception",isDocsHomePage:!1,title:"Class: ConnectionException",description:"Base class for all connection related errors detected in the driver.",source:"@site/versioned_docs/version-4.2/api/classes/connectionexception.md",slug:"/api/classes/connectionexception",permalink:"/docs/4.2/api/classes/connectionexception",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/connectionexception.md",version:"4.2",lastUpdatedBy:"Carlos Gonz\xe1lez",lastUpdatedAt:1608226235,sidebar_label:"ConnectionException",sidebar:"version-4.2/API",previous:{title:"Class: Connection",permalink:"/docs/4.2/api/classes/connection"},next:{title:"Class: ConstraintViolationException",permalink:"/docs/4.2/api/classes/constraintviolationexception"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Base class for all connection related errors detected in the driver."),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"ConnectionException")))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new ConnectionException"),"(",Object(c.b)("inlineCode",{parentName:"p"},"previous"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/driverexception#error"}),"Error"),"): ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/connectionexception"}),"ConnectionException")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#constructor"}),"constructor"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"previous")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/classes/driverexception#error"}),"Error"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/connectionexception"}),"ConnectionException")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"code"},"code"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"code"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#code"}),"code"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L6"}),"packages/core/src/exceptions.ts:6"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errmsg"},"errmsg"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errmsg"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#errmsg"}),"errmsg"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errno"},"errno"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errno"),": number"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#errno"}),"errno"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L7"}),"packages/core/src/exceptions.ts:7"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"message"},"message"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"message"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#message"}),"message"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in node_modules/typescript/lib/lib.es5.d.ts:974")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"name"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#name"}),"name"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in node_modules/typescript/lib/lib.es5.d.ts:973")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlMessage"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#sqlmessage"}),"sqlMessage"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L9"}),"packages/core/src/exceptions.ts:9"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlstate"},"sqlState"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlState"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#sqlstate"}),"sqlState"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L8"}),"packages/core/src/exceptions.ts:8"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"stack"},"stack"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"stack"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#stack"}),"stack"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in node_modules/typescript/lib/lib.es5.d.ts:975")))}p.isMDXComponent=!0}}]);