(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3578],{2050:function(t,e){var n;(function(){var i,r,o,s,a,u,d,l,h,p,c,m,f,g,v,M,w,y,b=[].slice;i=/^\(?([^)]*)\)?(?:(.)(d+))?$/,s=null!=(c=document.createElement("div").style).transition||null!=c.webkitTransition||null!=c.mozTransition||null!=c.oTransition,h=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,u=function(t){var e;return(e=document.createElement("div")).innerHTML=t,e.children[0]},l=function(t,e){return t.className=t.className.replace(RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi")," ")},a=function(t,e){return l(t,e),t.className+=" "+e},m=function(t,e){var n;if(null!=document.createEvent)return(n=document.createEvent("HTMLEvents")).initEvent(e,!0,!0),t.dispatchEvent(n)},d=function(){var t,e;return null!=(t=null!=(e=window.performance)&&"function"==typeof e.now?e.now():void 0)?t:+new Date},p=function(t,e){return(null==e&&(e=0),e)?(t*=Math.pow(10,e),t+=.5,(t=Math.floor(t))/Math.pow(10,e)):Math.round(t)},f=function(t){return t<0?Math.ceil(t):Math.floor(t)},v=!1,(g=function(){var t,e,n,i,r;if(!v&&null!=window.jQuery){for(e=0,v=!0,r=[],n=(i=["html","text"]).length;e<n;e++)t=i[e],r.push(function(t){var e;return e=window.jQuery.fn[t],window.jQuery.fn[t]=function(t){var n;return null==t||(null!=(n=this[0])?n.odometer:void 0)==null?e.apply(this,arguments):this[0].odometer.update(t)}}(t));return r}})(),setTimeout(g,0),(o=function(){function Odometer(t){var e,n,i,r,o,s,a,u,d,l=this;if(this.options=t,this.el=this.options.el,null!=this.el.odometer)return this.el.odometer;for(e in this.el.odometer=this,a=Odometer.options)i=a[e],null==this.options[e]&&(this.options[e]=i);null==(r=this.options).duration&&(r.duration=2e3),this.MAX_VALUES=this.options.duration/33.333333333333336/2|0,this.resetFormat(),this.value=this.cleanValue(null!=(u=this.options.value)?u:""),this.renderInside(),this.render();try{for(o=0,s=(d=["innerHTML","innerText","textContent"]).length;o<s;o++)n=d[o],null!=this.el[n]&&function(t){Object.defineProperty(l.el,t,{get:function(){var e;return"innerHTML"===t?l.inside.outerHTML:null!=(e=l.inside.innerText)?e:l.inside.textContent},set:function(t){return l.update(t)}})}(n)}catch(t){this.watchForMutations()}}return Odometer.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},Odometer.prototype.watchForMutations=function(){var t=this;if(null!=r)try{return null==this.observer&&(this.observer=new r(function(e){var n;return n=t.el.innerText,t.renderInside(),t.render(t.value),t.update(n)})),this.watchMutations=!0,this.startWatchingMutations()}catch(t){}},Odometer.prototype.startWatchingMutations=function(){if(this.watchMutations)return this.observer.observe(this.el,{childList:!0})},Odometer.prototype.stopWatchingMutations=function(){var t;return null!=(t=this.observer)?t.disconnect():void 0},Odometer.prototype.cleanValue=function(t){var e;return"string"==typeof t&&(t=parseFloat(t=(t=(t=t.replace(null!=(e=this.format.radix)?e:".","<radix>")).replace(/[.,]/g,"")).replace("<radix>","."),10)||0),p(t,this.format.precision)},Odometer.prototype.bindTransitionEnd=function(){var t,e,n,i,r,o,s=this;if(!this.transitionEndBound){for(n=0,this.transitionEndBound=!0,e=!1,r="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd".split(" "),o=[],i=r.length;n<i;n++)t=r[n],o.push(this.el.addEventListener(t,function(){return!!e||(e=!0,setTimeout(function(){return s.render(),e=!1,m(s.el,"odometerdone")},0),!0)},!1));return o}},Odometer.prototype.resetFormat=function(){var t,e,n,r,o,s,a,u;if((t=null!=(a=this.options.format)?a:"(,ddd).dd")||(t="d"),!(n=i.exec(t)))throw Error("Odometer: Unparsable digit format");return s=(u=n.slice(1,4))[0],o=u[1],r=(null!=(e=u[2])?e.length:void 0)||0,this.format={repeating:s,radix:o,precision:r}},Odometer.prototype.render=function(t){var e,n,i,r,o,a,u;for(null==t&&(t=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",o=this.options.theme,e=this.el.className.split(" "),r=[],a=0,u=e.length;a<u;a++)if((n=e[a]).length){if(i=/^odometer-theme-(.+)$/.exec(n)){o=i[1];continue}/^odometer(-|$)/.test(n)||r.push(n)}return r.push("odometer"),s||r.push("odometer-no-transitions"),o?r.push("odometer-theme-"+o):r.push("odometer-auto-theme"),this.el.className=r.join(" "),this.ribbons={},this.formatDigits(t),this.startWatchingMutations()},Odometer.prototype.formatDigits=function(t){var e,n,i,r,o,s,a,u,d;if(this.digits=[],this.options.formatFunction)for(r=0,s=(u=this.options.formatFunction(t).split("").reverse()).length;r<s;r++)(n=u[r]).match(/0-9/)?((e=this.renderDigit()).querySelector(".odometer-value").innerHTML=n,this.digits.push(e),this.insertDigit(e)):this.addSpacer(n);else for(o=0,i=!this.format.precision||!(t-p(t)),a=(d=t.toString().split("").reverse()).length;o<a;o++)"."===(e=d[o])&&(i=!0),this.addDigit(e,i)},Odometer.prototype.update=function(t){var e,n=this;if(e=(t=this.cleanValue(t))-this.value)return l(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),e>0?a(this.el,"odometer-animating-up"):a(this.el,"odometer-animating-down"),this.stopWatchingMutations(),this.animate(t),this.startWatchingMutations(),setTimeout(function(){return n.el.offsetHeight,a(n.el,"odometer-animating")},0),this.value=t},Odometer.prototype.renderDigit=function(){return u('<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value"></span></span></span></span></span>')},Odometer.prototype.insertDigit=function(t,e){return null!=e?this.inside.insertBefore(t,e):this.inside.children.length?this.inside.insertBefore(t,this.inside.children[0]):this.inside.appendChild(t)},Odometer.prototype.addSpacer=function(t,e,n){var i;return(i=u('<span class="odometer-formatting-mark"></span>')).innerHTML=t,n&&a(i,n),this.insertDigit(i,e)},Odometer.prototype.addDigit=function(t,e){var n,i,r,o;if(null==e&&(e=!0),"-"===t)return this.addSpacer(t,null,"odometer-negation-mark");if("."===t)return this.addSpacer(null!=(o=this.format.radix)?o:".",null,"odometer-radix-mark");if(e)for(r=!1;;){if(!this.format.repeating.length){if(r)throw Error("Bad odometer format without digits");this.resetFormat(),r=!0}if(n=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),"d"===n)break;this.addSpacer(n)}return(i=this.renderDigit()).querySelector(".odometer-value").innerHTML=t,this.digits.push(i),this.insertDigit(i)},Odometer.prototype.animate=function(t){return s&&"count"!==this.options.animation?this.animateSlide(t):this.animateCount(t)},Odometer.prototype.animateCount=function(t){var e,n,i,r,o,s=this;if(n=+t-this.value)return r=i=d(),e=this.value,(o=function(){var a,u;if(d()-r>s.options.duration){s.value=t,s.render(),m(s.el,"odometerdone");return}return(a=d()-i)>50&&(i=d(),u=a/s.options.duration,e+=n*u,s.render(Math.round(e))),null!=h?h(o):setTimeout(o,50)})()},Odometer.prototype.getDigitCount=function(){var t,e,n,i,r;for(n=1<=arguments.length?b.call(arguments,0):[],t=i=0,r=n.length;i<r;t=++i)e=n[t],n[t]=Math.abs(e);return Math.ceil(Math.log(Math.max.apply(Math,n)+1)/Math.log(10))},Odometer.prototype.getFractionalDigitCount=function(){var t,e,n,i,r,o,s;for(r=1<=arguments.length?b.call(arguments,0):[],e=/^\-?\d*\.(\d*?)0*$/,t=o=0,s=r.length;o<s;t=++o)i=r[t],r[t]=i.toString(),null==(n=e.exec(r[t]))?r[t]=0:r[t]=n[1].length;return Math.max.apply(Math,r)},Odometer.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},Odometer.prototype.animateSlide=function(t){var e,n,i,r,o,s,u,d,l,h,p,c,m,g,v,M,w,y,b,O,E,T,x,S,D,L,C;if(M=this.value,(d=this.getFractionalDigitCount(M,t))&&(t*=Math.pow(10,d),M*=Math.pow(10,d)),i=t-M){for(this.bindTransitionEnd(),r=this.getDigitCount(M,t),o=[],e=0,p=b=0;0<=r?b<r:b>r;p=0<=r?++b:--b){if(w=f(M/Math.pow(10,r-p-1)),Math.abs(s=(u=f(t/Math.pow(10,r-p-1)))-w)>this.MAX_VALUES){for(h=[],c=s/(this.MAX_VALUES+this.MAX_VALUES*e*.5),n=w;s>0&&n<u||s<0&&n>u;)h.push(Math.round(n)),n+=c;h[h.length-1]!==u&&h.push(u),e++}else h=(function(){C=[];for(var t=w;w<=u?t<=u:t>=u;w<=u?t++:t--)C.push(t);return C}).apply(this);for(p=O=0,T=h.length;O<T;p=++O)l=h[p],h[p]=Math.abs(l%10);o.push(h)}for(this.resetDigits(),L=o.reverse(),p=E=0,x=L.length;E<x;p=++E)for(h=L[p],this.digits[p]||this.addDigit(" ",p>=d),null==(y=this.ribbons)[p]&&(y[p]=this.digits[p].querySelector(".odometer-ribbon-inner")),this.ribbons[p].innerHTML="",i<0&&(h=h.reverse()),m=D=0,S=h.length;D<S;m=++D)l=h[m],(v=document.createElement("div")).className="odometer-value",v.innerHTML=l,this.ribbons[p].appendChild(v),m===h.length-1&&a(v,"odometer-last-value"),0===m&&a(v,"odometer-first-value");if(w<0&&this.addDigit("-"),null!=(g=this.inside.querySelector(".odometer-radix-mark"))&&g.parent.removeChild(g),d)return this.addSpacer(this.format.radix,this.digits[d-1],"odometer-radix-mark")}},Odometer}()).options=null!=(w=window.odometerOptions)?w:{},setTimeout(function(){var t,e,n,i,r;if(window.odometerOptions){for(t in i=window.odometerOptions,r=[],i)e=i[t],r.push(null!=(n=o.options)[t]?(n=o.options)[t]:n[t]=e);return r}},0),o.init=function(){var t,e,n,i,r,s;if(null!=document.querySelectorAll){for(n=0,e=document.querySelectorAll(o.options.selector||".odometer"),s=[],i=e.length;n<i;n++)t=e[n],s.push(t.odometer=new o({el:t,value:null!=(r=t.innerText)?r:t.textContent}));return s}},(null!=(y=document.documentElement)?y.doScroll:void 0)!=null&&null!=document.createEventObject?(M=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&!1!==o.options.auto&&o.init(),null!=M?M.apply(this,arguments):void 0}):document.addEventListener("DOMContentLoaded",function(){if(!1!==o.options.auto)return o.init()},!1),void 0!==(n=(function(){return o}).apply(e,[]))&&(t.exports=n)}).call(this)},93578:function(t,e,n){"use strict";n.r(e);var i=n(2265),r=n(2050),o=n.n(r);e.default=({animation:t,duration:e,format:n,theme:r,value:s,...a})=>{let u=(0,i.useRef)(null),d=(0,i.useRef)();return(0,i.useEffect)(()=>{d.current=new(o())({el:u.current,auto:!1,animation:t,duration:e,format:n,theme:r,value:s})},[]),(0,i.useEffect)(()=>{d.current?.update(s)},[s]),(0,i.createElement)("div",{...a,ref:u})}}}]);