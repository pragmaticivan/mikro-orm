(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72471],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?i.createElement(y,r(r({ref:t},d),{},{components:n})):i.createElement(y,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16881:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var i=n(74034),o=n(79973),a=(n(67294),n(3905)),r={title:"Usage with MongoDB"},l={unversionedId:"usage-with-mongo",id:"version-4.1/usage-with-mongo",isDocsHomePage:!1,title:"Usage with MongoDB",description:"To use mikro-orm with mongo database, do not forget to install mongodb dependency. As MongoDriver",source:"@site/versioned_docs/version-4.1/usage-with-mongo.md",sourceDirName:".",slug:"/usage-with-mongo",permalink:"/docs/4.1/usage-with-mongo",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.1/usage-with-mongo.md",version:"4.1",lastUpdatedBy:"Mati K\xe4rner",lastUpdatedAt:1622235565,formattedLastUpdatedAt:"5/28/2021",frontMatter:{title:"Usage with MongoDB"},sidebar:"version-4.1/docs",previous:{title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",permalink:"/docs/4.1/usage-with-sql"},next:{title:"Quick Start",permalink:"/docs/4.1/quick-start"}},s=[{value:"Defining entity",id:"defining-entity",children:[]},{value:"ObjectId and string id duality",id:"objectid-and-string-id-duality",children:[]},{value:"ManyToMany collections with inlined pivot array",id:"manytomany-collections-with-inlined-pivot-array",children:[]},{value:"Transactions",id:"transactions",children:[]},{value:"Indexes",id:"indexes",children:[]},{value:"Native collection methods",id:"native-collection-methods",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"mikro-orm")," with mongo database, do not forget to install ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb")," dependency. As ",(0,a.kt)("inlineCode",{parentName:"p"},"MongoDriver"),"\nis the default one, you do not need to provide it."),(0,a.kt)("p",null,"Then call ",(0,a.kt)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entities: [Author, Book, ...],\n  dbName: 'my-db-name',\n  clientUrl: '...',\n  type: 'mongo',\n});\n")),(0,a.kt)("h2",{id:"defining-entity"},"Defining entity"),(0,a.kt)("p",null,"When defining entity, do not forget to define primary key like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@PrimaryKey()\n_id: ObjectId;\n\n@SerializedPrimaryKey()\nid!: string; // won't be saved in the database\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only ",(0,a.kt)("inlineCode",{parentName:"p"},"_id: ObjectId")," will be saved in the database. ",(0,a.kt)("inlineCode",{parentName:"p"},"id: string")," is virtual and is\nalso optional. ")),(0,a.kt)("h2",{id:"objectid-and-string-id-duality"},"ObjectId and string id duality"),(0,a.kt)("p",null,"Every entity has both ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," id available, also all methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityRepository")," supports querying by both of them. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = orm.em.getReference('...id...');\nconsole.log(author.id);  // returns '...id...'\nconsole.log(author._id); // returns ObjectId('...id...')\n\n// all of those will return the same results\nconst article = '...article id...'; // string id\nconst book = '...book id...'; // string id\nconst repo = orm.em.getRepository(Author);\nconst foo1 = await repo.find({ id: { $in: [article] }, favouriteBook: book });\nconst bar1 = await repo.find({ id: { $in: [new ObjectId(article)] }, favouriteBook: new ObjectId(book) });\nconst foo2 = await repo.find({ _id: { $in: [article] }, favouriteBook: book });\nconst bar2 = await repo.find({ _id: { $in: [new ObjectId(article)] }, favouriteBook: new ObjectId(book) });\n")),(0,a.kt)("h2",{id:"manytomany-collections-with-inlined-pivot-array"},"ManyToMany collections with inlined pivot array"),(0,a.kt)("p",null,"As opposed to SQL drivers that use pivot tables, in mongo we can leverage available array type\nto store array of collection items (identifiers). This approach has two main benefits:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Collection is stored on owning side entity, so we know how many items are there even before\ninitializing the collection."),(0,a.kt)("li",{parentName:"ol"},"As there are no pivot tables, resulting database queries are much simpler.")),(0,a.kt)("h2",{id:"transactions"},"Transactions"),(0,a.kt)("p",null,"Starting with v3.4, MongoDB driver supports transactions. To use transactions, there\nare several things you need to respect:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"you need to use replica set (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/vkarpov15/run-rs"},"run-rs"),")"),(0,a.kt)("li",{parentName:"ul"},"implicit transactions are disabled by default",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"implicitTransactions: true")," to enable them globally"),(0,a.kt)("li",{parentName:"ul"},"or use explicit transaction demarcation via ",(0,a.kt)("inlineCode",{parentName:"li"},"em.transactional()")))),(0,a.kt)("li",{parentName:"ul"},"you need to explicitly create all collections before working with them",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"em.getDriver().createCollections()")," method to do so")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# first create replica set\n$ run-rs -v 4.2.3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MikroORM } from '@mikro-orm/core';\nimport { MongoDriver } from '@mikro-orm/mongodb';\n\n// make sure to provide the MongoDriver type hint\nconst orm = await MikroORM.init<MongoDriver>({\n  entities: [Author, Book, ...],\n  clientUrl: 'mongodb://localhost:27017,localhost:27018,localhost:27019/my-db-name?replicaSet=rs0',\n  type: 'mongo',\n  implicitTransactions: true, // defaults to false\n});\n\nawait orm.em.getDriver().createCollections();\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"createCollections")," method is present on the ",(0,a.kt)("inlineCode",{parentName:"p"},"MongoDriver")," class only. You need\nto have the entity manager correctly typed (as ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager<MongoDriver>"),").")),(0,a.kt)("h2",{id:"indexes"},"Indexes"),(0,a.kt)("p",null,"Starting with v3.4, MongoDB driver supports indexes and unique constraints. You can\nuse ",(0,a.kt)("inlineCode",{parentName:"p"},"@Index()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@Unique()")," as described in ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.1/defining-entities#indexes"},"Defining Entities section"),".\nTo automatically create new indexes when initializing the ORM, you need to enable\n",(0,a.kt)("inlineCode",{parentName:"p"},"ensureIndexes")," option. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entities: [Author, Book, ...],\n  dbName: 'my-db-name',\n  type: 'mongo',\n  ensureIndexes: true, // defaults to false\n});\n")),(0,a.kt)("p",null,"Alternatively you can call ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureIndexes()")," method on the ",(0,a.kt)("inlineCode",{parentName:"p"},"MongoDriver"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await orm.em.getDriver().ensureIndexes();\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can pass additional index/unique options via ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," parameter:"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"@Unique({ options: { partialFilterExpression: { name: { $exists: true } } }})"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can also create text indexes by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," parameter:"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"@Index({ properties: ['name', 'caption'], type: 'text' })"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you provide only ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," in the index definition, it will be used as is,\nthis allows to define any kind of index:"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"@Index({ options: { point: '2dsphere', title: -1 } })")," ")),(0,a.kt)("h2",{id:"native-collection-methods"},"Native collection methods"),(0,a.kt)("p",null,"Sometimes you need to perform some bulk operation, or you just want to populate your\ndatabase with initial fixtures. Using ORM for such operations can bring unnecessary\nboilerplate code. In this case, you can use one of ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeInsert/nativeUpdate/nativeDelete"),"\nmethods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"em.nativeInsert<T extends AnyEntity>(entityName: string, data: any): Promise<IPrimaryKey>;\nem.nativeUpdate<T extends AnyEntity>(entityName: string, where: FilterQuery<T>, data: any): Promise<number>;\nem.nativeDelete<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | any): Promise<number>;\n")),(0,a.kt)("p",null,"Those methods execute native driver methods like Mongo's ",(0,a.kt)("inlineCode",{parentName:"p"},"insertOne/updateMany/deleteMany")," collection methods respectively.\nThis is common interface for all drivers, so for MySQL driver, it will fire native SQL queries.\nKeep in mind that they do not hydrate results to entities, and they do not trigger lifecycle hooks. "),(0,a.kt)("p",null,"They are also available as ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityRepository")," shortcuts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"EntityRepository.nativeInsert(data: any): Promise<IPrimaryKey>;\nEntityRepository.nativeUpdate(where: FilterQuery<T>, data: any): Promise<number>;\nEntityRepository.nativeDelete(where: FilterQuery<T> | any): Promise<number>;\n")),(0,a.kt)("p",null,"There is also shortcut for calling ",(0,a.kt)("inlineCode",{parentName:"p"},"aggregate")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"em.aggregate(entityName: string, pipeline: any[]): Promise<any[]>;\nEntityRepository.aggregate(pipeline: any[]): Promise<any[]>;\n")))}d.isMDXComponent=!0}}]);