"use strict";exports.id=4087,exports.ids=[4087],exports.modules={84087:(e,r,t)=>{t.r(r),t.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var l=t(9885),i=t(76118),n=t(9574),o=t(16758);let __WEBPACK_DEFAULT_EXPORT__=()=>((0,l.useEffect)(()=>{i.gsap.registerPlugin(n.ScrollTrigger,o.ScrollToPlugin);let handleLinkClick=e=>{e.preventDefault();let r=e.currentTarget.getAttribute("href");r&&i.gsap.to(window,{scrollTo:{y:r,offsetY:200},duration:1.5,ease:"power3.inOut"})},e=document.querySelectorAll('a[href^="#"]');return e.forEach(e=>{e.addEventListener("click",handleLinkClick)}),()=>{e.forEach(e=>{e.removeEventListener("click",handleLinkClick)})}},[]),null)}};