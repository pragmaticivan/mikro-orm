(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62191],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,c=m["".concat(l,".").concat(d)]||m[d]||y[d]||o;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84556:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),i={title:"Custom Types"},p={unversionedId:"custom-types",id:"version-4.3/custom-types",isDocsHomePage:!1,title:"Custom Types",description:"You can define custom types by extending Type abstract class. It has 4 optional methods:",source:"@site/versioned_docs/version-4.3/custom-types.md",sourceDirName:".",slug:"/custom-types",permalink:"/docs/4.3/custom-types",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/custom-types.md",version:"4.3",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1624938765,formattedLastUpdatedAt:"6/29/2021",frontMatter:{title:"Custom Types"},sidebar:"version-4.3/docs",previous:{title:"Composite and Foreign Keys as Primary Key",permalink:"/docs/4.3/composite-keys"},next:{title:"Separating Concerns using Embeddables",permalink:"/docs/4.3/embeddables"}},l=[{value:"Types provided by MikroORM",id:"types-provided-by-mikroorm",children:[{value:"ArrayType",id:"arraytype",children:[]},{value:"BigIntType",id:"biginttype",children:[]},{value:"BlobType",id:"blobtype",children:[]},{value:"JsonType",id:"jsontype",children:[]},{value:"DateType",id:"datetype",children:[]},{value:"TimeType",id:"timetype",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can define custom types by extending ",(0,o.kt)("inlineCode",{parentName:"p"},"Type")," abstract class. It has 4 optional methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"convertToDatabaseValue(value: any, platform: Platform): any")),(0,o.kt)("p",{parentName:"li"},"Converts a value from its JS representation to its database representation of this type.\nBy default returns unchanged ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"convertToJSValue(value: any, platform: Platform): any")),(0,o.kt)("p",{parentName:"li"},"Converts a value from its database representation to its JS representation of this type.\nBy default returns unchanged ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"toJSON(value: any, platform: Platform): any")),(0,o.kt)("p",{parentName:"li"},"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default uses the runtime value.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getColumnType(prop: EntityProperty, platform: Platform): string")),(0,o.kt)("p",{parentName:"li"},"Gets the SQL declaration snippet for a field of this type.\nBy default returns ",(0,o.kt)("inlineCode",{parentName:"p"},"columnType")," of given property."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Type, Platform, EntityProperty, ValidationError } from '@mikro-orm/core';\n\nexport class DateType extends Type<Date, string> {\n\n  convertToDatabaseValue(value: Date | string | undefined, platform: Platform): string {\n    if (value instanceof Date) {\n      return value.toISOString().substr(0, 10);\n    }\n\n    if (!value || value.toString().match(/^\\d{4}-\\d{2}-\\d{2}$/)) {\n      return value as string;\n    }\n\n    throw ValidationError.invalidType(DateType, value, 'JS');\n  }\n\n  convertToJSValue(value: Date | string | undefined, platform: Platform): Date {\n    if (!value || value instanceof Date) {\n      return value as Date;\n    }\n\n    const date = new Date(value);\n\n    if (date.toString() === 'Invalid Date') {\n      throw ValidationError.invalidType(DateType, value, 'database');\n    }\n\n    return date;\n  }\n\n  getColumnType(prop: EntityProperty, platform: Platform) {\n    return `date(${prop.length})`;\n  }\n\n}\n")),(0,o.kt)("p",null,"Then you can use this type when defining your entity properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class FooBar {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Property({ type: DateType, length: 3 })\n  born?: Date;\n\n}\n")),(0,o.kt)("h2",{id:"types-provided-by-mikroorm"},"Types provided by MikroORM"),(0,o.kt)("p",null,"There are few types provided by MikroORM. All of them aim to provide similar\nexperience among all the drivers, even if the particular feature is not supported\nout of box by the driver."),(0,o.kt)("h3",{id:"arraytype"},"ArrayType"),(0,o.kt)("p",null,"In PostgreSQL and MongoDB, it uses native arrays, otherwise it concatenates the\nvalues into string separated by commas. This means that you can't use values that\ncontain comma with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayType")," (but you can create custom array type that will\nhandle this case, e.g. by using different separator)."),(0,o.kt)("p",null,"By default array of strings is returned from the type. You can also have arrays\nof numbers or other data types - to do so, you will need to implement custom\n",(0,o.kt)("inlineCode",{parentName:"p"},"hydrate")," method that is used for converting the array values to the right type."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"ArrayType")," will be used automatically if ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," (default behaviour\nof reflect-metadata) or ",(0,o.kt)("inlineCode",{parentName:"p"},"string[]")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"number[]")," (either manually or via ts-morph).\nIn case of ",(0,o.kt)("inlineCode",{parentName:"p"},"number[]")," it will automatically handle the conversion to numbers.\nThis means that the following examples would both have the ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayType")," used\nautomatically (but with reflect-metadata we would have a string array for both\nunless we specify the type manually as `type: 'number[]')")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Property({ type: ArrayType, nullable: true })\nstringArray?: string[];\n\n@Property({ type: new ArrayType(i => +i), nullable: true })\nnumericArray?: number[];\n")),(0,o.kt)("h3",{id:"biginttype"},"BigIntType"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"BigIntType")," to support ",(0,o.kt)("inlineCode",{parentName:"p"},"bigint"),"s. By default, it will represent the\nvalue as a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@PrimaryKey({ type: BigIntType })\nid: string;\n")),(0,o.kt)("h3",{id:"blobtype"},"BlobType"),(0,o.kt)("p",null,"Blob type can be used to store binary data in the database. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"BlobType")," will be used automatically if you specify the type hint as ",(0,o.kt)("inlineCode",{parentName:"p"},"Buffer"),".\nThis means that the following example should work even without the explicit\n",(0,o.kt)("inlineCode",{parentName:"p"},"type: BlobType")," option (with both reflect-metadata and ts-morph providers).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Property({ type: BlobType, nullable: true })\nblob?: Buffer;\n")),(0,o.kt)("h3",{id:"jsontype"},"JsonType"),(0,o.kt)("p",null,"To store objects we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonType"),". As some drivers are handling objects\nautomatically and some don't, this type will handle the serialization in a driver\nindependent way (calling ",(0,o.kt)("inlineCode",{parentName:"p"},"parse")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"stringify")," only when needed)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Property({ type: JsonType, nullable: true })\nobject?: { foo: string; bar: number };\n")),(0,o.kt)("h3",{id:"datetype"},"DateType"),(0,o.kt)("p",null,"To store dates without time information, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"DateType"),". It does use ",(0,o.kt)("inlineCode",{parentName:"p"},"date"),"\ncolumn type and maps it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Date")," object. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Property({ type: DateType, nullable: true })\nborn?: Date;\n")),(0,o.kt)("h3",{id:"timetype"},"TimeType"),(0,o.kt)("p",null,"As opposed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DateType"),", to store only the time information, we can use\n",(0,o.kt)("inlineCode",{parentName:"p"},"TimeType"),". It will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"time")," column type, the runtime type is string. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Property({ type: TimeType, nullable: true })\nbornTime?: string;\n")))}u.isMDXComponent=!0}}]);