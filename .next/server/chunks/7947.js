"use strict";exports.id=7947,exports.ids=[7947],exports.modules={87947:(e,r,t)=>{t.r(r),t.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var l=t(9885),i=t(76118),n=t(9574);let __WEBPACK_DEFAULT_EXPORT__=()=>((0,l.useEffect)(()=>{window.innerWidth>=992&&(i.gsap.registerPlugin(n.ScrollTrigger),document.querySelectorAll(".parallax-img").length>0&&window.innerWidth>=992&&document.querySelectorAll(".parallax-img").forEach(e=>{let r=i.gsap.timeline({scrollTrigger:{trigger:e,start:"center center",end:"+=40%",scrub:1,pin:!1,invalidateOnRefresh:!0}});r.to(e,{y:"120px",zIndex:"-1",opacity:.3,duration:2})}))},[]),null)}};