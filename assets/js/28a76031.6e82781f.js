(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89983],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),y=i,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},871:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(74034),i=n(79973),a=(n(67294),n(3905)),o={title:"Composite and Foreign Keys as Primary Key",sidebar_label:"Composite Primary Keys"},s=void 0,l={unversionedId:"composite-keys",id:"version-4.4/composite-keys",isDocsHomePage:!1,title:"Composite and Foreign Keys as Primary Key",description:"Support for composite keys was added in version 3.5",source:"@site/versioned_docs/version-4.4/composite-keys.md",sourceDirName:".",slug:"/composite-keys",permalink:"/docs/4.4/composite-keys",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/composite-keys.md",tags:[],version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1630048730,formattedLastUpdatedAt:"8/27/2021",frontMatter:{title:"Composite and Foreign Keys as Primary Key",sidebar_label:"Composite Primary Keys"},sidebar:"version-4.4/docs",previous:{title:"Hooks and Events",permalink:"/docs/4.4/lifecycle-hooks"},next:{title:"Custom Types",permalink:"/docs/4.4/custom-types"}},p=[{value:"General Considerations",id:"general-considerations",children:[]},{value:"Primitive Types only",id:"primitive-types-only",children:[]},{value:"Identity through foreign Entities",id:"identity-through-foreign-entities",children:[]},{value:"Use-Case 1: Dynamic Attributes",id:"use-case-1-dynamic-attributes",children:[]},{value:"Use-Case 2: Simple Derived Identity",id:"use-case-2-simple-derived-identity",children:[]},{value:"Use-Case 3: Join-Table with Metadata",id:"use-case-3-join-table-with-metadata",children:[]},{value:"Using QueryBuilder with composite keys",id:"using-querybuilder-with-composite-keys",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Support for composite keys was added in version 3.5")),(0,a.kt)("p",null,"MikroORM supports composite primary keys natively. Composite keys are a very powerful\nrelational database concept and we took good care to make sure MikroORM supports as\nmany of the composite primary key use-cases. MikroORM supports composite keys of primitive\ndata-types as well as foreign keys as primary keys. You can also use your composite key\nentities in relationships. "),(0,a.kt)("p",null,"This section shows how the semantics of composite primary keys work and how they map\nto the database."),(0,a.kt)("h2",{id:"general-considerations"},"General Considerations"),(0,a.kt)("p",null,"ID fields have to have their values set before you call ",(0,a.kt)("inlineCode",{parentName:"p"},"em.persist(entity)"),"."),(0,a.kt)("h2",{id:"primitive-types-only"},"Primitive Types only"),(0,a.kt)("p",null,"Suppose you want to create a database of cars and use the model-name and year of\nproduction as primary keys:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Car {\n\n  @PrimaryKey()\n  name: string;\n\n  @PrimaryKey()\n  year: number;\n\n  [PrimaryKeyType]: [string, number]; // this is needed for proper type checks in `FilterQuery`\n\n  constructor(name: string, year: number) {\n    this.name = name;\n    this.year = year;\n  }\n\n}\n")),(0,a.kt)("p",null,"Now you can use this entity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const car = new Car('Audi A8', 2010);\nawait em.persistAndFlush(car);\n")),(0,a.kt)("p",null,"And for querying you need to provide all primary keys in the condition or an array of\nprimary keys in the same order as the keys were defined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const audi1 = await em.findOneOrFail(Car, { name: 'Audi A8', year: 2010 });\nconst audi2 = await em.findOneOrFail(Car, ['Audi A8', 2010]);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If we want to use the second approach with primary key tuple, we will need to specify\nthe type of entity's primary key via ",(0,a.kt)("inlineCode",{parentName:"p"},"PrimaryKeyType")," symbol as shown in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Car")," entity.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"PrimaryKeyType")," is not needed when your entity has single scalar primary key under\none of following property names: ",(0,a.kt)("inlineCode",{parentName:"p"},"id: number | string | bigint"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"_id: any")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"uuid: string"),".")),(0,a.kt)("p",null,"You can also use this entity in associations. MikroORM will then generate two foreign\nkeys one for name and to year to the related entities."),(0,a.kt)("p",null,"This example shows how you can nicely solve the requirement for existing values before\n",(0,a.kt)("inlineCode",{parentName:"p"},"em.persist()"),": By adding them as mandatory values for the constructor."),(0,a.kt)("h2",{id:"identity-through-foreign-entities"},"Identity through foreign Entities"),(0,a.kt)("p",null,"There are tons of use-cases where the identity of an Entity should be determined by\nthe entity of one or many parent entities."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dynamic Attributes of an Entity (for example ",(0,a.kt)("inlineCode",{parentName:"li"},"Article"),"). Each Article has many\nattributes with primary key ",(0,a.kt)("inlineCode",{parentName:"li"},"article_id")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"attribute_name"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Address")," object of a ",(0,a.kt)("inlineCode",{parentName:"li"},"Person"),", the primary key of the address is ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),". This\nis not a case of a composite primary key, but the identity is derived through a\nforeign entity and a foreign key."),(0,a.kt)("li",{parentName:"ul"},"Pivot Tables with metadata can be modelled as Entity, for example connections between\ntwo articles with a little description and a score.")),(0,a.kt)("p",null,"The semantics of mapping identity through foreign entities are easy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only allowed on ",(0,a.kt)("inlineCode",{parentName:"li"},"@ManyToOnes")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"@OneToOne")," associations."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"primary: true")," in the decorator.")),(0,a.kt)("h2",{id:"use-case-1-dynamic-attributes"},"Use-Case 1: Dynamic Attributes"),(0,a.kt)("p",null,"We keep up the example of an Article with arbitrary attributes, the mapping looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Article {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  title!: string;\n\n  @OneToMany(() => ArticleAttribute, attr => attr.article, { cascade: Cascade.ALL })\n  attributes = new Collection<ArticleAttribute>(this);\n\n}\n\n@Entity()\nexport class ArticleAttribute {\n\n  @ManyToOne({ primary: true })\n  article: Article;\n\n  @PrimaryKey()\n  attribute: string;\n\n  @Property()\n  value!: string;\n\n  [PrimaryKeyType]: [number, string]; // this is needed for proper type checks in `FilterQuery`\n\n  constructor(name: string, value: string, article: Article) {\n    this.attribute = name;\n    this.value = value;\n    this.article = article;\n  }\n\n}\n")),(0,a.kt)("h2",{id:"use-case-2-simple-derived-identity"},"Use-Case 2: Simple Derived Identity"),(0,a.kt)("p",null,"Sometimes you have the requirement that two objects are related by a ",(0,a.kt)("inlineCode",{parentName:"p"},"@OneToOne"),"\nassociation and that the dependent class should re-use the primary key of the class\nit depends on. One good example for this is a user-address relationship:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @OneToOne(() => Address, address => address.user, { cascade: [Cascade.ALL] })\n  address?: Address; // virtual property (inverse side) to allow querying the relation\n\n}\n\n@Entity()\nexport class Address {\n\n  @OneToOne({ primary: true })\n  user!: User;\n\n  [PrimaryKeyType]: number; // this is needed for proper type checks in `FilterQuery`\n\n}\n")),(0,a.kt)("h2",{id:"use-case-3-join-table-with-metadata"},"Use-Case 3: Join-Table with Metadata"),(0,a.kt)("p",null,"In the classic order product shop example there is the concept of the order item which\ncontains references to order and product and additional data such as the amount of products\npurchased and maybe even the current price."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Order {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  customer: Customer;\n\n  @OneToMany(() => OrderItem, item => item.order)\n  items = new Collection<OrderItem>(this);\n\n  @Property()\n  paid = false;\n\n  @Property()\n  shipped = false;\n\n  @Property()\n  created = new Date();\n\n  constructor(customer: Customer) {\n    this.customer = customer;\n  }\n\n}\n\n@Entity()\nexport class Product {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Property()\n  currentPrice!: number;\n\n}\n\n@Entity()\nexport class OrderItem {\n\n  @ManyToOne({ primary: true })\n  order: Order;\n\n  @ManyToOne({ primary: true })\n  product: Product;\n\n  @Property()\n  amount = 1;\n\n  @Property()\n  offeredPrice: number;\n\n  [PrimaryKeyType]: [number, number]; // this is needed for proper type checks in `FilterQuery`\n\n  constructor(order: Order, product: Product, amount = 1) {\n    this.order = order;\n    this.product = product;\n    this.offeredPrice = product.currentPrice;\n  }\n\n}\n")),(0,a.kt)("h2",{id:"using-querybuilder-with-composite-keys"},"Using QueryBuilder with composite keys"),(0,a.kt)("p",null,"Internally composite keys are represented as tuples, containing all the values in the\nsame order as the primary keys were defined. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb1 = em.createQueryBuilder(CarOwner);\nqb1.select('*').where({ car: { name: 'Audi A8', year: 2010 } });\nconsole.log(qb1.getQuery());  // select `e0`.* from `car_owner` as `e0` where `e0`.`name` = ? and `e0`.`year` = ?\n\nconst qb2 = em.createQueryBuilder(CarOwner);\nqb2.select('*').where({ car: ['Audi A8', 2010] });\nconsole.log(qb2.getQuery());  // 'select `e0`.* from `car_owner` as `e0` where (`e0`.`car_name`, `e0`.`car_year`) = (?, ?)'\n\nconst qb3 = em.createQueryBuilder(CarOwner);\nqb3.select('*').where({ car: [['Audi A8', 2010]] });\nconsole.log(qb3.getQuery());  // 'select `e0`.* from `car_owner` as `e0` where (`e0`.`car_name`, `e0`.`car_year`) in ((?, ?))'\n")),(0,a.kt)("p",null,"This also applies when you want to get a reference to entity with composite key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const ref = em.getReference(Car, ['Audi A8', 2010]);\nconsole.log(ref instanceof Car); // true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/composite-primary-keys.html"},"doctrine tutorial"),"\nas the behaviour here is pretty much the same.")))}u.isMDXComponent=!0}}]);