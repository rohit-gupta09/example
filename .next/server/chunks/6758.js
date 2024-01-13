exports.id=6758,exports.ids=[6758],exports.modules={16758:function(t,e){var o,s,r,l,i,n,p,c,u,a,f,y,h,g,d,x,T,v,k;u=function(){return"undefined"!=typeof window},a=function(){return o||u()&&(o=window.gsap)&&o.registerPlugin&&o},f=function(t){return"string"==typeof t},y=function(t){return"function"==typeof t},h=function(t,e){var o="x"===e?"Width":"Height",s="scroll"+o,n="client"+o;return t===r||t===l||t===i?Math.max(l[s],i[s])-(r["inner"+o]||l[n]||i[n]):t[s]-t["offset"+o]},g=function(t,e){var o="scroll"+("x"===e?"Left":"Top");return t===r&&(null!=t.pageXOffset?o="page"+e.toUpperCase()+"Offset":t=null!=l[o]?l:i),function(){return t[o]}},d=function(t,e,o,s){if(y(t)&&(t=t(e,o,s)),"object"!=typeof t)return f(t)&&"max"!==t&&"="!==t.charAt(1)?{x:t,y:t}:{y:t};if(t.nodeType)return{y:t,x:t};var r,l={};for(r in t)l[r]="onAutoKill"!==r&&y(t[r])?t[r](e,o,s):t[r];return l},x=function(t,e){if(!(t=n(t)[0])||!t.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var o=t.getBoundingClientRect(),s=!e||e===r||e===i,p=s?{top:l.clientTop-(r.pageYOffset||l.scrollTop||i.scrollTop||0),left:l.clientLeft-(r.pageXOffset||l.scrollLeft||i.scrollLeft||0)}:e.getBoundingClientRect(),c={x:o.left-p.left,y:o.top-p.top};return!s&&e&&(c.x+=g(e,"x")(),c.y+=g(e,"y")()),c},T=function(t,e,o,s,r){return isNaN(t)||"object"==typeof t?f(t)&&"="===t.charAt(1)?parseFloat(t.substr(2))*("-"===t.charAt(0)?-1:1)+s-r:"max"===t?h(e,o)-r:Math.min(h(e,o),x(t,e)[o]-r):parseFloat(t)-r},v=function(){o=a(),u()&&o&&"undefined"!=typeof document&&document.body&&(r=window,i=document.body,l=document.documentElement,n=o.utils.toArray,o.config({autoKillThreshold:7}),p=o.config(),s=1)},(k={version:"3.12.2",name:"scrollTo",rawVars:1,register:function(t){o=t,v()},init:function(t,e,l,i,n){s||v();var p=o.getProperty(t,"scrollSnapType");this.isWin=t===r,this.target=t,this.tween=l,e=d(e,i,t,n),this.vars=e,this.autoKill=!!e.autoKill,this.getX=g(t,"x"),this.getY=g(t,"y"),this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),c||(c=o.core.globals().ScrollTrigger),"smooth"===o.getProperty(t,"scrollBehavior")&&o.set(t,{scrollBehavior:"auto"}),p&&"none"!==p&&(this.snap=1,this.snapInline=t.style.scrollSnapType,t.style.scrollSnapType="none"),null!=e.x?(this.add(this,"x",this.x,T(e.x,t,"x",this.x,e.offsetX||0),i,n),this._props.push("scrollTo_x")):this.skipX=1,null!=e.y?(this.add(this,"y",this.y,T(e.y,t,"y",this.y,e.offsetY||0),i,n),this._props.push("scrollTo_y")):this.skipY=1},render:function(t,e){for(var o,s,l,i,n,u=e._pt,a=e.target,f=e.tween,y=e.autoKill,g=e.xPrev,d=e.yPrev,x=e.isWin,T=e.snap,v=e.snapInline;u;)u.r(t,u.d),u=u._next;o=x||!e.skipX?e.getX():g,l=(s=x||!e.skipY?e.getY():d)-d,i=o-g,n=p.autoKillThreshold,e.x<0&&(e.x=0),e.y<0&&(e.y=0),y&&(!e.skipX&&(i>n||i<-n)&&o<h(a,"x")&&(e.skipX=1),!e.skipY&&(l>n||l<-n)&&s<h(a,"y")&&(e.skipY=1),e.skipX&&e.skipY&&(f.kill(),e.vars.onAutoKill&&e.vars.onAutoKill.apply(f,e.vars.onAutoKillParams||[]))),x?r.scrollTo(e.skipX?o:e.x,e.skipY?s:e.y):(e.skipY||(a.scrollTop=e.y),e.skipX||(a.scrollLeft=e.x)),T&&(1===t||0===t)&&(s=a.scrollTop,o=a.scrollLeft,v?a.style.scrollSnapType=v:a.style.removeProperty("scroll-snap-type"),a.scrollTop=s+1,a.scrollLeft=o+1,a.scrollTop=s,a.scrollLeft=o),e.xPrev=e.x,e.yPrev=e.y,c&&c.update()},kill:function(t){var e="scrollTo"===t;(e||"scrollTo_x"===t)&&(this.skipX=1),(e||"scrollTo_y"===t)&&(this.skipY=1)}}).max=h,k.getOffset=x,k.buildGetter=g,a()&&o.registerPlugin(k),e.ScrollToPlugin=k,e.default=k,Object.defineProperty(e,"__esModule",{value:!0})}};