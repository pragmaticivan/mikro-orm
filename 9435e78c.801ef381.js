(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=l(a),j=r,s=m["".concat(c,".").concat(j)]||m[j]||O[j]||b;return a?n.a.createElement(s,p(p({ref:t},i),{},{components:a})):n.a.createElement(s,p({ref:t},i))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},641:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),b=(a(0),a(1086)),c={id:"changesetcomputer",title:"Class: ChangeSetComputer",sidebar_label:"ChangeSetComputer"},p={unversionedId:"api/classes/changesetcomputer",id:"version-4.2/api/classes/changesetcomputer",isDocsHomePage:!1,title:"Class: ChangeSetComputer",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/changesetcomputer.md",slug:"/api/classes/changesetcomputer",permalink:"/docs/4.2/api/classes/changesetcomputer",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/changesetcomputer.md",version:"4.2",lastUpdatedBy:"Carlos Gonz\xe1lez",lastUpdatedAt:1608226235,sidebar_label:"ChangeSetComputer",sidebar:"version-4.2/API",previous:{title:"Class: CLIHelper",permalink:"/docs/4.2/api/classes/clihelper"},next:{title:"Class: ChangeSetPersister",permalink:"/docs/4.2/api/classes/changesetpersister"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"collectionUpdates",id:"collectionupdates",children:[]},{value:"comparator",id:"comparator",children:[]},{value:"config",id:"config",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"platform",id:"platform",children:[]},{value:"removeStack",id:"removestack",children:[]},{value:"validator",id:"validator",children:[]}]},{value:"Methods",id:"methods",children:[{value:"computeChangeSet",id:"computechangeset",children:[]},{value:"computePayload",id:"computepayload",children:[]},{value:"processProperty",id:"processproperty",children:[]},{value:"processToMany",id:"processtomany",children:[]},{value:"processToOne",id:"processtoone",children:[]}]}],i={rightToc:o};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"ChangeSetComputer"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new ChangeSetComputer"),"(",Object(b.b)("inlineCode",{parentName:"p"},"validator"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entityvalidator"}),"EntityValidator"),", ",Object(b.b)("inlineCode",{parentName:"p"},"collectionUpdates"),": Set","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/collection"}),"Collection"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),">>, ",Object(b.b)("inlineCode",{parentName:"p"},"removeStack"),": Set","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),">, ",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/metadatastorage"}),"MetadataStorage"),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/platform"}),"Platform"),", ",Object(b.b)("inlineCode",{parentName:"p"},"config"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/configuration"}),"Configuration"),"): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/changesetcomputer"}),"ChangeSetComputer")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/ChangeSetComputer.ts#L12"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:12"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"validator")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/entityvalidator"}),"EntityValidator"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"collectionUpdates")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Set","<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/collection"}),"Collection"),"<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),">>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"removeStack")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Set","<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/metadatastorage"}),"MetadataStorage"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/platform"}),"Platform"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/configuration"}),"Configuration"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/changesetcomputer"}),"ChangeSetComputer")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"collectionupdates"},"collectionUpdates"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"collectionUpdates"),": Set","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/collection"}),"Collection"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),">>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/ChangeSetComputer.ts#L15"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:15"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"comparator"},"comparator"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"comparator"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entitycomparator"}),"EntityComparator")," = new EntityComparator(this.metadata, this.platform)"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/ChangeSetComputer.ts#L12"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:12"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"config"},"config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"config"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/configuration"}),"Configuration")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/ChangeSetComputer.ts#L19"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:19"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"metadata"},"metadata"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"metadata"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/metadatastorage"}),"MetadataStorage")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/ChangeSetComputer.ts#L17"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:17"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"platform"},"platform"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/platform"}),"Platform")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/ChangeSetComputer.ts#L18"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:18"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"removestack"},"removeStack"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"removeStack"),": Set","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/ChangeSetComputer.ts#L16"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:16"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"validator"},"validator"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"validator"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/entityvalidator"}),"EntityValidator")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/ChangeSetComputer.ts#L14"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:14"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"computechangeset"},"computeChangeSet"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"computeChangeSet"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/changeset"}),"ChangeSet"),"<","T> ","|"," null"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/ChangeSetComputer.ts#L21"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:21"))),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/changeset"}),"ChangeSet"),"<","T> ","|"," null"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"computepayload"},"computePayload"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"computePayload"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/ChangeSetComputer.ts#L53"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:53"))),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"processproperty"},"processProperty"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"processProperty"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"changeSet"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/changeset"}),"ChangeSet"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/ChangeSetComputer.ts#L66"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:66"))),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"changeSet")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/changeset"}),"ChangeSet"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"processtomany"},"processToMany"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"processToMany"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"changeSet"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/changeset"}),"ChangeSet"),"<","T>): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/ChangeSetComputer.ts#L86"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:86"))),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"changeSet")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/changeset"}),"ChangeSet"),"<","T>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"processtoone"},"processToOne"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"processToOne"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"changeSet"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/changeset"}),"ChangeSet"),"<","T>): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/ChangeSetComputer.ts#L76"}),"packages/core/src/unit-of-work/ChangeSetComputer.ts:76"))),Object(b.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"changeSet")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/changeset"}),"ChangeSet"),"<","T>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"))}l.isMDXComponent=!0}}]);