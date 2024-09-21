(()=>{var e={};e.id=4178,e.ids=[4178],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5944:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(6592),r(8295),r(5866);var t=r(3191),a=r(8716),n=r(7922),i=r.n(n),l=r(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(s,o);let c=["",{children:["profile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6592)),"F:\\MERN PROJECTS\\New folder\\js-master-main\\src\\app\\profile\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8295)),"F:\\MERN PROJECTS\\New folder\\js-master-main\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=["F:\\MERN PROJECTS\\New folder\\js-master-main\\src\\app\\profile\\page.js"],u="/profile/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/profile/page",pathname:"/profile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6369:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5459:()=>{},9030:(e,s,r)=>{Promise.resolve().then(r.bind(r,4719))},178:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>l});var t=r(326),a=r(7577),n=r(5047),i=r(434);function l(){let[e,s]=(0,a.useState)(!1),[r,l]=(0,a.useState)(!1),[o,c]=(0,a.useState)(null),d=(0,n.usePathname)(),u=(0,n.useRouter)(),p=e=>d===e?"active":"";return(0,t.jsxs)("nav",{className:"navbar",children:[t.jsx("div",{className:"navbar-logo",children:t.jsx(i.default,{href:"/home",children:"JSMaster"})}),(0,t.jsxs)("ul",{className:`navbar-links ${e?"active":""}`,children:[t.jsx("li",{children:t.jsx(i.default,{href:"/home",className:p("/home"),children:"Home"})}),t.jsx("li",{children:t.jsx(i.default,{href:"/blog",className:p("/blog"),children:"Blog"})}),t.jsx("li",{children:t.jsx(i.default,{href:"/community",className:p("/community"),children:"Community"})}),t.jsx("li",{children:t.jsx(i.default,{href:"/contact",className:p("/contact"),children:"Contact Us"})}),(0,t.jsxs)("li",{className:"navbar-user",onClick:()=>{l(!r)},children:[t.jsx("span",{className:"user-initial",children:o}),(0,t.jsxs)("div",{className:`dropdown-menu ${r?"open":""}`,children:[t.jsx(i.default,{href:"/profile",children:"Profile"}),t.jsx(i.default,{href:"/dashboard",children:"Dashboard"}),t.jsx("button",{onClick:()=>{localStorage.removeItem("token"),c(null),u.push("/login")},children:"Logout"})]})]})]}),(0,t.jsxs)("div",{className:`navbar-hamburger ${e?"open":""}`,onClick:()=>{s(!e)},children:[t.jsx("span",{className:"bar"}),t.jsx("span",{className:"bar bar2"}),t.jsx("span",{className:"bar"})]})]})}r(7914)},4719:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>l});var t=r(326),a=r(7577),n=r(6226);r(7924);var i=r(178);function l(){let[e,s]=(0,a.useState)({username:"",email:"",profilePicture:"/assets/default_profile.jfif",phone:""}),[r,l]=(0,a.useState)(!1),[o,c]=(0,a.useState)({...e}),d=e=>{let{name:s,value:r}=e.target;c({...o,[s]:r})};return(0,t.jsxs)(t.Fragment,{children:[t.jsx(i.default,{}),t.jsx("div",{className:"profile_container",children:(0,t.jsxs)("div",{className:"profile_header",children:[t.jsx("div",{className:"profile_picture",children:t.jsx(n.default,{src:e.profilePicture,alt:"Profile Picture",width:150,height:150,className:"profile_img",unoptimized:!0})}),(0,t.jsxs)("div",{className:"profile_info",children:[r?(0,t.jsxs)(t.Fragment,{children:[t.jsx("input",{type:"text",name:"username",value:o.username,onChange:d,className:"profile_input"}),t.jsx("input",{name:"email",value:o.email,onChange:d,className:"profile_input"}),t.jsx("input",{name:"phone",value:o.phone,onChange:d,className:"profile_input"})]}):(0,t.jsxs)(t.Fragment,{children:[t.jsx("h2",{children:e.username}),t.jsx("p",{children:e.email}),t.jsx("p",{children:e.phone}),t.jsx("p",{children:e.gender})]}),t.jsx("button",{onClick:r?()=>{s(o),l(!1)}:()=>{l(!r)},className:"profile_button",children:r?"Save":"Edit Profile"})]})]})})]})}},8295:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>n,metadata:()=>a});var t=r(9510);r(833),r(1463),r(4297),r(5206);let a={title:"JsMaster",description:"This is Js Master App"};function n({children:e}){return t.jsx("html",{lang:"en",children:t.jsx("body",{children:t.jsx("main",{children:e})})})}},6592:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var t=r(8570);let a=(0,t.createProxy)(String.raw`F:\MERN PROJECTS\New folder\js-master-main\src\app\profile\page.js`),{__esModule:n,$$typeof:i}=a;a.default;let l=(0,t.createProxy)(String.raw`F:\MERN PROJECTS\New folder\js-master-main\src\app\profile\page.js#default`)},833:()=>{},7914:()=>{},7924:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[7882,4496,6226],()=>r(5944));module.exports=t})();