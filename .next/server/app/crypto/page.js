(()=>{var e={};e.id=4602,e.ids=[4602],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},7836:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>p});var s=r(73137),o=r(54647),i=r(4183),n=r.n(i),a=r(71775),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=s.AppPageRouteModule,p=["",{children:["crypto",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,13631)),"D:\\web dev\\Resps\\conomis\\New folder\\app\\crypto\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,79958)),"D:\\web dev\\Resps\\conomis\\New folder\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,99725)),"D:\\web dev\\Resps\\conomis\\New folder\\app\\not-found.tsx"]}],d=["D:\\web dev\\Resps\\conomis\\New folder\\app\\crypto\\page.tsx"],u="/crypto/page",x={require:r,loadChunk:()=>Promise.resolve()},h=new c({definition:{kind:o.x.APP_PAGE,page:"/crypto/page",pathname:"/crypto",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},72842:(e,t,r)=>{Promise.resolve().then(r.bind(r,76863))},76863:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>crypto_page});var s=r(60080),o=r(78298),i=r(9885),n=r(54997),a=r(1751),l=r(77523),c=r.n(l),p=r(24608),d=r.n(p),u=r(80765),x=r.n(u),h=r(68101),f=r.n(h),m=r(70138),g=r.n(m),y=r(44233),_=r.n(y),j=r(52694),b=r.n(j);let GetCryptos=()=>{let[e,t]=(0,i.useState)([]),[r,o]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let fetchdata=async()=>{n.Z.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=INR&CMC_PRO_API_KEY=6b12aa92-8d82-4bfe-994b-5e11fcaad7f6").then(e=>{console.log(e.data.data),t(e.data.data),o(!1)})},e=setTimeout(fetchdata,3e3);return()=>clearInterval(e)},[]),(0,s.jsxs)(s.Fragment,{children:[s.jsx(a.default,{title:"Crypto News"}),s.jsx("div",{className:"",style:{minHeight:"100vh",overflowX:"hidden",color:"white",backgroundColor:"#030015"},children:s.jsx(f(),{component:b(),style:{backgroundColor:"#030015",color:"white"},children:(0,s.jsxs)(c(),{sx:{minWidth:650},"aria-label":"simple table",children:[s.jsx(g(),{children:(0,s.jsxs)(_(),{children:[s.jsx(x(),{style:{color:"#65ff4b",fontWeight:"900"},children:"Name"}),s.jsx(x(),{align:"center",style:{color:"#65ff4b",fontWeight:"900"},children:"CMC_RANK"}),s.jsx(x(),{align:"center",style:{color:"#65ff4b",fontWeight:"900"},children:"SYMBOL"}),s.jsx(x(),{align:"center",style:{color:"#65ff4b",fontWeight:"900"},children:"Price"}),s.jsx(x(),{align:"center",style:{color:"#65ff4b",fontWeight:"900"},children:"Total Supply"})]})}),s.jsx(d(),{children:e.map(e=>(0,s.jsxs)(_(),{sx:{"&:last-child td, &:last-child th":{border:0}},children:[s.jsx(x(),{component:"th",scope:"row",style:{color:"white"},children:e.name}),s.jsx(x(),{align:"center",style:{color:"white"},children:e.cmc_rank}),s.jsx(x(),{align:"center",style:{color:"white"},children:e.symbol}),s.jsx(x(),{align:"center",style:{color:"white"},children:e.quote.INR.price}),s.jsx(x(),{align:"center",style:{color:"white"},children:e.total_supply})]},e.id))})]})})})]})};var v=r(64710),w=r(35797);let layout_InitCustomCursor=({handleMouseEnterTitle:e,handleMouseLeaveTitle:t})=>s.jsx(w.default,{onTitleMouseEnter:e,onTitleMouseLeave:t});var q=r(46047),P=r(87594);let crypto_page=()=>(0,s.jsxs)("div",{className:"my-app",children:[s.jsx(o.default,{}),s.jsx("main",{children:s.jsx(GetCryptos,{})}),s.jsx(v.default,{}),s.jsx(layout_InitCustomCursor,{}),s.jsx(q.default,{}),s.jsx(P.default,{})]})},13631:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>l});var s=r(17536);let o=(0,s.createProxy)(String.raw`D:\web dev\Resps\conomis\New folder\app\crypto\page.tsx`),{__esModule:i,$$typeof:n}=o,a=o.default,l=a}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[789,4997,3956,7666,4313],()=>__webpack_exec__(7836));module.exports=r})();