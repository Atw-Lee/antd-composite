"use strict";(self.webpackChunkantd_composite=self.webpackChunkantd_composite||[]).push([[5121],{75777:function(Qt,ot,z){z.d(ot,{Z:function(){return It}});var Oe=z(5051),ze=z(50049),P=z(36161),I=z(30016),H=z(35887),it=z(11267),ut=z(82187),Me=z.n(ut),Ne=z(28526),Fe=z(94365),ce=z(48469),t=z(75271),Ye=z(30967),Xe=t.forwardRef(function(e,u){var r=e.height,o=e.offsetY,f=e.offsetX,a=e.children,c=e.prefixCls,d=e.onInnerResize,g=e.innerProps,Z=e.rtl,R=e.extra,l={},s={display:"flex",flexDirection:"column"};return o!==void 0&&(l={height:r,position:"relative",overflow:"hidden"},s=(0,P.Z)((0,P.Z)({},s),{},(0,I.Z)((0,I.Z)((0,I.Z)((0,I.Z)((0,I.Z)({transform:"translateY(".concat(o,"px)")},Z?"marginRight":"marginLeft",-f),"position","absolute"),"left",0),"right",0),"top",0))),t.createElement("div",{style:l},t.createElement(Ne.Z,{onResize:function(m){var S=m.offsetHeight;S&&d&&d()}},t.createElement("div",(0,Oe.Z)({style:s,className:Me()((0,I.Z)({},"".concat(c,"-holder-inner"),c)),ref:u},g),a,R)))});Xe.displayName="Filler";var ct=Xe;function ft(e){var u=e.children,r=e.setRef,o=t.useCallback(function(f){r(f)},[]);return t.cloneElement(u,{ref:o})}function st(e,u,r,o,f,a,c){var d=c.getKey;return e.slice(u,r+1).map(function(g,Z){var R=u+Z,l=a(g,R,{style:{width:o}}),s=d(g);return t.createElement(ft,{key:s,setRef:function(m){return f(g,m)}},l)})}function qt(e,u,r,o){var f=r-e,a=u-r,c=Math.min(f,a)*2;if(o<=c){var d=Math.floor(o/2);return o%2?r+d+1:r-d}return f>a?r-(o-a):r+(o-f)}function vt(e,u,r){var o=e.length,f=u.length,a,c;if(o===0&&f===0)return null;o<f?(a=e,c=u):(a=u,c=e);var d={__EMPTY_ITEM__:!0};function g(m){return m!==void 0?r(m):d}for(var Z=null,R=Math.abs(o-f)!==1,l=0;l<c.length;l+=1){var s=g(a[l]),h=g(c[l]);if(s!==h){Z=l,R=R||s!==g(c[l+1]);break}}return Z===null?null:{index:Z,multiple:R}}function dt(e,u,r){var o=t.useState(e),f=(0,H.Z)(o,2),a=f[0],c=f[1],d=t.useState(null),g=(0,H.Z)(d,2),Z=g[0],R=g[1];return t.useEffect(function(){var l=vt(a||[],e||[],u);(l==null?void 0:l.index)!==void 0&&(r==null||r(l.index),R(e[l.index])),c(e)},[e]),[Z]}var B=z(53726),ht=(typeof navigator=="undefined"?"undefined":(0,ze.Z)(navigator))==="object"&&/Firefox/i.test(navigator.userAgent),We=ht,Be=function(e,u){var r=(0,t.useRef)(!1),o=(0,t.useRef)(null);function f(){clearTimeout(o.current),r.current=!0,o.current=setTimeout(function(){r.current=!1},50)}var a=(0,t.useRef)({top:e,bottom:u});return a.current.top=e,a.current.bottom=u,function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=c<0&&a.current.top||c>0&&a.current.bottom;return d&&g?(clearTimeout(o.current),r.current=!1):(!g||r.current)&&f(),!r.current&&g}};function St(e,u,r,o,f){var a=(0,t.useRef)(0),c=(0,t.useRef)(null),d=(0,t.useRef)(null),g=(0,t.useRef)(!1),Z=Be(u,r);function R(v,y){B.Z.cancel(c.current),a.current+=y,d.current=y,!Z(y)&&(We||v.preventDefault(),c.current=(0,B.Z)(function(){var b=g.current?10:1;f(a.current*b),a.current=0}))}function l(v,y){f(y,!0),We||v.preventDefault()}var s=(0,t.useRef)(null),h=(0,t.useRef)(null);function m(v){if(e){B.Z.cancel(h.current),h.current=(0,B.Z)(function(){s.current=null},2);var y=v.deltaX,b=v.deltaY,w=v.shiftKey,T=y,V=b;(s.current==="sx"||!s.current&&w&&b&&!y)&&(T=b,V=0,s.current="sx");var k=Math.abs(T),p=Math.abs(V);s.current===null&&(s.current=o&&k>p?"x":"y"),s.current==="y"?R(v,V):l(v,T)}}function S(v){e&&(g.current=v.detail===d.current)}return[m,S]}function gt(e,u,r,o){var f=t.useMemo(function(){return[new Map,[]]},[e,r.id,o]),a=(0,H.Z)(f,2),c=a[0],d=a[1],g=function(R){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R,s=c.get(R),h=c.get(l);if(s===void 0||h===void 0)for(var m=e.length,S=d.length;S<m;S+=1){var v,y=e[S],b=u(y);c.set(b,S);var w=(v=r.get(b))!==null&&v!==void 0?v:o;if(d[S]=(d[S-1]||0)+w,b===R&&(s=S),b===l&&(h=S),s!==void 0&&h!==void 0)break}return{top:d[s-1]||0,bottom:d[h]}};return g}var mt=z(66960),Rt=z(65414),Mt=z(47440),Zt=function(){function e(){(0,Rt.Z)(this,e),(0,I.Z)(this,"maps",void 0),(0,I.Z)(this,"id",0),this.maps=Object.create(null)}return(0,Mt.Z)(e,[{key:"set",value:function(r,o){this.maps[r]=o,this.id+=1}},{key:"get",value:function(r){return this.maps[r]}}]),e}(),yt=Zt;function bt(e,u,r){var o=t.useState(0),f=(0,H.Z)(o,2),a=f[0],c=f[1],d=(0,t.useRef)(new Map),g=(0,t.useRef)(new yt),Z=(0,t.useRef)();function R(){B.Z.cancel(Z.current)}function l(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;R();var m=function(){d.current.forEach(function(v,y){if(v&&v.offsetParent){var b=(0,mt.Z)(v),w=b.offsetHeight;g.current.get(y)!==w&&g.current.set(y,b.offsetHeight)}}),c(function(v){return v+1})};h?m():Z.current=(0,B.Z)(m)}function s(h,m){var S=e(h),v=d.current.get(S);m?(d.current.set(S,m),l()):d.current.delete(S),!v!=!m&&(m?u==null||u(h):r==null||r(h))}return(0,t.useEffect)(function(){return R},[]),[s,l,g.current,a]}var pt=14/15;function xt(e,u,r){var o=(0,t.useRef)(!1),f=(0,t.useRef)(0),a=(0,t.useRef)(null),c=(0,t.useRef)(null),d,g=function(s){if(o.current){var h=Math.ceil(s.touches[0].pageY),m=f.current-h;f.current=h,r(m)&&s.preventDefault(),clearInterval(c.current),c.current=setInterval(function(){m*=pt,(!r(m,!0)||Math.abs(m)<=.1)&&clearInterval(c.current)},16)}},Z=function(){o.current=!1,d()},R=function(s){d(),s.touches.length===1&&!o.current&&(o.current=!0,f.current=Math.ceil(s.touches[0].pageY),a.current=s.target,a.current.addEventListener("touchmove",g),a.current.addEventListener("touchend",Z))};d=function(){a.current&&(a.current.removeEventListener("touchmove",g),a.current.removeEventListener("touchend",Z))},(0,ce.Z)(function(){return e&&u.current.addEventListener("touchstart",R),function(){var l;(l=u.current)===null||l===void 0||l.removeEventListener("touchstart",R),d(),clearInterval(c.current)}},[e])}var Et=10;function zt(e,u,r,o,f,a,c,d){var g=t.useRef(),Z=t.useState(null),R=(0,H.Z)(Z,2),l=R[0],s=R[1];return(0,ce.Z)(function(){if(l&&l.times<Et){if(!e.current){s(function(D){return(0,P.Z)({},D)});return}a();var h=l.targetAlign,m=l.originAlign,S=l.index,v=l.offset,y=e.current.clientHeight,b=!1,w=h,T=null;if(y){for(var V=h||m,k=0,p=0,j=0,F=Math.min(u.length-1,S),K=0;K<=F;K+=1){var A=f(u[K]);p=k;var q=r.get(A);j=p+(q===void 0?o:q),k=j}for(var _=V==="top"?v:y-v,O=F;O>=0;O-=1){var ae=f(u[O]),$=r.get(ae);if($===void 0){b=!0;break}if(_-=$,_<=0)break}switch(V){case"top":T=p-v;break;case"bottom":T=j-y+v;break;default:{var ee=e.current.scrollTop,Y=ee+y;p<ee?w="top":j>Y&&(w="bottom")}}T!==null&&c(T),T!==l.lastTop&&(b=!0)}b&&s((0,P.Z)((0,P.Z)({},l),{},{times:l.times+1,targetAlign:w,lastTop:T}))}},[l,e.current]),function(h){if(h==null){d();return}if(B.Z.cancel(g.current),typeof h=="number")c(h);else if(h&&(0,ze.Z)(h)==="object"){var m,S=h.align;"index"in h?m=h.index:m=u.findIndex(function(b){return f(b)===h.key});var v=h.offset,y=v===void 0?0:v;s({times:0,index:m,offset:y,originAlign:S})}}}function Ve(e,u){var r="touches"in e?e.touches[0]:e;return r[u?"pageX":"pageY"]}var Lt=t.forwardRef(function(e,u){var r=e.prefixCls,o=e.rtl,f=e.scrollOffset,a=e.scrollRange,c=e.onStartMove,d=e.onStopMove,g=e.onScroll,Z=e.horizontal,R=e.spinSize,l=e.containerSize,s=e.style,h=e.thumbStyle,m=t.useState(!1),S=(0,H.Z)(m,2),v=S[0],y=S[1],b=t.useState(null),w=(0,H.Z)(b,2),T=w[0],V=w[1],k=t.useState(null),p=(0,H.Z)(k,2),j=p[0],F=p[1],K=!o,A=t.useRef(),q=t.useRef(),_=t.useState(!1),O=(0,H.Z)(_,2),ae=O[0],$=O[1],ee=t.useRef(),Y=function(){clearTimeout(ee.current),$(!0),ee.current=setTimeout(function(){$(!1)},3e3)},D=a-l||0,fe=l-R||0,x=t.useMemo(function(){if(f===0||D===0)return 0;var L=f/D;return L*fe},[f,D,fe]),te=function(E){E.stopPropagation(),E.preventDefault()},le=t.useRef({top:x,dragging:v,pageY:T,startTop:j});le.current={top:x,dragging:v,pageY:T,startTop:j};var se=function(E){y(!0),V(Ve(E,Z)),F(le.current.top),c(),E.stopPropagation(),E.preventDefault()};t.useEffect(function(){var L=function(he){he.preventDefault()},E=A.current,G=q.current;return E.addEventListener("touchstart",L),G.addEventListener("touchstart",se),function(){E.removeEventListener("touchstart",L),G.removeEventListener("touchstart",se)}},[]);var ve=t.useRef();ve.current=D;var X=t.useRef();X.current=fe,t.useEffect(function(){if(v){var L,E=function(he){var oe=le.current,Ze=oe.dragging,ye=oe.pageY,Le=oe.startTop;if(B.Z.cancel(L),Ze){var re=Ve(he,Z)-ye,ie=Le;!K&&Z?ie-=re:ie+=re;var be=ve.current,pe=X.current,Ce=pe?ie/pe:0,ne=Math.ceil(Ce*be);ne=Math.max(ne,0),ne=Math.min(ne,be),L=(0,B.Z)(function(){g(ne,Z)})}},G=function(){y(!1),d()};return window.addEventListener("mousemove",E),window.addEventListener("touchmove",E),window.addEventListener("mouseup",G),window.addEventListener("touchend",G),function(){window.removeEventListener("mousemove",E),window.removeEventListener("touchmove",E),window.removeEventListener("mouseup",G),window.removeEventListener("touchend",G),B.Z.cancel(L)}}},[v]),t.useEffect(function(){Y()},[f]),t.useImperativeHandle(u,function(){return{delayHidden:Y}});var J="".concat(r,"-scrollbar"),N={position:"absolute",visibility:ae?null:"hidden"},W={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return Z?(N.height=8,N.left=0,N.right=0,N.bottom=0,W.height="100%",W.width=R,K?W.left=x:W.right=x):(N.width=8,N.top=0,N.bottom=0,K?N.right=0:N.left=0,W.width="100%",W.height=R,W.top=x),t.createElement("div",{ref:A,className:Me()(J,(0,I.Z)((0,I.Z)((0,I.Z)({},"".concat(J,"-horizontal"),Z),"".concat(J,"-vertical"),!Z),"".concat(J,"-visible"),ae)),style:(0,P.Z)((0,P.Z)({},N),s),onMouseDown:te,onMouseMove:Y},t.createElement("div",{ref:q,className:Me()("".concat(J,"-thumb"),(0,I.Z)({},"".concat(J,"-thumb-moving"),v)),style:(0,P.Z)((0,P.Z)({},W),h),onMouseDown:se}))}),ke=Lt,Ct=20;function je(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=e/u*e;return isNaN(r)&&(r=0),r=Math.max(r,Ct),Math.floor(r)}var Ht=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender","styles"],Tt=[],wt={overflowY:"auto",overflowAnchor:"none"};function Dt(e,u){var r=e.prefixCls,o=r===void 0?"rc-virtual-list":r,f=e.className,a=e.height,c=e.itemHeight,d=e.fullHeight,g=d===void 0?!0:d,Z=e.style,R=e.data,l=e.children,s=e.itemKey,h=e.virtual,m=e.direction,S=e.scrollWidth,v=e.component,y=v===void 0?"div":v,b=e.onScroll,w=e.onVirtualScroll,T=e.onVisibleChange,V=e.innerProps,k=e.extraRender,p=e.styles,j=(0,it.Z)(e,Ht),F=t.useCallback(function(i){return typeof s=="function"?s(i):i==null?void 0:i[s]},[s]),K=bt(F,null,null),A=(0,H.Z)(K,4),q=A[0],_=A[1],O=A[2],ae=A[3],$=!!(h!==!1&&a&&c),ee=t.useMemo(function(){return Object.values(O.maps).reduce(function(i,n){return i+n},0)},[O.id,O.maps]),Y=$&&R&&(Math.max(c*R.length,ee)>a||!!S),D=m==="rtl",fe=Me()(o,(0,I.Z)({},"".concat(o,"-rtl"),D),f),x=R||Tt,te=(0,t.useRef)(),le=(0,t.useRef)(),se=(0,t.useState)(0),ve=(0,H.Z)(se,2),X=ve[0],J=ve[1],N=(0,t.useState)(0),W=(0,H.Z)(N,2),L=W[0],E=W[1],G=(0,t.useState)(!1),de=(0,H.Z)(G,2),he=de[0],oe=de[1],Ze=function(){oe(!0)},ye=function(){oe(!1)},Le={getKey:F};function re(i){J(function(n){var M;typeof i=="function"?M=i(n):M=i;var C=Xt(M);return te.current.scrollTop=C,C})}var ie=(0,t.useRef)({start:0,end:x.length}),be=(0,t.useRef)(),pe=dt(x,F),Ce=(0,H.Z)(pe,1),ne=Ce[0];be.current=ne;var xe=t.useMemo(function(){if(!$)return{scrollHeight:void 0,start:0,end:x.length-1,offset:void 0};if(!Y){var i;return{scrollHeight:((i=le.current)===null||i===void 0?void 0:i.offsetHeight)||0,start:0,end:x.length-1,offset:void 0}}for(var n=0,M,C,Q,Gt=x.length,Re=0;Re<Gt;Re+=1){var Ut=x[Re],Jt=F(Ut),lt=O.get(Jt),$e=n+(lt===void 0?c:lt);$e>=X&&M===void 0&&(M=Re,C=n),$e>X+a&&Q===void 0&&(Q=Re),n=$e}return M===void 0&&(M=0,C=0,Q=Math.ceil(a/c)),Q===void 0&&(Q=x.length-1),Q=Math.min(Q+1,x.length-1),{scrollHeight:n,start:M,end:Q,offset:C}},[Y,$,X,x,ae,a]),ue=xe.scrollHeight,Se=xe.start,ge=xe.end,Ae=xe.offset;ie.current.start=Se,ie.current.end=ge;var $t=t.useState({width:0,height:a}),Ge=(0,H.Z)($t,2),U=Ge[0],Ot=Ge[1],Nt=function(n){Ot({width:n.width||n.offsetWidth,height:n.height||n.offsetHeight})},Ue=(0,t.useRef)(),Je=(0,t.useRef)(),Ft=t.useMemo(function(){return je(U.width,S)},[U.width,S]),Yt=t.useMemo(function(){return je(U.height,ue)},[U.height,ue]),He=ue-a,Te=(0,t.useRef)(He);Te.current=He;function Xt(i){var n=i;return Number.isNaN(Te.current)||(n=Math.min(n,Te.current)),n=Math.max(n,0),n}var Qe=X<=0,qe=X>=He,Wt=Be(Qe,qe),we=function(){return{x:D?-L:L,y:X}},De=(0,t.useRef)(we()),Ee=(0,Fe.zX)(function(i){if(w){var n=(0,P.Z)((0,P.Z)({},we()),i);(De.current.x!==n.x||De.current.y!==n.y)&&(w(n),De.current=n)}});function _e(i,n){var M=i;n?((0,Ye.flushSync)(function(){E(M)}),Ee()):re(M)}function Bt(i){var n=i.currentTarget.scrollTop;n!==X&&re(n),b==null||b(i),Ee()}var Pe=function(n){var M=n,C=S?S-U.width:0;return M=Math.max(M,0),M=Math.min(M,C),M},Vt=(0,Fe.zX)(function(i,n){n?((0,Ye.flushSync)(function(){E(function(M){var C=M+(D?-i:i);return Pe(C)})}),Ee()):re(function(M){var C=M+i;return C})}),kt=St($,Qe,qe,!!S,Vt),et=(0,H.Z)(kt,2),Ie=et[0],tt=et[1];xt($,te,function(i,n){return Wt(i,n)?!1:(Ie({preventDefault:function(){},deltaY:i}),!0)}),(0,ce.Z)(function(){function i(M){$&&M.preventDefault()}var n=te.current;return n.addEventListener("wheel",Ie),n.addEventListener("DOMMouseScroll",tt),n.addEventListener("MozMousePixelScroll",i),function(){n.removeEventListener("wheel",Ie),n.removeEventListener("DOMMouseScroll",tt),n.removeEventListener("MozMousePixelScroll",i)}},[$]),(0,ce.Z)(function(){if(S){var i=Pe(L);E(i),Ee({x:i})}},[U.width,S]);var rt=function(){var n,M;(n=Ue.current)===null||n===void 0||n.delayHidden(),(M=Je.current)===null||M===void 0||M.delayHidden()},nt=zt(te,x,O,c,F,function(){return _(!0)},re,rt);t.useImperativeHandle(u,function(){return{getScrollInfo:we,scrollTo:function(n){function M(C){return C&&(0,ze.Z)(C)==="object"&&("left"in C||"top"in C)}M(n)?(n.left!==void 0&&E(Pe(n.left)),nt(n.top)):nt(n)}}}),(0,ce.Z)(function(){if(T){var i=x.slice(Se,ge+1);T(i,x)}},[Se,ge,x]);var jt=gt(x,F,O,c),Kt=k==null?void 0:k({start:Se,end:ge,virtual:Y,offsetX:L,offsetY:Ae,rtl:D,getSize:jt}),At=st(x,Se,ge,S,q,l,Le),me=null;a&&(me=(0,P.Z)((0,I.Z)({},g?"height":"maxHeight",a),wt),$&&(me.overflowY="hidden",S&&(me.overflowX="hidden"),he&&(me.pointerEvents="none")));var at={};return D&&(at.dir="rtl"),t.createElement("div",(0,Oe.Z)({style:(0,P.Z)((0,P.Z)({},Z),{},{position:"relative"}),className:fe},at,j),t.createElement(Ne.Z,{onResize:Nt},t.createElement(y,{className:"".concat(o,"-holder"),style:me,ref:te,onScroll:Bt,onMouseEnter:rt},t.createElement(ct,{prefixCls:o,height:ue,offsetX:L,offsetY:Ae,scrollWidth:S,onInnerResize:_,ref:le,innerProps:V,rtl:D,extra:Kt},At))),Y&&ue>a&&t.createElement(ke,{ref:Ue,prefixCls:o,scrollOffset:X,scrollRange:ue,rtl:D,onScroll:_e,onStartMove:Ze,onStopMove:ye,spinSize:Yt,containerSize:U.height,style:p==null?void 0:p.verticalScrollBar,thumbStyle:p==null?void 0:p.verticalScrollBarThumb}),Y&&S>U.width&&t.createElement(ke,{ref:Je,prefixCls:o,scrollOffset:L,scrollRange:S,rtl:D,onScroll:_e,onStartMove:Ze,onStopMove:ye,spinSize:Ft,containerSize:U.width,horizontal:!0,style:p==null?void 0:p.horizontalScrollBar,thumbStyle:p==null?void 0:p.horizontalScrollBarThumb}))}var Ke=t.forwardRef(Dt);Ke.displayName="List";var Pt=Ke,It=Pt}}]);