exports.id=3103,exports.ids=[3103],exports.modules={80391:t=>{function r(){for(var t,i,s=0,a="";s<arguments.length;)(t=arguments[s++])&&(i=function e(t){var i,s,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(i=0;i<t.length;i++)t[i]&&(s=e(t[i]))&&(a&&(a+=" "),a+=s);else for(i in t)t[i]&&(a&&(a+=" "),a+=i)}return a}(t))&&(a&&(a+=" "),a+=i);return a}t.exports=r,t.exports.clsx=r},17412:(t,i,s)=>{"use strict";var a=s(43831),h=s(94118),n=s(71925),o=s(21647),u=s(86257).trim,l=s(75212),m=n("".charAt),d=a.parseFloat,p=a.Symbol,b=p&&p.iterator,c=1/d(l+"-0")!=-1/0||b&&!h(function(){d(Object(b))});t.exports=c?function(t){var i=u(o(t)),s=d(i);return 0===s&&"-"===m(i,0)?-0:s}:d},28033:(t,i,s)=>{"use strict";var a=s(67491),h=s(17412);a({global:!0,forced:parseFloat!==h},{parseFloat:h})},67520:()=>{},16669:(t,i,s)=>{"use strict";s(26812),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,s(28033);var a=function(t,i){if(!i&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var s=_getRequireWildcardCache(i);if(s&&s.has(t))return s.get(t);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=h?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(a,n,o):a[n]=t[n]}return a.default=t,s&&s.set(t,a),a}(s(9885)),h=function(t){return t&&t.__esModule?t:{default:t}}(s(80391));function _getRequireWildcardCache(t){if("function"!=typeof WeakMap)return null;var i=new WeakMap,s=new WeakMap;return(_getRequireWildcardCache=function(t){return t?s:i})(t)}let n=Math.abs,o=parseFloat,u="vertical",l="tabindex",m="data-lower",d="data-upper",p="data-active",b="data-vertical",c="data-disabled";let RangeSlider=class RangeSlider extends a.PureComponent{constructor(){super(),this.element=(0,a.createRef)(),this.input=[(0,a.createRef)(),(0,a.createRef)()],this.thumb=[(0,a.createRef)(),(0,a.createRef)()],this.range=(0,a.createRef)(),this.options={},this.firstCall=!0,this.isControlled=!1,this.externalInput=!1,this.isComponentMounted=!1,this.lastValueProp=[]}componentDidMount(){this.isComponentMounted||(this.value=this.setMinMaxProps(),this.index=this.setMinMaxProps(0,1),this.thumbWidth=this.setMinMaxProps(),this.thumbHeight=this.setMinMaxProps(),this.rangeLimits=this.setMinMaxProps(),this.sliderValue=this.setMinMaxProps(),this.maxRangeWidth=0,this.rangeWidth=0,this.isDragging=!1,this.thumbDrag=!1,this.startPos=0,this.reset(),this.addNodeEventListener(this.element.current,"pointerdown",t=>{this.elementFocused(t)}),this.thumb.forEach((t,i)=>{this.addNodeEventListener(t.current,"pointerdown",s=>{this.initiateThumbDrag(s,i,t.current)}),this.addNodeEventListener(t.current,"keydown",t=>{t.which>=37&&t.which<=40&&(t.preventDefault(),this.stepValue(i,t.which))})}),this.addNodeEventListener(this.range.current,"pointerdown",t=>{this.initiateRangeDrag(t)}),this.pointerMoveEvent=t=>{this.drag(t)},this.pointerUpEvent=()=>{this.isDragging&&(this.removeNodeAttribute(this.thumb[0].current,p),this.removeNodeAttribute(this.thumb[1].current,p),this.removeNodeAttribute(this.range.current,p),this.isDragging=!1,this.thumbDrag?this.options.onThumbDragEnd&&this.options.onThumbDragEnd():this.options.onRangeDragEnd&&this.options.onRangeDragEnd())},this.resizeEvent=()=>{this.syncThumbDimensions(),this.updateThumbs(),this.updateRange()},this.addNodeEventListener(document,"pointermove",this.pointerMoveEvent),this.addNodeEventListener(document,"pointerup",this.pointerUpEvent),this.addNodeEventListener(window,"resize",this.resizeEvent),this.isComponentMounted=!0)}componentDidUpdate(){this.reset()}componentWillUnmount(){this.removeNodeEventListener(document,"pointermove",this.pointerMoveEvent),this.removeNodeEventListener(document,"pointerup",this.pointerUpEvent),this.removeNodeEventListener(window,"resize",this.resizeEvent),this.isComponentMounted=!1}reset(){this.isControlled=!!this.props.value,this.isControlled&&((this.firstCall||this.props.value!==this.lastValueProp)&&(this.firstCall=!1,this.externalInput=!0),this.lastValueProp=this.props.value),this.maxRangeWidth=this.options.max-this.options.min,this.updateOrientation(),this.setValue("",!0,!1),this.updateRangeLimits(),this.updateDisabledState(),this.updateThumbsDisabledState(),this.updateTabIndexes()}isNumber(t){return!isNaN(t)&&+t+""==t+""}setMinMaxProps(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{min:t,max:i}}iterateMinMaxProps(t){["min","max"].forEach(t)}getSetProps(t,i,s){if(t)return i;s()}setNodeAttribute(t,i){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";t.setAttribute(i,s)}removeNodeAttribute(t,i){t.removeAttribute(i)}addNodeEventListener(t,i,s){let a=!(arguments.length>3)||void 0===arguments[3]||arguments[3];t.addEventListener(i,s,a?{passive:!1,capture:!0}:{})}removeNodeEventListener(t,i,s){let a=!(arguments.length>3)||void 0===arguments[3]||arguments[3];t.removeEventListener(i,s,a?{passive:!1,capture:!0}:{})}fallbackToDefault(t,i){this.options[t]=this.props[t]?this.props[t]:i}ifVerticalElse(t,i){return this.options.orientation===u?t:i}currentIndex(t){return 1===t?this.index.max:this.index.min}safeMinMaxValues(){let t=!1;this.isNumber(this.options.min)&&this.isNumber(this.options.max)||(t=!0),this.options.min=t?1:+this.options.min,this.options.max=t?1:+this.options.max}safeThumbsDisabledValues(){this.options.thumbsDisabled instanceof Array?(1===this.options.thumbsDisabled.length&&this.options.thumbsDisabled.push(!1),1!==this.options.thumbsDisabled.length&&2!==this.options.thumbsDisabled.length&&(this.options.thumbsDisabled=[!1,!1])):this.options.thumbsDisabled=[this.options.thumbsDisabled,this.options.thumbsDisabled],this.options.thumbsDisabled[0]=!!this.options.thumbsDisabled[0],this.options.thumbsDisabled[1]=!!this.options.thumbsDisabled[1]}setValue(t){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=this.setMinMaxProps(this.input[0].current.value,this.input[1].current.value);t=t||a,this.input[this.index.min].current.value=t.min,this.input[this.index.max].current.value=this.thumbDrag||i?t.max:t.min+this.rangeWidth,this.syncValues(),this.value.min>this.value.max&&(this.index.min=+!this.index.min,this.index.max=+!this.index.max,this.removeNodeAttribute(this.thumb[this.index.min].current,d),this.removeNodeAttribute(this.thumb[this.index.max].current,m),this.setNodeAttribute(this.thumb[this.index.min].current,m),this.setNodeAttribute(this.thumb[this.index.max].current,d),this.thumbDrag&&(this.thumbDrag="min"===this.thumbDrag?"max":"min"),this.syncValues()),this.sliderValue=i?this.value:t;let h=!1;(a.min!==this.input[0].current.value||i)&&(h=!0),(a.max!==this.input[1].current.value||i)&&(h=!0),h&&(s&&this.options.onInput&&this.options.onInput([this.value.min,this.value.max]),(!this.isControlled||this.externalInput)&&(this.externalInput=!1,this.syncThumbDimensions(),this.updateThumbs(),this.updateRange(),this.updateAriaValueAttributes()))}syncValues(){this.iterateMinMaxProps(t=>{this.value[t]=+this.input[this.index[t]].current.value})}updateThumbs(){this.iterateMinMaxProps(t=>{this.thumb[this.index[t]].current.style[this.ifVerticalElse("top","left")]="calc(".concat((this.value[t]-this.options.min)/this.maxRangeWidth*100,"% + ").concat((.5-(this.value[t]-this.options.min)/this.maxRangeWidth)*this.ifVerticalElse(this.thumbHeight,this.thumbWidth)[t],"px)")})}updateRange(){let t=this.element.current.getBoundingClientRect(),i=(.5-(this.value.min-this.options.min)/this.maxRangeWidth)*this.ifVerticalElse(this.thumbHeight,this.thumbWidth).min/this.ifVerticalElse(t.bottom-t.top,t.right-t.left),s=(.5-(this.value.max-this.options.min)/this.maxRangeWidth)*this.ifVerticalElse(this.thumbHeight,this.thumbWidth).max/this.ifVerticalElse(t.bottom-t.top,t.right-t.left);this.range.current.style[this.ifVerticalElse("top","left")]="".concat(((this.value.min-this.options.min)/this.maxRangeWidth+i)*100,"%"),this.range.current.style[this.ifVerticalElse("height","width")]="".concat(((this.value.max-this.options.min)/this.maxRangeWidth-(this.value.min-this.options.min)/this.maxRangeWidth-i+s)*100,"%")}updateRangeLimits(){this.iterateMinMaxProps((t,i)=>{this.rangeLimits[t]=this.options.thumbsDisabled[i]?this.value[t]:this.options[t]})}updateTabIndexes(){this.iterateMinMaxProps((t,i)=>{this.options.disabled||this.options.thumbsDisabled[i]?this.removeNodeAttribute(this.thumb[this.currentIndex(i)].current,l):this.setNodeAttribute(this.thumb[this.currentIndex(i)].current,l,0)})}updateAriaValueAttributes(){this.iterateMinMaxProps(t=>{this.setNodeAttribute(this.thumb[this.index[t]].current,"aria-valuemin",this.options.min),this.setNodeAttribute(this.thumb[this.index[t]].current,"aria-valuemax",this.options.max),this.setNodeAttribute(this.thumb[this.index[t]].current,"aria-valuenow",this.value[t]),this.setNodeAttribute(this.thumb[this.index[t]].current,"aria-valuetext",this.value[t])})}updateDisabledState(){this.options.disabled?this.setNodeAttribute(this.element.current,c):this.removeNodeAttribute(this.element.current,c)}updateThumbsDisabledState(){this.options.thumbsDisabled.forEach((t,i)=>{let s=this.currentIndex(i);t?(this.setNodeAttribute(this.thumb[s].current,c),this.setNodeAttribute(this.thumb[s].current,"aria-disabled",!0)):(this.removeNodeAttribute(this.thumb[s].current,c),this.setNodeAttribute(this.thumb[s].current,"aria-disabled",!1))})}updateLimits(t){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.options[t]=i,this.safeMinMaxValues(),this.iterateMinMaxProps(t=>{this.input[0].current[t]=this.options[t],this.input[1].current[t]=this.options[t]}),this.maxRangeWidth=this.options.max-this.options.min,this.setValue("",!0),this.updateRangeLimits()}updateOrientation(){this.options.orientation===u?this.setNodeAttribute(this.element.current,b):this.removeNodeAttribute(this.element.current,b),this.range.current.style[this.ifVerticalElse("left","top")]="",this.range.current.style[this.ifVerticalElse("width","height")]="",this.thumb[0].current.style[this.ifVerticalElse("left","top")]="",this.thumb[1].current.style[this.ifVerticalElse("left","top")]=""}syncThumbDimensions(){this.iterateMinMaxProps(t=>{this.thumbWidth[t]=o(window.getComputedStyle(this.thumb[this.index[t]].current).width),this.thumbHeight[t]=o(window.getComputedStyle(this.thumb[this.index[t]].current).height)})}currentPosition(t,i){let s=this.element.current.getBoundingClientRect(),a=i.getBoundingClientRect(),h=(this.ifVerticalElse(a.top-s.top,a.left-s.left)+(t["client".concat(this.ifVerticalElse("Y","X"))]-i.getBoundingClientRect()[this.ifVerticalElse("top","left")])-(this.thumbDrag?(.5-(this.value[this.thumbDrag]-this.options.min)/this.maxRangeWidth)*this.ifVerticalElse(this.thumbHeight,this.thumbWidth)[this.thumbDrag]:0))/this.ifVerticalElse(s.bottom-s.top,s.right-s.left)*this.maxRangeWidth+this.options.min;return h<this.options.min?this.options.min:h>this.options.max?this.options.max:h}doesntHaveClassName(t,i){return!t.target.classList.contains(i)}elementFocused(t){let i=!(arguments.length>1)||void 0===arguments[1]||arguments[1],s=!1;if(!this.options.disabled&&(this.doesntHaveClassName(t,"range-slider__thumb")&&this.doesntHaveClassName(t,"range-slider__range")||this.options.rangeSlideDisabled&&this.doesntHaveClassName(t,"range-slider__thumb"))&&(s=!0),s&&this.options.thumbsDisabled[0]&&this.options.thumbsDisabled[1]&&(s=!1),s){let s=this.currentPosition(t,this.range.current),a=n(this.value.min-s),h=n(this.value.max-s);if(this.options.thumbsDisabled[0])s>=this.value.min&&(this.setValue(this.setMinMaxProps(this.value.min,s),!0,!i),this.initiateThumbDrag(t,this.index.max,this.thumb[this.index.max].current,!i));else if(this.options.thumbsDisabled[1])s<=this.value.max&&(this.setValue(this.setMinMaxProps(s,this.value.max),!0,!i),this.initiateThumbDrag(t,this.index.min,this.thumb[this.index.min].current,!i));else{let n=this.index.max;a===h?this.setValue(this.setMinMaxProps(this.value.min,s),!0,!i):(this.setValue(this.setMinMaxProps(a<h?s:this.value.min,h<a?s:this.value.max),!0,!i),n=a<h?this.index.min:this.index.max),this.initiateThumbDrag(t,n,this.thumb[n].current,!i)}i&&this.elementFocused(t,!1)}}initiateDrag(t,i){this.syncThumbDimensions(),this.setNodeAttribute(i,p),this.startPos=this.currentPosition(t,i),this.isDragging=!0}initiateThumbDrag(t,i,s){let a=!(arguments.length>3)||void 0===arguments[3]||arguments[3];!this.options.disabled&&!this.options.thumbsDisabled[this.currentIndex(i)]&&(this.initiateDrag(t,s),this.thumbDrag=this.index.min===i?"min":"max",a&&this.options.onThumbDragStart&&this.options.onThumbDragStart())}initiateRangeDrag(t){this.options.disabled||this.options.rangeSlideDisabled||(this.initiateDrag(t,this.range.current),this.rangeWidth=this.value.max-this.value.min,this.thumbDrag=!1,this.options.onRangeDragStart&&this.options.onRangeDragStart())}drag(t){if(this.isDragging){let i=this.currentPosition(t,this.range.current),s=i-this.startPos,a=this.value.min,h=this.value.max,n=this.thumbDrag?this.rangeLimits.min:this.options.min,o=this.thumbDrag?this.rangeLimits.max:this.options.max;this.thumbDrag&&"min"!==this.thumbDrag||(a=this.thumbDrag?i:this.sliderValue.min+s),this.thumbDrag&&"max"!==this.thumbDrag||(h=this.thumbDrag?i:this.sliderValue.max+s),a>=n&&a<=o&&h>=n&&h<=o?(this.setValue({min:a,max:h}),this.startPos=i):(a>o&&this.thumbDrag&&(this.setValue(this.setMinMaxProps(o,o)),this.startPos=i),h<n&&this.thumbDrag&&(this.setValue(this.setMinMaxProps(n,n)),this.startPos=i),a<n&&(this.thumbDrag?this.setValue(this.setMinMaxProps(n,this.value.max)):this.setValue(this.setMinMaxProps(n,this.value.max-this.value.min+n)),this.startPos=i),h>o&&(this.thumbDrag?this.setValue(this.setMinMaxProps(this.value.min,o)):this.setValue(this.setMinMaxProps(this.value.min-this.value.max+o,o)),this.startPos=i)),this.thumbDrag||this.updateRangeLimits()}}actualStepValue(){let t=o(this.input[0].current.step);return"any"===this.input[0].current.step?"any":0===t||isNaN(t)?1:t}stepValue(t,i){let s=(37===i||40===i?-1:1)*this.ifVerticalElse(-1,1);if(!this.options.disabled&&!this.options.thumbsDisabled[this.currentIndex(t)]){let i=this.actualStepValue();i="any"===i?1:i;let a=this.value.min+i*(this.index.min===t?s:0),h=this.value.max+i*(this.index.max===t?s:0);a>this.rangeLimits.max&&(a=this.rangeLimits.max),h<this.rangeLimits.min&&(h=this.rangeLimits.min),this.setValue({min:a,max:h},!0)}}render(){return this.fallbackToDefault("rangeSlideDisabled",!1),this.fallbackToDefault("thumbsDisabled",[!1,!1]),this.fallbackToDefault("orientation","horizontal"),this.fallbackToDefault("defaultValue",[25,75]),this.fallbackToDefault("disabled",!1),this.fallbackToDefault("onThumbDragStart",!1),this.fallbackToDefault("onRangeDragStart",!1),this.fallbackToDefault("onThumbDragEnd",!1),this.fallbackToDefault("onRangeDragEnd",!1),this.fallbackToDefault("onInput",!1),this.fallbackToDefault("step",1),this.fallbackToDefault("min",0),this.fallbackToDefault("max",100),this.props.value&&this.fallbackToDefault("value",[25,75]),this.safeMinMaxValues(),this.safeThumbsDisabledValues(),a.default.createElement("div",{"data-testid":"element",id:this.props.id,ref:this.element,className:(0,h.default)("range-slider",this.props.className)},a.default.createElement("input",{ref:this.input[0],type:"range",min:this.options.min,max:this.options.max,step:this.options.step,value:this.props.value?this.options.value[0]:this.isComponentMounted?this.value.min:this.options.defaultValue[0],onChange:()=>{},disabled:!0}),a.default.createElement("input",{ref:this.input[1],type:"range",min:this.options.min,max:this.options.max,step:this.options.step,value:this.props.value?this.options.value[1]:this.isComponentMounted?this.value.max:this.options.defaultValue[1],onChange:()=>{},disabled:!0}),a.default.createElement("div",{ref:this.thumb[0],role:"slider",className:"range-slider__thumb","data-lower":!0}),a.default.createElement("div",{ref:this.thumb[1],role:"slider",className:"range-slider__thumb","data-upper":!0}),a.default.createElement("div",{ref:this.range,className:"range-slider__range"}))}};i.default=RangeSlider},44016:(t,i,s)=>{"use strict";i.Z=void 0;var a=function(t){return t&&t.__esModule?t:{default:t}}(s(16669)).default;i.Z=a}};