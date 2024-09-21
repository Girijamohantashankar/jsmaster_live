"use strict";(()=>{var e={};e.id=7925,e.ids=[7925],e.modules={1185:e=>{e.exports=require("mongoose")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2551:(e,t,r)=>{r.r(t),r.d(t,{config:()=>p,default:()=>d,routeModule:()=>f});var n={};r.r(n),r.d(n,{default:()=>l});var o=r(1802),i=r(7153),a=r(6249),s=r(1163),u=r(3248);async function l(e,t){if(await (0,s.Z)(),"GET"!==e.method)return t.status(405).json({message:"Method not allowed"});{let{email:r}=e.query;try{let e=await u.Z.findOne({email:r}).select("-password -otp -otpExpiry");if(!e)return t.status(404).json({message:"User not found"});return t.status(200).json(e)}catch(e){return t.status(500).json({message:"Server error"})}}}let d=(0,a.l)(n,"default"),p=(0,a.l)(n,"config"),f=new o.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/profile",pathname:"/api/profile",bundlePath:"",filename:""},userland:n})},1163:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(1185),o=r.n(n);let i=process.env.MONGODB_URI;if(!i)throw Error("Please define the MONGODB_URI environment variable inside .env.local");let a=global.mongoose;a||(a=global.mongoose={conn:null,promise:null});let s=async function(){return a.conn||(a.promise||(a.promise=o().connect(i,{bufferCommands:!1}).then(e=>e)),a.conn=await a.promise),a.conn}},3248:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(1185),o=r.n(n);let i=new(o()).Schema({username:{type:String,required:!0},email:{type:String,required:!0,unique:!0},password:{type:String,required:!0},phone:{type:String,required:!0},gender:{type:String,required:!0},otp:{type:String,default:null},otpExpiry:{type:Date,default:null},isVerified:{type:Boolean,default:!1},resetPasswordToken:{type:String,default:null},resetPasswordExpires:{type:Date,default:null}}),a=o().models.User||o().model("User",i)},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=2551);module.exports=r})();