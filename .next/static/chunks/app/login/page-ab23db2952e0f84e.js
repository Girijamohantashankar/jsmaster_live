(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2626],{2917:function(e,s,a){Promise.resolve().then(a.bind(a,7015))},7942:function(e,s,a){"use strict";a.r(s);var t=a(7437);a(2265),a(8554),s.default=()=>(0,t.jsx)("div",{className:"loader",children:(0,t.jsx)("div",{className:"spinner"})})},7015:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return u}});var t=a(7437),r=a(2265),n=a(6463),l=a(3580);a(4193),a(3316);var c=a(7942),o=a(7138),i=a(6967);function u(){let[e,s]=(0,r.useState)(""),[a,u]=(0,r.useState)(""),[d,m]=(0,r.useState)(!1),[h,f]=(0,r.useState)(!1),[g,j]=(0,r.useState)(""),x=(0,n.useRouter)();(0,r.useEffect)(()=>{let e=localStorage.getItem("email"),a="true"===localStorage.getItem("rememberMe");e&&s(e),m(a)},[]);let p=async s=>{s.preventDefault(),f(!0);try{let s=await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:a})}),t=await s.json();s.ok?t.redirect&&"/verify-otp"===t.redirect?(l.Am.info(t.message),x.push("/otp?page=".concat(encodeURIComponent(e)))):(l.Am.success("Login successful!"),localStorage.setItem("token",t.token),d?(localStorage.setItem("email",e),localStorage.setItem("rememberMe","true")):(localStorage.removeItem("email"),localStorage.setItem("rememberMe","false"),sessionStorage.setItem("token",t.token)),x.push("/home")):(j(t.message),l.Am.error(t.message))}catch(e){j("An error occurred. Please try again."),l.Am.error("An error occurred. Please try again.")}finally{f(!1)}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{}),(0,t.jsxs)("div",{className:"Auth_container",children:[h&&(0,t.jsx)(c.default,{}),(0,t.jsx)("div",{className:"Auth_header",children:(0,t.jsx)("h1",{children:"Login"})}),(0,t.jsxs)("form",{onSubmit:p,className:"Auth_form",children:[(0,t.jsxs)("div",{className:"Auth_inputGroup",children:[(0,t.jsx)("label",{htmlFor:"email",children:"Email"}),(0,t.jsx)("input",{type:"email",id:"email",name:"email",value:e,onChange:e=>s(e.target.value),required:!0})]}),(0,t.jsxs)("div",{className:"Auth_inputGroup",children:[(0,t.jsx)("label",{htmlFor:"password",children:"Password"}),(0,t.jsx)("input",{type:"password",id:"password",name:"password",value:a,onChange:e=>u(e.target.value),required:!0})]}),(0,t.jsx)("div",{className:"check_container",children:(0,t.jsxs)("label",{className:"remember_check",children:[(0,t.jsx)("input",{type:"checkbox",checked:d,onChange:e=>m(e.target.checked)}),(0,t.jsx)("span",{children:" Remember Me"})]})}),(0,t.jsx)("button",{type:"submit",className:"Auth_button",disabled:h,children:h?"Logging in...":"Login"}),g&&(0,t.jsx)("p",{style:{color:"red"},children:g})]}),(0,t.jsxs)("p",{className:"Auth_footer",children:["Do not have an account? ",(0,t.jsx)(o.default,{href:"/signup",children:"Sign up"})]}),(0,t.jsx)("p",{className:"Auth_footer",children:(0,t.jsx)(o.default,{href:"/forgot-password",className:"forgot_link",children:"Forgot Password?"})}),(0,t.jsx)(l.Ix,{})]})]})}},6967:function(e,s,a){"use strict";a.d(s,{Z:function(){return c}});var t=a(7437),r=a(2265),n=a(6463),l=a(7138);function c(){let[e,s]=(0,r.useState)(!1),a=(0,n.usePathname)(),c=e=>a===e?"active":"";return(0,t.jsxs)("nav",{className:"navbar",children:[(0,t.jsx)("div",{className:"navbar-logo",children:(0,t.jsx)(l.default,{href:"/",children:"JSMaster"})}),(0,t.jsxs)("ul",{className:"navbar-links ".concat(e?"active":""),children:[(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/courses",className:c("/courses"),children:"Courses"})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/about",className:c("/about"),children:"About Us"})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/login",className:"navbar-login login_btn",children:"Login"})})]}),(0,t.jsxs)("div",{className:"navbar-hamburger ".concat(e?"open":""),onClick:()=>{s(!e)},children:[(0,t.jsx)("span",{className:"bar"}),(0,t.jsx)("span",{className:"bar bar2"}),(0,t.jsx)("span",{className:"bar"})]})]})}a(56)},3316:function(){},8554:function(){},56:function(){}},function(e){e.O(0,[7143,3533,3190,1404,2291,127,2971,7023,1744],function(){return e(e.s=2917)}),_N_E=e.O()}]);