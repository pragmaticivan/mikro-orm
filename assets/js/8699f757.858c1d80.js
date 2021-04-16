(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{1131:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||i;return t?a.a.createElement(f,o(o({ref:n},s),{},{components:t})):a.a.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},620:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),i=(t(0),t(1131)),c={id:"knex.indexdef",title:"Interface: IndexDef",sidebar_label:"IndexDef",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/knex.indexdef",id:"version-4.5/api/interfaces/knex.indexdef",isDocsHomePage:!1,title:"Interface: IndexDef",description:"Interface: IndexDef",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.indexdef.md",slug:"/api/interfaces/knex.indexdef",permalink:"/docs/api/interfaces/knex.indexdef",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1618607567,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"IndexDef",sidebar:"version-4.5/API",previous:{title:"Interface: Index",permalink:"/docs/api/interfaces/knex.index"},next:{title:"Interface: IsSame",permalink:"/docs/api/interfaces/knex.issame"}},p=[{value:"Properties",id:"properties",children:[{value:"columnNames",id:"columnnames",children:[]},{value:"keyName",id:"keyname",children:[]},{value:"unique",id:"unique",children:[]}]}],s={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-indexdef"},"Interface: IndexDef"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".IndexDef"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"columnnames"},"columnNames"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"columnNames"),": ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L63"},"packages/knex/src/typings.ts:63")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"keyname"},"keyName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"keyName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L62"},"packages/knex/src/typings.ts:62")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"unique"},"unique"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"unique"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L64"},"packages/knex/src/typings.ts:64")))}l.isMDXComponent=!0}}]);