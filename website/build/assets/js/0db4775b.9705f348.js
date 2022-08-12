"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[400],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8405:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",hide_title:!0},o="Getting Started with Dockerize MERN App",l={unversionedId:"Introduction/getting-started",id:"Introduction/getting-started",title:"Getting Started",description:"Purpose",source:"@site/docs/Introduction/getting-started.md",sourceDirName:"Introduction",slug:"/Introduction/getting-started",permalink:"/docs/Introduction/getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Introduction/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",hide_title:!0},sidebar:"tutorialSidebar",next:{title:"Tutorial Intro 4",permalink:"/docs/Tutorials/intro-2"}},s={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Installation",id:"installation",level:2},{value:"Using Create React App",id:"using-create-react-app",level:3},{value:"An Existing App",id:"an-existing-app",level:3},{value:"What&#39;s Included",id:"whats-included",level:2},{value:"RTK Query",id:"rtk-query",level:2},{value:"What&#39;s included",id:"whats-included-1",level:3},{value:"Learn Redux",id:"learn-redux",level:2},{value:"Redux Essentials Tutorial",id:"redux-essentials-tutorial",level:3},{value:"Redux Fundamentals Tutorial",id:"redux-fundamentals-tutorial",level:3},{value:"Learn Modern Redux Livestream",id:"learn-modern-redux-livestream",level:3},{value:"Help and Discussion",id:"help-and-discussion",level:2}],p=(d="LiteYouTubeEmbed",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const c={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-dockerize-mern-app"},"Getting Started with Dockerize MERN App"),(0,n.kt)("h2",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Redux Toolkit")," package is intended to be the standard way to write ",(0,n.kt)("a",{parentName:"p",href:"https://redux.js.org"},"Redux")," logic. It was originally created to help address three common concerns about Redux:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"Configuring a Redux store is too complicated"'),(0,n.kt)("li",{parentName:"ul"},'"I have to add a lot of packages to get Redux to do anything useful"'),(0,n.kt)("li",{parentName:"ul"},'"Redux requires too much boilerplate code"')),(0,n.kt)("p",null,"We can't solve every use case, but in the spirit of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},(0,n.kt)("inlineCode",{parentName:"a"},"create-react-app")),", we can try to provide some tools that abstract over the setup process and handle the most common use cases, as well as include some useful utilities that will let the user simplify their application code."),(0,n.kt)("p",null,"Redux Toolkit also includes a powerful data fetching and caching capability that we've dubbed ",(0,n.kt)("a",{parentName:"p",href:"#rtk-query"},'"RTK Query"'),". It's included in the package as a separate set of entry points. It's optional, but can eliminate the need to hand-write data fetching logic yourself."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"These tools should be beneficial to all Redux users"),". Whether you're a brand new Redux user setting up your\nfirst project, or an experienced user who wants to simplify an existing application, ",(0,n.kt)("strong",{parentName:"p"},"Redux Toolkit")," can help\nyou make your Redux code better."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("h3",{id:"using-create-react-app"},"Using Create React App"),(0,n.kt)("p",null,"The recommended way to start new apps with React and Redux is by using the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/cra-template-redux"},"official Redux+JS template")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/cra-template-redux-typescript"},"Redux+TS template")," for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"Create React App"),", which takes advantage of ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://redux-toolkit.js.org/"},"Redux Toolkit"))," and React Redux's integration with React components."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Redux + Plain JS template\nnpx create-react-app my-app --template redux\n\n# Redux + TypeScript template\nnpx create-react-app my-app --template redux-typescript\n")),(0,n.kt)("h3",{id:"an-existing-app"},"An Existing App"),(0,n.kt)("p",null,"Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install @reduxjs/toolkit\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Yarn\nyarn add @reduxjs/toolkit\n")),(0,n.kt)("p",null,"It is also available as a precompiled UMD package that defines a ",(0,n.kt)("inlineCode",{parentName:"p"},"window.RTK")," global variable.\nThe UMD package can be used as a ",(0,n.kt)("a",{parentName:"p",href:"https://unpkg.com/@reduxjs/toolkit/dist/redux-toolkit.umd.js"},(0,n.kt)("inlineCode",{parentName:"a"},"<script>")," tag")," directly."),(0,n.kt)("h2",{id:"whats-included"},"What's Included"),(0,n.kt)("p",null,"Redux Toolkit includes these APIs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/configureStore.mdx"},(0,n.kt)("inlineCode",{parentName:"a"},"configureStore()")),": wraps ",(0,n.kt)("inlineCode",{parentName:"li"},"createStore")," to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes ",(0,n.kt)("inlineCode",{parentName:"li"},"redux-thunk")," by default, and enables use of the Redux DevTools Extension."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/createReducer.mdx"},(0,n.kt)("inlineCode",{parentName:"a"},"createReducer()")),": that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/immerjs/immer"},(0,n.kt)("inlineCode",{parentName:"a"},"immer")," library")," to let you write simpler immutable updates with normal mutative code, like ",(0,n.kt)("inlineCode",{parentName:"li"},"state.todos[3].completed = true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/createAction.mdx"},(0,n.kt)("inlineCode",{parentName:"a"},"createAction()")),": generates an action creator function for the given action type string. The function itself has ",(0,n.kt)("inlineCode",{parentName:"li"},"toString()")," defined, so that it can be used in place of the type constant."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/createSlice.mdx"},(0,n.kt)("inlineCode",{parentName:"a"},"createSlice()")),": accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/createAsyncThunk.mdx"},(0,n.kt)("inlineCode",{parentName:"a"},"createAsyncThunk")),": accepts an action type string and a function that returns a promise, and generates a thunk that dispatches ",(0,n.kt)("inlineCode",{parentName:"li"},"pending/fulfilled/rejected")," action types based on that promise"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/createEntityAdapter.mdx"},(0,n.kt)("inlineCode",{parentName:"a"},"createEntityAdapter")),": generates a set of reusable reducers and selectors to manage normalized data in the store"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"../api/createSelector.mdx"},(0,n.kt)("inlineCode",{parentName:"a"},"createSelector")," utility")," from the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/reselect"},"Reselect")," library, re-exported for ease of use.")),(0,n.kt)("h2",{id:"rtk-query"},"RTK Query"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../rtk-query/overview.md"},(0,n.kt)("strong",{parentName:"a"},"RTK Query"))," is provided as an optional addon within the ",(0,n.kt)("inlineCode",{parentName:"p"},"@reduxjs/toolkit")," package. It is purpose-built to solve the use case of data fetching and caching, supplying a compact, but powerful toolset to define an API interface layer for your app. It is intended to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself."),(0,n.kt)("p",null,"RTK Query is built on top of the Redux Toolkit core for its implementation, using ",(0,n.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux")," internally for its architecture. Although knowledge of Redux and RTK are not required to use RTK Query, you should explore all of the additional global store management capabilities they provide, as well as installing the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"Redux DevTools browser extension"),", which works flawlessly with RTK Query to traverse and replay a timeline of your request & cache behavior."),(0,n.kt)("p",null,"RTK Query is included within the installation of the core Redux Toolkit package. It is available via either of the two entry points below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"import { createApi } from '@reduxjs/toolkit/query'\n\n/* React-specific entry point that automatically generates\n   hooks corresponding to the defined endpoints */\nimport { createApi } from '@reduxjs/toolkit/query/react'\n")),(0,n.kt)("h3",{id:"whats-included-1"},"What's included"),(0,n.kt)("p",null,"RTK Query includes these APIs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../rtk-query/api/createApi.mdx"},(0,n.kt)("inlineCode",{parentName:"a"},"createApi()")),': The core of RTK Query\'s functionality. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../rtk-query/api/fetchBaseQuery.mdx"},(0,n.kt)("inlineCode",{parentName:"a"},"fetchBaseQuery()")),": A small wrapper around ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},(0,n.kt)("inlineCode",{parentName:"a"},"fetch"))," that aims to simplify requests. Intended as the recommended ",(0,n.kt)("inlineCode",{parentName:"li"},"baseQuery")," to be used in ",(0,n.kt)("inlineCode",{parentName:"li"},"createApi")," for the majority of users."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../rtk-query/api/ApiProvider.mdx"},(0,n.kt)("inlineCode",{parentName:"a"},"<ApiProvider />")),": Can be used as a ",(0,n.kt)("inlineCode",{parentName:"li"},"Provider")," if you ",(0,n.kt)("strong",{parentName:"li"},"do not already have a Redux store"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../rtk-query/api/setupListeners.mdx"},(0,n.kt)("inlineCode",{parentName:"a"},"setupListeners()")),": A utility used to enable ",(0,n.kt)("inlineCode",{parentName:"li"},"refetchOnMount")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"refetchOnReconnect")," behaviors.")),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"../rtk-query/overview.md"},(0,n.kt)("strong",{parentName:"a"},"RTK Query Overview"))," page for more details on what RTK Query is, what problems it solves, and how to use it."),(0,n.kt)("h2",{id:"learn-redux"},"Learn Redux"),(0,n.kt)("p",null,"We have a variety of resources available to help you learn Redux."),(0,n.kt)("h3",{id:"redux-essentials-tutorial"},"Redux Essentials Tutorial"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/essentials/part-1-overview-concepts"},(0,n.kt)("strong",{parentName:"a"},"Redux Essentials tutorial")),' is a "top-down" tutorial that teaches "how to use Redux the right way", using our latest recommended APIs and best practices. We recommend starting there.'),(0,n.kt)("h3",{id:"redux-fundamentals-tutorial"},"Redux Fundamentals Tutorial"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-1-overview"},(0,n.kt)("strong",{parentName:"a"},"Redux Fundamentals tutorial")),' is a "bottom-up" tutorial that teaches "how Redux works" from first principles and without any abstractions, and why standard Redux usage patterns exist.'),(0,n.kt)("h3",{id:"learn-modern-redux-livestream"},"Learn Modern Redux Livestream"),(0,n.kt)("p",null,'Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with Typescript, as well as the new RTK Query data fetching APIs.'),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://www.learnwithjason.dev/let-s-learn-modern-redux"},'the "Learn Modern Redux" show notes page')," for a transcript and links to the example app source."),(0,n.kt)(p,{id:"9zySeP5vH9c",title:"Learn Modern Redux - Redux Toolkit, React-Redux Hooks, and RTK Query",mdxType:"LiteYouTubeEmbed"}),(0,n.kt)("h2",{id:"help-and-discussion"},"Help and Discussion"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://discord.gg/0ZcbPKXt5bZ6au5t"},"#redux channel"))," of the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"http://www.reactiflux.com"},"Reactiflux Discord community"))," is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us!"),(0,n.kt)("p",null,"You can also ask questions on ",(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com"},"Stack Overflow")," using the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://stackoverflow.com/questions/tagged/redux"},"#redux tag")),"."))}m.isMDXComponent=!0}}]);