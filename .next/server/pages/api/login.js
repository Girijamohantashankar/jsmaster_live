"use strict";(()=>{var e={};e.id=4994,e.ids=[4994],e.modules={8432:e=>{e.exports=require("bcryptjs")},9344:e=>{e.exports=require("jsonwebtoken")},1185:e=>{e.exports=require("mongoose")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},5184:e=>{e.exports=require("nodemailer")},6249:(e,r)=>{Object.defineProperty(r,"l",{enumerable:!0,get:function(){return function e(r,t){return t in r?r[t]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,t)):"function"==typeof r&&"default"===t?r:void 0}}})},4546:(e,r,t)=>{t.r(r),t.d(r,{config:()=>x,default:()=>P,routeModule:()=>y});var o={};t.r(o),t.d(o,{default:()=>v});var n=t(1802),i=t(7153),a=t(6249),s=t(1163),l=t(3248),d=t(8432),p=t.n(d),u=t(9344),g=t.n(u),c=t(5184);let m=t.n(c)().createTransport({service:"Gmail",auth:{user:process.env.EMAIL_USER,pass:process.env.EMAIL_PASS}}),f=async(e,r)=>{let t=`
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        padding-bottom: 20px;
      }
      .header img {
        width: 150px;
        margin-bottom: 10px;
      }
      .header h1 {
        color: #4CAF50;
        margin: 0;
        font-size: 28px;
      }
      .content {
        font-size: 16px;
        color: #555555;
        line-height: 1.6;
      }
      .otp {
        font-size: 24px;
        font-weight: bold;
        color: #333333;
        margin: 20px 0;
        text-align: center;
      }
      .footer {
        text-align: center;
        font-size: 14px;
        color: #999999;
        padding-top: 20px;
        border-top: 1px solid #e0e0e0;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="https://lh3.googleusercontent.com/fife/ALs6j_FGU9uWJ1MFvlg5WkXb96J750lWHCmGMO3uG2SPoe-ZVSjUirL50GzNOKMHob4tiZFNO-8RtR3d8evPi0viSqxTw2juq5jTe-V9ilmdZcQgKxCf2nY7WNQBS2_lB5Bbvy-FMEVcvPR4wtPi5mM6RdVy1D6lz7M_ShCquXVS_f1iPKbbpivh1ze6sljEsO57I5-Rqv7xUq5WBcIfwPyVe-9ZgedgIuChV0Jf6jE2p_p5lcDjRNcecA0lz1qHqpcWx4qF0GEg2jRh9qkIbMPXkyNGSzhBlg5Joqi0iSJKfEWADyjynbhabKSyqIGXQfDGOhh3d0aaVnu_uN_AxijNKIFBsLM4zgUxE2-q2CajimR0KTIp-xZ49KOfJSHecp7peff6KjFphOtjWS21_PP8gq8DbT6fxact69u5ZYd62-SnInG0rTKa9h5HvSkuRiPgEHgJJn5A_rzvgL0TPY6R2bGm9CtxLNnCo3ut7U8RSM6KJ0I-nGPPz-whEPzO1HJyeXe8ZRSo1sAAyDVrfDi_LQtqZslX_OFkiogtvaG6sTasWoEeO0iCpcPvvaKGG2zmFadQ7k0PDNQCdCXgC1ihniVvUKWZAwhwLr23AhE-q1VVXVMBKY4Ko0o1MqesqJLCkMxPTqIaRTrzARQhHOBjGioxDIfww_bIKLbOrpg7DEsgeKkykCf8ForrHQpRuwtVQV9q1Yen1DMIQ63aQHbgmYwlhy6ehx7n10Pu4x-aXDEfKsp6PYHoT0_PB1_swaa75Gj3fr7KEn2r5KKiN1_LZEljej3yO93duQpb1qWxz1jBSLXNmx8O4kMSrk0AbYS3Cb1gAgwYPKJstEBDUV84L0ljGhTW0UwONSrURlx1xgMfbPC2Xiv9aU6U2hFsoi-Ws8gKYJpHd_dTspqfDXFVExg9VcAxrBLCILX-5ehV9rnErnkPFPTveviks_jBrnv_vQ8F74HdSNGr64J8-L-hS317x2H7p6lTeJ8GCA7uL_oLlFkp3Ksce0BBXMyKsGTZIj3FxnsmboEjtekqQup07T_F-HzNi6FR56RJbuI-mkV1CB_DWW9SZIDY65Oq3eITZcuC3RzlBvbrnDHwGn6-Lls_ljejsBxJDhRbyB2HaZwmLo-3VmDem5LdHpv1XBhWO7QrEknVGhPbuFPu422WPFkrmJRaMnfMBtkQ3BBz8l9oZmHqlqHA39k9iw4oHFcrkQNbTI_cIv4u_PvWleElYsvPSrTZtJXHbm73eGYNvQgx2i5SEFpUmwssZDv7c9PFfBkt9qwLNjbArGAYvh9kAUvTwvy1ATIEU9J01uf5IVIy3JRZGu9mxnE4Sgp2fC4_WamVL2cwIMAHpqLeWWwGZou77B6KvHma1vqoQ_bafkImm67BU-_3f2-OUgmrBizBegelmFBW8zFQh8DZagYjsH-vmNhbBLrGxyV8jBe9lt5gZhSqI2gdNoF0y3hZ_O5Adr21Ba6iyACYxJp8kJs_djXZV00uL45D8LOemzvUGG3MKhRvDs-4EmGzUFUCT5n-vRCVRibSv81mj2RlSM10zXEA0V0CtwlK8FfG7bZyWx0rIFYVr7umhUNgW5WFVQMoZwEG8mUEHoe7p8wY50d10MthnWhq_SHGt-ODa5e5YZ27INnQm_ZI7dexQg=w1910-h892" alt="JSMaster Logo" />
        <h1>JSMaster</h1>
      </div>
      <div class="content">
        <p>Dear user,</p>
        <p>Thank you for registering with JSMaster. To complete your registration, please use the following OTP:</p>
        <div class="otp">${r}</div>
        <p>This OTP is valid for 2 minutes. If you did not request this, please ignore this email.</p>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} JSMaster. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
`;try{await m.sendMail({from:process.env.EMAIL_USER,to:e,subject:"Your OTP Code from JS Master",html:t})}catch(e){if(console.error("Error sending OTP email:",e),550===e.responseCode)throw Error("Address not found or invalid email address. Please check and try again.");if(551===e.responseCode)throw Error("Mailbox unavailable. Please check the email address and try again.");throw Error("Failed to send OTP. Please check the email address and try again.")}},h=process.env.JWT_SECRET;async function v(e,r){if(await (0,s.Z)(),"POST"===e.method){let{email:t,password:o}=e.body;try{let e=await l.Z.findOne({email:t});if(!e||!await p().compare(o,e.password))return r.status(401).json({message:"Invalid email or password"});if(!e.isVerified){let o=Math.floor(1e5+9e5*Math.random()).toString(),n=Date.now()+12e4;return e.otp=o,e.otpExpiry=n,await e.save(),await f(t,o),r.status(200).json({message:"OTP sent to email. Please verify your account.",redirect:"/verify-otp"})}let n=g().sign({id:e._id,email:e.email},h,{expiresIn:"1h"});r.status(200).json({message:"Login successful",token:n})}catch(e){console.error("Error logging in:",e),r.status(500).json({message:"Server error"})}}else r.status(405).json({message:"Method not allowed"})}let P=(0,a.l)(o,"default"),x=(0,a.l)(o,"config"),y=new n.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/login",pathname:"/api/login",bundlePath:"",filename:""},userland:o})},1163:(e,r,t)=>{t.d(r,{Z:()=>s});var o=t(1185),n=t.n(o);let i=process.env.MONGODB_URI;if(!i)throw Error("Please define the MONGODB_URI environment variable inside .env.local");let a=global.mongoose;a||(a=global.mongoose={conn:null,promise:null});let s=async function(){return a.conn||(a.promise||(a.promise=n().connect(i,{bufferCommands:!1}).then(e=>e)),a.conn=await a.promise),a.conn}},3248:(e,r,t)=>{t.d(r,{Z:()=>a});var o=t(1185),n=t.n(o);let i=new(n()).Schema({username:{type:String,required:!0},email:{type:String,required:!0,unique:!0},password:{type:String,required:!0},phone:{type:String,required:!0},gender:{type:String,required:!0},otp:{type:String,default:null},otpExpiry:{type:Date,default:null},isVerified:{type:Boolean,default:!1},resetPasswordToken:{type:String,default:null},resetPasswordExpires:{type:Date,default:null}}),a=n().models.User||n().model("User",i)},7153:(e,r)=>{var t;Object.defineProperty(r,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},1802:(e,r,t)=>{e.exports=t(145)}};var r=require("../../webpack-api-runtime.js");r.C(e);var t=r(r.s=4546);module.exports=t})();