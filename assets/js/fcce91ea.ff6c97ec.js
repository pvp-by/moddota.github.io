"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),p=a,f=c["".concat(s,".").concat(p)]||c[p]||m[p]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>l,Z:()=>o});var r=n(2263),a=n(3919);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=l();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);const a=function({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7294),a=n(944),l=n(6010);const o="tabItem_1uMI",i="tabItemActive_2DSg";const s=37,d=39;const u=function(e){const{lazy:t,block:n,defaultValue:u,values:m,groupId:c,className:p}=e,{tabGroupChoices:f,setTabGroupChoices:g}=(0,a.Z)(),[h,k]=(0,r.useState)(u),v=r.Children.toArray(e.children),b=[];if(null!=c){const e=f[c];null!=e&&e!==h&&m.some((t=>t.value===e))&&k(e)}const y=e=>{const t=e.currentTarget,n=b.indexOf(t),r=m[n].value;k(r),null!=c&&(g(c,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:a}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:o}=window;return t>=0&&a<=o&&r<=l&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((()=>t.classList.remove(i)),2e3))}),150))},N=e=>{var t;let n;switch(e.keyCode){case d:{const t=b.indexOf(e.target)+1;n=b[t]||b[0];break}case s:{const t=b.indexOf(e.target)-1;n=b[t]||b[b.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},p)},m.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===e}),key:e,ref:e=>b.push(e),onKeyDown:N,onFocus:y,onClick:y},t)))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(9443);const l=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,n)=>{n.d(t,{s:()=>a});var r=n(7294);function a({id:e,aspectRatio:t=4/3,hd:n="0"}){return r.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},r.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,n)=>{n.d(t,{s:()=>s});var r=n(2177),a=n(8215),l=n(1395),o=n(7294);const i={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t,titles:n}){(0,r.Z)("string"==typeof t||void 0===t);const s=o.Children.toArray(e).map(((e,t)=>{var r;const a=(null==(r=e.props.children.props.className)?void 0:r.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==n&&n.length>0?n.split("|"):[])[t]??i[a]??a,element:e}}));return o.createElement(l.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:s[0].id,values:s.map((({id:e,languageName:t})=>({value:e,label:t})))},s.map((({id:e,element:t})=>o.createElement(a.Z,{key:e,value:e},t))))}},6776:(e,t,n)=>{n.d(t,{X:()=>l});var r=n(4996),a=n(7294);function l({path:e,controls:t=!1}){return a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},a.createElement("source",{src:(0,r.Z)(e),type:"video/mp4"}))}},8129:(e,t,n)=>{n.d(t,{_:()=>a});var r=n(7294);function a({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return r.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},r.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},1387:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>o,toc:()=>i,default:()=>d});var r=n(7462),a=(n(7294),n(3905));n(1395),n(8215),n(7840),n(8129),n(8173),n(6776);const l={title:"Asset File Type Reference",author:"Noya",steamId:"76561198046984233",date:"28.05.2015"},o={unversionedId:"assets/asset-file-type-reference",id:"assets/asset-file-type-reference",isDocsHomePage:!1,title:"Asset File Type Reference",description:"This list contains all the info for asset types with its related tools & guides explaining the formats.",source:"@site/_articles/assets/asset-file-type-reference.md",sourceDirName:"assets",slug:"/assets/asset-file-type-reference",permalink:"/assets/asset-file-type-reference",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/asset-file-type-reference.md",version:"current",frontMatter:{title:"Asset File Type Reference",author:"Noya",steamId:"76561198046984233",date:"28.05.2015"},sidebar:"tutorials",previous:{title:"React in Panorama",permalink:"/panorama/react"},next:{title:"Hammer Tutorials",permalink:"/assets/maps/hammer-tutorials"}},i=[],s={toc:i};function d({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This list contains all the info for asset types with its related tools & guides explaining the formats."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},".Extension"),(0,a.kt)("th",{parentName:"tr",align:null},"S1 Equivalent"),(0,a.kt)("th",{parentName:"tr",align:null},"Info, Format, Decompiler"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Animation"),(0,a.kt)("td",{parentName:"tr",align:null},"vanim"),(0,a.kt)("td",{parentName:"tr",align:null},"smd"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},".smd")," files are added to a ",(0,a.kt)("em",{parentName:"td"},".vmdl")," through the Model Editor to make ",(0,a.kt)("em",{parentName:"td"},".vanim")," files.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Animation Sequence"),(0,a.kt)("td",{parentName:"tr",align:null},"vgarp"),(0,a.kt)("td",{parentName:"tr",align:null},"?"),(0,a.kt)("td",{parentName:"tr",align:null},"??")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Map"),(0,a.kt)("td",{parentName:"tr",align:null},"vmap"),(0,a.kt)("td",{parentName:"tr",align:null},"vmf"),(0,a.kt)("td",{parentName:"tr",align:null},"Hammer Files.",(0,a.kt)("br",null),"No decompiler known to humans yet, but it is rumored that a magical penguin is working on it")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Material"),(0,a.kt)("td",{parentName:"tr",align:null},"vmat"),(0,a.kt)("td",{parentName:"tr",align:null},"vmt"),(0,a.kt)("td",{parentName:"tr",align:null},"Made with .tga files in the Material Editor.",(0,a.kt)("br",null)," Decompiler: ",(0,a.kt)("a",{parentName:"td",href:"https://moddota.com/forums/discussion/264/source-2-decompiler"},"S2DC"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Model"),(0,a.kt)("td",{parentName:"tr",align:null},"vmdl"),(0,a.kt)("td",{parentName:"tr",align:null},"mdl"),(0,a.kt)("td",{parentName:"tr",align:null},"Decompilation Guide: ",(0,a.kt)("a",{parentName:"td",href:"models/mdl-to-vmdl-conversion"},"MDL to VMDL Conversion"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mesh"),(0,a.kt)("td",{parentName:"tr",align:null},"vmesh"),(0,a.kt)("td",{parentName:"tr",align:null},"smd,dmx,fbx"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the shape of a model.",(0,a.kt)("br",null),"Loaded to the Model editor to make a new model.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Particle"),(0,a.kt)("td",{parentName:"tr",align:null},"vpcf"),(0,a.kt)("td",{parentName:"tr",align:null},"pcf"),(0,a.kt)("td",{parentName:"tr",align:null},"Decompiler: ",(0,a.kt)("a",{parentName:"td",href:"https://moddota.com/forums/discussion/264/source-2-decompiler"},"S2DC"),(0,a.kt)("br",null),"No method yet known for PCF to VPCF conversion.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sound"),(0,a.kt)("td",{parentName:"tr",align:null},"vsnd"),(0,a.kt)("td",{parentName:"tr",align:null},"wav"),(0,a.kt)("td",{parentName:"tr",align:null},"Takes wav/mp3 files and converts them to this file through a ",(0,a.kt)("em",{parentName:"td"},".vsndevts"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sound Event"),(0,a.kt)("td",{parentName:"tr",align:null},"vsndevts"),(0,a.kt)("td",{parentName:"tr",align:null},"txt"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/pingzing/dota2-sound-editor"},"Sound Editor")," reads the Source 1 strings which are identical to the ones used in Source 2.",(0,a.kt)("br",null),"Guide: ",(0,a.kt)("a",{parentName:"td",href:"custom-sounds"},"Adding and playing Custom Sounds"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Texture"),(0,a.kt)("td",{parentName:"tr",align:null},"vtex"),(0,a.kt)("td",{parentName:"tr",align:null},"vtx"),(0,a.kt)("td",{parentName:"tr",align:null},"Compiled out of .tga files.",(0,a.kt)("br",null),"Compiler/Decompiler: ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/Myll/Dota-2-ModKit/releases"},"ModKit"),(0,a.kt)("br",null),"Guide: ",(0,a.kt)("a",{parentName:"td",href:"http://moddota.com/forums/discussion/85/extracting-and-compiling-vtex-files"},"Extracting and Compiling VTEX files"))))),(0,a.kt)("p",null,"It will be updated as we get more knowledge and build more tools for file decompiling and conversion."))}d.isMDXComponent=!0},6010:(e,t,n)=>{function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);