(()=>{var e={};e.id=9404,e.ids=[9404],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7073:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c}),s(2265),s(8295),s(5866);var r=s(3191),a=s(8716),n=s(7922),i=s.n(n),l=s(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=["",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2265)),"F:\\MERN PROJECTS\\New folder\\js-master-main\\src\\app\\blog\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,8295)),"F:\\MERN PROJECTS\\New folder\\js-master-main\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],d=["F:\\MERN PROJECTS\\New folder\\js-master-main\\src\\app\\blog\\page.js"],u="/blog/page",m={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6369:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},5623:(e,t,s)=>{Promise.resolve().then(s.bind(s,9079))},5459:()=>{},9079:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(326),a=s(7577);s(452);var n=s(178),i=s(6226);let l=e=>{try{let t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(atob(t).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(s)}catch(e){return console.error("Error parsing JWT:",e),null}},o=()=>{let e=localStorage.getItem("token")||sessionStorage.getItem("token");if(!e)return"";try{let t=l(e);return t?.email||""}catch(e){return console.error("Error decoding token:",e),""}};var c=s(9394);s(5996);var d=s(3778);function u(){let[e,t]=(0,a.useState)([]),[s,l]=(0,a.useState)(""),[u,m]=(0,a.useState)(null),[h,p]=(0,a.useState)({}),[x,j]=(0,a.useState)({}),[g,f]=(0,a.useState)(!0),v=e=>{l(e.target.value)},b=async e=>{let t=o();if(!t){console.error("User email not found");return}try{(await fetch(`/api/postanswer?postId=${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:s,userEmail:t})})).ok?(c.Am.success("Answer submitted successfully"),l("")):c.Am.error("Failed to submit answer")}catch(e){c.Am.error("Error submitting answer:",e)}},y=async e=>{try{let t=await fetch(`/api/getpostanswers?postId=${e}`);if(t.ok){let s=await t.json();p(t=>({...t,[e]:s.answers})),j(t=>({...t,[e]:!t[e]}))}else c.Am.error("Failed to fetch answers")}catch(e){c.Am.error("Error fetching answers:",e)}};return(0,r.jsxs)(r.Fragment,{children:[r.jsx(n.default,{}),(0,r.jsxs)("div",{className:"blog_container",children:[r.jsx("h1",{children:"Blog Page"}),r.jsx("div",{className:"posts_container",children:r.jsx(d.y,{baseColor:"#202020",highlightColor:"#ddd",children:g?Array(8).fill().map((e,t)=>(0,r.jsxs)("div",{className:"post_card",children:[r.jsx(d.Z,{height:200,animation:"wave"}),r.jsx("h3",{children:r.jsx(d.Z,{width:"20vw",animation:"wave"})}),r.jsx("p",{children:r.jsx(d.Z,{count:3,animation:"wave"})})]},t)):e.map(e=>(0,r.jsxs)("div",{className:"post",children:[(0,r.jsxs)("div",{className:"post_header",children:[(0,r.jsxs)("div",{className:"blog_card_header",children:[r.jsx("h2",{children:e.title}),(0,r.jsxs)("span",{children:[e.userEmail.split("@")[0].slice(0,11),"X".repeat(10),"@",e.userEmail.split("@")[1].slice(-4)]})]}),r.jsx("p",{className:"post_date",children:new Date(e.createdAt).toLocaleDateString("en-GB",{day:"numeric",month:"numeric",year:"numeric"})})]}),r.jsx("div",{className:"post_image",children:r.jsx(i.default,{src:e.imageUrl,alt:e.title,width:800,height:400,layout:"responsive",objectFit:"cover"})}),r.jsx("div",{className:"post_content",children:r.jsx("p",{children:e.description})}),(0,r.jsxs)("div",{className:"post_footer",children:[u===e._id?(0,r.jsxs)(r.Fragment,{children:[r.jsx("textarea",{value:s,onChange:v,placeholder:"Write your answer here",rows:4}),r.jsx("button",{onClick:()=>b(e._id),children:"Submit"})]}):r.jsx("button",{className:"post_ans_btn",onClick:()=>m(e._id),children:"Post Answer"}),r.jsx("button",{className:"view_answers_btn",onClick:()=>y(e._id),children:x[e._id]?"Hide Answers":"View Answers"})]}),x[e._id]&&h[e._id]&&r.jsx("div",{className:"answers_list",children:h[e._id].map((t,s)=>(0,r.jsxs)("div",{className:"answer_item",children:[r.jsx("p",{className:"ans_user",children:(0,r.jsxs)("strong",{children:[t.userEmail.split("@")[0].slice(0,11),"x".repeat(10),"@",e.userEmail.split("@")[1].slice(-4)]})}),r.jsx("p",{className:"ans_text",children:t.text}),r.jsx("p",{className:"answer_date",children:new Date(t.createdAt).toLocaleDateString("en-GB",{day:"numeric",month:"numeric",year:"numeric"})})]},s))})]},e._id))})})]}),r.jsx(c.Ix,{})]})}s(5520)},178:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(326),a=s(7577),n=s(5047),i=s(434);function l(){let[e,t]=(0,a.useState)(!1),[s,l]=(0,a.useState)(!1),[o,c]=(0,a.useState)(null),d=(0,n.usePathname)(),u=(0,n.useRouter)(),m=e=>d===e?"active":"";return(0,r.jsxs)("nav",{className:"navbar",children:[r.jsx("div",{className:"navbar-logo",children:r.jsx(i.default,{href:"/home",children:"JSMaster"})}),(0,r.jsxs)("ul",{className:`navbar-links ${e?"active":""}`,children:[r.jsx("li",{children:r.jsx(i.default,{href:"/home",className:m("/home"),children:"Home"})}),r.jsx("li",{children:r.jsx(i.default,{href:"/blog",className:m("/blog"),children:"Blog"})}),r.jsx("li",{children:r.jsx(i.default,{href:"/community",className:m("/community"),children:"Community"})}),r.jsx("li",{children:r.jsx(i.default,{href:"/contact",className:m("/contact"),children:"Contact Us"})}),(0,r.jsxs)("li",{className:"navbar-user",onClick:()=>{l(!s)},children:[r.jsx("span",{className:"user-initial",children:o}),(0,r.jsxs)("div",{className:`dropdown-menu ${s?"open":""}`,children:[r.jsx(i.default,{href:"/profile",children:"Profile"}),r.jsx(i.default,{href:"/dashboard",children:"Dashboard"}),r.jsx("button",{onClick:()=>{localStorage.removeItem("token"),c(null),u.push("/login")},children:"Logout"})]})]})]}),(0,r.jsxs)("div",{className:`navbar-hamburger ${e?"open":""}`,onClick:()=>{t(!e)},children:[r.jsx("span",{className:"bar"}),r.jsx("span",{className:"bar bar2"}),r.jsx("span",{className:"bar"})]})]})}s(7914)},2265:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var r=s(8570);let a=(0,r.createProxy)(String.raw`F:\MERN PROJECTS\New folder\js-master-main\src\app\blog\page.js`),{__esModule:n,$$typeof:i}=a;a.default;let l=(0,r.createProxy)(String.raw`F:\MERN PROJECTS\New folder\js-master-main\src\app\blog\page.js#default`)},8295:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n,metadata:()=>a});var r=s(9510);s(833),s(1463),s(4297),s(5206);let a={title:"JsMaster",description:"This is Js Master App"};function n({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{children:r.jsx("main",{children:e})})})}},5520:()=>{},833:()=>{},452:()=>{},7914:()=>{},3778:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n,y:()=>i});var r=s(7577);let a=r.createContext({});function n({count:e=1,wrapper:t,className:s,containerClassName:n,containerTestId:i,circle:l=!1,style:o,...c}){var d,u,m;let h=r.useContext(a),p={...c};for(let[e,t]of Object.entries(c))void 0===t&&delete p[e];let x={...h,...p,circle:l},j={...o,...function({baseColor:e,highlightColor:t,width:s,height:r,borderRadius:a,circle:n,direction:i,duration:l,enableAnimation:o=!0}){let c={};return"rtl"===i&&(c["--animation-direction"]="reverse"),"number"==typeof l&&(c["--animation-duration"]=`${l}s`),o||(c["--pseudo-element-display"]="none"),("string"==typeof s||"number"==typeof s)&&(c.width=s),("string"==typeof r||"number"==typeof r)&&(c.height=r),("string"==typeof a||"number"==typeof a)&&(c.borderRadius=a),n&&(c.borderRadius="50%"),void 0!==e&&(c["--base-color"]=e),void 0!==t&&(c["--highlight-color"]=t),c}(x)},g="react-loading-skeleton";s&&(g+=` ${s}`);let f=null!==(d=x.inline)&&void 0!==d&&d,v=[],b=Math.ceil(e);for(let t=0;t<b;t++){let s=j;if(b>e&&t===b-1){let t=null!==(u=s.width)&&void 0!==u?u:"100%",r=e%1,a="number"==typeof t?t*r:`calc(${t} * ${r})`;s={...s,width:a}}let a=r.createElement("span",{className:g,style:s,key:t},"‌");f?v.push(a):v.push(r.createElement(r.Fragment,{key:t},a,r.createElement("br",null)))}return r.createElement("span",{className:n,"data-testid":i,"aria-live":"polite","aria-busy":null===(m=x.enableAnimation)||void 0===m||m},t?v.map((e,s)=>r.createElement(t,{key:s},e)):v)}function i({children:e,...t}){return r.createElement(a.Provider,{value:t},e)}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[7882,4496,6226,1073],()=>s(7073));module.exports=r})();