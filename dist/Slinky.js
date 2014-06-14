define("Layouts",[],function(){function e(e,t){function d(){var e=0;if(i>0)for(var t=1;t<=i;t++){if(!a[e])return e;if(!a[t])return t;e=a[t]<a[e]?t:e}return e}function v(){var e=0;if(i>0)for(var t=1;t<=i;t++)e=a[t]>a[e]?t:e;return e}var n="basicGridLayout",r=this;t=t?t:{};var i=t.axes;i||(i=0),r.layout_cache||(r.layout_cache={lastLayoutOptions:t,lastLayoutId:n,axesLengthArr:new Array(i),lastAxesObjArr:new Array(i)});var s=e.index,o=r.itemConstraint,u=[r.itemMargins[0]*2,r.itemMargins[1]*2],a=r.layout_cache.axesLengthArr,f=r.layout_cache.lastAxesObjArr,l=e.layoutType,c=l=="slinkyBlockItem"?v():d();e.staticAxis=c;if(!f[c])e.headPointPos[r.si]=0;else{e.prevObj=f[c],e.prevObj.nextObj=e;var h=e.prevObj.tailPointPos;e.headPointPos[r.si]=h[r.si]}var p=l=="slinkyBlockItem"?0:o*c+u[r.si_]*c;e.headPointPos[r.si_]=p,e.tailPointPos=[e.headPointPos[0]+e.w+u[0],e.headPointPos[1]+e.h+u[1]],e.outerDims=[e.tailPointPos[0]-e.headPointPos[0],e.tailPointPos[1]-e.headPointPos[1]],f[c]=e,a[c]=(a[c]||0)+e.dims[r.si]}function t(e,t){var n=this;t=t?t:{};var r=t.axisCount,i=e.index;if(i==0)e.headPointPos=[0,0];else{e.prevObj=n.boxes[i-1],e.prevObj.nextObj=e;var s=e.prevObj.tailPointPos;e.headPointPos[n.si]=s[n.si];var o=s[n.si];e.headPointPos[n.si_]=o}e.tailPointPos=[20+e.headPointPos[0],e.headPointPos[1]]}return{basicGridLayout:e,stackLayout:t}}),define("SurfaceMaps",[],function(){function e(e,t){function n(e,t){var n=[{x:e[0].x*t[0],y:e[0].y*t[1]},{x:e[1].x*t[0],y:e[1].y*t[1]},{x:e[2].x*t[0],y:e[2].y*t[1]},{x:e[3].x*t[0],y:e[3].y*t[1]}];return n}var r=this.waves.tailRamp,i=this.waves.headRamp,s=this.waves.triangle,o,u,a,f=[Math.max(500,this.parent.gridDims[0]),Math.max(1e3,this.parent.gridDims[1])],l=[{x:0,y:0},{x:.1,y:.5},{x:0,y:.01},{x:1,y:0}],c=[{x:0,y:0},{x:.05,y:.5},{x:.5,y:.95},{x:1,y:0}],h=n(c,f),p=jsBezier.pointOnCurve(h,i),d=jsBezier.gradientAtPoint(h,i);u=p.x,a=450-p.y,this.e.style.webkitTransformOrigin="50%",this.e.style.MozTransformOrigin="50%",this.e.style.transform=this.e.style.OTransform=this.e.style.MozTransform=this.e.style.webkitTransform="translate3d("+u+"px,"+a+"px, 0)"+" rotateZ("+d*15+"deg)",this.pPos=[e,t]}function t(e,t){var n=this.waves,r=n.tailRamp,i=n.headRamp,s=n.triangle,o,u;o=e,u=t,this.e.style.transform=this.e.style.OTransform=this.e.style.MozTransform=this.e.style.webkitTransform="translate3d("+o+"px,"+u+"px, 0) ",this.pPos=[e,t]}function n(e,t){var n=this.waves,r=n.tailRamp,i=n.headRamp,s=n.triangle,o,u;o=e,u=t,this.e.style.transform=this.e.style.OTransform=this.e.style.MozTransform=this.e.style.webkitTransform="translate3d("+o+"px,"+u+"px, 0) "+"scale("+(s*1+.4)+")",this.e.style.opacity=s,this.pPos=[e,t]}return{xyPlane:t,xyBumpTaper:n,xyzBezier_1:e}}),define("Easings",[],function(){function e(e,t,n,r,i){return r*(t/i)+n}function t(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n}function n(e,t,n,r,i){return t/=i/2,t<1?r/2*t*t+n:(t--,-r/2*(t*(t-2)-1)+n)}function r(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n}function i(e,t,n,r,i){return t/=i,t--,r*(t*t*t+1)+n}function s(e,t,n,r,i){return t/=i/2,t<1?r/2*t*t*t+n:(t-=2,r/2*(t*t*t+2)+n)}function o(e,t,n,r,i){return t/=i/2,t<1?r/2*Math.pow(2,10*(t-1))+n:(t--,r/2*(-Math.pow(2,-10*t)+2)+n)}function u(e,t,n,r,i){return t/=i/2,t<1?-r/2*(Math.sqrt(1-t*t)-1)+n:(t-=2,r/2*(Math.sqrt(1-t*t)+1)+n)}function a(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i)==1)return n+r;o||(o=i*.3);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n}function f(e){return e*e*e*e*e}function l(e){return 1+ --e*e*e*e*e}return{linearOut:e,easeOutSine:t,easeInOutQuad:n,easeOutQuart:r,easeOutCubic:i,easeInOutCubic:s,easeOutElastic:a,easeInQuint_t:f,easeOutQuint_t:l}}),define("DataAdapters",[],function(){function e(e){this.data=e,this.imgUrl=e.imgUrl,this.w=e.w,this.h=e.h}function t(e,t){this.data=e,this.isLastContentBlock=e.isLastContentBlock,this.layoutType=this.data.layoutType||"slinkyInline",this.noScaling=this.data.noScaling||!1,this.isFavorite=e.isFavorite,this.auxClassList=e.auxClassList||"";var n=t.options.itemConstraint;if(e.UrlInfo){var r="http://imgc.artprintimages.com/images/P-{{w}}-{{h}}-85/"+e.UrlInfo.ImageUrl.split("/MED/")[1];this.src=r.replace(/{{w}}/,"1000").replace(/{{h}}/,n),this.w=this.width=e.ImageDimensions[2].PixelWidth,this.h=this.height=e.ImageDimensions[2].PixelHeight,this.imgUrl=this.src,this.data.JudyLastNativeAspectImgURL=this.imgUrl,this.auxClassList="judyRS "+this.auxClassList}else this.w=this.width=this.data.w||100,this.h=this.height=this.data.h||100,this.imgUrl="";this.artistName="",this.artistUrl="",this.itemTitle="",this.itemPrice="";var i="",s="";e.Artist&&(i=e.Artist.FirstName||""),e.Artist&&(s=e.Artist.LastName||""),e.Artist&&(this.artistName=(i+" "+s).replace(/  /g," ").trim()||""),e.Artist&&(this.artistUrl=(e.Artist.ArtistUrl||"").replace(/gallery/g,"discover")||""),e.Title&&(this.itemTitle=e.Title||""),e.ItemPrice&&(this.itemPrice=e.ItemPrice.Price),this.artistNameTitle=this.artistName+(this.artistName&&this.itemTitle?", ":"")+this.itemTitle,this.template=this.data.template||('<img class="moneyShot" onload="imageLoaded(this)" src=""/> <div class="artistName">{{artistNameTitle}}</div> <div class="itemTitle">{{itemTitle}}</div> <div class="itemPrice">from {{itemPrice}}</div> <div class="saveIcon">'+heart_svg+"</div> "+'<div class="hover"><div class="btn">'+'<div class="cartIcon">'+cart_svg+'<span class="label labelfull">Add to Cart</span><span class="label labeltrunc">Cart</span></div>'+'<div class="border"></div><div class="saveIcon">'+heart_svg+'<span class="label labelnofav">Save</span><span class="label labelfav">Saved</span></div></div>'+"</div>").replace(/{{artistNameTitle}}/g,this.artistNameTitle).replace(/{{artistName}}/g,this.artistName).replace(/{{itemTitle}}/g,this.itemTitle).replace(/{{itemPrice}}/g,this.itemPrice);var o=t.options.itemConstraint,u=o/this[t.saDim_],a=this[t.saDim]*u,f=[a,o],l=t.options.maxWidthClassMap;if(l)for(key in l)if(f[0]<l[key]){this.auxClassList=this.auxClassList+" "+key;break}}function n(e){this.imgUrl_SM=e.UrlInfo.ImageUrl,this.imgUrl_LG=e.UrlInfo.XLargeUrl,this.imgUrl_ZOOM=e.UrlInfo.ZoomUrlWithoutWatermark,this.imgUrl_SQ=e.UrlInfo.CroppedSquareImageUrl,this.data=e,this.w=this.width=100,this.h=this.height=100,this.imgUrl=this.imgUrl_SQ,this.data.JudyLastNativeAspectImgURL=null}return{SlinkyItem:e,JudyItem:t,JudyItem_SQ:n}}),define("Animator",[],function(){var e=function(e){e||(e={});var t=e.parent;return this.resetAnimation=function(){this.easingCurve=e.easingCurve,this.easeToDuration=e.easeTime||500,this.isEasing=!1,this.activeDuration=0,this.easingProgress=this.activeDuration,this.easeFactor=0,this.easingStartTime=0,this.easeToStart=0,this.easeToDiff=0,e.parent.isEasing=!1},this.animateFrTo=function(t,n,r,i){r=r==undefined?this.easeToDuration:r,i&&(this.easingCurve=i);var s=r,o=t-n;this.easeToDiff=-1*o,this.isEasing=!0,this.activeDuration=s,this.easingStartTime=new Date,this.easingProgress=0,e.parent.isEasing=!0},this.getNextFrameDiff=function(){var e=this.easingProgress<this.activeDuration;e?(this.easingProgress=new Date-this.easingStartTime,this.easeFactor=this.easingCurve(null,this.easingProgress,0,1,this.activeDuration)):this.resetAnimation();var t=this.easeToDiff*(1-this.easeFactor);return t},this.resetAnimation(),{isEasing:function(){return this.isEasing},resetAnimation:this.resetAnimation,animateFrTo:this.animateFrTo,getNextFrameDiff:this.getNextFrameDiff}};return e}),define("Coil",["Easings","Animator"],function(e,t){var n=function(n){this.parent=n;var r=this;this.ezEnabled=function(){return this.parent.itemEasing},this.ezOptions=this.parent.options.itemEasingParams,this.doPreloading=this.parent.options.itemPreloading,this.getlayoutXansEasing=function(){return this.parent.layoutXansEasing},this.getLayoutIsXing=function(){return this.parent.layoutIsXing},this.getLayoutXingMs=function(){return this.parent.layoutXansMs},this.springLimit=this.parent.springLimit,this.index=null,this.x=this.y=0,this.dims=[0,0],this.outerDims=[0,0],this.staticAxis=0,this.headPointPos=[0,0],this.tailPointPos=[0,0],this.pPos=[0,0],this.prevObj=null,this.nextObj=null,this.targetPaintPos=[0,0],this.currentPaintPos=[0,0],this.targetXY=[0,0],this.currentXY=[0,0],this.sizeRatio=0,this.displayClass="",this.isOnScreen=!1,this.isLoaded=!1,this.hasEntered=!1,this.ani_si=new t({easingCurve:e.easeOutCubic,parent:this}),this.ani_si_=new t({easingCurve:e.easeOutCubic,parent:this}),this.element=this.e=document.createElement("div"),this.$e=$(this.e),this.element.classList.add("Coil"),this.element.classList.add("gridBox"),this.e.style.display="none",this.model={},this.setModel=function(e){this.model=e,this.model.data.getNextJudyItem=function(){var e=n.getBoxFromIndex(r.index+1);return e&&e.model&&(e=e.model.data),e},this.model.data.getPrevJudyItem=function(){var e=n.getBoxFromIndex(r.index-1);return e&&e.model&&(e=e.model.data),e},this.layoutType=e.layoutType||"slinkyInLine",this.noScaling=e.noScaling||!1,this.e.innerHTML.trim()==""&&(this.model.template?this.e.innerHTML=this.model.template:this.e.innerHTML='<div class="boxLabel">X</div><img class="moneyShot" onload="imageLoaded(this)" src=""/>',this.$moneyShot=$(".moneyShot",this.$e),this.$c=$(".boxLabel",this.e)),this.$e.data("model",this),e.auxClassList&&this.$e.addClass(e.auxClassList),e.isLastContentBlock&&this.$e.addClass("isLastContentBlock"),e.isFavorite?this.$e.addClass("isFavorite"):this.$e.removeClass("isFavorite")},n.e.appendChild(this.e)};return n.prototype.updateContent=function(){this.$c.length&&this.$c.html(this.index+"<br/>"+this.waves.headRamp.toFixed(3))},n.prototype.setDimensions=function(e,t){this.e.style.width=e+"px",this.e.style.height=t+"px",this.dims[0]=this.width=this.w=e,this.dims[1]=this.height=this.h=t,this.sizeRatio=t/e,this.displayClass=this.getDisplayClass(this.sizeRatio)},n.prototype.getDisplayClass=function(e){return e>1.1?"portrait":e<.9?"landscape":"square"},n.prototype.paintToSurfaceMap=function(e,t){this.parent.surfaceMap.call(this,e,t)},n.prototype.remove=function(){this.parent.e.removeChild(this.e)},n.prototype.doOnScreen=function(e){if(e!=undefined&&this.isOnScreen!==e){this.isOnScreen=e,e&&!this.isLoaded&&this.$moneyShot.attr("src",this.model.imgUrl);var t=this.e.classList,n=this.e.style.display;e?(this.hasEntered||(this.hasEntered=!0,setTimeout(function(){t.add("hasEntered")},10)),this.e.style.display="block",setTimeout(function(){t.add("onScreen")},10)):(this.e.style.display="none",t.remove("onScreen")),this.isLoaded=!0}return this.isOnScreen},n.prototype.setWaveforms=function(e){this.waves=e},n.prototype.getSaEvtStats=function(){var e=this.parent.si,t=this.pPos[e],n=t+this.outerDims[e]*.5,r=this.parent.saEventPos,i=n-r;return{d:i,dPercent:i/this.parent.gridDims[e],isOnEvtPos:r>=t&&r<=t+this.outerDims[e]?!0:!1}},n.prototype.setAbsPos=function(e,t){if(!this.ezEnabled()&&!this.getLayoutIsXing()){this.currentXY[0]=e,this.x=e,this.currentXY[1]=t,this.y=t;return}var n=this.isOnSaEvt,r=this.getSaEvtStats();this.isOnSaEvt=r.isOnEvtPos,this.saEvtDistance=r.d,this.saEvtDistPercent=r.dPercent;var i=r.dPercent,s=Math.abs(i)<.09,o=5*(1-this.parent.easingPercent),u=this.parent.si,a=this.parent.si_,f=u?t:e,l=a?t:e,c=f>this.targetXY[u]+o||f<this.targetXY[u]-o||s?1:0,h=l>this.targetXY[a]+o||l<this.targetXY[a]-o||s?1:0;if(f!=this.targetXY[u]&&c||l!=this.targetXY[a]&&h){this.targetXY=[e,t];var p,d;this.getLayoutIsXing()?(p=this.getlayoutXansEasing(),d=this.getLayoutXingMs()):this.parent.isTouching?(p=this.ezOptions.touchCurve,d=this.ezOptions.easeTime):(p=this.ezOptions.swipeCurve,d=this.ezOptions.easeTime),this.currentXY[0]==0&&this.currentXY[1]==0&&(this.currentXY[0]=e,this.currentXY[1]=t),this.ani_si.animateFrTo(this.currentXY[u],this.targetXY[u],d,p),this.ani_si_.animateFrTo(this.currentXY[a],this.targetXY[a],d,p)}var v=this.ani_si.getNextFrameDiff();Math.abs(v)>.001?this.currentXY[u]=this.targetXY[u]-v:this.currentXY[u]=this.targetXY[u];var m=this.ani_si_.getNextFrameDiff();Math.abs(m)>.001?this.currentXY[a]=this.targetXY[a]-v:this.currentXY[a]=this.targetXY[a];var g=Math.min(Math.abs(i),1),y=this.springLimit,b=this.targetXY[u]+y*g,w=this.targetXY[u]-y*g,E=this.targetXY[a]+y*g,S=this.targetXY[a]-y*g;this.currentXY[u]>b&&(this.currentXY[u]=b),this.currentXY[u]<w&&(this.currentXY[u]=w),this.currentXY[a]>E&&(this.currentXY[a]=E),this.currentXY[a]<S&&(this.currentXY[a]=S),this.x=this.currentXY[0],this.y=this.currentXY[1]},n}),define("Spring",["Easings","Coil","Layouts"],function(e,t,n){function h(e){var t=this;s=new Date;if(!i){i=!0;var n=setInterval(function(){var e=new Date;e-s>100&&(i=!1,t.handleGesture({type:"release"}),clearInterval(n))},65)}}var r=function(t,n,r){this.physicsLoopRAF=null,this.options=n,this.$e=t,this.e=t[0],this.parent=r,this.parentParentE=t.parent(),this.statsCache={},this.onChangePub=n.onChangePub,this.surfaceMap=function(){},this.setSurfaceMap=function(e){this.surfaceMap=e},this.setSurfaceMap(n.surfaceMap),this.boxCount=0,this.boxes=[],this.springLimit=n.itemEasingParams.springLimit,this.boxAxisLengths=[0,0],this.trailingEdgeScrollPos=null,this.scrollAxisOffset=n.scrollAxisOffset,this.staticAxisOffset=n.staticAxisOffset,this.axisOffset=[],this.gridDims=[],this.scrollPos=0,this.absScrollPos=0;var i=0,s=0;this.setScrollPos=function(e,t){this.scrollPos=t?this.scrollPos+e:e},this.setAbsScrollPos=function(e,t){return this.scrollPos=t?this.scrollPos+e:this.firstItemPos+e,this.scrollPos},this.getScrollViewDim=function(){return this.gridDims[this.si]},this.getScrollDimCenter=function(){return this.gridDims[this.si]/2},this.getScrollPos=function(){return this.scrollPos},this.saEventPos=null,this.saEventPosProgress=0,this.easingPercent=100,this.isEasing=!1,this.isEasingTo=!1,this.marginScrollWarp=!1,this.easeToThresh=2,this.easingProgress=0,this.easingStartTime=0,this.schwingBackDuration=500,this.schwingEasingFn=e.easeOutCubic,this.easingDuration=1800,this.easeToDuration=300,this.activeDuration=this.easingDuration,this.easeToStart=0,this.easeToEnd=0,this.easeToDiff=0,this.dMomentum=100,this.momentum=0,this.momentumLimit=150,this.mouseWheelReleaseTime=100,this.isLooping=n.isLooping||!1,this.isTouching=!1,this.hasData=!1,this.isInTailMargin=!1,this.isInHeadMargin=!1,this.hasShortGridDimsSi=!1,this.hasMediumGridDimsSi=!1,this.scrollDirection=0,this.itemMargins=n.itemMargins,this.itemConstraint=n.itemConstraint,this.staticAxisCount=n.staticAxisCount,this.scrollMarginFactor=10,this.scrollMargin=[0,0],this.firstItemPos=0,this.frameCtr=0,this.frameRateLog=[],this.frameRate=0,this.lastFrameTime=new Date,this.trackFrameRate=function(){var e,t=new Date;this.frameRateLog.push(t-this.lastFrameTime),this.frameRateLog.length>100&&this.frameRateLog.shift(),e=this.frameRateLog.reduce(function(e,t){return e+t}),this.frameRate=1e3/(e/100),this.lastFrameTime=t},this.lastSPL=0,this.splReleaseTime=500,this.fastScrollThresh=20,this.itemEasing=n.itemEasing,this.setItemEasing=function(e){this.itemEasing=e?!0:!1},this.isChildEasing=!1,this.lastSelected=null,this.getBoxFromIndex=function(e){return this.boxes[e]},this.getLastBoxFromIndex=function(){return this.boxes[this.boxes.length-1]},this.setScrollAxis=function(e){e||(e=this.sa),this.sa=e=="y"?"y":"x",this.SA=this.sa.toUpperCase(),this.sx=this.sa=="x",this.si=this.sx?0:1,this.si_=this.sx?1:0,this.saDim=this.sx?"width":"height",this.saDim_=this.sx?"height":"width",this.gridDims[0]=this.$e.width(),this.gridDims[1]=this.$e.height(),this.axisOffset[0]=this.sx?this.scrollAxisOffset:this.staticAxisOffset,this.axisOffset[1]=this.sx?this.staticAxisOffset:this.scrollAxisOffset,this.scrollPos==undefined&&(this.scrollPos=0),this.lastScrollPos=0,this.lastScrollDiff=0,this.bounceMarginDefault=50,this.bounceMargin=this.bounceMarginDefault,this.trailingEdgeScrollPos&&(this.trailingEdgeScrollPos=this.getTrailingEdgeScrollPos())},this.lastUserEvent={time:new Date,evt:"init"},this.tagLastUserEvent=function(e){this.lastUserEvent={time:new Date,evt:e}},this.resetEasing(),this.setScrollAxis(n.scrollAxis)};r.prototype.toggleScrollAxis=function(e){this.jumpToScrollProgress(0),e||(e=this.sa=="x"?"y":"x"),this.setScrollAxis(e),this.resetAllItemConstraints();var t=this;setTimeout(function(){t.setLayout(n.basicGridLayout,{axes:t.staticAxisCount})},100),this.setLayout(n.basicGridLayout,{axes:this.staticAxisCount})},r.prototype.toggleIsLooping=function(e){typeof e=="undefined"&&(e=!this.isLooping),this.isLooping=e},r.prototype.setLastTouchOrigin=function(e){if(!this.itemEasing)return;if(this.marginScrollWarp)return;if(!e)return;var t=isNaN(e)?this.getPageSA_evt(e):e,n=t/this.gridDims[this.si];return this.saEventPos=t,this.saEventPosProgress=n,{saEventPos:t,saEventPosProgress:n}},r.prototype.getScrollFrame=function(){this.frameCtr++,this.isEasing=this.easingProgress<this.activeDuration;var t=0;if(this.isEasing)this.easingProgress=new Date-this.easingStartTime,t=easingFn(null,this.easingProgress,0,1,this.activeDuration),this.easingPercent=Math.min(1,this.easingProgress/this.activeDuration);else{this.resetEasing();var n=new Date;!this.isChildEasing&&n-this.lastSPL>this.splReleaseTime&&this.stopPhysicsLoop()}if(this.isEasingTo){var r=this.easeToDiff*(1-t);this.setScrollPos(this.easeToEnd-r)}else{var r=this.momentum*(1-t);r!=0&&this.setScrollPos(this.scrollPos+r)}this.isInTailMargin=!1,this.isInHeadMargin=!1;var i=this.lastScrollPos-this.scrollPos;this.lastScrollDiff=i;if(!this.isLooping&&this.scrollPos>this.firstItemPos||this.hasShortGridDimsSi&&this.absScrollPos>2)this.isInHeadMargin=!0,i<0?(this.setLastTouchOrigin(0),this.marginScrollWarp=!0,this.isEasing&&this.activeDuration-this.easingProgress>this.easeToDuration&&(this.activeDuration=this.easeToDuration)):i>0&&(this.marginScrollWarp=!1),this.scrollPos>this.bounceMargin+this.firstItemPos&&(this.setScrollPos(this.bounceMargin+this.firstItemPos),this.resetEasing()),!this.isTouching&&!this.isEasing&&this.easeTo(this.firstItemPos-1,this.schwingBackDuration,this.schwingEasingFn);!this.isLooping&&this.scrollPos<this.trailingEdgeScrollPos&&(this.isInTailMargin=!0,i>0?(this.setLastTouchOrigin(this.gridDims[this.si]),this.marginScrollWarp=!0,this.activeDuration-this.easingProgress>this.easeToDuration&&(this.activeDuration=this.easeToDuration)):i<0&&(this.marginScrollWarp=!1),this.scrollPos<this.trailingEdgeScrollPos-this.bounceMargin&&(this.setScrollPos(this.trailingEdgeScrollPos-this.bounceMargin),this.resetEasing()),!this.isTouching&&!this.isEasing&&this.easeTo(this.trailingEdgeScrollPos+1,this.schwingBackDuration,this.schwingEasingFn)),!this.isInHeadMargin&&!this.isInTailMargin&&(this.marginScrollWarp=!1);if((this.hasShortGridDimsSi||this.marginScrollWarp)&&!this.isEasing){var s;(this.hasShortGridDimsSi||this.hasMediumGridDimsSi)&&this.absScrollPos>0?s=this.absScrollPos:this.scrollPos>0?s=this.scrollPos-this.firstItemPos:s=-(this.scrollPos-this.trailingEdgeScrollPos);var o=Math.min(1,s/this.bounceMargin),u=Math.min(1,e.easeOutQuart(null,o,0,1,1));this.setScrollPos(i*u,!0)}return i>0?this.scrollDirection=1:i<0?this.scrollDirection=-1:this.scrollDirection=0,this.lastScrollPos=this.scrollPos,this.absScrollPos=-(this.scrollPos-this.firstItemPos),this.scrollProgress=this.absScrollPos/this.absTrailingEdgeScrollPos,this.trackFrameRate(),this.onChangePub&&this.onChangePub(this),this.scrollPos},r.prototype.startPhysicsLoop=function(){this.lastSPL=new Date;if(!this.physicsLoopRAF){var e=this;this.physicsLoopRAF=requestAnimationFrame(function(){e.assignBoxObjects()})}},r.prototype.stopPhysicsLoop=function(){this.physicsLoopRAF&&(cancelAnimationFrame(this.physicsLoopRAF),this.physicsLoopRAF=null)},r.prototype.oneShotPaint=function(e){if(!e)return;this.setLastTouchOrigin(e),this.isEasing&&this.resetEasing(),this.startPhysicsLoop()},r.prototype.getPageSA_evt=function(e){return!e||!e.gesture?null:e.gesture.center["page"+this.SA]},r.prototype.jumpObjTo=function(e,t,n){this.resetEasing(),t||(t=0),isNaN(t)||(t=this.getBoxFromIndex(t)),e>this.firstItemPos&&(e=this.firstItemPos),e<this.trailingEdgeScrollPos&&(e=this.trailingEdgeScrollPos);var r=t.headPointPos[this.si]+t.width*.5;this.setAbsScrollPos(e-r),this.startPhysicsLoop()},r.prototype.jumpToScrollProgress=function(e){e>1&&(e=.999),e<0&&(e=.001),this.setAbsScrollPos(-this.absTrailingEdgeScrollPos*e),this.startPhysicsLoop()},r.prototype.easeTo=function(e,t,n){t=t==undefined?this.easeToDuration:t,n&&(easingFn=n),e>this.firstItemPos&&(e=this.firstItemPos),e<this.trailingEdgeScrollPos&&(e=this.trailingEdgeScrollPos),this.momentum=0,this.easingPercent=0,this.isEasingTo=!0,this.activeDuration=t,this.easingStartTime=new Date,this.easingProgress=0,this.easeToStart=this.scrollPos,this.easeToEnd=e,this.easeToDiff=-1*(this.easeToStart-this.easeToEnd);if(this.easeToDiff<2&&this.easeToDiff>-2)return!1;this.startPhysicsLoop()},r.prototype.resetEasing=function(){easingFn=e.easeOutCubic,this.easingProgress=this.activeDuration,this.isEasingTo=!1,this.isEasing=!1,this.easeToDiff=0,this.momentum=0},r.prototype.startEasing=function(e,t){e&&(e=Math.pow(e,3)*20);if(this.isInHeadMargin||this.isInTailMargin)return;e!=undefined&&(this.momentum=Math.min(Math.max(e,-this.momentumLimit),this.momentumLimit)),this.isEasing=!0,this.easingStartTime=new Date,this.easingProgress=0,this.activeDuration=this.easingDuration,this.startPhysicsLoop()},r.prototype.initBoxes=function(e,r,i){r||(r=this.options.adapter);var s=this.options.lastContentBlock;i||($.each(this.boxes,function(e,t){t.remove()}),this.boxes=[],this.boxCount=0,s&&e.splice(0,0,s));if(!e)return;var o=this.boxCount,u=this.boxCount+=e.length;for(var a=o;a<u;a++){var f=new t(this);f.setModel(new r(e[a-o],this));var l=f.noScaling?[f.model[this.saDim],f.model[this.saDim_]]:this.getConstrainedItemDims(f);f.setDimensions(l[this.si],l[this.si_]),s&&a>0?this.boxes.splice(-1,0,f):i=="insert"?this.boxes.splice(0,0,f):this.boxes.push(f)}this.setLayout(n.basicGridLayout,{axes:this.staticAxisCount,isNewSet:o==0?!0:!1})},r.prototype.resetAllItemConstraints=function(){var e=this.boxCount;for(var t=0;t<e;t++){var n=this.boxes[t],r=this.getConstrainedItemDims(n);n.setDimensions(r[this.si],r[this.si_])}},r.prototype.getConstrainedItemDims=function(e){var t=this.itemConstraint,n=t/e.model[this.saDim_],r=e.model[this.saDim]*n,i=[r,t];return i},r.prototype.setLayout=function(e,t){if(!e&&(!this.lastLayoutOptions||!this.lastLayoutOptions.layout))return;if(!t&&(!this.lastLayoutOptions||!this.lastLayoutOptions.options))return;e||(e=this.lastLayoutOptions.layout),t||(t=this.lastLayoutOptions.options),this.lastLayoutOptions={layout:e,options:t};var n=t.axes;this.layout_cache&&delete this.layout_cache,this.hasShortGridDimsSi=!1,this.hasMediumGridDimsSi=!1,this.boxAxisLengths=[0,0];var r,i=this.boxCount;for(var s=0;s<i;s++)r=this.getBoxFromIndex(s),r.index=s,e.call(this,r,t),s==0&&(this.scrollMargin=[-r.width*this.si_*this.scrollMarginFactor,-r.height*this.si*this.scrollMarginFactor],this.firstItemPos=this.sx?r.width*this.scrollMarginFactor:r.height*this.scrollMarginFactor,this.bounceMargin=this.firstItemPos+this.bounceMarginDefault);if(!r){this.hasData=!1,console&&console.error&&console.error("slinky: no data found");return}this.hasData=!0,this.boxAxisLengths[0]<r.tailPointPos[0]&&(this.boxAxisLengths[0]=r.tailPointPos[0]),this.boxAxisLengths[1]<r.tailPointPos[1]&&(this.boxAxisLengths[1]=r.tailPointPos[1]);var o=-2*parseInt(this.scrollMargin),u=this.gridDims[this.si]+o;this.boxAxisLengths[this.si]<this.gridDims[this.si]&&(this.hasShortGridDimsSi=!0),this.hasShortGridDimsSi&&this.boxAxisLengths[this.si]<u&&(this.boxAxisLengths[this.si]=u),this.trailingEdgeScrollPos=-this.scrollAxisOffset+Math.min(this.gridDims[this.si],this.getTrailingEdgeScrollPos()),this.absTrailingEdgeScrollPos=this.firstItemPos-this.trailingEdgeScrollPos,!this.hasShortGridDimsSi&&this.boxAxisLengths[this.si]<u&&(this.hasMediumGridDimsSi=!0,this.boxAxisLengths[this.si]=u),t.isNewSet&&this.setAbsScrollPos(1),this.oneShotPaint(1)},r.prototype.doTransition=function(e,t,n,r,i){t=t?t:{};var s=t.axes;isNaN(n)&&(n=0),this.layoutXansEasing=r||easeOutElastic,this.layoutXansMs=n,this.layoutIsXing=n>0?!0:!1;var o=this;this.ltTimer=setTimeout(function(){o.layoutIsXing=!1,o.ltTimer=null},n+100),this.setLayout(e,t),i&&this.setSurfaceMap(i),this.oneShotPaint(1)},r.prototype.getTrailingEdgeScrollPos=function(){return-this.boxAxisLengths[this.si]+this.firstItemPos+this.gridDims[this.si]},r.prototype.assignBoxObjects=function(){function e(e){return e[this.sa]>=l[o]&&e[this.sa]<=this.boxAxisLengths[o]+l[o]?!0:!1}function t(e){return f[o]>=-(l[0]+e.width+this.itemMargins[o]*2)&&f[o]<=this.gridDims[o]-l[o]?!0:!1}function n(e){return e>=0?e:Math.abs(this.boxAxisLengths[o]+e)}var r=!1,i=this,s=this.getScrollFrame(),o=this.si,u=this.si_,a=[0,0],f=[0,0],l=this.scrollMargin;for(var c=0;c<this.boxCount;c++){var h=this.boxes[c];a[o]=h.headPointPos[o]+s,a[u]=h.headPointPos[u],h.setAbsPos(this.axisOffset[0]+a[0],this.axisOffset[1]+a[1]),f[0]=this.sx?h.x%this.boxAxisLengths[0]:h.x,f[1]=this.sx?h.y:h.y%this.boxAxisLengths[1],f[o]=n.call(this,f[o]);var p=f[o]+l[o]+h.dims[o]*.5+this.itemMargins[o],d=p/this.gridDims[o],v=1-d,m=2*(d<.5?d:v);t.call(this,h)&&(this.isLooping||e.call(this,h))?(h.doOnScreen(!0),h.setWaveforms({tailRamp:d,headRamp:v,triangle:m}),h.paintToSurfaceMap(f[0]+l[0],f[1]+l[1])):(h.doOnScreen(!1),h.setWaveforms({tailRamp:!1,headRamp:!1,triangle:!1})),h.isEasing&&(r=!0)}this.isChildEasing=r?!0:!1,this.physicsLoopRAF!==null&&(this.physicsLoopRAF=requestAnimationFrame(function(){i.assignBoxObjects()}))};var i=!1,s=new Date,o=new Date,u="",a=0,f=0,l=0,c=0;return r.prototype.handleGesture=function(e){if(window.isDragging)return;switch(e.type){case"mousewheel":case"DOMMouseScroll":case"wheel":h.call(this,e);case"_mw":var t=e.originalEvent,n=t.wheelDeltaY*.5||-t.deltaY||-t.detail*3,r=t.wheelDeltaX*.5||-t.deltaX||-t.detail*3,i=this.scrollPos+this.sx?r:n,s=this.trailingEdgeScrollPos,o=!this.hasMediumGridDimsSi&&i>this.firstItemPos,u=!this.hasMediumGridDimsSi&&i<s;!this.isLooping&&(o||u)&&(this.sx?r=Math.min(r*.1,100):n=Math.min(n*.1,100)),e.gesture=e.gesture||{},e.gesture.deltaX=r,e.gesture.deltaY=n,e.gesture.center=e.gesture.center||{},e.gesture.center.pageX=e.originalEvent.pageX,e.gesture.center.pageY=e.originalEvent.pageY;case"dragup":case"dragdown":case"dragright":case"dragleft":this.isTouching=!0;if(a==0||e.originalEvent)a=this.scrollPos,l=0;if(f==0||e.originalEvent)f=this.parentParentE.scrollTop,c=0;var p=this.sx?e.gesture.deltaX:e.gesture.deltaY,d=this.sx?e.gesture.deltaY:e.gesture.deltaX;if(Math.abs(p)>Math.abs(d))this.setScrollPos(p-l,!0),l=p,this.oneShotPaint(e);else{var v=this.parentParentE.scrollTop;this.parent.parent.$e.scrollTop(v-(d-c)),c=d}this.tagLastUserEvent(e);break;case"swipeleft":if(!this.sx)return;e.gesture.stopDetect(),this.isTouching=!1;var m=-e.gesture.velocityX;this.startEasing(m,e),this.tagLastUserEvent(e);break;case"swiperight":if(!this.sx)return;e.gesture.stopDetect(),this.isTouching=!1;var m=e.gesture.velocityX;this.startEasing(m,e),this.tagLastUserEvent(e);break;case"swipeup":if(this.sx)return;e.gesture.stopDetect(),this.isTouching=!1;var m=-e.gesture.velocityY;this.startEasing(m,e),this.tagLastUserEvent(e);break;case"swipedown":if(this.sx)return;e.gesture.stopDetect(),this.isTouching=!1;var m=e.gesture.velocityY;this.startEasing(m,e),this.tagLastUserEvent(e);break;case"touch":a=0,f=0,this.isTouching=!0,this.oneShotPaint(e),this.tagLastUserEvent(e);break;case"release":var g=new Date-this.lastUserEvent.time;!this.isEasing&&this.lastUserEvent.evt.type=="touch"&&g<1e3&&this.$e.trigger("slinkyItemSelect",e),this.isTouching=!1,this.oneShotPaint(),this.tagLastUserEvent(e)}},r}),requirejs.config({baseUrl:"src"}),define("Slinky",["Layouts","SurfaceMaps","Easings","DataAdapters","Spring"],function(e,t,n,r,i){function o(e){var t=$(e);if(t.hasClass("loaded"))return;t.addClass("loaded"),setTimeout(function(){t.parents(".gridBox").addClass("loaded")},1500)}var s=function(){this.spring={},this.dataAdapters=r,this.layouts=e,this.surfaceMaps=t,this.easings=n};return s.prototype.resize=function(e){if(this.$e[0].offsetWidth==0)return;this.spring.setScrollAxis(),this.spring.setLayout(),this.spring.oneShotPaint()},s.prototype.init=function(e,s,o){var u=this;this.parent=o,this.$e=e;var a={onChangePub:null,adapter:r.SlinkyItem,isLooping:!1,surfaceMap:t.xyPlane,itemPreloading:!1,itemEasing:!1,itemEasingParams:{touchCurve:n.easeOutCubic,swipeCurve:n.easeOutCubic,transitionCurve:n.easeOutCubic,easeTime:500,springLimit:20},scrollAxis:"x",itemConstraint:null,staticAxisCount:0},f=$.extend({},a,s||{});this.spring=new i(e,f,o),s&&s.data&&this.spring.initBoxes(s.data,s.adapter),$(window).on("resize",function(e){u.resize(e)});var l=new Hammer(e[0],{prevent_default:!0});l.on("dragdown dragup dragleft dragright swipeleft swipeup swipedown swiperight touch release tap",function(e){u.spring.handleGesture(e)}),e.on("mousewheel wheel DOMMouseScroll",function(e){u.spring.handleGesture(e),e.preventDefault(),e.stopPropagation()})},window.imageLoaded||(window.imageLoaded=o),window.Slinky=s,s});