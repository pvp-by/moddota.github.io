(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{187:function(e,t,i){"use strict";var a=i(0),n=i.n(a),r=i(194),o=i(191),s=i(90),c=i.n(s);const l=37,d=39;t.a=function(e){const{block:t,children:i,defaultValue:s,values:p,groupId:b}=e,{tabGroupChoices:u,setTabGroupChoices:h}=Object(r.a)(),[m,f]=Object(a.useState)(s);if(null!=b){const e=u[b];null!=e&&e!==m&&p.some(t=>t.value===e)&&f(e)}const y=e=>{f(e),null!=b&&h(b,e)},g=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,i)=>{switch(i.keyCode){case d:((e,t)=>{const i=e.indexOf(t)+1;e[i]?e[i].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const i=e.indexOf(t)-1;e[i]?e[i].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(i).filter(e=>e.props.value===m)[0]))}},188:function(e,t,i){"use strict";var a=i(0),n=i.n(a);t.a=function(e){return n.a.createElement("div",null,e.children)}},189:function(e,t,i){"use strict";var a=i(0),n=i(34);t.a=function(){return Object(a.useContext)(n.a)}},190:function(e,t,i){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}i.d(t,"a",(function(){return a}))},191:function(e,t,i){"use strict";function a(e){var t,i,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=a(e[t]))&&(n&&(n+=" "),n+=i);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,i=0,n="";i<arguments.length;)(e=arguments[i++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}},192:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var a=i(189),n=i(190);function r(e,{forcePrependBaseUrl:t=!1,absolute:i=!1}={}){const{siteConfig:{baseUrl:r="/",url:o}={}}=Object(a.a)();if(!e)return e;if(t)return r+e;if(!Object(n.a)(e))return e;const s=r+e.replace(/^\//,"");return i?o+s:s}},193:function(e,t,i){"use strict";var a=i(0);const n=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=n},194:function(e,t,i){"use strict";var a=i(0),n=i(193);t.a=function(){return Object(a.useContext)(n.a)}},195:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return h}));var a=i(0),n=i.n(a);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(i),u=a,h=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return i?n.a.createElement(h,s(s({ref:t},l),{},{components:i})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},196:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var a=i(0),n=i.n(a);function r({id:e,aspectRatio:t=4/3,hd:i="0"}){return n.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},n.a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${i}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},197:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var a=i(0),n=i.n(a);function r({id:e,playlistId:t,aspectRatio:i=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return n.a.createElement("p",{style:{position:"relative",paddingBottom:1/i*100+"%"}},n.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},198:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var a=i(3),n=i(188),r=i(187),o=i(0),s=i.n(o);const c={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function l({children:e,group:t,titles:i}){Object(a.a)("string"==typeof t||void 0===t);const o=s.a.Children.toArray(e).map((e,t)=>{var a,n,r,o;const s=null!==(a=null===(n=e.props.children.props.className)||void 0===n?void 0:n.replace(/language-/,""))&&void 0!==a?a:"Tab "+(t+1);return{id:t,languageName:null!==(r=null!==(o=(void 0!==i&&i.length>0?i.split("|"):[])[t])&&void 0!==o?o:c[s])&&void 0!==r?r:s,element:e}});return s.a.createElement(r.a,{groupId:void 0!==t?"multi-code-block-"+t:void 0,defaultValue:o[0].id,values:o.map(({id:e,languageName:t})=>({value:e,label:t}))},o.map(({id:e,element:t})=>s.a.createElement(n.a,{key:e,value:e},t)))}},199:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var a=i(192),n=i(0),r=i.n(n);function o({path:e,controls:t=!1}){return r.a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},r.a.createElement("source",{src:Object(a.a)(e),type:"video/mp4"}))}},99:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return d}));var a=i(2),n=(i(0),i(195)),r=(i(187),i(188),i(196),i(197),i(198));i(199);const o={title:"Modifiers in Typescript",author:"Shush",steamId:76561197994333650,date:"07.03.2021"},s={id:"scripting/Typescript/typescript-modifier",isDocsHomePage:!1,title:"Modifiers in Typescript",description:"Modifiers are an extremely important part of almost any Dota custom game. They allow you to modify certain properties of your hero, deal damage to it over time, or apply various effects on it. Like abilities, we'll also create them in Typescript.",source:"@site/_articles/scripting/Typescript/typescript-modifier.md",permalink:"/scripting/Typescript/typescript-modifier",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/Typescript/typescript-modifier.md",sidebar:"tutorials",previous:{title:"Abilities in Typescript",permalink:"/scripting/Typescript/typescript-ability"},next:{title:"Tooltip Generator",permalink:"/scripting/Typescript/tooltip-generator"}},c=[{value:"Defining The Ability",id:"defining-the-ability",children:[]},{value:"Coding The Ability",id:"coding-the-ability",children:[]},{value:"Creating The Modifier",id:"creating-the-modifier",children:[]},{value:"Typechecking Modifier Calls",id:"typechecking-modifier-calls",children:[]},{value:"Coding The Modifier",id:"coding-the-modifier",children:[]},{value:"States",id:"states",children:[]},{value:"Modifier Properties",id:"modifier-properties",children:[]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],l={rightToc:c};function d({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Modifiers are an extremely important part of almost any Dota custom game. They allow you to modify certain properties of your hero, deal damage to it over time, or apply various effects on it. Like abilities, we'll also create them in Typescript."),Object(n.b)("p",null,"We'll use an easy example which should cover a lot of common concepts for modifiers. This example is Skywrath's Ancient seal, which is an ability that simply applies a modifier to an enemy. The modifier applies the Silenced state on the enemy, and reduces its magic resist property by a percentage."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"For simplicity sake, assume the ability has no shard or talents upgrades."))),Object(n.b)("h3",{id:"defining-the-ability"},"Defining The Ability"),Object(n.b)("p",null,"For starters, let's define the ability that applies the modifier.\nWe'll begin with the KV, which is straightforward. Open ",Object(n.b)("inlineCode",{parentName:"p"},"/game/scripts/npc/npc_abilities_custom.txt")," and copy the following content inside the ",Object(n.b)("inlineCode",{parentName:"p"},'"DOTAAbilities"')," key."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),'//=================================================================================================================\n// Skywrath Mage: Ancient Seal\n//=================================================================================================================\n"typescript_skywrath_mage_ancient_seal"\n{\n    // General\n    //-------------------------------------------------------------------------------------------------------------\n    "BaseClass"                     "ability_lua"\n    "AbilityTextureName"            "skywrath_mage_ancient_seal"\n    "ScriptFile"                    "abilities/typescript_skywrath_mage_ancient_seal"\n    "AbilityBehavior"               "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET"\n    "AbilityUnitTargetTeam"         "DOTA_UNIT_TARGET_TEAM_BOTH"\n    "AbilityUnitTargetType"         "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"\n    "SpellImmunityType"             "SPELL_IMMUNITY_ENEMIES_NO"\n    "SpellDispellableType"          "SPELL_DISPELLABLE_YES"\n    "AbilitySound"                  "Hero_SkywrathMage.AncientSeal.Target"\n\n    // Casting\n    //-------------------------------------------------------------------------------------------------------------\n    "AbilityCastRange"              "700 750 800 850"\n    "AbilityCastPoint"              "0.1 0.1 0.1 0.1"\n\n    // Time\n    //-------------------------------------------------------------------------------------------------------------\n    "AbilityCooldown"               "14"\n\n    // Cost\n    //-------------------------------------------------------------------------------------------------------------\n    "AbilityManaCost"               "80 90 100 110"\n\n    // Special\n    //-------------------------------------------------------------------------------------------------------------\n    "AbilitySpecial"\n    {\n        "01"\n        {\n          "var_type"                "FIELD_INTEGER"\n          "resist_debuff"           "30 35 40 45"\n        }\n\n        "02"\n        {\n          "var_type"                "FIELD_FLOAT"\n          "seal_duration"           "3.0 4.0 5.0 6.0"\n        }\n    }\n    "AbilityCastAnimation"      "ACT_DOTA_CAST_ABILITY_3"\n}\n')),Object(n.b)("p",null,"As the ",Object(n.b)("inlineCode",{parentName:"p"},"ScriptFile")," denotes it, the lua file should be in ",Object(n.b)("inlineCode",{parentName:"p"},"vscripts/abilities/"),". To do so, we'll create our TS file in ",Object(n.b)("inlineCode",{parentName:"p"},"src/vscripts/abilities/"),", where it would be appropriately routed when compiled. Create the ",Object(n.b)("inlineCode",{parentName:"p"},"typescript_skywrath_mage_ancient_seal.ts")," file and open it."),Object(n.b)("h3",{id:"coding-the-ability"},"Coding The Ability"),Object(n.b)("p",null,"The ability itself is very straightforward, since all it does is apply a modifier on the target. For simplicity sake, let's decide the modifier will be named ",Object(n.b)("inlineCode",{parentName:"p"},"modifier_typescript_ancient_seal"),". Following is the ability:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { BaseAbility, registerAbility } from "../lib/dota_ts_adapter";\n\n@registerAbility()\nexport class typescript_skywrath_mage_ancient_seal extends BaseAbility {\n    sound_cast = "Hero_SkywrathMage.AncientSeal.Target";\n\n    OnSpellStart() {\n        // Special values\n        const seal_duration = this.GetSpecialValueFor("seal_duration");\n\n        // Fetch target\n        const target = this.GetCursorTarget()!;\n\n        // Play sound\n        target.EmitSound(this.sound_cast);\n\n        // Add modifier\n        target.AddNewModifier(this.GetCaster(), this, "modifier_typescript_ancient_seal", { duration: seal_duration });\n    }\n}\n')),Object(n.b)("p",null,"Great! This applies the modifier on the target. The caster of the ability, denoted by ",Object(n.b)("inlineCode",{parentName:"p"},"this.GetCaster()")," in the first argument, is assigned to be modifier's associated caster, while the ability itself, denoted by ",Object(n.b)("inlineCode",{parentName:"p"},"this")," in the second argument, is assigned as the modifier's associated ability. We can get those by calling ",Object(n.b)("inlineCode",{parentName:"p"},"this.GetCaster()")," and ",Object(n.b)("inlineCode",{parentName:"p"},"this.GetAbility()"),", respectively from the modifier."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"The unit we're adding the modifier to, in this case our ",Object(n.b)("inlineCode",{parentName:"p"},"target"),", becomes the parent of the modifier. We can get it from the modifier with ",Object(n.b)("inlineCode",{parentName:"p"},"this.GetParent()"),". This can be useful in various cases, such as when emitting sound from it, dealing damage to it, or placing particles on its current location."))),Object(n.b)("p",null,"Now let's create the modifier."),Object(n.b)("h3",{id:"creating-the-modifier"},"Creating The Modifier"),Object(n.b)("p",null,"This part is absolutely up to you and your organizational preferences: some prefer to add the modifier as a separate file, while some prefer to have the ability and its associated modifiers in the same file. You could place the modifier file inside ",Object(n.b)("inlineCode",{parentName:"p"},"src/vscripts/modifiers"),", for instance. In order to keep the guide simple, let's make the modifier in the same file."),Object(n.b)("p",null,"Very similar to an ability in TS, modifiers are also a class. We create a modifier with the following structure:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@registerModifier()\nexport class modifier_typescript_ancient_seal extends BaseModifier {\n\n}\n")),Object(n.b)("p",null,"As you can see, it's very similar to an ability, replacing ",Object(n.b)("inlineCode",{parentName:"p"},"@registerAbility()")," with ",Object(n.b)("inlineCode",{parentName:"p"},"@registerModifier()"),", and the ",Object(n.b)("inlineCode",{parentName:"p"},"BaseAbility")," extension with ",Object(n.b)("inlineCode",{parentName:"p"},"BaseModifier"),".\nNote that ",Object(n.b)("inlineCode",{parentName:"p"},"@registerModifier()")," takes care of LinkLuaModifier for you, so you don't need to call it on TS modifiers."),Object(n.b)("h3",{id:"typechecking-modifier-calls"},"Typechecking Modifier Calls"),Object(n.b)("p",null,"Before we continue, one thing we must do is link the ability to the modifier, which makes sure the modifier is registered. In addition, rather than relying on a string for the naming of the modifier, we'll link the class name."),Object(n.b)("p",null,"To do so, simply remove the quotation marks around the modifier name, then add ",Object(n.b)("inlineCode",{parentName:"p"},".name")," to it. See below the code before and after linking the class:"),Object(n.b)(r.a,{titles:"Before|After",mdxType:"MultiCodeBlock"},Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'// Add modifier\ntarget.AddNewModifier(this.GetCaster(), this, "modifier_typescript_ancient_seal", { duration: seal_duration });\n')),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Add modifier\ntarget.AddNewModifier(this.GetCaster(), this, modifier_typescript_ancient_seal.name, { duration: seal_duration });\n"))),Object(n.b)("p",null,"This results at the exact name of the modifier as a string, which is enforced by Typescript."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"If your modifier is in another file, you'll have to import it first before you can link it in the above fashion."))),Object(n.b)("h3",{id:"coding-the-modifier"},"Coding The Modifier"),Object(n.b)("p",null,"Alright. Let's set and apply the properties for the modifier such as the particle effect. In addition, let's set some useful properties via modifier functions.\nAlso, this is my personal choice, but I usually put ability specials as a class property so they can be easily used everywhere in the modifier."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'@registerModifier()\nexport class modifier_typescript_ancient_seal extends BaseModifier {\n    particle_seal = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_ancient_seal_debuff.vpcf";\n    resist_debuff?: number;\n\n    // When set to false, shows the modifier icon on the HUD. Otherwise, the modifier is hidden.\n    IsHidden() {\n        return false;\n    }\n\n    // When set to true, the outer circle of the modifier is red, indicating that the modifier is a debuff. Otherwise, the outer circle is green.\n    IsDebuff() {\n        return true;\n    }\n\n    // When set to true, the modifier can be purged by basic dispels.\n    IsPurgable() {\n        return true;\n    }\n\n    // Event call that is triggered when the modifier is created and attached to a unit.\n    OnCreated() {\n        // Get the ability and fetch ability specials from it\n        const ability = this.GetAbility();\n        if (ability) {\n            this.resist_debuff = ability.GetSpecialValueFor("resist_debuff");\n        }\n\n        // Add particle effect\n        const particle = ParticleManager.CreateParticle(this.particle_seal, ParticleAttachment.OVERHEAD_FOLLOW, this.GetParent());\n        ParticleManager.SetParticleControlEnt(particle, 1, this.GetParent(), ParticleAttachment.ABSORIGIN_FOLLOW, "hitloc", this.GetParent().GetAbsOrigin(), true);\n        this.AddParticle(particle, false, false, -1, false, true);\n    }\n}\n')),Object(n.b)("p",null,"Okay, so the modifier is defined, but its main parts of it are not yet defined: the silence and the magic resistance reduction. Let's do those next."),Object(n.b)("h3",{id:"states"},"States"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"CheckState")," function that modifiers have is called every frame and sets the state of the parent based on its modifiers. The function gets a bunch of states and pairs each of them with a boolean that decides whether the state should be applied."),Object(n.b)("p",null,"We only need to silence the target, so that's the only state we require here. Add the following to the modifier:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"CheckState() {\n    return {[ModifierState.SILENCED]: true}\n}\n")),Object(n.b)("p",null,"Note the syntax: the curly braces start a ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype"}),"Record")," of states, each assigned a boolean. If you have multiple states - boolean pairs, separate each pair with a comma."),Object(n.b)("h3",{id:"modifier-properties"},"Modifier Properties"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"DeclareFunctions")," declares which function properties are included in this modifier. Since we need the property that modifies the magical resistance, let's call it here:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"DeclareFunctions() {\n    return [ModifierFunction.MAGICAL_RESISTANCE_BONUS];\n}\n")),Object(n.b)("p",null,"Unlike states, DeclareFunctions expects an array of modifier functions. If you have multiple modifier functions, separate them with a comma."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"When hovering over a modifier function's name (e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"MAGICAL_RESISTANCE_BONUS"),"), a tooltip appears, showing you the name of the linked property function call. Simply copy the function into the modifier. This also has auto complete, if you prefer to do so manually."))),Object(n.b)("p",null,"Now that we declared the magical resistance bonus, let's return a negative bonus so the enemy get a negative magic resistance bonus from this modifier:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"GetModifierMagicalResistanceBonus() {\n    return this.resist_debuff ?? 0;\n}\n")),Object(n.b)("p",null,"Note that this function expects a number - anything else is not accepted."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},Object(n.b)("inlineCode",{parentName:"p"},"this.resist_debuff")," is supposedly a number that is fetched from the ability special value. However, if for some reason ",Object(n.b)("inlineCode",{parentName:"p"},"this.resist_debuff")," is not initialized, it would be undefined, which is not accepted by this function. Using ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing"}),"Nullish Coalescing"),", the value is defaulted to 0 if ",Object(n.b)("inlineCode",{parentName:"p"},"this.resist_debuff")," is undefined."))),Object(n.b)("p",null,"That's it! A simple modifier is done with a bunch of simple lines, which are all typechecked for us."),Object(n.b)("h3",{id:"whats-next"},"What's Next?"),Object(n.b)("p",null,"The next part would involve listening to events in game mode and using timers. Stay tuned!"))}d.isMDXComponent=!0}}]);