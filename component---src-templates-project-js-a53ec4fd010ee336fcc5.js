(self.webpackChunkprabhi=self.webpackChunkprabhi||[]).push([[769],{9806:function(e,t,n){"use strict";var r,o=n(7294),l=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var a,i,f=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==u?u:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},l=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||Function("return this")(),c=function(e){try{return!!e()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),i={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!i.call({1:2},1)?function(e){var t=f(this,e);return!!t&&t.enumerable}:i},E=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,m="".split,p=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return d.call(e).slice(8,-1)}(e)?m.call(e,""):Object(e)}:Object,v=function(e){return p(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},y=function(e){return"object"==typeof e?null!==e:"function"==typeof e},h=function(e,t){if(!y(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!y(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!y(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!y(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},g={}.hasOwnProperty,b=function(e,t){return g.call(e,t)},T=l.document,N=y(T)&&y(T.createElement),S=function(e){return N?T.createElement(e):{}},O=!a&&!c((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,_={f:a?I:function(e,t){if(e=v(e),t=h(t,!0),O)try{return I(e,t)}catch(n){}if(b(e,t))return E(!s.f.call(e,t),e[t])}},D=function(e){if(!y(e))throw TypeError(String(e)+" is not an object");return e},A=Object.defineProperty,L={f:a?A:function(e,t,n){if(D(e),t=h(t,!0),D(n),O)try{return A(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},w=a?function(e,t,n){return L.f(e,t,E(1,n))}:function(e,t,n){return e[t]=n,e},j=function(e,t){try{w(l,e,t)}catch(n){l[e]=t}return t},P="__core-js_shared__",R=l[P]||j(P,{}),M=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(e){return M.call(e)});var H,k,C,U=R.inspectSource,G=l.WeakMap,Y="function"==typeof G&&/native code/.test(U(G)),x=r((function(e){(e.exports=function(e,t){return R[e]||(R[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),B=0,K=Math.random(),F=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+K).toString(36)},V=x("keys"),W=function(e){return V[e]||(V[e]=F(e))},z={},Q=l.WeakMap;if(Y){var q=new Q,Z=q.get,J=q.has,X=q.set;H=function(e,t){return X.call(q,e,t),t},k=function(e){return Z.call(q,e)||{}},C=function(e){return J.call(q,e)}}else{var $=W("state");z[$]=!0,H=function(e,t){return w(e,$,t),t},k=function(e){return b(e,$)?e[$]:{}},C=function(e){return b(e,$)}}var ee={set:H,get:k,has:C,enforce:function(e){return C(e)?k(e):H(e,{})},getterFor:function(e){return function(t){var n;if(!y(t)||(n=k(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},te=r((function(e){var t=ee.get,n=ee.enforce,r=String(String).split("String");(e.exports=function(e,t,o,c){var u=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,i=!!c&&!!c.noTargetGet;"function"==typeof o&&("string"!=typeof t||b(o,"name")||w(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==l?(u?!i&&e[t]&&(a=!0):delete e[t],a?e[t]=o:w(e,t,o)):a?e[t]=o:j(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||U(this)}))})),ne=l,re=function(e){return"function"==typeof e?e:void 0},oe=function(e,t){return arguments.length<2?re(ne[e])||re(l[e]):ne[e]&&ne[e][t]||l[e]&&l[e][t]},le=Math.ceil,ce=Math.floor,ue=function(e){return isNaN(e=+e)?0:(e>0?ce:le)(e)},ae=Math.min,ie=Math.max,fe=Math.min,se=function(e){return function(t,n,r){var o,l,c=v(t),u=(o=c.length)>0?ae(ue(o),9007199254740991):0,a=function(e,t){var n=ue(e);return n<0?ie(n+t,0):fe(n,t)}(r,u);if(e&&n!=n){for(;u>a;)if((l=c[a++])!=l)return!0}else for(;u>a;a++)if((e||a in c)&&c[a]===n)return e||a||0;return!e&&-1}},Ee={includes:se(!0),indexOf:se(!1)},de=Ee.indexOf,me=function(e,t){var n,r=v(e),o=0,l=[];for(n in r)!b(z,n)&&b(r,n)&&l.push(n);for(;t.length>o;)b(r,n=t[o++])&&(~de(l,n)||l.push(n));return l},pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ve=pe.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return me(e,ve)}},he={f:Object.getOwnPropertySymbols},ge=oe("Reflect","ownKeys")||function(e){var t=ye.f(D(e)),n=he.f;return n?t.concat(n(e)):t},be=function(e,t){for(var n=ge(t),r=L.f,o=_.f,l=0;l<n.length;l++){var c=n[l];b(e,c)||r(e,c,o(t,c))}},Te=/#|\.prototype\./,Ne=function(e,t){var n=Oe[Se(e)];return n==_e||n!=Ie&&("function"==typeof t?c(t):!!t)},Se=Ne.normalize=function(e){return String(e).replace(Te,".").toLowerCase()},Oe=Ne.data={},Ie=Ne.NATIVE="N",_e=Ne.POLYFILL="P",De=Ne,Ae=_.f,Le=function(e,t){var n,r,o,c,u,a=e.target,i=e.global,f=e.stat;if(n=i?l:f?l[a]||j(a,{}):(l[a]||{}).prototype)for(r in t){if(c=t[r],o=e.noTargetGet?(u=Ae(n,r))&&u.value:n[r],!De(i?r:a+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof c==typeof o)continue;be(c,o)}(e.sham||o&&o.sham)&&w(c,"sham",!0),te(n,r,c,e)}},we=Object.keys||function(e){return me(e,pe)},je=s.f,Pe=function(e){return function(t){for(var n,r=v(t),o=we(r),l=o.length,c=0,u=[];l>c;)n=o[c++],a&&!je.call(r,n)||u.push(e?[n,r[n]]:r[n]);return u}},Re=(Pe(!0),Pe(!1));Le({target:"Object",stat:!0},{values:function(e){return Re(e)}}),ne.Object.values;var Me,He=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),ke=He&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ce=x("wks"),Ue=l.Symbol,Ge=ke?Ue:Ue&&Ue.withoutSetter||F,Ye=a?Object.defineProperties:function(e,t){D(e);for(var n,r=we(t),o=r.length,l=0;o>l;)L.f(e,n=r[l++],t[n]);return e},xe=oe("document","documentElement"),Be=W("IE_PROTO"),Ke=function(){},Fe=function(e){return"<script>"+e+"<\/script>"},Ve=function(){try{Me=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;Ve=Me?function(e){e.write(Fe("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Me):((t=S("iframe")).style.display="none",xe.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Fe("document.F=Object")),e.close(),e.F);for(var n=pe.length;n--;)delete Ve.prototype[pe[n]];return Ve()};z[Be]=!0;var We,ze=Object.create||function(e,t){var n;return null!==e?(Ke.prototype=D(e),n=new Ke,Ke.prototype=null,n[Be]=e):n=Ve(),void 0===t?n:Ye(n,t)},Qe=(b(Ce,We="unscopables")||(He&&b(Ue,We)?Ce[We]=Ue[We]:Ce[We]=Ge("Symbol."+We)),Ce[We]),qe=Array.prototype;null==qe[Qe]&&L.f(qe,Qe,{configurable:!0,value:ze(null)});var Ze,Je=Object.defineProperty,Xe={},$e=function(e){throw e},et=Ee.includes;Le({target:"Array",proto:!0,forced:!function(e,t){if(b(Xe,e))return Xe[e];t||(t={});var n=[][e],r=!!b(t,"ACCESSORS")&&t.ACCESSORS,o=b(t,0)?t[0]:$e,l=b(t,1)?t[1]:void 0;return Xe[e]=!!n&&!c((function(){if(r&&!a)return!0;var e={length:-1};r?Je(e,1,{enumerable:!0,get:$e}):e[1]=1,n.call(e,o,l)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return et(this,e,arguments.length>1?arguments[1]:void 0)}}),Ze="includes",qe[Qe][Ze]=!0;var tt,nt,rt,ot=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},lt=Function.call;tt="includes",ot(lt,l.Array.prototype[tt],nt),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(rt||(rt={}));var ct,ut=rt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(ct||(ct={}));var at,it=ct,ft=[ut.PARAGRAPH,ut.HEADING_1,ut.HEADING_2,ut.HEADING_3,ut.HEADING_4,ut.HEADING_5,ut.HEADING_6,ut.OL_LIST,ut.UL_LIST,ut.HR,ut.QUOTE,ut.EMBEDDED_ENTRY,ut.EMBEDDED_ASSET],st=[ut.HR,ut.EMBEDDED_ENTRY,ut.EMBEDDED_ASSET],Et=((at={})[ut.OL_LIST]=[ut.LIST_ITEM],at[ut.UL_LIST]=[ut.LIST_ITEM],at[ut.LIST_ITEM]=ft.slice(),at[ut.QUOTE]=[ut.PARAGRAPH],at),dt={nodeType:ut.DOCUMENT,data:{},content:[{nodeType:ut.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},mt=Object.freeze({isInline:function(e){return Object.values(it).includes(e.nodeType)},isBlock:function(e){return Object.values(ut).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=ut,t.CONTAINERS=Et,t.EMPTY_DOCUMENT=dt,t.INLINES=it,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=ft,t.VOID_BLOCKS=st,t.helpers=mt}(a={exports:{}},a.exports),a.exports);(i=f)&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")&&i.default;var s,E,d=f.BLOCKS,m=(f.CONTAINERS,f.EMPTY_DOCUMENT,f.INLINES),p=f.MARKS,v=(f.TOP_LEVEL_BLOCKS,f.VOID_BLOCKS,f.helpers);function y(e,t){return e.map((function(e,n){return r=h(e,t),l=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:l}):r;var r,l}))}function h(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(v.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var c=y(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,c):l.createElement(l.Fragment,null,c)}var g=((s={})[d.DOCUMENT]=function(e,t){return t},s[d.PARAGRAPH]=function(e,t){return l.createElement("p",null,t)},s[d.HEADING_1]=function(e,t){return l.createElement("h1",null,t)},s[d.HEADING_2]=function(e,t){return l.createElement("h2",null,t)},s[d.HEADING_3]=function(e,t){return l.createElement("h3",null,t)},s[d.HEADING_4]=function(e,t){return l.createElement("h4",null,t)},s[d.HEADING_5]=function(e,t){return l.createElement("h5",null,t)},s[d.HEADING_6]=function(e,t){return l.createElement("h6",null,t)},s[d.EMBEDDED_ENTRY]=function(e,t){return l.createElement("div",null,t)},s[d.UL_LIST]=function(e,t){return l.createElement("ul",null,t)},s[d.OL_LIST]=function(e,t){return l.createElement("ol",null,t)},s[d.LIST_ITEM]=function(e,t){return l.createElement("li",null,t)},s[d.QUOTE]=function(e,t){return l.createElement("blockquote",null,t)},s[d.HR]=function(){return l.createElement("hr",null)},s[m.ASSET_HYPERLINK]=function(e){return T(m.ASSET_HYPERLINK,e)},s[m.ENTRY_HYPERLINK]=function(e){return T(m.ENTRY_HYPERLINK,e)},s[m.EMBEDDED_ENTRY]=function(e){return T(m.EMBEDDED_ENTRY,e)},s[m.HYPERLINK]=function(e,t){return l.createElement("a",{href:e.data.uri},t)},s),b=((E={})[p.BOLD]=function(e){return l.createElement("b",null,e)},E[p.ITALIC]=function(e){return l.createElement("i",null,e)},E[p.UNDERLINE]=function(e){return l.createElement("u",null,e)},E[p.CODE]=function(e){return l.createElement("code",null,e)},E);function T(e,t){return l.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return void 0===t&&(t={}),e?h(e,{renderNode:c({},g,t.renderNode),renderMark:c({},b,t.renderMark),renderText:t.renderText}):null}},9086:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o=n(5444);var l=function(){var e=(new Date).getFullYear();return console.log(e),r.createElement("div",{className:"footer"},r.createElement("div",{className:"footer-content"},r.createElement("div",{className:"nav-list"},r.createElement("div",{className:"nav-footer-list"},r.createElement("ul",null,r.createElement("li",null,r.createElement(o.rU,{to:"/"},"Home")),r.createElement("li",null,r.createElement(o.rU,{to:"/work"},"Work")),r.createElement("li",null,r.createElement(o.rU,{to:"/about"},"About")),r.createElement("li",null,r.createElement(o.rU,{to:"/#contact"},"Contact"))))),r.createElement("p",null,"Prabhi@",e,". All rights reserved")))};var c=function(e){var t=e.location,n=(0,r.useState)(!1),l=n[0],c=n[1];console.log(t);var u="/"===t?"navbar":"navbar navbar-absolute";return r.createElement("div",{className:u},r.createElement("div",{className:"navbar-content"},r.createElement("div",{className:"nav-brand"},r.createElement(o.rU,{to:"/"},"Prabhi")),r.createElement("div",{className:"nav-list"},r.createElement("div",{className:"nav-toggle "+(l?"nav-toggle-on":""),onClick:function(){console.log("it is working"),c(!l)}},r.createElement("div",null)),r.createElement("div",{className:"nav-list-content "+(l?"nav-list-on":"")},r.createElement("ul",null,r.createElement("li",null,r.createElement(o.rU,{to:"/"},"Home")),r.createElement("li",null,r.createElement(o.rU,{to:"/work"},"Work")),r.createElement("li",null,r.createElement(o.rU,{to:"/about"},"About")),r.createElement("li",null,r.createElement(o.rU,{to:"/#contact"},"Contact"))),r.createElement("div",{className:"btn btn-light"},r.createElement(o.rU,{to:"/#contact"},"Hire Me"))))))};var u=function(e){var t=e.location;return(0,o.K2)("440568431"),r.createElement("header",null,r.createElement(c,{location:t}))},a=function(e){var t=e.location,n=e.children;return r.createElement("div",null,r.createElement(u,{location:t}),n,r.createElement(l,null))}},5227:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(5444),l=n(9086),c=n(9806),u=function(e){var t=e.image,n=(0,r.useState)(!1),o=n[0],l=n[1],c=""===t?"none":"block",u=!0===o?"project-modal modal-on":"project-modal modal-off";return r.createElement("div",{className:u,style:{checkImage:c}},r.createElement("div",{className:"project-gallery-card",onClick:function(){l(!o)}},r.createElement("div",{className:"closing-btn"},r.createElement("span",null)),r.createElement("img",{src:t})))},a=function(e){var t=(0,r.useState)(""),n=(t[0],t[1],e.images);return console.log(n),r.createElement("div",{className:"project-gallery"},n.map((function(e){return r.createElement(u,{image:e.file.url})})))};t.default=function(e){var t=e.data.contentfulProject;console.log(e),console.log(t);var n=JSON.parse(t.projectContent.raw),u=t.liveUrl?r.createElement("div",{className:"btn btn-light"},r.createElement(o.rU,{to:t.liveUrl},"View live site")):r.createElement(r.Fragment,null);return console.log(),r.createElement(l.Z,null,r.createElement("div",{className:"project-content"},r.createElement("div",{className:"project-heading"},r.createElement("h1",null,t.title),r.createElement("h4",null,"Responsibilities"),r.createElement("p",null,t.duties),u,r.createElement(a,{images:t.images})),(0,c.h)(n)))}}}]);
//# sourceMappingURL=component---src-templates-project-js-a53ec4fd010ee336fcc5.js.map