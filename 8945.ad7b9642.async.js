(self.webpackChunkantd_composite=self.webpackChunkantd_composite||[]).push([[8945],{98945:function(E,G,i){"use strict";i.d(G,{Z:function(){return nt}});var ht=i(91574),C=i(16952),S=i(36161),H=i(30016),pt=i(11267),c=i(75271),z=i(82187),U=i.n(z),D=function(a){var s=a.prefixCls,u=a.icon,m=a.title,p=a.items,f=p===void 0?[]:p,v=a.style,w=a.className;return c.createElement("div",{className:U()("".concat(s,"-column"),w),style:v},(m||u)&&c.createElement("h2",null,u&&c.createElement("span",{className:"".concat(s,"-column-icon")},u),m),f.map(function(d,V){var O=d.LinkComponent||"a";return c.createElement("div",{className:U()("".concat(s,"-item"),d.className),style:d.style,key:V},c.createElement(O,{href:d.url,to:typeof O!="string"?d.url:void 0,target:d.openExternal?"_blank":void 0,rel:d.openExternal?"noopener noreferrer":void 0},d.icon&&c.createElement("span",{className:"".concat(s,"-item-icon")},d.icon),d.title),d.description&&c.createElement(c.Fragment,null,c.createElement("span",{className:"".concat(s,"-item-separator")},"-"),c.createElement("span",{className:"".concat(s,"-item-description")},d.description)))}))},J=D,P=["prefixCls","className","style","bottom","columns","maxColumnsPerRow","backgroundColor","columnLayout","theme"],Y=function(a){var s=a.prefixCls,u=s===void 0?"rc-footer":s,m=a.className,p=a.style,f=a.bottom,v=a.columns,w=a.maxColumnsPerRow,d=a.backgroundColor,V=a.columnLayout,O=a.theme,o=O===void 0?"dark":O,gt=(0,pt.Z)(a,P),mt=U()("".concat(u),m,(0,H.Z)({},"".concat(u,"-").concat(o),!!o)),y=typeof w=="number"&&w>0;return c.createElement("footer",(0,S.Z)((0,S.Z)({},gt),{},{className:mt,style:(0,S.Z)((0,S.Z)({},p),{},{backgroundColor:d})}),c.createElement("section",{className:"".concat(u,"-container")},v&&v.length>0&&c.createElement("section",{className:"".concat(u,"-columns"),style:{justifyContent:V,flexWrap:y?"wrap":void 0}},v.map(function(A,rt){var yt=A.title,bt=A.icon,vt=A.style,xt=A.className,ot=A.items,at=ot===void 0?[]:ot,it=(0,S.Z)({},vt);return y&&(it.flex="0 0 ".concat(100/(w+1)+.1,"%")),c.createElement(J,{key:rt,prefixCls:u,title:yt,icon:bt,items:at,style:it,className:xt})}))),f&&c.createElement("section",{className:"".concat(u,"-bottom")},c.createElement("div",{className:"".concat(u,"-bottom-container")},f)))},K=Y,Q=i(92323),q=i.n(Q),I=i(25059),tt=i(78872),_=i(52817),W=i(59228),et=function(){var a=(0,tt.Z)(),s=a.token,u=(0,_.Z)("footerLinks"),m=(0,c.useContext)(W.Z),p=m.isMobile,f=new ht.C((0,I.default)("#f0f3fa","#fff")).onBackground(s.colorBgContainer).toHexString();return{holder:(0,C.iv)("background:",f,";",""),footer:(0,C.iv)("background:",f,";color:",s.colorTextSecondary,";box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);*{box-sizing:border-box;}h2,a{color:",s.colorText,";}.rc-footer-column{margin-bottom:",p?60:0,"px;:last-child{margin-bottom:",p?20:0,"px;}}.rc-footer-item-icon{top:-1.5px;}.rc-footer-container{display:",Array.isArray(u)&&u.length>0?"block":"none",";max-width:1208px;margin-inline:auto;padding-inline:",s.marginXXL,"px;}.rc-footer-bottom{box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);.rc-footer-bottom-container{font-size:",s.fontSize,"px;}}","")}},M=function(){var a=et(),s=(0,_.Z)("footer"),u=(0,_.Z)("footerLinks"),m=(0,c.useCallback)(function(p){return Array.isArray(p)&&p.forEach(function(f){var v=f.icon;f.icon&&(delete f.icon,f.icon=(0,C.tZ)("img",{src:String(v),alt:"",style:{maxWidth:"100%"}})),Array.isArray(f.items)&&m(f.items)}),p},[]);return s?(0,C.tZ)(K,{columns:m(q()(u)),css:a.footer,bottom:(0,C.tZ)("span",{dangerouslySetInnerHTML:{__html:s}})}):null},nt=M},92323:function(E,G,i){E=i.nmd(E);var ht=200,C="__lodash_hash_undefined__",S=9007199254740991,H="[object Arguments]",pt="[object Array]",c="[object Boolean]",z="[object Date]",U="[object Error]",D="[object Function]",J="[object GeneratorFunction]",P="[object Map]",Y="[object Number]",K="[object Object]",Q="[object Promise]",q="[object RegExp]",I="[object Set]",tt="[object String]",_="[object Symbol]",W="[object WeakMap]",et="[object ArrayBuffer]",M="[object DataView]",nt="[object Float32Array]",Z="[object Float64Array]",a="[object Int8Array]",s="[object Int16Array]",u="[object Int32Array]",m="[object Uint8Array]",p="[object Uint8ClampedArray]",f="[object Uint16Array]",v="[object Uint32Array]",w=/[\\^$.*+?()[\]{}|]/g,d=/\w*$/,V=/^\[object .+?Constructor\]$/,O=/^(?:0|[1-9]\d*)$/,o={};o[H]=o[pt]=o[et]=o[M]=o[c]=o[z]=o[nt]=o[Z]=o[a]=o[s]=o[u]=o[P]=o[Y]=o[K]=o[q]=o[I]=o[tt]=o[_]=o[m]=o[p]=o[f]=o[v]=!0,o[U]=o[D]=o[W]=!1;var gt=typeof i.g=="object"&&i.g&&i.g.Object===Object&&i.g,mt=typeof self=="object"&&self&&self.Object===Object&&self,y=gt||mt||Function("return this")(),A=G&&!G.nodeType&&G,rt=A&&!0&&E&&!E.nodeType&&E,yt=rt&&rt.exports===A;function bt(t,e){return t.set(e[0],e[1]),t}function vt(t,e){return t.add(e),t}function xt(t,e){for(var n=-1,r=t?t.length:0;++n<r&&e(t[n],n,t)!==!1;);return t}function ot(t,e){for(var n=-1,r=e.length,l=t.length;++n<r;)t[l+n]=e[n];return t}function at(t,e,n,r){var l=-1,h=t?t.length:0;for(r&&h&&(n=t[++l]);++l<h;)n=e(n,t[l],l,t);return n}function it(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function te(t,e){return t==null?void 0:t[e]}function It(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch(n){}return e}function _t(t){var e=-1,n=Array(t.size);return t.forEach(function(r,l){n[++e]=[l,r]}),n}function Ct(t,e){return function(n){return t(e(n))}}function Mt(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var ee=Array.prototype,ne=Function.prototype,ct=Object.prototype,St=y["__core-js_shared__"],Zt=function(){var t=/[^.]+$/.exec(St&&St.keys&&St.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Ft=ne.toString,T=ct.hasOwnProperty,st=ct.toString,re=RegExp("^"+Ft.call(T).replace(w,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Rt=yt?y.Buffer:void 0,Bt=y.Symbol,$t=y.Uint8Array,oe=Ct(Object.getPrototypeOf,Object),ae=Object.create,ie=ct.propertyIsEnumerable,ce=ee.splice,Gt=Object.getOwnPropertySymbols,se=Rt?Rt.isBuffer:void 0,ue=Ct(Object.keys,Object),At=B(y,"DataView"),k=B(y,"Map"),Tt=B(y,"Promise"),Et=B(y,"Set"),wt=B(y,"WeakMap"),X=B(Object,"create"),le=L(At),fe=L(k),de=L(Tt),he=L(Et),pe=L(wt),Ht=Bt?Bt.prototype:void 0,Ut=Ht?Ht.valueOf:void 0;function j(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ge(){this.__data__=X?X(null):{}}function me(t){return this.has(t)&&delete this.__data__[t]}function ye(t){var e=this.__data__;if(X){var n=e[t];return n===C?void 0:n}return T.call(e,t)?e[t]:void 0}function be(t){var e=this.__data__;return X?e[t]!==void 0:T.call(e,t)}function ve(t,e){var n=this.__data__;return n[t]=X&&e===void 0?C:e,this}j.prototype.clear=ge,j.prototype.delete=me,j.prototype.get=ye,j.prototype.has=be,j.prototype.set=ve;function x(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function xe(){this.__data__=[]}function Ce(t){var e=this.__data__,n=ut(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():ce.call(e,n,1),!0}function Se(t){var e=this.__data__,n=ut(e,t);return n<0?void 0:e[n][1]}function Ae(t){return ut(this.__data__,t)>-1}function Te(t,e){var n=this.__data__,r=ut(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}x.prototype.clear=xe,x.prototype.delete=Ce,x.prototype.get=Se,x.prototype.has=Ae,x.prototype.set=Te;function F(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ee(){this.__data__={hash:new j,map:new(k||x),string:new j}}function we(t){return lt(this,t).delete(t)}function Oe(t){return lt(this,t).get(t)}function je(t){return lt(this,t).has(t)}function Ne(t,e){return lt(this,t).set(t,e),this}F.prototype.clear=Ee,F.prototype.delete=we,F.prototype.get=Oe,F.prototype.has=je,F.prototype.set=Ne;function R(t){this.__data__=new x(t)}function Le(){this.__data__=new x}function Pe(t){return this.__data__.delete(t)}function Ie(t){return this.__data__.get(t)}function _e(t){return this.__data__.has(t)}function Me(t,e){var n=this.__data__;if(n instanceof x){var r=n.__data__;if(!k||r.length<ht-1)return r.push([t,e]),this;n=this.__data__=new F(r)}return n.set(t,e),this}R.prototype.clear=Le,R.prototype.delete=Pe,R.prototype.get=Ie,R.prototype.has=_e,R.prototype.set=Me;function Ze(t,e){var n=Nt(t)||an(t)?it(t.length,String):[],r=n.length,l=!!r;for(var h in t)(e||T.call(t,h))&&!(l&&(h=="length"||en(h,r)))&&n.push(h);return n}function Dt(t,e,n){var r=t[e];(!(T.call(t,e)&&kt(r,n))||n===void 0&&!(e in t))&&(t[e]=n)}function ut(t,e){for(var n=t.length;n--;)if(kt(t[n][0],e))return n;return-1}function Fe(t,e){return t&&Kt(e,Lt(e),t)}function Ot(t,e,n,r,l,h,b){var g;if(r&&(g=h?r(t,l,h,b):r(t)),g!==void 0)return g;if(!ft(t))return t;var Jt=Nt(t);if(Jt){if(g=Qe(t),!e)return ze(t,g)}else{var $=N(t),Yt=$==D||$==J;if(sn(t))return Ue(t,e);if($==K||$==H||Yt&&!h){if(It(t))return h?t:{};if(g=qe(Yt?{}:t),!e)return Je(t,Fe(g,t))}else{if(!o[$])return h?t:{};g=tn(t,$,Ot,e)}}b||(b=new R);var Qt=b.get(t);if(Qt)return Qt;if(b.set(t,g),!Jt)var qt=n?Ye(t):Lt(t);return xt(qt||t,function(Pt,dt){qt&&(dt=Pt,Pt=t[dt]),Dt(g,dt,Ot(Pt,e,n,r,dt,t,b))}),g}function Re(t){return ft(t)?ae(t):{}}function Be(t,e,n){var r=e(t);return Nt(t)?r:ot(r,n(t))}function $e(t){return st.call(t)}function Ge(t){if(!ft(t)||rn(t))return!1;var e=zt(t)||It(t)?re:V;return e.test(L(t))}function He(t){if(!Vt(t))return ue(t);var e=[];for(var n in Object(t))T.call(t,n)&&n!="constructor"&&e.push(n);return e}function Ue(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}function jt(t){var e=new t.constructor(t.byteLength);return new $t(e).set(new $t(t)),e}function De(t,e){var n=e?jt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function Ke(t,e,n){var r=e?n(_t(t),!0):_t(t);return at(r,bt,new t.constructor)}function We(t){var e=new t.constructor(t.source,d.exec(t));return e.lastIndex=t.lastIndex,e}function Ve(t,e,n){var r=e?n(Mt(t),!0):Mt(t);return at(r,vt,new t.constructor)}function ke(t){return Ut?Object(Ut.call(t)):{}}function Xe(t,e){var n=e?jt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function ze(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function Kt(t,e,n,r){n||(n={});for(var l=-1,h=e.length;++l<h;){var b=e[l],g=r?r(n[b],t[b],b,n,t):void 0;Dt(n,b,g===void 0?t[b]:g)}return n}function Je(t,e){return Kt(t,Wt(t),e)}function Ye(t){return Be(t,Lt,Wt)}function lt(t,e){var n=t.__data__;return nn(e)?n[typeof e=="string"?"string":"hash"]:n.map}function B(t,e){var n=te(t,e);return Ge(n)?n:void 0}var Wt=Gt?Ct(Gt,Object):fn,N=$e;(At&&N(new At(new ArrayBuffer(1)))!=M||k&&N(new k)!=P||Tt&&N(Tt.resolve())!=Q||Et&&N(new Et)!=I||wt&&N(new wt)!=W)&&(N=function(t){var e=st.call(t),n=e==K?t.constructor:void 0,r=n?L(n):void 0;if(r)switch(r){case le:return M;case fe:return P;case de:return Q;case he:return I;case pe:return W}return e});function Qe(t){var e=t.length,n=t.constructor(e);return e&&typeof t[0]=="string"&&T.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function qe(t){return typeof t.constructor=="function"&&!Vt(t)?Re(oe(t)):{}}function tn(t,e,n,r){var l=t.constructor;switch(e){case et:return jt(t);case c:case z:return new l(+t);case M:return De(t,r);case nt:case Z:case a:case s:case u:case m:case p:case f:case v:return Xe(t,r);case P:return Ke(t,r,n);case Y:case tt:return new l(t);case q:return We(t);case I:return Ve(t,r,n);case _:return ke(t)}}function en(t,e){return e=e==null?S:e,!!e&&(typeof t=="number"||O.test(t))&&t>-1&&t%1==0&&t<e}function nn(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function rn(t){return!!Zt&&Zt in t}function Vt(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||ct;return t===n}function L(t){if(t!=null){try{return Ft.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function on(t){return Ot(t,!0,!0)}function kt(t,e){return t===e||t!==t&&e!==e}function an(t){return cn(t)&&T.call(t,"callee")&&(!ie.call(t,"callee")||st.call(t)==H)}var Nt=Array.isArray;function Xt(t){return t!=null&&un(t.length)&&!zt(t)}function cn(t){return ln(t)&&Xt(t)}var sn=se||dn;function zt(t){var e=ft(t)?st.call(t):"";return e==D||e==J}function un(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=S}function ft(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function ln(t){return!!t&&typeof t=="object"}function Lt(t){return Xt(t)?Ze(t):He(t)}function fn(){return[]}function dn(){return!1}E.exports=on}}]);
