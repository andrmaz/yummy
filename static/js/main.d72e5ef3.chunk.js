(this.webpackJsonpyummy=this.webpackJsonpyummy||[]).push([[0],{86:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),o=n(69),c=n.n(o),i=(n(86),n(102)),l=Object(i.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}}),s=n(70),u=n(71),d=n(49),h=n(76),j=n(74),b=n(114),p=n(79),f=n(103),x=n(117),v=n(105),g=n(75);var O=function(){var e=Object(p.b)(),t=e.colorMode,n=e.toggleColorMode;return Object(r.jsxs)(f.a,{d:"flex",justifyContent:"space-between",pt:"10px",children:[Object(r.jsxs)(x.a,{"data-testid":"toggle",onClick:n,children:["Toggle ","light"===t?"Dark":"Light"]}),Object(r.jsx)(v.a,{as:g.a})]})},m=n(11),w=n.n(m),C=n(19),y=n(24),k=function(){var e=Object(C.a)(w.a.mark((function e(t,n){var r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=n(106),W=n(107),z=n(109),M=function(e){var t=e.control;return Object(r.jsx)(y.a,{name:"to","data-testid":"b",control:t,defaultValue:4,render:function(e){var t=e.onChange,n=e.value;return Object(r.jsxs)(S.a,{direction:"column",children:[Object(r.jsx)(W.a,{textAlign:"center",pt:"5px",children:"Recipes"}),Object(r.jsxs)(z.a,{id:"to",onChange:t,value:n,name:"to",size:"xs",w:"200px",m:"5px",variant:"filled",focusBorderColor:"blue.500",children:[Object(r.jsx)("option",{label:2,value:2}),Object(r.jsx)("option",{label:3,value:3}),Object(r.jsx)("option",{label:4,value:4}),Object(r.jsx)("option",{label:5,value:5}),Object(r.jsx)("option",{label:6,value:6})]})]})}})},B=function(e){var t=e.control;return Object(r.jsx)(y.a,{name:"diet","data-testid":"c",control:t,defaultValue:"balanced",render:function(e){var t=e.onChange,n=e.value;return Object(r.jsxs)(S.a,{direction:"column",children:[Object(r.jsx)(W.a,{textAlign:"center",pt:"5px",children:"Diet"}),Object(r.jsxs)(z.a,{id:"diet",onChange:t,value:n,name:"diet",size:"xs",w:"200px",m:"5px",variant:"filled",focusBorderColor:"blue.500",children:[Object(r.jsx)("option",{label:"balanced",value:"balanced"}),Object(r.jsx)("option",{label:"high-protein",value:"high-protein"}),Object(r.jsx)("option",{label:"high-fiber",value:"high-fiber"}),Object(r.jsx)("option",{label:"low-fat",value:"low-fat"}),Object(r.jsx)("option",{label:"low-carb",value:"low-carb"})]})]})}})},E=function(e){var t=e.control;return Object(r.jsx)(y.a,{name:"health","data-testid":"d",control:t,defaultValue:"tree-nut-free",render:function(e){var t=e.onChange,n=e.value;return Object(r.jsxs)(S.a,{direction:"column",children:[Object(r.jsx)(W.a,{textAlign:"center",pt:"5px",children:"Health"}),Object(r.jsxs)(z.a,{id:"health",onChange:t,value:n,name:"health",size:"xs",w:"200px",m:"5px",variant:"filled",focusBorderColor:"blue.500",children:[Object(r.jsx)("option",{label:"tree-nut-free",value:"tree-nut-free"}),Object(r.jsx)("option",{label:"peanut-free",value:"peanut-free"}),Object(r.jsx)("option",{label:"vegetarian",value:"vegetarian"})]})]})}})},L=n(111),T=n(34),A=n(112),V=n(113),q=n(73);n.n(q).a.config({silent:!0});var P=n(110),D=function(e){var t=e.control,n=e.errors;return Object(r.jsx)(y.a,{name:"input","data-testid":"a",control:t,rules:{required:!0},defaultValue:"",render:function(e){var t=e.onChange,a=e.value;return Object(r.jsx)(P.a,{id:"input",onChange:t,value:a,name:"input",pr:"4.5rem",type:"text",variant:"outline",placeholder:"Enter an ingredient",isRequired:!0,errorBorderColor:"red.500",isInvalid:!!n.input})}})},F=function(e){var t=e.onSearch,n=Object(p.b)().colorMode,a=Object(y.b)({mode:"onChange",reValidateMode:"onChange",defaultValues:{input:"",to:4,diet:"balanced",health:"tree-nut-free"}}),o=a.control,c=a.handleSubmit,i=a.watch,l=a.errors,s=i(),u=s.input,d=s.to,h=s.diet,j=s.health,b=function(){var e=Object(C.a)(w.a.mark((function e(){var n,r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"GET",headers:{"Content-Type":"application/json","Content-Encoding":"gzip","Cache-Control":"no-cache"}},r="https://api.edamam.com/search?q=".concat(u,"&app_id=").concat("72fe9160","&app_key=").concat("9ddab3c0a61229538c669b13361de542","&from=0&to=").concat(d,"&diet=").concat(h,"&health=").concat(j),e.next=5,k(r,n);case 5:a=e.sent,t(a),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(L.a,{h:"20vh",color:"light"===n?"black":"white",minW:"300px",maxW:"500px",m:"auto",children:Object(r.jsxs)(T.a,{onSubmit:c(b),isRequired:"true",children:[Object(r.jsxs)(A.a,{size:"md",children:[Object(r.jsx)(D,{control:o,errors:l}),Object(r.jsx)(V.a,{width:"4.5rem",children:Object(r.jsx)(x.a,{id:"button",h:"1.75rem",size:"sm",variant:"solid",colorScheme:"blue",isDisabled:u.length<2,onClick:b,children:"Search"})})]}),Object(r.jsxs)(S.a,{justify:"space-around",children:[Object(r.jsx)(M,{control:o}),Object(r.jsx)(B,{control:o}),Object(r.jsx)(E,{control:o})]})]})})},R=n(118),I=n(119),N=n(120),U=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,122))}));function J(e,t){return e===t}var _=function(e){var t=e.results;return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(R.a,{label:"Loading",thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl",pos:"absolute",top:"50%",left:"50%"}),children:Object(r.jsx)(I.a,{minChildWidth:"300px",spacing:"5px",children:t?(null===t||void 0===t?void 0:t.count)>0?t.hits.map((function(e,t){var n=e.recipe;return Object(r.jsx)(U,{recipe:n},t)})):Object(r.jsxs)(N.a,{status:"warning",children:[Object(r.jsx)(N.b,{}),"No items were found matching your search request .. Please retry"]}):Object(r.jsxs)(N.a,{status:"info",children:[Object(r.jsx)(N.b,{}),"Welcome to Yummy. Let's start searching!"]})})})},G=Object(a.memo)(_,J),H=(n(94),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).onSearch=r.onSearch.bind(Object(d.a)(r)),r.state={results:null},r}return Object(u.a)(n,[{key:"onSearch",value:function(e){this.setState({results:e})}},{key:"render",value:function(){var e=this.state.results;return Object(r.jsxs)(b.a,{h:"100vh",maxW:"1200px",mb:"10vh",children:[Object(r.jsx)(O,{}),Object(r.jsx)(F,{onSearch:this.onSearch}),Object(r.jsx)(G,{results:e})]})}}]),n}(a.Component)),Y=n(116),$=n(115),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var X=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,121)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};c.a.render(Object(r.jsxs)(Y.a,{theme:l,children:[Object(r.jsx)($.a,{initialColorMode:l.config.initialColorMode}),Object(r.jsx)(H,{})]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/yummy",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/yummy","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Q(t,e)}))}}(),X()}},[[95,1,2]]]);
//# sourceMappingURL=main.d72e5ef3.chunk.js.map