"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[1833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,f=m["".concat(s,".").concat(p)]||m[p]||c[p]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>r})},4996:(e,t,n)=>{n.d(t,{C:()=>o,Z:()=>i});var a=n(2263),r=n(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),r=n(944),o=n(6010);const i="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,u=39;const d=function(e){const{lazy:t,block:n,defaultValue:d,values:c,groupId:m,className:p}=e,{tabGroupChoices:f,setTabGroupChoices:h}=(0,r.Z)(),[y,g]=(0,a.useState)(d),b=a.Children.toArray(e.children),k=[];if(null!=m){const e=f[m];null!=e&&e!==y&&c.some((t=>t.value===e))&&g(e)}const v=e=>{const t=e.currentTarget,n=k.indexOf(t),a=c[n].value;g(a),null!=m&&(h(m,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&r<=i&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},w=e=>{var t;let n;switch(e.keyCode){case u:{const t=k.indexOf(e.target)+1;n=k[t]||k[0];break}case s:{const t=k.indexOf(e.target)-1;n=k[t]||k[k.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},p)},c.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":y===e}),key:e,ref:e=>k.push(e),onKeyDown:w,onFocus:v,onClick:v},t)))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(9443);const o=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,n)=>{n.d(t,{s:()=>r});var a=n(7294);function r({id:e,aspectRatio:t=4/3,hd:n="0"}){return a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,n)=>{n.d(t,{s:()=>s});var a=n(2177),r=n(8215),o=n(1395),i=n(7294);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t,titles:n}){(0,a.Z)("string"==typeof t||void 0===t);const s=i.Children.toArray(e).map(((e,t)=>{var a;const r=(null==(a=e.props.children.props.className)?void 0:a.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==n&&n.length>0?n.split("|"):[])[t]??l[r]??r,element:e}}));return i.createElement(o.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:s[0].id,values:s.map((({id:e,languageName:t})=>({value:e,label:t})))},s.map((({id:e,element:t})=>i.createElement(r.Z,{key:e,value:e},t))))}},6776:(e,t,n)=>{n.d(t,{X:()=>o});var a=n(4996),r=n(7294);function o({path:e,controls:t=!1}){return r.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},r.createElement("source",{src:(0,a.Z)(e),type:"video/mp4"}))}},8129:(e,t,n)=>{n.d(t,{_:()=>r});var a=n(7294);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const r=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.createElement("iframe",{src:r,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8087:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,metadata:()=>i,toc:()=>l,default:()=>u});var a=n(7462),r=(n(7294),n(3905));n(1395),n(8215),n(7840),n(8129),n(8173),n(6776);const o={title:"Keybindings",author:"ole",steamId:"76561197966853265",date:"24.07.2015"},i={unversionedId:"panorama/keybindings",id:"panorama/keybindings",isDocsHomePage:!1,title:"Keybindings",description:"Introduction",source:"@site/_articles/panorama/keybindings.md",sourceDirName:"panorama",slug:"/panorama/keybindings",permalink:"/panorama/keybindings",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/keybindings.md",version:"current",frontMatter:{title:"Keybindings",author:"ole",steamId:"76561197966853265",date:"24.07.2015"},sidebar:"tutorials",previous:{title:"Introduction to Panorama UI with TypeScript",permalink:"/panorama/introduction-to-panorama-ui-with-typescript"},next:{title:"DOTAScenePanel",permalink:"/panorama/dotascenepanel"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Panorama",id:"panorama",children:[]}],s={toc:l};function u({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"With the recent update (20th of july) valve added support for custom keybindings. That is, you can bind key's to fire a custom command."),(0,r.kt)("p",null,"The technique used is derived from rpg_example."),(0,r.kt)("p",null,"Although this method is not nescessarily limited to panorama this tutorial will focus on using them within panorama."),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Start by adding a couple of lines to your ",(0,r.kt)("inlineCode",{parentName:"p"},"addoninfo.txt")," file located in ",(0,r.kt)("inlineCode",{parentName:"p"},"/game/<your addon>/addoninfo.txt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"AddonInfo"\n{\n  "TeamCount" "10"\n  "maps"      "your_map"\n  "IsPlayable"  "1"\n  "your_map"\n  {\n          "MaxPlayers"                    "10"\n  }\n  "Default_Keys"\n    {\n        "01"\n        {\n            "Key"       "S"\n            "Command"   "CustomGameExecuteAbility1"\n            "Name"      "Execute Ability 1"\n        }\n        "02"\n        {\n            "Key"       "Z"\n            "Command"   "+CustomGameTestButton"\n            "Name"      "Example"\n        }\n    }\n}\n')),(0,r.kt)("p",null,"The important parts are of course what is defined in ",(0,r.kt)("inlineCode",{parentName:"p"},'"Default_Keys"')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"Key"'),"\nis the key you want to bind, use capital letters here"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"Command"'),"\nis the command to fire, make sure the command name is unique.",(0,r.kt)("br",{parentName:"p"}),"\n","The prefix of the command defines when the command will trigger."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"Name"'),"\nName of the command, used for debugging purposes."),(0,r.kt)("p",null,"####Command Prefixes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(nothing)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"command")),(0,r.kt)("td",{parentName:"tr",align:null},"Command will trigger on press and release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"+")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"+command")),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger when key is pressed (used for normal key press)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"-")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"-command")),(0,r.kt)("td",{parentName:"tr",align:null},"Command will trigger when key is released")))),(0,r.kt)("p",null,"The prefixes do not lock the command to be triggered only in that event. But is a good self-reference for what you want the keybind to do."),(0,r.kt)("h3",{id:"panorama"},"Panorama"),(0,r.kt)("p",null,"Catching the keybind commands in Panorama is easy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'function OnExecuteAbility1ButtonPressed()\n{\n  $.Msg("\'S\' Pressed or Released");\n}\n\nfunction OnTestButtonPressed()\n{\n  $.Msg("\'Z\' Pressed");\n}\n\nfunction OnTestButtonReleased()\n{\n  $.Msg("\'Z\' Released");\n}\n\n(function() {\n  Game.AddCommand( "CustomGameExecuteAbility1", OnExecuteAbility1ButtonPressed, "", 0 );\n  Game.AddCommand( "+CustomGameTestButton", OnTestButtonPressed, "", 0 );\n  Game.AddCommand( "-CustomGameTestButton", OnTestButtonReleased, "", 0 );\n})();\n')),(0,r.kt)("p",null,"Note how the prefixes are used again. Even though we only defined ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomGameTestButton")," to be fired on ",(0,r.kt)("em",{parentName:"p"},"key down"),", we can easily catch the release event in our JS aswell."))}u.isMDXComponent=!0},6010:(e,t,n)=>{function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);