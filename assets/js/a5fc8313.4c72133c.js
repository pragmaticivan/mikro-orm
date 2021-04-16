(window.webpackJsonp=window.webpackJsonp||[]).push([[677],{1131:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),l=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=l(a),s=r,O=m["".concat(b,".").concat(s)]||m[s]||d[s]||c;return a?n.a.createElement(O,p(p({ref:t},o),{},{components:a})):n.a.createElement(O,p({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var o=2;o<c;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},750:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(8),c=(a(0),a(1131)),b={id:"core.cacheadapter",title:"Interface: CacheAdapter",sidebar_label:"CacheAdapter",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/core.cacheadapter",id:"api/interfaces/core.cacheadapter",isDocsHomePage:!1,title:"Interface: CacheAdapter",description:"Interface: CacheAdapter",source:"@site/docs/api/interfaces/core.cacheadapter.md",slug:"/api/interfaces/core.cacheadapter",permalink:"/docs/next/api/interfaces/core.cacheadapter",editUrl:null,version:"current",sidebar_label:"CacheAdapter",sidebar:"API",previous:{title:"Interface: AssignOptions",permalink:"/docs/next/api/interfaces/core.assignoptions"},next:{title:"Interface: ConnectionConfig",permalink:"/docs/next/api/interfaces/core.connectionconfig"}},i=[{value:"Implemented by",id:"implemented-by",children:[]},{value:"Methods",id:"methods",children:[{value:"clear",id:"clear",children:[]},{value:"close",id:"close",children:[]},{value:"get",id:"get",children:[]},{value:"set",id:"set",children:[]}]}],o={toc:i};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-cacheadapter"},"Interface: CacheAdapter"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".CacheAdapter"),Object(c.b)("h2",{id:"implemented-by"},"Implemented by"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/api/classes/core.filecacheadapter"},Object(c.b)("em",{parentName:"a"},"FileCacheAdapter"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/api/classes/core.memorycacheadapter"},Object(c.b)("em",{parentName:"a"},"MemoryCacheAdapter"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/api/classes/core.nullcacheadapter"},Object(c.b)("em",{parentName:"a"},"NullCacheAdapter")))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"clear"},"clear"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"clear"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Clears all items stored in the cache."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/05f15a3/packages/core/src/cache/CacheAdapter.ts#L16"},"packages/core/src/cache/CacheAdapter.ts:16")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"close"},"close"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional"),Object(c.b)("strong",{parentName:"p"},"close"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Called inside ",Object(c.b)("inlineCode",{parentName:"p"},"MikroORM.close()")," Allows graceful shutdowns (e.g. for redis)."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/05f15a3/packages/core/src/cache/CacheAdapter.ts#L21"},"packages/core/src/cache/CacheAdapter.ts:21")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"get"},"get"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"get"),"(",Object(c.b)("inlineCode",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(c.b)("p",null,"Gets the items under ",Object(c.b)("inlineCode",{parentName:"p"},"name")," key from the cache."),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/05f15a3/packages/core/src/cache/CacheAdapter.ts#L6"},"packages/core/src/cache/CacheAdapter.ts:6")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"set"},"set"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"set"),"(",Object(c.b)("inlineCode",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"data"),": ",Object(c.b)("em",{parentName:"p"},"any"),", ",Object(c.b)("inlineCode",{parentName:"p"},"origin"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"expiration?"),": ",Object(c.b)("em",{parentName:"p"},"number"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Sets the item to the cache. ",Object(c.b)("inlineCode",{parentName:"p"},"origin")," is used for cache invalidation and should reflect the change in data."),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"origin")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"expiration?")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"number"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/05f15a3/packages/core/src/cache/CacheAdapter.ts#L11"},"packages/core/src/cache/CacheAdapter.ts:11")))}l.isMDXComponent=!0}}]);