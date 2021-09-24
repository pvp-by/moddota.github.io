"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[5081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>r})},4996:(e,t,n)=>{n.d(t,{C:()=>o,Z:()=>i});var a=n(2263),r=n(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(944),o=n(6010);const i="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,p=39;const c=function(e){const{lazy:t,block:n,defaultValue:c,values:u,groupId:h,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:y}=(0,r.Z)(),[g,f]=(0,a.useState)(c),P=a.Children.toArray(e.children),w=[];if(null!=h){const e=m[h];null!=e&&e!==g&&u.some((t=>t.value===e))&&f(e)}const v=e=>{const t=e.currentTarget,n=w.indexOf(t),a=u[n].value;f(a),null!=h&&(y(h,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&r<=i&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},b=e=>{var t;let n;switch(e.keyCode){case p:{const t=w.indexOf(e.target)+1;n=w[t]||w[0];break}case s:{const t=w.indexOf(e.target)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},u.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":g===e}),key:e,ref:e=>w.push(e),onKeyDown:b,onFocus:v,onClick:v},t)))),t?(0,a.cloneElement)(P.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},P.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(9443);const o=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,n)=>{n.d(t,{s:()=>r});var a=n(7294);function r({id:e,aspectRatio:t=4/3,hd:n="0"}){return a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,n)=>{n.d(t,{s:()=>s});var a=n(2177),r=n(8215),o=n(1395),i=n(7294);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t,titles:n}){(0,a.Z)("string"==typeof t||void 0===t);const s=i.Children.toArray(e).map(((e,t)=>{var a;const r=(null==(a=e.props.children.props.className)?void 0:a.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==n&&n.length>0?n.split("|"):[])[t]??l[r]??r,element:e}}));return i.createElement(o.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:s[0].id,values:s.map((({id:e,languageName:t})=>({value:e,label:t})))},s.map((({id:e,element:t})=>i.createElement(r.Z,{key:e,value:e},t))))}},6776:(e,t,n)=>{n.d(t,{X:()=>o});var a=n(4996),r=n(7294);function o({path:e,controls:t=!1}){return r.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},r.createElement("source",{src:(0,a.Z)(e),type:"video/mp4"}))}},8129:(e,t,n)=>{n.d(t,{_:()=>r});var a=n(7294);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const r=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.createElement("iframe",{src:r,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},7273:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,metadata:()=>i,toc:()=>l,default:()=>p});var a=n(7462),r=(n(7294),n(3905));n(1395),n(8215),n(7840),n(8129),n(8173),n(6776);const o={title:"Introduction to Panorama UI with TypeScript",author:"Perry",steamId:"76561198046986723",date:"26.07.2017"},i={unversionedId:"panorama/introduction-to-panorama-ui-with-typescript",id:"panorama/introduction-to-panorama-ui-with-typescript",isDocsHomePage:!1,title:"Introduction to Panorama UI with TypeScript",description:"What is TypeScript and why should I use it",source:"@site/_articles/panorama/introduction-to-panorama-ui-with-typescript.md",sourceDirName:"panorama",slug:"/panorama/introduction-to-panorama-ui-with-typescript",permalink:"/panorama/introduction-to-panorama-ui-with-typescript",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/introduction-to-panorama-ui-with-typescript.md",version:"current",frontMatter:{title:"Introduction to Panorama UI with TypeScript",author:"Perry",steamId:"76561198046986723",date:"26.07.2017"},sidebar:"tutorials",previous:{title:"Inclusive Panorama UI",permalink:"/panorama/inclusive-panorama-ui"},next:{title:"Keybindings",permalink:"/panorama/keybindings"}},l=[{value:"What is TypeScript and why should I use it",id:"what-is-typescript-and-why-should-i-use-it",children:[]},{value:"How to install TypeScript",id:"how-to-install-typescript",children:[]},{value:"How to set up TypeScript for your dota addon",id:"how-to-set-up-typescript-for-your-dota-addon",children:[]},{value:"Your first TypeScript UI",id:"your-first-typescript-ui",children:[]},{value:"Writing TypeScript for your UI",id:"writing-typescript-for-your-ui",children:[]},{value:"Advanced TypeScripting",id:"advanced-typescripting",children:[]},{value:"Summary",id:"summary",children:[]}],s={toc:l};function p({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-typescript-and-why-should-i-use-it"},"What is TypeScript and why should I use it"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is a language created by and for people that were unhappy with Javascript and all of its quirks and flaws. TypeScript is a language with its own syntax (although similar to Javascript) that compiles to Javascript in a way that avoids a lot of Javascript's issues."),(0,r.kt)("p",null,"The name TypeScript comes from the fact that the language is basically Javascript with type checking, but on top of that it supports all of the newest Javascript language construct that are not supported by Panorama."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pros of using TypeScript:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type checking"),(0,r.kt)("li",{parentName:"ul"},"Code completion based on type (also for API!)"),(0,r.kt)("li",{parentName:"ul"},"Prevents scoping issues"),(0,r.kt)("li",{parentName:"ul"},"Proper OOP constructs (such as classes, interfaces, inheritance...)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cons of using TypeScript:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Requires some setup"),(0,r.kt)("li",{parentName:"ul"},"Remember to compile"),(0,r.kt)("li",{parentName:"ul"},"Requires good definitions for Panorama")),(0,r.kt)("h2",{id:"how-to-install-typescript"},"How to install TypeScript"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," which is used to compile TypeScript."),(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file in the root directory of your project with at least ",(0,r.kt)("inlineCode",{parentName:"li"},"{}")," content."),(0,r.kt)("li",{parentName:"ol"},"Install required dependencies by opening a command prompt and executing ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install -D typescript panorama-types"),".")),(0,r.kt)("p",null,"That's it, after these three steps you are ready to start using TypeScript."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," supports TypeScript out of the box. For other editors you might have to install a plugin to get language features (for example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript-Sublime-Plugin#installation"},"Sublime TypeScript plugin"),", available through Sublime Text package manager)."),(0,r.kt)("h2",{id:"how-to-set-up-typescript-for-your-dota-addon"},"How to set up TypeScript for your dota addon"),(0,r.kt)("p",null,"TypeScript requires a ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," used to configure it for your project. Put it in your addon's ",(0,r.kt)("inlineCode",{parentName:"p"},"content/panorama")," directory. You can adjust all settings yourself, but I usually have this set to the most strict settings. My preferred configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "target": "es2017",\n        "lib": ["es2017"],\n        "types": ["panorama-types"],\n        "strict": true\n    }\n}\n')),(0,r.kt)("p",null,"Your addon's content directory structure should be something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"content/dota_addons/[addon]/\n    ...\n    panorama/\n        layout/\n        scripts/\n        styles/\n        tsconfig.json\n")),(0,r.kt)("h2",{id:"your-first-typescript-ui"},"Your first TypeScript UI"),(0,r.kt)("p",null,"To illustrate why I like using TypeScript for modular UI I will walk through a small example. We will be making some hero portraits with player name and a healh bar: ",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZrqqlFo.png",alt:"What we are making",title:"Example UI"})),(0,r.kt)("p",null,"Since this tutorial is about TypeScript I will just quickly give the xml and css, this is standard stuff:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<root>\n    <styles>\n        <include src="file://{resources}/styles/custom_game/example.css" />\n    </styles>\n\n    <scripts>\n        <include src="file://{resources}/scripts/custom_game/PlayerPortrait.js" />\n        <include src="file://{resources}/scripts/custom_game/ExampleUI.js" />\n    </scripts>\n\n    <snippets>\n        <snippet name="PlayerPortrait">\n            <Panel class="PlayerPortrait" hittest="false">\n                <Image id="HeroImage" hittest="false" />\n                <Label id="PlayerName" />\n                <Panel class="HealthContainer">\n                    <Panel id="HealthBar" />\n                </Panel>\n            </Panel>\n        </snippet>\n    </snippets>\n\n    <Panel hittest="false" style="width: 100%; height: 100%;">\n        <Panel id="HeroPortraits" />\n    </Panel>\n</root>\n')),(0,r.kt)("p",null,"CSS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"#HeroPortraits {\n    width: 300px;\n    height: 650px;\n    margin-top: 150px;\n    flow-children: down;\n}\n.PlayerPortrait {\n    background-color: blue;\n    height: 80px;\n    width: 300px;\n    margin-bottom: 10px;\n}\n#HeroImage {\n    width: 80px;\n    height: 80px;\n    background-color: black;\n}\n#PlayerName {\n    color: white;\n    font-size: 25px;\n    margin-top: 10px;\n    margin-left: 90px;\n}\n.HealthContainer {\n    width: 200px;\n    height: 20px;\n    x: 90px;\n    y: 50px;\n    background-color: black;\n}\n#HealthBar {\n    height: 20px;\n    width: 50%;\n\n    background-color: green;\n}\n")),(0,r.kt)("p",null,"As you can see the XML of this part of the UI has a snippet containing the XML of a player portrait containing a hero image, a label for the player name and a health container and health bar inside that container. The CSS applies some simple layout to this."),(0,r.kt)("h2",{id:"writing-typescript-for-your-ui"},"Writing TypeScript for your UI"),(0,r.kt)("p",null,"First we want to define a class of our UI and to link that to the XML. We do this by taking an existing panel and wrapping it into a typescript class, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class ExampleUI {\n    // Instance variables\n    panel: Panel;\n\n    // ExampleUI constructor\n    constructor(panel: Panel) {\n        this.panel = panel;\n        $.Msg(panel); // Print the panel\n    }\n}\n\nlet ui = new ExampleUI($.GetContextPanel());\n")),(0,r.kt)("p",null,"Nothing too exciting, we basically create a new ExampleUI object in ExampleUI.ts from the context panel, so this entire XML file is now an instance of the ExampleUI class. If you build this by pressing ",(0,r.kt)("strong",{parentName:"p"},"ctrl+b")," in Sublime, you will see it creates a new compiled ExampleUI.js file with the same name. This compiled file is loaded by Panorama. If you load your game mode at this point you should see a print in console printing your UI panel."),(0,r.kt)("p",null,"Now let's create a class for a hero portrait. In this case we do not wrap an existing element, but instead create a panel in the constructor. To do this we do still need a parent panel, so we require that as parameter for the constructor, as well as the hero name and player name. After creating a panel and loading the snippet into it we look up some of its child elements and store them for later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'class PlayerPortrait {\n    // Instance variables\n    panel: Panel;\n    heroImage: ImagePanel;\n    playerLabel: LabelPanel;\n    hpBar: Panel;\n\n    constructor(parent: Panel, heroName: string, playerName: string) {\n        // Create new panel\n        const panel = $.CreatePanel("Panel", parent, "");\n        this.panel = panel;\n\n        // Load snippet into panel\n        panel.BLoadLayoutSnippet("PlayerPortrait");\n\n        // Find components\n        this.heroImage = panel.FindChildTraverse("HeroImage") as ImagePanel;\n        this.playerLabel = panel.FindChildTraverse("PlayerName") as LabelPanel;\n        this.hpBar = panel.FindChildTraverse("HealthBar")!;\n\n        // Set player name label\n        this.playerLabel.text = playerName;\n\n        // Set hero image\n        this.heroImage.SetImage("s2r://panorama/images/heroes/" + heroName + "_png.vtex");\n\n        // Initialise health at 100%\n        this.SetHealthPercent(100);\n    }\n\n    // Set the health bar to a certain percentage (0-100)\n    SetHealthPercent(percentage: number) {\n        this.hpBar.style.width = Math.floor(percentage) + "%";\n    }\n}\n')),(0,r.kt)("p",null,"This is saved in a second file ",(0,r.kt)("strong",{parentName:"p"},"PlayerPortrait.ts")," which compiles to PlayerPortrait.js. Therefore this file is also included in the scripts section of the xml (see above)."),(0,r.kt)("p",null,"The constructor simply creates a new panel and loads a snippet into it, and then sets some default values. The class also defines a SetHealthPercent function that manipulates the health bar."),(0,r.kt)("p",null,"Now we go back to the ExampleUI class and make a couple PlayerPortrait instances to the PlayerPortraits element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'class ExampleUI {\n    // Instance variables\n    panel: Panel;\n\n    // ExampleUI constructor\n    constructor(panel: Panel) {\n        this.panel = panel;\n\n        // Find container element\n        const container = this.panel.FindChild("HeroPortraits")!;\n\n        // Create portrait for player 0, 1 and 2\n        const portrait0 = new PlayerPortrait(container, "npc_dota_hero_juggernaut", "Player0");\n        const portrait1 = new PlayerPortrait(container, "npc_dota_hero_omniknight", "Player1");\n        const portrait2 = new PlayerPortrait(container, "npc_dota_hero_invoker", "Player2");\n\n        // Set HP of player 1 and 2 to a different value\n        portrait0.SetHealthPercent(80);\n        portrait2.SetHealthPercent(20);\n    }\n}\n\nlet ui = new ExampleUI($.GetContextPanel());\n')),(0,r.kt)("p",null,"Your UI should now look like the screenshot we set out to make at the start."),(0,r.kt)("h2",{id:"advanced-typescripting"},"Advanced TypeScripting"),(0,r.kt)("p",null,"Now this UI is not very useful for an actual game, so let's do something a bit more complicated. We want to save the player portraits and then whenever we receive an event that a player's HP has changed we want to retrieve the proper PlayerPortrait instance."),(0,r.kt)("p",null,"We do this by adding another instance variable to the ExampleUI, a map that maps playerIDs to the correct PlayerPortrait instance. When creating PlayerPortrait instances we put them in the map. When we get an hp_changed event we update the proper panel. The type of this map can be expressed in TypeScript as ",(0,r.kt)("inlineCode",{parentName:"p"},"{[playerID: number]: PlayerPortrait}"),"."),(0,r.kt)("p",null,"One of the advantages of TypeScript is that you can explicitly define which events you receive and what their contents are. We define the HPChanged event as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface HPChangedEvent {\n    playerID: PlayerID,\n    hpPercentage: number\n}\n")),(0,r.kt)("p",null,"Putting these together our ExampleUI.ts file now looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface HPChangedEvent {\n    playerID: PlayerID;\n    hpPercentage: number;\n}\n\nclass ExampleUI {\n    // Instance variables\n    panel: Panel;\n    playerPanels: Partial<Record<PlayerID, PlayerPortrait>> = {}; // A map with number keys and PlayerPortrait values\n\n    // ExampleUI constructor\n    constructor(panel: Panel) {\n        this.panel = panel;\n\n        const container = this.panel.FindChild("HeroPortraits")!;\n        container.RemoveAndDeleteChildren();\n\n        // Create portrait for player 0, 1 and 2\n        this.playerPanels[0] = new PlayerPortrait(container, "npc_dota_hero_juggernaut", "Player0");\n        this.playerPanels[1] = new PlayerPortrait(container, "npc_dota_hero_omniknight", "Player1");\n        this.playerPanels[2] = new PlayerPortrait(container, "npc_dota_hero_invoker", "Player2");\n\n        // Listen for health changed event, when it fires, handle it with this.OnHPChanged\n        GameEvents.Subscribe<HPChangedEvent>("hp_changed", (event) => this.OnHPChanged(event));\n    }\n\n    // Event handler for HP Changed event\n    OnHPChanged(event: HPChangedEvent) {\n        // Get portrait for this player\n        const playerPortrait = this.playerPanels[event.playerID];\n\n        // Set HP on the player panel\n        playerPortrait.SetHealthPercent(event.hpPercentage);\n    }\n}\n\nlet ui = new ExampleUI($.GetContextPanel());\n')),(0,r.kt)("p",null,"We simply bound a handler for the ",(0,r.kt)("inlineCode",{parentName:"p"},"hp_changed")," event in the constructor of our ExampleUI, and whenever that happens OnHPChanged is called, which looks up the player portrait in the map and calls SetHealthPercent on the portrait."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"To conclude, I hope to have convinced you TypeScript helps to write readable, modular UI scripts in Panorama. TypeScript helps you by finding typing errors before you compile, and even prevents errors by taking scoping into account. On top of that the code completion for the panorama API is very useful. The more I use TypeScript to write Panorama, the more I am impressed by how useful it is. Hopefully you give it a try and discover for yourself."))}p.isMDXComponent=!0},6010:(e,t,n)=>{function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);