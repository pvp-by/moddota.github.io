(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),o=(n(0),n(196)),i=(n(188),n(189),n(197));n(198),n(199),n(200);const r={title:"Item Drop System",author:"Noya",steamId:"76561198046984233",date:"17.05.2015"},l={id:"scripting/item-drop-system",isDocsHomePage:!1,title:"Item Drop System",description:"Here I'll go over the implementation of a flexible item drop system for any sort of gamemode, mostly useful for RPGs.",source:"@site/_articles/scripting/item-drop-system.md",permalink:"/scripting/item-drop-system",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/item-drop-system.md",sidebar:"tutorials",previous:{title:"Item Restrictions & Requirements",permalink:"/scripting/item-restrictions-requirements"},next:{title:'Making a "rpg-like" looting chest',permalink:"/scripting/making-a-rpg-like-looting-chest"}},c=[{value:"1. Key Values Table",id:"1-key-values-table",children:[]},{value:"2. OnEntityKilled Lua Event",id:"2-onentitykilled-lua-event",children:[]},{value:"3. RollDrops Lua Script",id:"3-rolldrops-lua-script",children:[]},{value:"4. Extending the solution to allow multiple drops of the same item",id:"4-extending-the-solution-to-allow-multiple-drops-of-the-same-item",children:[]},{value:"5. Extending to &quot;100% drop one of these&quot;",id:"5-extending-to-100-drop-one-of-these",children:[]}],s={rightToc:c};function u({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Here I'll go over the implementation of a flexible item drop system for any sort of gamemode, mostly useful for RPGs."),Object(o.b)("p",null,"There are multiple ways to do this, for example ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/MNoya/Warchasers/blob/master/scripts/npc/npc_abilities_custom.txt#L3687-L5667"}),"Warchasers uses a pure datadriven system")," that goes over 2 thousand lines of abilities, each one for a different drop type... yeah you don't want to do that \ud83d\ude05 "),Object(o.b)("p",null,"The best way for this is to have a text file to configure what items can drop from each unit, how many, its chances, etc, then whenever a unit dies, if it has an entry for item drops, handle the chances and drops accordingly, with a couple of choices that can be further extended if necessary."),Object(o.b)(i.a,{id:"PowerlessCourageousAsiantrumpetfish",mdxType:"Gfycat"}),Object(o.b)("hr",null),Object(o.b)("h3",{id:"1-key-values-table"},"1. Key Values Table"),Object(o.b)("p",null,"I recommend having a ",Object(o.b)("em",{parentName:"p"},"kv")," folder under scripts to store this and other similar table files. The file can have any extension, but using ",Object(o.b)("em",{parentName:"p"},".kv")," is a good convention."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'"Drops" \n{ \n    "creature_name1"\n    { \n        "item_name1" "10"\n        "item_name2" "50"\n        "item_name3" "100"\n    }\n}\n')),Object(o.b)("p",null,"This table will set a creature to drop the first item with 10% chance, 50% on the second, and the third item will be dropped every time."),Object(o.b)("p",null,"After saving and naming the file, this table has to be loaded in Lua, ideally in the initialization of the game mode, using the ",Object(o.b)("inlineCode",{parentName:"p"},'LoadKeyValues("relative/path/to/file")')," this way:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'GameRules.DropTable = LoadKeyValues("scripts/kv/item_drops.kv")\n')),Object(o.b)("p",null,"In this initial version, each item drop chance is independent from the others. From the same creature there might be 1 drop, all of them, or none (if the chances are all less than 100). This behavior will be expanded later to provide some of the classic drop options."),Object(o.b)("h3",{id:"2-onentitykilled-lua-event"},"2. OnEntityKilled Lua Event"),Object(o.b)("p",null,"Simply listen to ",Object(o.b)("inlineCode",{parentName:"p"},"entity_killed")," and call a custom RollDrops function with the killed unit as a parameter."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"ListenToGameEvent('entity_killed', Dynamic_Wrap(GameMode, 'OnEntityKilled'), self)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function GameMode:OnEntityKilled( keys )\n    local killedUnit = EntIndexToHScript( keys.entindex_killed )\n    if killedUnit:IsCreature() then\n        RollDrops(killedUnit)\n    end\nend\n")),Object(o.b)("h3",{id:"3-rolldrops-lua-script"},"3. RollDrops Lua Script"),Object(o.b)("p",null,"Now given the subtable of the unit name contained in the main Drop Table, if it exists, iterate over the elements rolling each chance value."),Object(o.b)("p",null,"If the Roll succeeds, proceed to create an item handle with the name, and ",Object(o.b)("inlineCode",{parentName:"p"},"LaunchLoot")," it with some fancy parameters (could also just use a ",Object(o.b)("inlineCode",{parentName:"p"},"CreateItemOnPositionSync")," to drop the item instantly at the death position)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function RollDrops(unit)\n    local DropInfo = GameRules.DropTable[unit:GetUnitName()]\n    if DropInfo then\n        for item_name,chance in pairs(DropInfo) do\n            if RollPercentage(chance) then\n                -- Create the item\n                local item = CreateItem(item_name, nil, nil)\n                local pos = unit:GetAbsOrigin()\n                local drop = CreateItemOnPositionSync( pos, item )\n                local pos_launch = pos+RandomVector(RandomFloat(150,200))\n                item:LaunchLoot(false, 200, 0.75, pos_launch)\n            end\n        end\n    end\nend\n")),Object(o.b)("h3",{id:"4-extending-the-solution-to-allow-multiple-drops-of-the-same-item"},"4. Extending the solution to allow multiple drops of the same item"),Object(o.b)("p",null,'The way Lua KV tables work, it\'s not possible to have more than 1 of the same index, so if we were to add 2 "item_name1" entries both with some chance value, LoadKeyValues would fail.'),Object(o.b)("p",null,"To get around this, the table has to use another level and have each possible item drop of the unit be a table by itself:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'"Drops" \n{ \n    "creature_name1"\n    { \n        "1"\n        {\n            "Item"     "item_name1"\n            "Chance"   "10"\n            "Multiple" "3"\n        }\n        "2"\n        {\n            "Item"     "item_name2"\n            "Chance"   "50"\n            "Multiple" "1"\n        }\n    }\n}\n')),Object(o.b)("p",null,"This structure along with the Multiple value will allow an item to be dropped more than once from the same creature. ",Object(o.b)("em",{parentName:"p"},'"Multiple" "1"')," will just be 1 drop max."),Object(o.b)("p",null,"The RollDrops function needs to be adjusted to read the subtables and the Item/Chance in a slightly different way:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'function RollDrops(unit)\n    local DropInfo = GameRules.DropTable[unit:GetUnitName()]\n    if DropInfo then\n        for k,ItemTable in pairs(DropInfo) do\n            local chance = ItemTable.Chance or 100\n            local max_drops = ItemTable.Multiple or 1\n            local item_name = ItemTable.Item\n            for i=1,max_drops do\n                if RollPercentage(chance) then\n                    print("Creating "..item_name)\n                    local item = CreateItem(item_name, nil, nil)\n                    item:SetPurchaseTime(0)\n                    local pos = unit:GetAbsOrigin()\n                    local drop = CreateItemOnPositionSync( pos, item )\n                    local pos_launch = pos+RandomVector(RandomFloat(150,200))\n                    item:LaunchLoot(false, 200, 0.75, pos_launch)\n                end\n            end\n        end\n    end\nend\n')),Object(o.b)("p",null,"The 'or 100' and 'or 1' are just to make sure that if the \"Chance\" or \"Multiple\" lines are missing, a default value ('drop always' and 'drop 1') will be used."),Object(o.b)("h3",{id:"5-extending-to-100-drop-one-of-these"},'5. Extending to "100% drop one of these"'),Object(o.b)("p",null,'Sometimes doing "50% of item 1 and 50% of item 2" is too random, because it will mean sometimes a mob will drop nothing, and sometimes it might drop 2. In order to reduce the randomness and ensure a certain combination of items will drop, the most common approach is to have a set list of possible drops, and make it so that the unit will drop only one of that set at random.'),Object(o.b)("p",null,"To do this, instead of tying a single item to each item table, there will be yet another table of the { possible Set of items } that we want this creature to drop:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'"Drops" \n{ \n    "creature_name1"\n    { \n        "1"\n        {\n            "ItemSets"\n            {\n                "1" "item_name_set1"\n                "2" "item_name_set2"\n                "3" "item_name_set3"\n            }\n            "Chance"   "100" //of dropping 1 of the set\n        }\n        "2"\n        {\n            "Item"     "item_name2"\n            "Chance"   "50"\n            "Multiple" "3"\n        }\n    }\n}\n')),Object(o.b)("p",null,'The ItemSets entry could also have a "Multiple" kv if we wanted an scenario like "2 of these 3", but this can\'t guarantee that the 2nd roll won\'t drop the same item than the first, if it did.'),Object(o.b)("p",null,"And the RollDrops now looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'function RollDrops(unit)\n    local DropInfo = GameRules.DropTable[unit:GetUnitName()]\n    if DropInfo then\n        print("Rolling Drops for "..unit:GetUnitName())\n        for k,ItemTable in pairs(DropInfo) do\n            -- If its an ItemSet entry, decide which item to drop\n            local item_name\n            if ItemTable.ItemSets then\n                -- Count how many there are to choose from\n                local count = 0\n                for i,v in pairs(ItemTable.ItemSets) do\n                    count = count+1\n                end\n                local random_i = RandomInt(1,count)\n                item_name = ItemTable.ItemSets[tostring(random_i)]\n            else\n                item_name = ItemTable.Item\n            end\n            local chance = ItemTable.Chance or 100\n            local max_drops = ItemTable.Multiple or 1\n            for i=1,max_drops do\n                print("Rolling chance "..chance)\n                if RollPercentage(chance) then\n                    print("Creating "..item_name)\n                    local item = CreateItem(item_name, nil, nil)\n                    item:SetPurchaseTime(0)\n                    local pos = unit:GetAbsOrigin()\n                    local drop = CreateItemOnPositionSync( pos, item )\n                    local pos_launch = pos+RandomVector(RandomFloat(150,200))\n                    item:LaunchLoot(false, 200, 0.75, pos_launch)\n                end\n            end\n        end\n    end\nend\n')),Object(o.b)("hr",null),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Aleteh/TBR3/blob/master/game/dota_addons/theblackroad3/scripts/kv/item_drops.kv"}),"item_drops.kv file at TBR")),Object(o.b)("p",null,"Leave any questions or suggestions below"))}u.isMDXComponent=!0},188:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(195),r=n(192),l=n(90),c=n.n(l);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:m,groupId:p}=e,{tabGroupChoices:d,setTabGroupChoices:b}=Object(i.a)(),[h,f]=Object(a.useState)(l);if(null!=p){const e=d[p];null!=e&&e!==h&&m.some(t=>t.value===e)&&f(e)}const y=e=>{f(e),null!=p&&b(p,e)},g=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},m.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===h)[0]))}},189:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},190:function(e,t,n){"use strict";var a=n(0),o=n(34);t.a=function(){return Object(a.useContext)(o.a)}},191:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))},192:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(190),o=n(191);function i(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:i="/",url:r}={}}=Object(a.a)();if(!e)return e;if(t)return i+e;if(!Object(o.a)(e))return e;const l=i+e.replace(/^\//,"");return n?r+l:l}},194:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=o},195:function(e,t,n){"use strict";var a=n(0),o=n(194);t.a=function(){return Object(a.useContext)(o.a)}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(r,".").concat(d)]||m[d]||p[d]||i;return n?o.a.createElement(b,l(l({ref:t},s),{},{components:n})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),o=n.n(a);function i({id:e,aspectRatio:t=4/3,hd:n="0"}){return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},o.a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),o=n.n(a);function i({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},o.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(3),o=n(189),i=n(188),r=n(0),l=n.n(r);const c={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t,titles:n}){Object(a.a)("string"==typeof t||void 0===t);const r=l.a.Children.toArray(e).map((e,t)=>{var a,o,i,r;const l=null!==(a=null===(o=e.props.children.props.className)||void 0===o?void 0:o.replace(/language-/,""))&&void 0!==a?a:"Tab "+(t+1);return{id:t,languageName:null!==(i=null!==(r=(void 0!==n&&n.length>0?n.split("|"):[])[t])&&void 0!==r?r:c[l])&&void 0!==i?i:l,element:e}});return l.a.createElement(i.a,{groupId:void 0!==t?"multi-code-block-"+t:void 0,defaultValue:r[0].id,values:r.map(({id:e,languageName:t})=>({value:e,label:t}))},r.map(({id:e,element:t})=>l.a.createElement(o.a,{key:e,value:e},t)))}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(193),o=n(0),i=n.n(o);function r({path:e,controls:t=!1}){return i.a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},i.a.createElement("source",{src:Object(a.a)(e),type:"video/mp4"}))}}}]);