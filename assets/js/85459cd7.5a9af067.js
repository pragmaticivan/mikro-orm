(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19532],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76442:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=t(74034),i=t(79973),a=(t(67294),t(3905)),o={id:"knex.foreignkey",title:"Interface: ForeignKey",sidebar_label:"ForeignKey",custom_edit_url:null},l={unversionedId:"api/interfaces/knex.foreignkey",id:"api/interfaces/knex.foreignkey",isDocsHomePage:!1,title:"Interface: ForeignKey",description:"knex.ForeignKey",source:"@site/docs/api/interfaces/knex.foreignkey.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.foreignkey",permalink:"/docs/next/api/interfaces/knex.foreignkey",editUrl:null,version:"current",sidebar_label:"ForeignKey",frontMatter:{id:"knex.foreignkey",title:"Interface: ForeignKey",sidebar_label:"ForeignKey",custom_edit_url:null},sidebar:"API",previous:{title:"Interface: ColumnDifference",permalink:"/docs/next/api/interfaces/knex.columndifference"},next:{title:"Interface: ICriteriaNode",permalink:"/docs/next/api/interfaces/knex.icriterianode"}},p=[{value:"Properties",id:"properties",children:[{value:"columnNames",id:"columnnames",children:[]},{value:"constraintName",id:"constraintname",children:[]},{value:"deleteRule",id:"deleterule",children:[]},{value:"localTableName",id:"localtablename",children:[]},{value:"referencedColumnNames",id:"referencedcolumnnames",children:[]},{value:"referencedTableName",id:"referencedtablename",children:[]},{value:"updateRule",id:"updaterule",children:[]}]}],c={toc:p};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".ForeignKey"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"columnnames"},"columnNames"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"columnNames"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e1e7d21/packages/knex/src/typings.ts#L50"},"packages/knex/src/typings.ts:50")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"constraintname"},"constraintName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"constraintName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e1e7d21/packages/knex/src/typings.ts#L51"},"packages/knex/src/typings.ts:51")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"deleterule"},"deleteRule"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"deleteRule"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e1e7d21/packages/knex/src/typings.ts#L56"},"packages/knex/src/typings.ts:56")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"localtablename"},"localTableName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"localTableName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e1e7d21/packages/knex/src/typings.ts#L52"},"packages/knex/src/typings.ts:52")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"referencedcolumnnames"},"referencedColumnNames"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"referencedColumnNames"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e1e7d21/packages/knex/src/typings.ts#L54"},"packages/knex/src/typings.ts:54")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"referencedtablename"},"referencedTableName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"referencedTableName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e1e7d21/packages/knex/src/typings.ts#L53"},"packages/knex/src/typings.ts:53")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"updaterule"},"updateRule"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"updateRule"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/e1e7d21/packages/knex/src/typings.ts#L55"},"packages/knex/src/typings.ts:55")))}s.isMDXComponent=!0}}]);