"use strict";(()=>{var e={};e.id=4857,e.ids=[4857],e.modules={1185:e=>{e.exports=require("mongoose")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},5184:e=>{e.exports=require("nodemailer")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4303:(e,t,r)=>{r.r(t),r.d(t,{config:()=>m,default:()=>g,routeModule:()=>h});var o={};r.r(o),r.d(o,{default:()=>c});var s=r(1802),n=r(7153),i=r(6249),a=r(1163),l=r(3248);let p=require("crypto");var d=r.n(p),u=r(5184),f=r.n(u);async function c(e,t){if(await (0,a.Z)(),"POST"===e.method){let{email:r}=e.body;try{let e=await l.Z.findOne({email:r});if(!e)return t.status(404).json({message:"User not found"});let o=d().randomBytes(32).toString("hex"),s=Date.now()+36e5;e.resetPasswordToken=o,e.resetPasswordExpires=s,await e.save();let n=`http://localhost:3000/reset-password?token=${o}`,i=f().createTransport({service:"Gmail",auth:{user:process.env.EMAIL_USER,pass:process.env.EMAIL_PASS}}),a={from:`"JS Master Support" <${process.env.EMAIL_USER}>`,to:e.email,subject:"Password Reset Request - JS Master",html:`
                  <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                      <div style="text-align: center;">
                          <img src="https://your-logo-url.com/logo.png" alt="JS Master Logo" style="width: 100px; margin-bottom: 20px;">
                      </div>
                      <h2 style="color: #007bff; text-align: center;">Password Reset Request</h2>
                      <p style="font-size: 16px; line-height: 1.6;">
                          Dear ${e.username},
                      </p>
                      <p style="font-size: 16px; line-height: 1.6;">
                          We received a request to reset your password for your JS Master account. Please click the button below to reset your password:
                      </p>
                      <div style="text-align: center; margin: 30px 0;">
                          <a href="${n}" style="background-color: #007bff; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold;">
                              Reset Password
                          </a>
                      </div>
                      <p style="font-size: 16px; line-height: 1.6;">
                          This link will expire in 1 hour. If you do not reset your password within this time, you will need to request a new password reset link.
                      </p>
                      <p style="font-size: 16px; line-height: 1.6;">
                          If you did not request a password reset, you can safely ignore this email. Your password will remain unchanged.
                      </p>
                      <p style="font-size: 16px; line-height: 1.6;">
                          For any further assistance, feel free to contact our support team.
                      </p>
                      <p style="font-size: 16px; line-height: 1.6;">
                          Best regards,<br>
                          <strong>JS Master Support Team</strong>
                      </p>
                      <div style="text-align: center; margin-top: 40px;">
                          <p style="font-size: 14px; color: #999;">\xa9 2024 JS Master. All rights reserved.</p>
                      </div>
                  </div>
              `};await i.sendMail(a),t.status(200).json({message:"Password reset link sent"})}catch(e){console.error("Error sending reset link:",e),t.status(500).json({message:"Server error"})}}else t.status(405).json({message:"Method not allowed"})}let g=(0,i.l)(o,"default"),m=(0,i.l)(o,"config"),h=new s.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/forgot-password",pathname:"/api/forgot-password",bundlePath:"",filename:""},userland:o})},1163:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(1185),s=r.n(o);let n=process.env.MONGODB_URI;if(!n)throw Error("Please define the MONGODB_URI environment variable inside .env.local");let i=global.mongoose;i||(i=global.mongoose={conn:null,promise:null});let a=async function(){return i.conn||(i.promise||(i.promise=s().connect(n,{bufferCommands:!1}).then(e=>e)),i.conn=await i.promise),i.conn}},3248:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(1185),s=r.n(o);let n=new(s()).Schema({username:{type:String,required:!0},email:{type:String,required:!0,unique:!0},password:{type:String,required:!0},phone:{type:String,required:!0},gender:{type:String,required:!0},otp:{type:String,default:null},otpExpiry:{type:Date,default:null},isVerified:{type:Boolean,default:!1},resetPasswordToken:{type:String,default:null},resetPasswordExpires:{type:Date,default:null}}),i=s().models.User||s().model("User",n)},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=4303);module.exports=r})();