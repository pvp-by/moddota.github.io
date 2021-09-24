"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[3682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(f,s(s({ref:t},u),{},{components:n})):i.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:(e,t,n)=>{function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,{b:()=>i,Z:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>r,Z:()=>s});var i=n(2263),a=n(3919);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+s:s}(t,e,n,i)}}function s(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(7294);const a=function({children:e,hidden:t,className:n}){return i.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(7294),a=n(944),r=n(6010);const s="tabItem_1uMI",l="tabItemActive_2DSg";const o=37,c=39;const u=function(e){const{lazy:t,block:n,defaultValue:u,values:d,groupId:p,className:m}=e,{tabGroupChoices:f,setTabGroupChoices:b}=(0,a.Z)(),[h,v]=(0,i.useState)(u),y=i.Children.toArray(e.children),_=[];if(null!=p){const e=f[p];null!=e&&e!==h&&d.some((t=>t.value===e))&&v(e)}const g=e=>{const t=e.currentTarget,n=_.indexOf(t),i=d[n].value;v(i),null!=p&&(b(p,i),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:i,right:a}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:s}=window;return t>=0&&a<=s&&i<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},E=e=>{var t;let n;switch(e.keyCode){case c:{const t=_.indexOf(e.target)+1;n=_[t]||_[0];break}case o:{const t=_.indexOf(e.target)-1;n=_[t]||_[_.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},d.map((({value:e,label:t})=>i.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,r.Z)("tabs__item",s,{"tabs__item--active":h===e}),key:e,ref:e=>_.push(e),onKeyDown:E,onFocus:g,onClick:g},t)))),t?(0,i.cloneElement)(y.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>i});const i=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(7294),a=n(9443);const r=function(){const e=(0,i.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,n)=>{n.d(t,{s:()=>a});var i=n(7294);function a({id:e,aspectRatio:t=4/3,hd:n="0"}){return i.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},i.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,n)=>{n.d(t,{s:()=>o});var i=n(2177),a=n(8215),r=n(1395),s=n(7294);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function o({children:e,group:t,titles:n}){(0,i.Z)("string"==typeof t||void 0===t);const o=s.Children.toArray(e).map(((e,t)=>{var i;const a=(null==(i=e.props.children.props.className)?void 0:i.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==n&&n.length>0?n.split("|"):[])[t]??l[a]??a,element:e}}));return s.createElement(r.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:o[0].id,values:o.map((({id:e,languageName:t})=>({value:e,label:t})))},o.map((({id:e,element:t})=>s.createElement(a.Z,{key:e,value:e},t))))}},6776:(e,t,n)=>{n.d(t,{X:()=>r});var i=n(4996),a=n(7294);function r({path:e,controls:t=!1}){return a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},a.createElement("source",{src:(0,i.Z)(e),type:"video/mp4"}))}},8129:(e,t,n)=>{n.d(t,{_:()=>a});var i=n(7294);function a({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return i.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},i.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},5876:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,metadata:()=>l,toc:()=>o,default:()=>u});var i=n(7462),a=(n(7294),n(3905)),r=(n(1395),n(8215),n(7840));n(8129),n(8173),n(6776);const s={title:"Invisibility Ability Example",author:"Noya",steamId:"76561198046984233",date:"19.12.2014"},l={unversionedId:"abilities/datadriven/invisibility-ability-example",id:"abilities/datadriven/invisibility-ability-example",isDocsHomePage:!1,title:"Invisibility Ability Example",description:"This is a datadriven + lua ability that will apply the invis state and texture, with some extra particles and effects.",source:"@site/_articles/abilities/datadriven/invisibility-ability-example.md",sourceDirName:"abilities/datadriven",slug:"/abilities/datadriven/invisibility-ability-example",permalink:"/abilities/datadriven/invisibility-ability-example",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/invisibility-ability-example.md",version:"current",frontMatter:{title:"Invisibility Ability Example",author:"Noya",steamId:"76561198046984233",date:"19.12.2014"},sidebar:"tutorials",previous:{title:"Channeling Animations",permalink:"/abilities/datadriven/channeling-animations"},next:{title:"Illusion Ability Example",permalink:"/abilities/datadriven/illusion-ability-example"}},o=[],c={toc:o};function u({components:e,...t}){return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a datadriven + lua ability that will apply the invis state and texture, with some extra particles and effects."),(0,a.kt)(r.s,{id:"MajesticDimpledIrishwaterspaniel",mdxType:"Gfycat"}),(0,a.kt)("p",null,"(Some effects might not be from this example, as this video shows the Assassin hero, find it in the repository later on)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"KV:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' "assassin_walk_the_shadows"\n {\n  // General\n  //--------------------------------------------------------------------------------------------------\n  "BaseClass" "ability_datadriven"\n  "AbilityTextureName"  "assassin_skill1"\n  "MaxLevel" "7"\n  "AbilityBehavior" "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE"\n  \n  // Stats\n  //--------------------------------------------------------------------------------------------------\n  "AbilityCastPoint"    "0"\n  "AbilityCooldown" "5"\n  "AbilityManaCost" "6 8 11 14 18 22 26 30"\n     \n     // Damage.\n     //-----------------------------------------------------------------------------------------------\n     "AbilityDamage" "25 150 300 600 1100 2000 3300 5000"\n     "AbilityUnitDamageType"    "DAMAGE_TYPE_PHYSICAL"\n\n     // Special\n     "AbilitySpecial"\n      {\n      "01"\n       {\n    "var_type"  "FIELD_INTEGER"\n    "duration"  "25"\n       }\n      "02"\n       {\n       "var_type"   "FIELD_INTEGER"\n       "bonus_movespeed"    "35"\n       }\n      "03"\n       {\n       "var_type"   "FIELD_INTEGER"\n       "bonus_damage"   "150 300 525 840 1260 1900 3000 4500"\n       }\n      "04"\n       {\n       "var_type"   "FIELD_FLOAT"\n       "stun_duration"  "3.25"\n       }\n      }\n\n     "precache"\n     {\n      "particle"    "particles/units/heroes/hero_templar_assassin/templar_assassin_meld.vpcf"\n      "soundfile"   "soundevents/game_sounds_heroes/game_sounds_templar_assassin.vsndevts"\n     }\n\n     //----------------------------------------------------------------------------------------------\n  "OnSpellStart"\n  {\n   "FireSound"\n   {\n    "EffectName"    "Hero_TemplarAssassin.Meld"\n    "Target" "CASTER"\n   }\n   "RunScript"\n   {\n    "ScriptFile"    "abilities/assassin.lua"\n    "Function"  "walk_the_shadows_cast"\n   }\n  }\n  "Modifiers"\n   {\n   "assassin_walk_the_shadows_buff"\n    {\n    "IsBuff"    "1"\n    "Duration" "%duration"\n    "EffectName"    "particles/units/heroes/hero_templar_assassin/templar_assassin_meld.vpcf"\n    "EffectAttachType"  "follow_origin"\n    "OnCreated"\n    {\n     "FireEffect"\n     {\n      "EffectName"  "particles/units/heroes/hero_bounty_hunter/bounty_hunter_windwalk_smoke.vpcf"\n      "EffectAttachType" "follow_origin"\n      "Target" "CASTER"\n     }\n    }\n    "Properties"\n     {\n     "MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE" "%bonus_movespeed"\n     }\n    "States"\n     {\n     "MODIFIER_STATE_INVISIBLE" "MODIFIER_STATE_VALUE_ENABLED"\n     "MODIFIER_STATE_NO_UNIT_COLLISION" "MODIFIER_STATE_VALUE_ENABLED"\n     }\n    "OnAttackLanded"\n     {\n     "RunScript"\n      {\n      "ScriptFile"  "abilities/assassin.lua"\n      "Function"    "walk_the_shadows_attack"\n      }\n     "Stun"\n      {\n      "Target"  "TARGET"\n      "Duration"    "%stun_duration"\n      }\n     }\n    "OnAbilityExecuted"\n     {\n     "RunScript"\n      {\n      "ScriptFile"  "abilities/assassin.lua"\n      "Function"    "walk_the_shadows_interrupt"\n      }\n     }\n    }\n   }\n  \n }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Lua Scripts:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'function walk_the_shadows_cast( event )\n  event.ability:ApplyDataDrivenModifier(event.caster, event.caster, "assassin_walk_the_shadows_buff", nil)\n  event.caster:AddNewModifier(event.caster, event.ability, "modifier_invisible", {duration = 25}) \n  \nend\n\nfunction walk_the_shadows_interrupt( event )\n event.caster:RemoveModifierByName("assassin_walk_the_shadows_buff")\n event.caster:RemoveModifierByName("modifier_invisible")\nend\n\nfunction walk_the_shadows_attack( event )\n \n event.caster:RemoveModifierByName("assassin_walk_the_shadows_buff")\n \n ApplyDamage({ victim = event.target, attacker = event.caster, damage = event.ability:GetAbilityDamage(), damage_type = event.ability:GetAbilityDamageType(), ability = event.ability   })\n\nend\n')),(0,a.kt)("p",null,'The line that takes care of applying the "transparency" is AddNewModifier with modifier_invisible.'),(0,a.kt)("p",null,"Credits to my buddy ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/igo95862"},"igo")," that made this ability for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Aleteh/TBR3"},"The Black Road project")," which is still WIP but there are some interesting stuff we made already."))}u.isMDXComponent=!0},6010:(e,t,n)=>{function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);