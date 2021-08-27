(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29798],{3905:function(e,o,t){"use strict";t.d(o,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},p=function(e){var o=c(e.components);return n.createElement(l.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(g,i(i({ref:o},p),{},{components:t})):n.createElement(g,i({ref:o},p))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61598:function(e,o,t){"use strict";t.r(o),t.d(o,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=t(74034),r=t(79973),a=(t(67294),t(3905)),i={title:"Propagation"},s=void 0,l={unversionedId:"propagation",id:"version-4.5/propagation",isDocsHomePage:!1,title:"Propagation",description:"By default MikroORM will propagate all changes made to one side of bi-directional relations",source:"@site/versioned_docs/version-4.5/propagation.md",sourceDirName:".",slug:"/propagation",permalink:"/docs/propagation",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/propagation.md",tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1630048730,formattedLastUpdatedAt:"8/27/2021",frontMatter:{title:"Propagation"},sidebar:"version-4.5/docs",previous:{title:"Smart Query Conditions",permalink:"/docs/query-conditions"},next:{title:"Loading Strategies",permalink:"/docs/loading-strategies"}},c=[{value:"Propagation of Collection&#39;s add() and remove() operations",id:"propagation-of-collections-add-and-remove-operations",children:[]}],p={toc:c};function u(e){var o=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default MikroORM will propagate all changes made to one side of bi-directional relations\nto the other side, keeping them in sync. This works for all relations, including M:1 and 1:1.\nAs part of the discovery process, all M:1 and 1:1 properties are re-defined as getter/setter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = new Author(...);\nconst book = new Book(...);\nbook.author = author;\nconsole.log(author.books.contains(book)); // true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can disable this behaviour via ",(0,a.kt)("inlineCode",{parentName:"p"},"propagateToOneOwner")," option.")),(0,a.kt)("h2",{id:"propagation-of-collections-add-and-remove-operations"},"Propagation of Collection's add() and remove() operations"),(0,a.kt)("p",null,"When you use one of ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection.add()")," method, the item is added to given collection,\nand this action is also propagated to its counterpart. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// one to many\nconst author = new Author(...);\nconst book = new Book(...);\n\nauthor.books.add(book);\nconsole.log(book.author); // author will be set thanks to the propagation\n")),(0,a.kt)("p",null,"For M:N this works in both ways, either from owning side, or from inverse side. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// many to many works both from owning side and from inverse side\nconst book = new Book(...);\nconst tag = new BookTag(...);\n\nbook.tags.add(tag);\nconsole.log(tag.books.contains(book)); // true\n\ntag.books.add(book);\nconsole.log(book.tags.contains(tag)); // true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Collections on both sides have to be initialized, otherwise propagation won't work.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Although this propagation works also for M:N inverse side, you should always use owning\nside to manipulate the collection.")),(0,a.kt)("p",null,"Same applies for ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection.remove()"),"."))}u.isMDXComponent=!0}}]);