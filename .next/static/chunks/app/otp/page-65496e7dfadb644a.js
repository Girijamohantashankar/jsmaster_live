(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9636],{6732:function(e,t,a){Promise.resolve().then(a.bind(a,1608))},6463:function(e,t,a){"use strict";var r=a(1169);a.o(r,"usePathname")&&a.d(t,{usePathname:function(){return r.usePathname}}),a.o(r,"useRouter")&&a.d(t,{useRouter:function(){return r.useRouter}}),a.o(r,"useSearchParams")&&a.d(t,{useSearchParams:function(){return r.useSearchParams}})},7942:function(e,t,a){"use strict";a.r(t);var r=a(7437);a(2265),a(8554),t.default=()=>(0,r.jsx)("div",{className:"loader",children:(0,r.jsx)("div",{className:"spinner"})})},1608:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var r=a(7437),s=a(2265),n=a(6463),i=a(3580);a(4193),a(3316);var o=a(7942);function l(){let e=(0,n.useRouter)(),[t,a]=(0,s.useState)(""),[l,u]=(0,s.useState)(""),[c,d]=(0,s.useState)(""),[m,h]=(0,s.useState)(""),[p,f]=(0,s.useState)(120),[y,j]=(0,s.useState)(!1),[v,x]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("page");e&&a(decodeURIComponent(e));let t=localStorage.getItem("otpTimer");t&&f(parseInt(t,10));let r=setInterval(()=>{f(e=>e<=0?(clearInterval(r),0):(localStorage.setItem("otpTimer",e-1),e-1))},1e3);return()=>{clearInterval(r),localStorage.removeItem("otpTimer")}},[]);let g=async()=>{x(!0);try{let e=await fetch("/api/resend-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}),a=await e.json();e.ok?(i.Am.success("OTP resent to your email."),f(120),localStorage.setItem("otpTimer","120")):i.Am.error(a.message)}catch(e){i.Am.error("Failed to resend OTP.")}finally{x(!1)}},S=async a=>{a.preventDefault(),j(!0);try{let a=await fetch("/api/verify-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,otp:l})}),r=await a.json();a.ok?(h(r.message),localStorage.setItem("token",r.token),e.push("/home")):(d(r.message),i.Am.error(r.message))}catch(e){d("An error occurred. Please try again."),i.Am.error("An error occurred. Please try again.")}finally{j(!1)}};return(0,r.jsxs)("div",{className:"Auth_container",children:[(y||v)&&(0,r.jsx)(o.default,{}),(0,r.jsx)("div",{className:"Auth_header",children:(0,r.jsx)("h1",{children:"Verify OTP"})}),(0,r.jsxs)("form",{onSubmit:S,className:"Auth_form",children:[(0,r.jsxs)("div",{className:"Auth_inputGroup",children:[(0,r.jsx)("label",{htmlFor:"email",children:"Email"}),(0,r.jsx)("input",{type:"email",id:"email",name:"email",value:t,onChange:e=>a(e.target.value),required:!0,readOnly:!0})]}),(0,r.jsxs)("div",{className:"Auth_inputGroup",children:[(0,r.jsx)("label",{htmlFor:"otp",children:"OTP"}),(0,r.jsx)("input",{type:"text",id:"otp",name:"otp",value:l,onChange:e=>u(e.target.value),required:!0})]}),(0,r.jsxs)("div",{className:"Auth_actionGroup",children:[(0,r.jsx)("div",{className:"timer_display",children:p>0?(0,r.jsxs)("p",{children:["Resend OTP available in: ",p,"s"]}):null}),(0,r.jsxs)("div",{className:"resend_btn",children:[(0,r.jsx)("button",{type:"submit",className:"Auth_button",disabled:y,children:y?"Verifying...":"Verify OTP"}),0===p&&(0,r.jsx)("button",{type:"button",onClick:g,className:"Auth_button",disabled:v,children:v?"Resending...":"Resend OTP"})]})]}),c&&(0,r.jsx)("p",{style:{color:"red"},children:c}),m&&(0,r.jsx)("p",{style:{color:"green"},children:m})]}),(0,r.jsx)(i.Ix,{})]})}},3316:function(){},8554:function(){}},function(e){e.O(0,[7143,3533,3190,127,2971,7023,1744],function(){return e(e.s=6732)}),_N_E=e.O()}]);