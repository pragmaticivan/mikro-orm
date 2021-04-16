(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1131:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,u=d["".concat(i,".").concat(b)]||d[b]||m[b]||r;return n?a.a.createElement(u,s(s({ref:t},c),{},{components:n})):a.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(8),r=(n(0),n(1131)),i={title:"Installation & Usage"},s={unversionedId:"installation",id:"version-3.6/installation",isDocsHomePage:!1,title:"Installation & Usage",description:"First install the module via yarn or npm and do not forget to install the database driver as well:",source:"@site/versioned_docs/version-3.6/installation.md",slug:"/installation",permalink:"/docs/3.6/installation",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/installation.md",version:"3.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1618607567,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-3.6/docs",next:{title:"Defining Entities",permalink:"/docs/3.6/defining-entities"}},l=[{value:"Possible issues with circular dependencies",id:"possible-issues-with-circular-dependencies",children:[]},{value:"Entity Discovery in TypeScript",id:"entity-discovery-in-typescript",children:[]},{value:"Setting up the Commandline Tool",id:"setting-up-the-commandline-tool",children:[]},{value:"Request Context",id:"request-context",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"First install the module via ",Object(r.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," and do not forget to install the database driver as well:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ yarn add mikro-orm mongodb # for mongo\n$ yarn add mikro-orm mysql2  # for mysql/mariadb\n$ yarn add mikro-orm mariadb # for mysql/mariadb\n$ yarn add mikro-orm pg      # for postgresql\n$ yarn add mikro-orm sqlite3 # for sqlite\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ npm i -s mikro-orm mongodb # for mongo\n$ npm i -s mikro-orm mysql2  # for mysql/mariadb\n$ npm i -s mikro-orm mariadb # for mysql/mariadb\n$ npm i -s mikro-orm pg      # for postgresql\n$ npm i -s mikro-orm sqlite3 # for sqlite\n")),Object(r.b)("p",null,"Next you will need to enable support for ",Object(r.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html"},"decorators"),"\nas well as ",Object(r.b)("inlineCode",{parentName:"p"},"esModuleInterop")," in ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," via:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'"experimentalDecorators": true,\n"esModuleInterop": true\n')),Object(r.b)("p",null,"Then call ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entities: [Author, Book, BookTag],\n  dbName: 'my-db-name',\n  type: 'mongo', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`\n  clientUrl: '...', // defaults to 'mongodb://localhost:27017' for mongodb driver\n});\nconsole.log(orm.em); // access EntityManager via `em` property\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Read more about all the possible configuration options in ",Object(r.b)("a",{parentName:"p",href:"/docs/3.6/configuration"},"Advanced Configuration")," section.")),Object(r.b)("p",null,"You can also provide paths where you store your entities via ",Object(r.b)("inlineCode",{parentName:"p"},"entitiesDirs")," array. Internally\nit uses ",Object(r.b)("a",{parentName:"p",href:"https://github.com/sindresorhus/globby"},Object(r.b)("inlineCode",{parentName:"a"},"globby"))," so you can use\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/sindresorhus/globby#globbing-patterns"},"globbing patterns"),". "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entitiesDirs: ['./dist/app/**/entities'],\n  // ...\n});\n")),Object(r.b)("p",null,"You should provide list of directories, not paths to entities directly. If you want to do that\ninstead, you should use ",Object(r.b)("inlineCode",{parentName:"p"},"entities")," array and use ",Object(r.b)("inlineCode",{parentName:"p"},"globby")," manually:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import globby from 'globby';\n\nconst orm = await MikroORM.init({\n  entities: await (globby('./dist/app/**/entities/*.js')).map(require),\n  // ...\n});\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can pass additional options to the underlying driver (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"mysql2"),") via ",Object(r.b)("inlineCode",{parentName:"p"},"driverOptions"),".\nThe object will be deeply merged, overriding all internally used options.")),Object(r.b)("h2",{id:"possible-issues-with-circular-dependencies"},"Possible issues with circular dependencies"),Object(r.b)("p",null,"Your entities will most probably contain circular dependencies (e.g. if you use bi-directional\nrelationship). While this is fine, there might be issues caused by wrong order of entities\nduring discovery, especially when you are using the folder based way (via ",Object(r.b)("inlineCode",{parentName:"p"},"entitiesDirs"),")."),Object(r.b)("p",null,"The errors caused by circular dependencies are usually similar to this one:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"TypeError: Cannot read property 'name' of undefined\n    at Function.className (/path/to/project/node_modules/mikro-orm/dist/utils/Utils.js:253:28)\n    at TsMorphMetadataProvider.extractType (/path/to/project/node_modules/mikro-orm/dist/metadata/TsMorphMetadataProvider.js:37:34)\n    at TsMorphMetadataProvider.initProperties (/path/to/project/node_modules/mikro-orm/dist/metadata/TsMorphMetadataProvider.js:25:31)\n    at TsMorphMetadataProvider.loadEntityMetadata (/path/to/project/node_modules/mikro-orm/dist/metadata/TsMorphMetadataProvider.js:16:9)\n    at MetadataDiscovery.discoverEntity (/path/to/project/node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js:109:9)\n    at MetadataDiscovery.discoverDirectory (/path/to/project/node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js:80:13)\n    at Function.runSerial (/path/to/project/node_modules/mikro-orm/dist/utils/Utils.js:303:22)\n    at MetadataDiscovery.findEntities (/path/to/project/node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js:56:13)\n    at MetadataDiscovery.discover (/path/to/project/node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js:30:9)\n    at Function.init (/path/to/project/node_modules/mikro-orm/dist/MikroORM.js:45:24)\n    at Function.handleSchemaCommand (/path/to/project/node_modules/mikro-orm/dist/cli/SchemaCommandFactory.js:51:21)\n")),Object(r.b)("p",null,"If you encounter this, you have basically two options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"entities")," array to have control over the order of discovery. You might need to play with the actual\norder you provide here, or possibly with the order of import statements."),Object(r.b)("li",{parentName:"ul"},"Use strings instead of references (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"@OneToMany('Book', 'author')"),"). The downside here is that you\nwill loose the typechecking capabilities of the decorators. ")),Object(r.b)("h2",{id:"entity-discovery-in-typescript"},"Entity Discovery in TypeScript"),Object(r.b)("p",null,"Internally, ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM")," uses ",Object(r.b)("a",{parentName:"p",href:"/docs/3.6/metadata-providers"},Object(r.b)("inlineCode",{parentName:"a"},"ts-morph")," to perform analysis")," of source files\nof entities to sniff types of all properties. This process can be slow if your project contains lots\nof files. To speed up the discovery process a bit, you can provide more accurate paths where your\nentity source files are: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entitiesDirs: ['./dist/entities'], // path to your JS entities (dist), relative to `baseDir`\n  entitiesDirsTs: ['./src/entities'], // path to your TS entities (source), relative to `baseDir`\n  // ...\n});\n")),Object(r.b)("p",null,"You can also use different ",Object(r.b)("a",{parentName:"p",href:"/docs/3.6/metadata-providers"},"metadata provider")," or even write custom one:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ReflectMetadataProvider")," that uses ",Object(r.b)("inlineCode",{parentName:"li"},"reflect-metadata")," instead of ",Object(r.b)("inlineCode",{parentName:"li"},"ts-morph")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JavaScriptMetadataProvider")," that allows you to manually provide the entity schema (mainly for Vanilla JS)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  metadataProvider: ReflectMetadataProvider,\n  // ...\n});\n")),Object(r.b)("h2",{id:"setting-up-the-commandline-tool"},"Setting up the Commandline Tool"),Object(r.b)("p",null,"MikroORM ships with a number of command line tools that are very helpful during development,\nlike Schema Generator and Entity Generator. You can call this command from the NPM binary\ndirectory or use ",Object(r.b)("inlineCode",{parentName:"p"},"npx"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ node node_modules/.bin/mikro-orm\n$ npx mikro-orm\n\n# or when installed globally\n$ mikro-orm\n")),Object(r.b)("p",null,"For CLI to be able to access your database, you will need to create ",Object(r.b)("inlineCode",{parentName:"p"},"mikro-orm.config.js")," file that\nexports your ORM configuration. TypeScript is also supported, just enable ",Object(r.b)("inlineCode",{parentName:"p"},"useTsNode")," flag in your\n",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file. There you can also set up array of possible paths to ",Object(r.b)("inlineCode",{parentName:"p"},"mikro-orm.config")," file,\nas well as use different file name:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Do not forget to install ",Object(r.b)("inlineCode",{parentName:"p"},"ts-node")," when enabling ",Object(r.b)("inlineCode",{parentName:"p"},"useTsNode")," flag.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json",metastring:'title="./package.json"',title:'"./package.json"'},'{\n  "name": "your-app",\n  "dependencies": { ... },\n  "mikro-orm": {\n    "useTsNode": true,\n    "configPaths": [\n      "./src/mikro-orm.config.ts",\n      "./dist/mikro-orm.config.js"\n    ]\n  }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./src/mikro-orm.config.ts"',title:'"./src/mikro-orm.config.ts"'},"export default {\n  entities: [Author, Book, BookTag],\n  dbName: 'my-db-name',\n  type: 'mongo', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`\n};\n")),Object(r.b)("p",null,"Once you have the CLI config properly set up, you can omit the ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM.init()")," options\nparameter and the CLI config will be automatically used. "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can also use different names for this file, simply rename it in the ",Object(r.b)("inlineCode",{parentName:"p"},"configPaths")," array\nyour in ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),". You can also use ",Object(r.b)("inlineCode",{parentName:"p"},"MIKRO_ORM_CLI")," environment variable with the path\nto override ",Object(r.b)("inlineCode",{parentName:"p"},"configPaths")," value.")),Object(r.b)("p",null,"Now you should be able to start using the CLI. All available commands are listed in the CLI help:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"Usage: mikro-orm <command> [options]\n\nCommands:\n  mikro-orm cache:clear        Clear metadata cache\n  mikro-orm generate-entities  Generate entities based on current database schema\n  mikro-orm schema:create      Create database schema based on current metadata\n  mikro-orm schema:drop        Drop database schema based on current metadata\n  mikro-orm schema:update      Update database schema based on current metadata\n\nOptions:\n  -v, --version  Show version number                                   [boolean]\n  -h, --help     Show help                                             [boolean]\n\nExamples:\n  mikro-orm schema:update --run  Runs schema synchronization\n")),Object(r.b)("p",null,"To verify your setup, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"mikro-orm debug")," command."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"When you have CLI config properly set up, you can omit the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," parameter\nwhen calling ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM.init()"),".")),Object(r.b)("h2",{id:"request-context"},"Request Context"),Object(r.b)("p",null,"Then you will need to fork Entity Manager for each request so their identity maps will not\ncollide. To do so, use the ",Object(r.b)("inlineCode",{parentName:"p"},"RequestContext")," helper:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const app = express();\n\napp.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),Object(r.b)("p",null,"More info about ",Object(r.b)("inlineCode",{parentName:"p"},"RequestContext")," is described ",Object(r.b)("a",{parentName:"p",href:"/docs/3.6/identity-map#request-context"},"here"),"."),Object(r.b)("p",null,"Now you can start ",Object(r.b)("a",{parentName:"p",href:"/docs/3.6/defining-entities"},"defining your entities")," (in one of the ",Object(r.b)("inlineCode",{parentName:"p"},"entitiesDirs")," folders)."))}p.isMDXComponent=!0}}]);