(()=>{var e={};e.id=2363,e.ids=[2363],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9918:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>l}),r(9071),r(8295),r(5866);var t=r(3191),a=r(8716),n=r(7922),o=r.n(n),i=r(5231),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);r.d(s,d);let l=["",{children:["reset-password",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9071)),"F:\\MERN PROJECTS\\New folder\\js-master-main\\src\\app\\reset-password\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8295)),"F:\\MERN PROJECTS\\New folder\\js-master-main\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],u=["F:\\MERN PROJECTS\\New folder\\js-master-main\\src\\app\\reset-password\\page.js"],c="/reset-password/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/reset-password/page",pathname:"/reset-password",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},6369:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5459:()=>{},2036:(e,s,r)=>{Promise.resolve().then(r.bind(r,1204))},5047:(e,s,r)=>{"use strict";var t=r(7389);r.o(t,"usePathname")&&r.d(s,{usePathname:function(){return t.usePathname}}),r.o(t,"useRouter")&&r.d(s,{useRouter:function(){return t.useRouter}}),r.o(t,"useSearchParams")&&r.d(s,{useSearchParams:function(){return t.useSearchParams}})},6180:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});var t=r(326);r(7577),r(1252);let a=()=>t.jsx("div",{className:"loader",children:t.jsx("div",{className:"spinner"})})},1204:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>l});var t=r(326),a=r(7577),n=r(5047),o=r(9394);r(5996),r(7124);var i=r(6180);function d(){let[e,s]=(0,a.useState)(""),[r,d]=(0,a.useState)(""),[l,u]=(0,a.useState)(!1),[c,p]=(0,a.useState)(""),m=(0,n.useRouter)(),h=(0,n.useSearchParams)().get("token"),x=async s=>{if(s.preventDefault(),u(!0),e.length<6){p("Password must be at least 6 characters long"),o.Am.error("Password must be at least 6 characters long"),u(!1);return}if(e!==r){p("Passwords do not match"),o.Am.error("Passwords do not match"),u(!1);return}try{let s=await fetch("/api/reset-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:h,password:e})}),r=await s.json();s.ok?(o.Am.success("Password reset successful!"),m.push("/login")):(p(r.message),o.Am.error(r.message))}catch(e){p("An error occurred. Please try again."),o.Am.error("An error occurred. Please try again.")}finally{u(!1)}};return(0,t.jsxs)("div",{className:"Auth_container",children:[l&&t.jsx(i.default,{}),t.jsx("div",{className:"Auth_header",children:t.jsx("h1",{children:"Reset Password"})}),(0,t.jsxs)("form",{onSubmit:x,className:"Auth_form",children:[(0,t.jsxs)("div",{className:"Auth_inputGroup",children:[t.jsx("label",{htmlFor:"password",children:"New Password"}),t.jsx("input",{type:"password",id:"password",name:"password",value:e,onChange:e=>s(e.target.value),required:!0})]}),(0,t.jsxs)("div",{className:"Auth_inputGroup",children:[t.jsx("label",{htmlFor:"confirmPassword",children:"Confirm New Password"}),t.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:r,onChange:e=>d(e.target.value),required:!0})]}),t.jsx("button",{type:"submit",className:"Auth_button",disabled:l,children:l?"Resetting...":"Reset Password"}),c&&t.jsx("p",{style:{color:"red"},children:c})]}),t.jsx(o.Ix,{})]})}function l(){return t.jsx(a.Suspense,{fallback:t.jsx("p",{children:"Loading reset password form..."}),children:t.jsx(d,{})})}},8295:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>n,metadata:()=>a});var t=r(9510);r(833),r(1463),r(4297),r(5206);let a={title:"JsMaster",description:"This is Js Master App"};function n({children:e}){return t.jsx("html",{lang:"en",children:t.jsx("body",{children:t.jsx("main",{children:e})})})}},9071:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});var t=r(8570);let a=(0,t.createProxy)(String.raw`F:\MERN PROJECTS\New folder\js-master-main\src\app\reset-password\page.js`),{__esModule:n,$$typeof:o}=a;a.default;let i=(0,t.createProxy)(String.raw`F:\MERN PROJECTS\New folder\js-master-main\src\app\reset-password\page.js#default`)},833:()=>{},7124:()=>{},1252:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[7882,1073],()=>r(9918));module.exports=t})();