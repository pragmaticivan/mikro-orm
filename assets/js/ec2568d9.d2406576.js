(window.webpackJsonp=window.webpackJsonp||[]).push([[940],{1013:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n(3),a=n(8),r=(n(0),n(1110)),i={title:"Smart Nested Populate"},l={unversionedId:"nested-populate",id:"version-4.0/nested-populate",isDocsHomePage:!1,title:"Smart Nested Populate",description:"MikroORM is capable of loading large nested structures while maintaining good",source:"@site/versioned_docs/version-4.0/nested-populate.md",slug:"/nested-populate",permalink:"/docs/4.0/nested-populate",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.0/nested-populate.md",version:"4.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1617693942,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-4.0/docs",previous:{title:"Logging",permalink:"/docs/4.0/debugging"},next:{title:"Smart Query Conditions",permalink:"/docs/4.0/query-conditions"}},s=[{value:"Populating already loaded entities",id:"populating-already-loaded-entities",children:[]}],p={toc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"MikroORM")," is capable of loading large nested structures while maintaining good\nperformance, querying each database table only once. Imagine you have this nested\nstructure:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Book")," has one ",Object(r.b)("inlineCode",{parentName:"li"},"Publisher")," (M:1), one ",Object(r.b)("inlineCode",{parentName:"li"},"Author")," (M:1) and many ",Object(r.b)("inlineCode",{parentName:"li"},"BookTag"),"s (M:N)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Publisher")," has many ",Object(r.b)("inlineCode",{parentName:"li"},"Test"),"s (M:N)")),Object(r.b)("p",null,"When you use nested populate while querying all ",Object(r.b)("inlineCode",{parentName:"p"},"BookTag"),"s, this is what happens in\nthe background:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const tags = await orm.em.findAll(BookTag, ['books.publisher.tests', 'books.author']);\nconsole.log(tags[0].books[0].publisher.tests[0].name); // prints name of nested test\nconsole.log(tags[0].books[0].author.name); // prints name of nested author\n")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Load all ",Object(r.b)("inlineCode",{parentName:"li"},"BookTag"),"s"),Object(r.b)("li",{parentName:"ol"},"Load all ",Object(r.b)("inlineCode",{parentName:"li"},"Book"),"s associated with previously loaded ",Object(r.b)("inlineCode",{parentName:"li"},"BookTag"),"s"),Object(r.b)("li",{parentName:"ol"},"Load all ",Object(r.b)("inlineCode",{parentName:"li"},"Publisher"),"s associated with previously loaded ",Object(r.b)("inlineCode",{parentName:"li"},"Book"),"s"),Object(r.b)("li",{parentName:"ol"},"Load all ",Object(r.b)("inlineCode",{parentName:"li"},"Test"),"s associated with previously loaded ",Object(r.b)("inlineCode",{parentName:"li"},"Publisher"),"s"),Object(r.b)("li",{parentName:"ol"},"Load all ",Object(r.b)("inlineCode",{parentName:"li"},"Author"),"s associated with previously loaded ",Object(r.b)("inlineCode",{parentName:"li"},"Book"),"s")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can also populate all relationships by passing ",Object(r.b)("inlineCode",{parentName:"p"},"populate: true"),".")),Object(r.b)("p",null,"For SQL drivers with pivot tables this means:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"SELECT `e0`.* FROM `book_tag` AS `e0`;\n\nSELECT `e0`.*, `e1`.`book_id`, `e1`.`book_tag_id`\n  FROM `book` AS `e0` LEFT JOIN `book_to_book_tag` AS `e1` ON `e0`.`id` = `e1`.`book_id`\n  WHERE `e1`.`book_tag_id` IN (?, ?, ?, ?, ?)\n  ORDER BY `e1`.`id` ASC;\n\nSELECT `e0`.* FROM `publisher` AS `e0` WHERE `e0`.`id` IN (?, ?, ?);\n\nSELECT `e0`.*, `e1`.`test_id`, `e1`.`publisher_id`\n  FROM `test` AS `e0` LEFT JOIN `publisher_to_test` AS `e1` ON `e0`.`id` = `e1`.`test_id`\n  WHERE `e1`.`publisher_id` IN (?, ?, ?)\n  ORDER BY `e1`.`id` ASC;\n\nSELECT `e0`.* FROM `author` AS `e0` WHERE `e0`.`id` IN (?);\n")),Object(r.b)("p",null,"For mongo driver its even simpler as no pivot tables are involved:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},'db.getCollection("book-tag").find({}).toArray();\ndb.getCollection("book").find({"tags":{"$in":[...]}}).toArray();\ndb.getCollection("publisher").find({"_id":{"$in":[...]}}).toArray();\ndb.getCollection("test").find({"_id":{"$in":[...]}}).toArray();\ndb.getCollection("author").find({"_id":{"$in":[...]}}).toArray();\n')),Object(r.b)("h2",{id:"populating-already-loaded-entities"},"Populating already loaded entities"),Object(r.b)("p",null,"To populate existing entities, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"em.populate()"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const authors = await orm.em.createQueryBuilder(Author).select('*').getResult();\nawait em.populate(authors, ['books.tags']);\n\n// now your Author entities will have `books` collections populated, \n// as well as they will have their `tags` collections populated.\nconsole.log(authors[0].books[0].tags[0]); // initialized BookTag\n")))}c.isMDXComponent=!0},1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||r;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);