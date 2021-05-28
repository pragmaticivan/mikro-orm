(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99599],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=c(a),d=n,u=k["".concat(l,".").concat(d)]||k[d]||m[d]||o;return a?r.createElement(u,p(p({ref:t},s),{},{components:a})):r.createElement(u,p({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},24158:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l},default:function(){return s}});var r=a(74034),n=a(79973),o=(a(67294),a(3905)),p={id:"core.changeset",title:"Class: ChangeSet<T>",sidebar_label:"ChangeSet",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/classes/core.changeset",id:"version-4.5/api/classes/core.changeset",isDocsHomePage:!1,title:"Class: ChangeSet<T\\>",description:"core.ChangeSet",source:"@site/versioned_docs/version-4.5/api/classes/core.changeset.md",sourceDirName:"api/classes",slug:"/api/classes/core.changeset",permalink:"/docs/api/classes/core.changeset",editUrl:null,version:"4.5",lastUpdatedBy:"Mati K\xe4rner",lastUpdatedAt:1622235565,formattedLastUpdatedAt:"5/28/2021",sidebar_label:"ChangeSet",frontMatter:{id:"core.changeset",title:"Class: ChangeSet<T>",sidebar_label:"ChangeSet",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: BlobType",permalink:"/docs/api/classes/core.blobtype"},next:{title:"Class: ChangeSetComputer",permalink:"/docs/api/classes/core.changesetcomputer"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"collection",id:"collection",children:[]},{value:"entity",id:"entity",children:[]},{value:"name",id:"name",children:[]},{value:"originalEntity",id:"originalentity",children:[]},{value:"payload",id:"payload",children:[]},{value:"persisted",id:"persisted",children:[]},{value:"rootName",id:"rootname",children:[]},{value:"type",id:"type",children:[]}]}],c={toc:l};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ChangeSet"),(0,o.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,o.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new ChangeSet"),"<T",">","(",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": T, ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/enums/core.changesettype"},(0,o.kt)("em",{parentName:"a"},"ChangeSetType")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"payload"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,o.kt)("em",{parentName:"a"},"EntityData")),"<T",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,o.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">","): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.changeset"},(0,o.kt)("em",{parentName:"a"},"ChangeSet")),"<T",">"),(0,o.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,o.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entity")),(0,o.kt)("td",{parentName:"tr",align:"left"},"T")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"type")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/enums/core.changesettype"},(0,o.kt)("em",{parentName:"a"},"ChangeSetType")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"payload")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},(0,o.kt)("em",{parentName:"a"},"EntityData")),"<T",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"meta")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,o.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.changeset"},(0,o.kt)("em",{parentName:"a"},"ChangeSet")),"<T",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L3"},"packages/core/src/unit-of-work/ChangeSet.ts:3")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"collection"},"collection"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"collection"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L19"},"packages/core/src/unit-of-work/ChangeSet.ts:19")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"entity"},"entity"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"entity"),": T"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L21"},"packages/core/src/unit-of-work/ChangeSet.ts:21")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"name"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L17"},"packages/core/src/unit-of-work/ChangeSet.ts:17")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"originalentity"},"originalEntity"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"originalEntity"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,o.kt)("em",{parentName:"a"},"EntityData")),"<T",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L24"},"packages/core/src/unit-of-work/ChangeSet.ts:24")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"payload"},"payload"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"payload"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,o.kt)("em",{parentName:"a"},"EntityData")),"<T",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L22"},"packages/core/src/unit-of-work/ChangeSet.ts:22")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"persisted"},"persisted"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"persisted"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L23"},"packages/core/src/unit-of-work/ChangeSet.ts:23")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"rootname"},"rootName"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"rootName"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L18"},"packages/core/src/unit-of-work/ChangeSet.ts:18")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"type"},"type"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"type"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/enums/core.changesettype"},(0,o.kt)("em",{parentName:"a"},"ChangeSetType"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L20"},"packages/core/src/unit-of-work/ChangeSet.ts:20")))}s.isMDXComponent=!0}}]);