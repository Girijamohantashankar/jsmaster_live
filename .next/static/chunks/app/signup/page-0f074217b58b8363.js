(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4966],{188:function(e,s,a){Promise.resolve().then(a.bind(a,2907))},7942:function(e,s,a){"use strict";a.r(s);var n=a(7437);a(2265),a(8554),s.default=()=>(0,n.jsx)("div",{className:"loader",children:(0,n.jsx)("div",{className:"spinner"})})},6967:function(e,s,a){"use strict";a.d(s,{Z:function(){return i}});var n=a(7437),r=a(2265),l=a(6463),t=a(7138);function i(){let[e,s]=(0,r.useState)(!1),a=(0,l.usePathname)(),i=e=>a===e?"active":"";return(0,n.jsxs)("nav",{className:"navbar",children:[(0,n.jsx)("div",{className:"navbar-logo",children:(0,n.jsx)(t.default,{href:"/",children:"JSMaster"})}),(0,n.jsxs)("ul",{className:"navbar-links ".concat(e?"active":""),children:[(0,n.jsx)("li",{children:(0,n.jsx)(t.default,{href:"/courses",className:i("/courses"),children:"Courses"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.default,{href:"/about",className:i("/about"),children:"About Us"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.default,{href:"/login",className:"navbar-login login_btn",children:"Login"})})]}),(0,n.jsxs)("div",{className:"navbar-hamburger ".concat(e?"open":""),onClick:()=>{s(!e)},children:[(0,n.jsx)("span",{className:"bar"}),(0,n.jsx)("span",{className:"bar bar2"}),(0,n.jsx)("span",{className:"bar"})]})]})}a(56)},2907:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return h}});var n=a(7437),r=a(2265),l=a(6463),t=a(3580);a(4193),a(3316);var i=a(7942),u=a(7138),c=a(6967);let o=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),d=e=>/^\d{10}$/.test(e);function h(){let[e,s]=(0,r.useState)({username:"",email:"",password:"",phone:"",gender:""}),[a,h]=(0,r.useState)(!1),[m,p]=(0,r.useState)(""),[j,x]=(0,r.useState)(""),[g,f]=(0,r.useState)(""),[v,b]=(0,r.useState)(""),N=(0,l.useRouter)(),y=a=>{s({...e,[a.target.name]:a.target.value}),"email"===a.target.name&&f(""),"phone"===a.target.name&&b("")},_=async a=>{if(a.preventDefault(),!o(e.email)){f("Please enter a valid email address.");return}if(!d(e.phone)){b("Please enter a valid phone number.");return}h(!0);try{let a=await fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),n=await a.json();a.ok?(x(n.message),t.Am.success(n.message),s({username:"",email:"",password:"",phone:"",gender:""}),setTimeout(()=>{N.push("/login")},2e3)):(p(n.message),t.Am.error(n.message))}catch(e){p("An error occurred. Please try again."),t.Am.error("An error occurred. Please try again.")}finally{h(!1)}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{}),(0,n.jsxs)("div",{className:"Auth_container",children:[a&&(0,n.jsx)(i.default,{}),(0,n.jsx)("div",{className:"Auth_header",children:(0,n.jsx)("h1",{children:"Signup"})}),(0,n.jsxs)("form",{onSubmit:_,className:"Auth_form",children:[(0,n.jsxs)("div",{className:"Auth_inputGroup",children:[(0,n.jsx)("label",{htmlFor:"username",children:"Username"}),(0,n.jsx)("input",{type:"text",id:"username",name:"username",value:e.username,onChange:y,required:!0})]}),(0,n.jsxs)("div",{className:"Auth_inputGroup",children:[(0,n.jsx)("label",{htmlFor:"email",children:"Email"}),(0,n.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:y,required:!0}),g&&(0,n.jsx)("p",{style:{color:"red"},children:g})]}),(0,n.jsxs)("div",{className:"Auth_inputGroup",children:[(0,n.jsx)("label",{htmlFor:"password",children:"Password"}),(0,n.jsx)("input",{type:"password",id:"password",name:"password",value:e.password,onChange:y,required:!0})]}),(0,n.jsxs)("div",{className:"Auth_inputGroup",children:[(0,n.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),(0,n.jsx)("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:y,required:!0}),v&&(0,n.jsx)("p",{style:{color:"red"},children:v})]}),(0,n.jsxs)("div",{className:"Auth_inputGroup",children:[(0,n.jsx)("label",{htmlFor:"gender",children:"Gender"}),(0,n.jsxs)("select",{id:"gender",name:"gender",value:e.gender,onChange:y,required:!0,children:[(0,n.jsx)("option",{value:"",children:"Select"}),(0,n.jsx)("option",{value:"male",children:"Male"}),(0,n.jsx)("option",{value:"female",children:"Female"})]})]}),(0,n.jsx)("button",{type:"submit",className:"Auth_button",disabled:a,children:a?"Signing up...":"Signup"}),m&&(0,n.jsx)("p",{style:{color:"red"},children:m}),j&&(0,n.jsx)("p",{style:{color:"green"},children:j}),(0,n.jsxs)("p",{children:["I have an account"," ",(0,n.jsx)(u.default,{href:"/login",className:"Auth_link",children:"Login here"})]})]}),(0,n.jsx)(t.Ix,{})]})]})}},3316:function(){},8554:function(){},56:function(){}},function(e){e.O(0,[7143,3533,3190,1404,2291,127,2971,7023,1744],function(){return e(e.s=188)}),_N_E=e.O()}]);