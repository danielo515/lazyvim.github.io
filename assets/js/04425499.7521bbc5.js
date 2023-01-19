"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[443],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,v=p["".concat(i,".").concat(d)]||p[d]||m[d]||s;return t?a.createElement(v,l(l({ref:n},c),{},{components:t})):a.createElement(v,l({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(6010);const s="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(7462),r=t(7294),s=t(6010),l=t(2389),o=t(7392),i=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:n,block:t,defaultValue:l,values:m,groupId:d,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,o.l)(g,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,i.U)(),[j,w]=(0,r.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=d){const e=y[d];null!=e&&e!==j&&g.some((n=>n.value===e))&&w(e)}const N=e=>{const n=e.currentTarget,t=T.indexOf(n),a=g[t].value;a!==j&&(x(n),w(a),null!=d&&k(d,String(a)))},O=e=>{let n=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},v)},g.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:e=>T.push(e),onKeyDown:O,onClick:N},l,{className:(0,s.Z)("tabs__item",p,l?.className,{"tabs__item--active":j===n})}),t??n)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==j})))))}function d(e){const n=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},3060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),s=t(5488),l=t(5162);const o={},i="JSON",u={unversionedId:"plugins/extras/lang.json",id:"plugins/extras/lang.json",title:"JSON",description:"To use this, add it to your lazy.nvim imports:",source:"@site/docs/plugins/extras/lang.json.md",sourceDirName:"plugins/extras",slug:"/plugins/extras/lang.json",permalink:"/plugins/extras/lang.json",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/extras/lang.json.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Editor",permalink:"/plugins/editor"},next:{title:"Typescript",permalink:"/plugins/extras/lang.typescript"}},c={},p=[{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"SchemaStore.nvim",id:"schemastorenvim",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"json"},"JSON"),(0,r.kt)("p",null,"To use this, add it to your ",(0,r.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua"',title:'"lua/config/lazy.lua"'},'require("lazy").setup({\n  spec = {\n    { "folke/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.json" },\n    { import = "plugins" },\n  },\n})\n')),(0,r.kt)("h2",{id:"nvim-treesitter"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,r.kt)("p",null," add json to treesitter"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  vim.list_extend(opts.ensure_installed, { "json", "json5", "jsonc" })\nend\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter",\n  opts = function(_, opts)\n    vim.list_extend(opts.ensure_installed, { "json", "json5", "jsonc" })\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-lspconfig"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,r.kt)("p",null," correctly setup lspconfig"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  -- make sure mason installs the server\n  servers = {\n    jsonls = {\n      -- lazy-load schemastore when needed\n      on_new_config = function(new_config)\n        new_config.settings.json.schemas = new_config.settings.json.schemas or {}\n        vim.list_extend(new_config.settings.json.schemas, require("schemastore").json.schemas())\n      end,\n      settings = {\n        json = {\n          format = {\n            enable = true,\n          },\n          validate = { enable = true },\n        },\n      },\n    },\n  },\n}\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  dependencies = {\n    "b0o/SchemaStore.nvim",\n    version = false, -- last release is way too old\n  },\n  opts = {\n    -- make sure mason installs the server\n    servers = {\n      jsonls = {\n        -- lazy-load schemastore when needed\n        on_new_config = function(new_config)\n          new_config.settings.json.schemas = new_config.settings.json.schemas or {}\n          vim.list_extend(new_config.settings.json.schemas, require("schemastore").json.schemas())\n        end,\n        settings = {\n          json = {\n            format = {\n              enable = true,\n            },\n            validate = { enable = true },\n          },\n        },\n      },\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"schemastorenvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/b0o/SchemaStore.nvim"},"SchemaStore.nvim")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "b0o/SchemaStore.nvim",\n  version = false, -- last release is way too old\n}\n')))))}d.isMDXComponent=!0}}]);