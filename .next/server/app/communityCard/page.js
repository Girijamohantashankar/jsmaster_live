(()=>{var e={};e.id=9926,e.ids=[9926],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3122:e=>{"use strict";e.exports=require("undici")},5119:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),r(2637),r(8295),r(5866);var s=r(3191),a=r(8716),i=r(7922),n=r.n(i),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["communityCard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2637)),"F:\\MERN PROJECTS\\New folder\\js-master-main\\src\\app\\communityCard\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8295)),"F:\\MERN PROJECTS\\New folder\\js-master-main\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=["F:\\MERN PROJECTS\\New folder\\js-master-main\\src\\app\\communityCard\\page.js"],u="/communityCard/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/communityCard/page",pathname:"/communityCard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6369:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},13:(e,t,r)=>{Promise.resolve().then(r.bind(r,5655))},5459:()=>{},5655:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(326),a=r(7577),i=r(1552);let n=(0,r(2585).ZF)({apiKey:"AIzaSyCLo3z-vVRDwKbN9z78njCHrdYFzkEUe3Y",authDomain:"jsmaster-e2950.firebaseapp.com",projectId:"jsmaster-e2950",storageBucket:"jsmaster-e2950.appspot.com",messagingSenderId:"743548453677",appId:"1:743548453677:web:f518d9532c4556dbcd09a4"}),o=(0,i.cF)(n);r(6754);var l=r(6180);function d({onClose:e,onAddPost:t}){let[r,n]=(0,a.useState)(""),[d,c]=(0,a.useState)(""),[u,m]=(0,a.useState)(null),[p,x]=(0,a.useState)(!1),[h,g]=(0,a.useState)(""),[j,f]=(0,a.useState)([]),v=async s=>{if(s.preventDefault(),r&&d&&u&&h){x(!0);try{let s=(0,i.iH)(o,`images/${u.name}`),a=await (0,i.KV)(s,u),n=await (0,i.Jt)(a.ref),l=await fetch("/api/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:r,description:d,imageUrl:n,userEmail:h,userAnswer:j})});if(l.ok){let r=await l.json();t(r.post),e()}else console.error("Failed to save post data");x(!1),e()}catch(e){console.error("Error:",e),x(!1)}}};return(0,s.jsxs)("div",{className:"modal_overlay",children:[(0,s.jsxs)("div",{className:"modal_content",children:[s.jsx("button",{className:"modal_close",onClick:e,children:"X"}),s.jsx("h2",{children:"Create New Post"}),(0,s.jsxs)("form",{onSubmit:v,children:[s.jsx("label",{htmlFor:"title",children:"Title"}),s.jsx("input",{type:"text",id:"title",value:r,placeholder:"Enter your issue",onChange:e=>n(e.target.value),required:!0}),s.jsx("label",{htmlFor:"description",children:"Description"}),s.jsx("textarea",{id:"description",value:d,onChange:e=>c(e.target.value),required:!0,placeholder:"Explain Your issues"}),s.jsx("label",{htmlFor:"image",children:"Image"}),s.jsx("input",{type:"file",id:"image",accept:"image/*",onChange:e=>m(e.target.files[0]),required:!0}),s.jsx("button",{type:"submit",disabled:p,children:p?"Uploading...":"Submit"})]})]}),p&&s.jsx(l.default,{})]})}},6180:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(326);r(7577),r(1252);let a=()=>s.jsx("div",{className:"loader",children:s.jsx("div",{className:"spinner"})})},2637:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>o});var s=r(8570);let a=(0,s.createProxy)(String.raw`F:\MERN PROJECTS\New folder\js-master-main\src\app\communityCard\page.js`),{__esModule:i,$$typeof:n}=a;a.default;let o=(0,s.createProxy)(String.raw`F:\MERN PROJECTS\New folder\js-master-main\src\app\communityCard\page.js#default`)},8295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>a});var s=r(9510);r(833),r(1463),r(4297),r(5206);let a={title:"JsMaster",description:"This is Js Master App"};function i({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{children:s.jsx("main",{children:e})})})}},833:()=>{},6754:()=>{},1252:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[7882,9611],()=>r(5119));module.exports=s})();