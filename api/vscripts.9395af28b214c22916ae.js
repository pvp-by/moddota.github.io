(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[443],{pCvI:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>me});var a=n("bkJV"),l=n("q1tI"),r=n("ESB5"),c=n("GlAS"),i=n("X6oG"),s=n("DCqk"),m=n("dVvj"),o=n("kDog"),p=n("f8wK"),d=n("TOw/"),E=n("BSJ3");const u=n.p+"bfc3f4fd021769ed190248f6cd72a2dc.svg";var y=n("55Ip"),g=n("9R94"),f=n("x3Ba"),h=n("mhT9");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const x=({types:e})=>l.createElement(l.Fragment,null,(0,h.iD)(e.map(((e,t)=>l.createElement(k,{key:t,type:e})))," | ")),k=({type:e})=>{if("string"==typeof e)return l.createElement(v,{name:e});switch(e.kind){case"array":return l.createElement(N,{type:e});case"function":return l.createElement(P,{type:e});case"literal":return l.createElement(C,{type:e});case"table":return l.createElement(w,{type:e});default:(0,h.vE)(e)}},_=(0,p.ZP)(y.OL).withConfig({displayName:"types__TypeReferenceLink"})(["&.active{text-decoration:none;}"]),v=({name:e})=>{const[t,n,r]=(0,l.useMemo)((()=>{if("nil"===e)return["nil"];const t=(0,a.findTypeByName)(e);return(0,g.Z)(void 0!==t,"Invalid type reference: "+e),"primitive"===t.kind||"nominal"===t.kind?["literal"]:["interface","class"===t.kind||"enum"===t.kind?e:"constant"===t.kind?"constants":"function"===t.kind?"functions":void 0,"constant"===t.kind||"function"===t.kind?e:void 0]}),[e]),c=r?"#"+r:"",i={textDecorationColor:(0,f.E)(t)};return n?l.createElement(_,{to:`/vscripts/${n}${c}`,style:i},l.createElement(f.P,{kind:t},e)):l.createElement("span",{style:i},l.createElement(f.P,{kind:t},e))},C=({type:{value:e}})=>l.createElement("span",null,l.createElement(f.P,{kind:"literal"},e)),N=({type:{types:e}})=>l.createElement("span",null,"[",l.createElement(x,{types:e}),"]"),w=({type:{key:e,value:t}})=>l.createElement("span",null,"{"," [",l.createElement(x,{types:e}),"]: ",l.createElement(x,{types:t})," ","}"),P=({type:{args:e,returns:t}})=>l.createElement("span",null,l.createElement(Z,{args:e}),l.createElement(z,null),l.createElement(x,{types:t}));function Z({args:e}){return l.createElement(l.Fragment,null,"(",(0,h.iD)(e.map((e=>l.createElement(D,b({key:e.name},e)))),", "),")")}const D=({name:e,types:t})=>l.createElement("span",null,l.createElement(f.P,{kind:"parameter"},e),": ",l.createElement(x,{types:t})),F=p.ZP.span.withConfig({displayName:"types__ArrowIconWrapper"})(["word-spacing:-1px;"]),z=()=>l.createElement(F,null," ",l.createElement("img",{src:u,height:14,alt:"=>"})," "),O=(0,p.ZP)(E.S9).withConfig({displayName:"Field__FieldWrapper"})(["padding:4px;"]),S=(0,p.ZP)(E.dU).withConfig({displayName:"Field__FieldSignature"})(["font-size:20px;"]),j=({className:e,context:t,element:n})=>{const a=(0,d.H_)({scope:t,hash:n.name});return l.createElement(O,{className:e,id:n.name,isLinked:a},l.createElement(E.c_,null,l.createElement(S,null,l.createElement(d.vI,{kind:"field",size:"big"}),n.name,n.types.includes("nil")&&"?",":"," ",l.createElement(x,{types:n.types.filter((e=>"nil"!==e))})),l.createElement(E.Yq,null,t&&l.createElement(d.RE,{scope:t,hash:n.name}))))},I=p.ZP.div.withConfig({displayName:"ObjectType__ObjectHeader"})(["padding:4px;"]),T=p.ZP.span.withConfig({displayName:"ObjectType__ObjectName"})(["font-size:18px;font-weight:700;"]),R=p.ZP.div.withConfig({displayName:"ObjectType__ObjectDescription"})(["font-size:18px;margin:5px 20px;"]),W=({className:e,declaration:t})=>l.createElement(E.S9,{className:e},l.createElement(I,null,l.createElement(d.vI,{kind:"interface",size:"small"}),l.createElement(T,null,t.name),t.extend&&l.createElement(l.Fragment,null," extends ",t.extend.join(", "))),t.description&&l.createElement(R,null,t.description),t.fields.length>0&&l.createElement(E.aR,null,t.fields.map((e=>l.createElement(j,{key:e.name,element:e}))))),H=(0,p.ZP)(E.S9).withConfig({displayName:"FunctionDeclaration__FunctionWrapper"})(["padding:2px 5px;"]),q=(0,p.ZP)(E.dU).withConfig({displayName:"FunctionDeclaration__FunctionSignature"})(["margin-bottom:3px;"]),U=p.ZP.div.withConfig({displayName:"FunctionDeclaration__ObjectReferences"})(["margin:0 25px;margin-bottom:7px;>:not(:last-child){margin-bottom:7px;box-sizing:border-box;}"]),M=p.ZP.li.withConfig({displayName:"FunctionDeclaration__ParameterDescription"})(["list-style:none;margin-left:8px;line-height:1.7;code{background-color:rgba(0,0,0,0.4);padding:3px;border-radius:4px;border:1px solid black;}"]),L=({className:e,style:t,context:n,declaration:a})=>{const r=(0,l.useMemo)((()=>(0,o.Tf)(a).map((e=>l.createElement(W,{key:e.name,declaration:e})))),[a]),c=(0,l.useMemo)((()=>a.args.filter((e=>e.description)).map((e=>l.createElement(M,{key:e.name},l.createElement("code",null,e.name)," - ",e.description)))),[a]),i=(0,d.H_)({scope:n,hash:a.name});return l.createElement(H,{className:e,style:t,id:a.name,isLinked:i},l.createElement(E.c_,null,l.createElement(q,null,l.createElement(d.vI,{kind:"function",size:"big"}),a.name,a.abstract&&l.createElement("span",{title:"Abstract: this method does not exist on the class, but it can be implemented on subclass"},"?"),l.createElement(Z,{args:a.args}),": ",l.createElement(x,{types:a.returns})),l.createElement(E.Yq,null,l.createElement(d.TQ,{available:a.available}),l.createElement(d.zw,{name:a.name}),l.createElement(d.vf,{name:a.name}),n&&l.createElement(d.RE,{scope:n,hash:a.name}))),r.length>0&&l.createElement(U,null,r),l.createElement(E.Wh,{description:(a.description||c.length>0)&&l.createElement(l.Fragment,null,c,a.description)}))},Y=(0,p.ZP)(E.c_).withConfig({displayName:"ClassDeclaration__ClassHeader"})(["padding:5px;"]),A=p.ZP.span.withConfig({displayName:"ClassDeclaration__ClassName"})(["font-size:24px;font-weight:700;"]),B=p.ZP.span.withConfig({displayName:"ClassDeclaration__ClassExtendsWrapper"})(["font-size:16px;"]),J=({extend:e})=>l.createElement(B,null,"extends ",l.createElement(x,{types:[e]})),K=(0,p.ZP)(E.Wh).withConfig({displayName:"ClassDeclaration__ClassDescription"})(["font-size:18px;margin:5px 20px;"]),G=(0,p.ZP)(E.aR).withConfig({displayName:"ClassDeclaration__ClassMembers"})([">:not(:last-child){margin-bottom:10px;}"]),Q=({className:e,style:t,declaration:n})=>l.createElement(E.S9,{className:e,style:t},l.createElement(Y,null,l.createElement(E.dU,null,l.createElement(d.vI,{kind:"class",size:"big"}),l.createElement(A,null,n.name)," ",n.extend&&l.createElement(J,{extend:n.extend})),l.createElement(E.Yq,null,l.createElement(d.Kw,{name:n.name}),l.createElement(d.TQ,{available:null!=n.clientName?"both":"server"}),l.createElement(d.RE,{scope:n.name}))),l.createElement(K,{description:n.description}),n.members.length>0&&l.createElement(G,null,n.members.map((e=>"field"===e.kind?l.createElement(j,{key:e.name,element:e,context:n.name}):l.createElement(L,{key:e.name,declaration:e,context:n.name}))))),V=(0,p.ZP)(E.S9).withConfig({displayName:"Constant__ConstantWrapper"})(["padding:5px;"]),$=(0,p.ZP)(E.dU).withConfig({displayName:"Constant__ConstantSignature"})(["font-size:20px;"]);function X({className:e,style:t,element:n}){const a=(0,d.H_)({scope:"constants",hash:n.name});return l.createElement(V,{className:e,style:t,id:n.name,isLinked:a},l.createElement(E.c_,null,l.createElement($,null,l.createElement(d.vI,{kind:"constant",size:"big"}),n.name,": ",n.value),l.createElement(E.Yq,null,l.createElement(d.RE,{scope:"constants",hash:n.name}))),l.createElement(E.Wh,{description:n.description}))}function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const te=(0,p.ZP)(E.S9).withConfig({displayName:"Enum__EnumMemberWrapper"})(["padding:2px 5px;"]),ne=e=>l.createElement(te,null,l.createElement(E.c_,null,l.createElement(E.dU,null,e.name," = ",l.createElement(f.P,{kind:"literal"},e.value))),l.createElement(E.Wh,{description:e.description})),ae=(0,p.ZP)(E.c_).withConfig({displayName:"Enum__EnumHeader"})(["padding:5px;"]),le=(0,p.ZP)(E.aR).withConfig({displayName:"Enum__EnumMembers"})([">:not(:last-child){margin-bottom:2px;}"]),re=({className:e,style:t,element:n})=>l.createElement(E.S9,{className:e,style:t},l.createElement(ae,null,l.createElement(E.dU,null,l.createElement(d.vI,{kind:"enum",size:"big"}),n.name),l.createElement(E.Yq,null,l.createElement(d.Kw,{name:n.name}),l.createElement(d.RE,{scope:n.name}))),l.createElement(E.Wh,{description:n.description}),n.members.length>0&&l.createElement(le,null,n.members.map((e=>l.createElement(ne,ee({key:e.name},e))))));function ce(e,t){let n;switch(e.kind){case"class":n=l.createElement(Q,{declaration:e});break;case"enum":n=l.createElement(re,{element:e});break;case"constant":n=l.createElement(X,{element:e});break;case"function":n=l.createElement(L,{context:"functions",declaration:e})}return l.createElement(i.HC,{style:t,key:e.name},n)}function ie(){const{data:e,isSearching:t}=(0,o.pu)();return l.createElement(i.vs,null,l.createElement(i.IH,{baseUrl:"/vscripts"}),e.length>0?t?l.createElement(m.c,{data:e,render:ce}):l.createElement(m.A,{data:e,render:ce}):t?l.createElement(i.cv,null,"No results found"):l.createElement(i.cv,null,"Choose a category or use the search bar..."),!t&&!e.length&&l.createElement(s.S,null))}const se=()=>l.createElement(c.H,null,l.createElement(c.f,{icon:"function",text:"Functions",to:"/vscripts/functions"}),l.createElement(c.f,{icon:"constant",text:"Constants",to:"/vscripts/constants"}),a.allData.filter((e=>"class"===e.kind||"enum"===e.kind)).map((({name:e,kind:t})=>l.createElement(c.f,{key:e,icon:t,text:e,to:"/vscripts/"+e}))));function me(){return l.createElement(l.Fragment,null,l.createElement(r.J6,null),l.createElement(se,null),l.createElement(ie,null))}}}]);
//# sourceMappingURL=vscripts.9395af28b214c22916ae.js.map