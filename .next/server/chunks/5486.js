"use strict";exports.id=5486,exports.ids=[5486],exports.modules={75486:(e,r,t)=>{t.r(r),t.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var i=t(9885),o=t(76118),s=t(9574);let __WEBPACK_DEFAULT_EXPORT__=()=>((0,i.useEffect)(()=>{if(window.innerWidth>=992){o.gsap.registerPlugin(s.ScrollTrigger);let e=document.querySelectorAll(".reveal-img");e.forEach(e=>{o.gsap.to(e,{opacity:0,y:50,scrollTrigger:{trigger:e,start:"top 80%",markers:!1,onEnter:()=>{e.classList.add("reveal-img-active"),o.gsap.to(e,{opacity:1,y:0,duration:1,ease:"power3.out"})}}})})}},[]),null)}};