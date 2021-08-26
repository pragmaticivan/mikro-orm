(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5533],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=d(n),u=a,m=k["".concat(l,".").concat(u)]||k[u]||s[u]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},89329:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),o={id:"knex.knex-1.logger",title:"Interface: Logger",sidebar_label:"Logger",custom_edit_url:null,hide_title:!0},p="Interface: Logger",l={unversionedId:"api/interfaces/knex.knex-1.logger",id:"version-4.5/api/interfaces/knex.knex-1.logger",isDocsHomePage:!1,title:"Interface: Logger",description:"knex.Knex.Logger",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.logger.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.logger",permalink:"/docs/api/interfaces/knex.knex-1.logger",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1629999222,formattedLastUpdatedAt:"8/26/2021",frontMatter:{id:"knex.knex-1.logger",title:"Interface: Logger",sidebar_label:"Logger",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"JoinRaw",permalink:"/docs/api/interfaces/knex.knex-1.joinraw"},next:{title:"MariaSqlConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.mariasqlconnectionconfig"}},d=[{value:"Properties",id:"properties",children:[{value:"debug",id:"debug",children:[]},{value:"deprecate",id:"deprecate",children:[]},{value:"enableColors",id:"enablecolors",children:[]},{value:"error",id:"error",children:[]},{value:"inspectionDepth",id:"inspectiondepth",children:[]},{value:"warn",id:"warn",children:[]}]}],c={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-logger"},"Interface: Logger"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Logger"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"debug"},"debug"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"debug"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#logfn"},(0,i.kt)("em",{parentName:"a"},"LogFn"))),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2103"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deprecate"},"deprecate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"deprecate"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"method"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"alternative"),": ",(0,i.kt)("em",{parentName:"p"},"string"),") => ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"method"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"alternative"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"method")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"alternative")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2106"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2106"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"enablecolors"},"enableColors"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"enableColors"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2105"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"error"},"error"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"error"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#logfn"},(0,i.kt)("em",{parentName:"a"},"LogFn"))),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2102"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inspectiondepth"},"inspectionDepth"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"inspectionDepth"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2104"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"warn"},"warn"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"warn"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#logfn"},(0,i.kt)("em",{parentName:"a"},"LogFn"))),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2101"))}s.isMDXComponent=!0}}]);