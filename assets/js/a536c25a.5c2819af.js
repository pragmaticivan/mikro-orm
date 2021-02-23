(window.webpackJsonp=window.webpackJsonp||[]).push([[623],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=b(n),u=r,m=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},696:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),i=(n(0),n(1051)),s={title:"Separating Concerns using Embeddables",sidebar_label:"Embeddables"},o={unversionedId:"embeddables",id:"version-4.4/embeddables",isDocsHomePage:!1,title:"Separating Concerns using Embeddables",description:"Support for embeddables was added in version 4.0",source:"@site/versioned_docs/version-4.4/embeddables.md",slug:"/embeddables",permalink:"/docs/embeddables",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/embeddables.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1614076152,sidebar_label:"Embeddables",sidebar:"version-4.4/docs",previous:{title:"Custom Types",permalink:"/docs/custom-types"},next:{title:"Defining Entities via EntitySchema",permalink:"/docs/entity-schema"}},d=[{value:"Initializing embeddables",id:"initializing-embeddables",children:[]},{value:"Column Prefixing",id:"column-prefixing",children:[]},{value:"Storing embeddables as objects",id:"storing-embeddables-as-objects",children:[]},{value:"Nested embeddables",id:"nested-embeddables",children:[]}],l={toc:d};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Support for embeddables was added in version 4.0")),Object(i.b)("p",null,"Embeddables are classes which are not entities themselves, but are embedded in\nentities and can also be queried. You'll mostly want to use them to reduce\nduplication or separating concerns. Value objects such as date range or address\nare the primary use case for this feature."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Embeddables needs to be discovered just like regular entities, don't forget to\nadd them to the list of entities when initializing the ORM.")),Object(i.b)("p",null,"Embeddables can only contain properties with basic ",Object(i.b)("inlineCode",{parentName:"p"},"@Property()")," mapping."),Object(i.b)("p",null,"For the purposes of this tutorial, we will assume that you have a ",Object(i.b)("inlineCode",{parentName:"p"},"User")," class in\nyour application and you would like to store an address in the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," class. We will\nmodel the ",Object(i.b)("inlineCode",{parentName:"p"},"Address")," class as an embeddable instead of simply adding the respective\ncolumns to the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," class."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded()\n  address!: Address;\n\n}\n\n@Embeddable()\nexport class Address {\n  \n  @Property()\n  street!: string;\n\n  @Property()\n  postalCode!: string;\n\n  @Property()\n  city!: string;\n\n  @Property()\n  country!: string;\n\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"When using ReflectMetadataProvider, you might need to provide the class in decorator options:\n",Object(i.b)("inlineCode",{parentName:"p"},"@Embedded(() => Address)")," or ",Object(i.b)("inlineCode",{parentName:"p"},"@Embedded({ entity: () => Address })"),".")),Object(i.b)("p",null,"In terms of your database schema, MikroORM will automatically inline all columns from\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"Address")," class into the table of the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," class, just as if you had declared\nthem directly there."),Object(i.b)("h2",{id:"initializing-embeddables"},"Initializing embeddables"),Object(i.b)("p",null,"In case all fields in the embeddable are nullable, you might want to initialize the\nembeddable, to avoid getting a null value instead of the embedded object."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Embedded()\naddress = new Address();\n")),Object(i.b)("h2",{id:"column-prefixing"},"Column Prefixing"),Object(i.b)("p",null,"By default, MikroORM names your columns by prefixing them, using the value object name."),Object(i.b)("p",null,"Following the example above, your columns would be named as ",Object(i.b)("inlineCode",{parentName:"p"},"address_street"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"address_postal_code"),"..."),Object(i.b)("p",null,"You can change this behaviour to meet your needs by changing the ",Object(i.b)("inlineCode",{parentName:"p"},"prefix")," attribute\nin the ",Object(i.b)("inlineCode",{parentName:"p"},"@Embedded()")," notation."),Object(i.b)("p",null,"The following example shows you how to set your prefix to ",Object(i.b)("inlineCode",{parentName:"p"},"myPrefix_"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded({ prefix: 'myPrefix_' })\n  address!: Address;\n\n}\n")),Object(i.b)("p",null,"To have MikroORM drop the prefix and use the value object's property name directly,\nset ",Object(i.b)("inlineCode",{parentName:"p"},"prefix: false"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded({ entity: () => Address, prefix: false })\n  address!: Address;\n\n}\n")),Object(i.b)("h2",{id:"storing-embeddables-as-objects"},"Storing embeddables as objects"),Object(i.b)("p",null,"From MikroORM v4.2 we can also store the embeddable as an object instead of\ninlining its properties to the owing entity."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class User {\n\n  @Embedded({ entity: () => Address, object: true })\n  address!: Address;\n\n}\n")),Object(i.b)("p",null,"In SQL drivers, this will use a JSON column to store the value. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Only MySQL and PostgreSQL drivers support searching by JSON properties currently.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",Object(i.b)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/embeddables.html"},"doctrine tutorial"),"\nas the behaviour here is pretty much the same.")),Object(i.b)("h2",{id:"nested-embeddables"},"Nested embeddables"),Object(i.b)("p",null,"Starting with v4.4, we can also nest embeddables, both in inline mode and object mode:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nclass User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded(() => Profile, { object: true, nullable: true })\n  profile?: Profile;\n\n}\n\n@Embeddable()\nclass Profile {\n\n  @Property()\n  username: string;\n\n  @Embedded(() => Identity)\n  identity: Identity;\n\n  constructor(username: string, identity: Identity) {\n    this.username = username;\n    this.identity = identity;\n  }\n\n}\n\n@Embeddable()\nclass Identity {\n\n  @Property()\n  email: string;\n\n  constructor(email: string) {\n    this.email = email;\n  }\n\n}\n")))}b.isMDXComponent=!0}}]);