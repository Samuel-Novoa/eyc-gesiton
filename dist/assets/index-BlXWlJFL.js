(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ph(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wc={exports:{}},ho={},Ec={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=Symbol.for("react.element"),Rh=Symbol.for("react.portal"),Nh=Symbol.for("react.fragment"),Oh=Symbol.for("react.strict_mode"),Ah=Symbol.for("react.profiler"),Lh=Symbol.for("react.provider"),Dh=Symbol.for("react.context"),xh=Symbol.for("react.forward_ref"),Mh=Symbol.for("react.suspense"),Uh=Symbol.for("react.memo"),Fh=Symbol.for("react.lazy"),Al=Symbol.iterator;function zh(t){return t===null||typeof t!="object"?null:(t=Al&&t[Al]||t["@@iterator"],typeof t=="function"?t:null)}var Sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kc=Object.assign,Ic={};function Bn(t,e,n){this.props=t,this.context=e,this.refs=Ic,this.updater=n||Sc}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tc(){}Tc.prototype=Bn.prototype;function Ea(t,e,n){this.props=t,this.context=e,this.refs=Ic,this.updater=n||Sc}var Sa=Ea.prototype=new Tc;Sa.constructor=Ea;kc(Sa,Bn.prototype);Sa.isPureReactComponent=!0;var Ll=Array.isArray,Cc=Object.prototype.hasOwnProperty,ka={current:null},Pc={key:!0,ref:!0,__self:!0,__source:!0};function Rc(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Cc.call(e,r)&&!Pc.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$r,type:t,key:o,ref:s,props:i,_owner:ka.current}}function jh(t,e){return{$$typeof:$r,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ia(t){return typeof t=="object"&&t!==null&&t.$$typeof===$r}function $h(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dl=/\/+/g;function Uo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$h(""+t.key):e.toString(36)}function yi(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case $r:case Rh:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Uo(s,0):r,Ll(i)?(n="",t!=null&&(n=t.replace(Dl,"$&/")+"/"),yi(i,e,n,"",function(u){return u})):i!=null&&(Ia(i)&&(i=jh(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Dl,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Ll(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Uo(o,a);s+=yi(o,e,n,l,i)}else if(l=zh(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Uo(o,a++),s+=yi(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Zr(t,e,n){if(t==null)return t;var r=[],i=0;return yi(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Bh(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ce={current:null},_i={transition:null},Vh={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:_i,ReactCurrentOwner:ka};function Nc(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Zr,forEach:function(t,e,n){Zr(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zr(t,function(){e++}),e},toArray:function(t){return Zr(t,function(e){return e})||[]},only:function(t){if(!Ia(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};A.Component=Bn;A.Fragment=Nh;A.Profiler=Ah;A.PureComponent=Ea;A.StrictMode=Oh;A.Suspense=Mh;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vh;A.act=Nc;A.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=kc({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=ka.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cc.call(e,l)&&!Pc.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$r,type:t.type,key:i,ref:o,props:r,_owner:s}};A.createContext=function(t){return t={$$typeof:Dh,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lh,_context:t},t.Consumer=t};A.createElement=Rc;A.createFactory=function(t){var e=Rc.bind(null,t);return e.type=t,e};A.createRef=function(){return{current:null}};A.forwardRef=function(t){return{$$typeof:xh,render:t}};A.isValidElement=Ia;A.lazy=function(t){return{$$typeof:Fh,_payload:{_status:-1,_result:t},_init:Bh}};A.memo=function(t,e){return{$$typeof:Uh,type:t,compare:e===void 0?null:e}};A.startTransition=function(t){var e=_i.transition;_i.transition={};try{t()}finally{_i.transition=e}};A.unstable_act=Nc;A.useCallback=function(t,e){return ce.current.useCallback(t,e)};A.useContext=function(t){return ce.current.useContext(t)};A.useDebugValue=function(){};A.useDeferredValue=function(t){return ce.current.useDeferredValue(t)};A.useEffect=function(t,e){return ce.current.useEffect(t,e)};A.useId=function(){return ce.current.useId()};A.useImperativeHandle=function(t,e,n){return ce.current.useImperativeHandle(t,e,n)};A.useInsertionEffect=function(t,e){return ce.current.useInsertionEffect(t,e)};A.useLayoutEffect=function(t,e){return ce.current.useLayoutEffect(t,e)};A.useMemo=function(t,e){return ce.current.useMemo(t,e)};A.useReducer=function(t,e,n){return ce.current.useReducer(t,e,n)};A.useRef=function(t){return ce.current.useRef(t)};A.useState=function(t){return ce.current.useState(t)};A.useSyncExternalStore=function(t,e,n){return ce.current.useSyncExternalStore(t,e,n)};A.useTransition=function(){return ce.current.useTransition()};A.version="18.3.1";Ec.exports=A;var Me=Ec.exports;const Hh=Ph(Me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh=Me,bh=Symbol.for("react.element"),Kh=Symbol.for("react.fragment"),Gh=Object.prototype.hasOwnProperty,Qh=Wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yh={key:!0,ref:!0,__self:!0,__source:!0};function Oc(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Gh.call(e,r)&&!Yh.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bh,type:t,key:o,ref:s,props:i,_owner:Qh.current}}ho.Fragment=Kh;ho.jsx=Oc;ho.jsxs=Oc;wc.exports=ho;var K=wc.exports,ms={},Ac={exports:{}},Ee={},Lc={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,R){var N=k.length;k.push(R);e:for(;0<N;){var b=N-1>>>1,X=k[b];if(0<i(X,R))k[b]=R,k[N]=X,N=b;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var R=k[0],N=k.pop();if(N!==R){k[0]=N;e:for(var b=0,X=k.length,Xr=X>>>1;b<Xr;){var Vt=2*(b+1)-1,Mo=k[Vt],Ht=Vt+1,qr=k[Ht];if(0>i(Mo,N))Ht<X&&0>i(qr,Mo)?(k[b]=qr,k[Ht]=N,b=Ht):(k[b]=Mo,k[Vt]=N,b=Vt);else if(Ht<X&&0>i(qr,N))k[b]=qr,k[Ht]=N,b=Ht;else break e}}return R}function i(k,R){var N=k.sortIndex-R.sortIndex;return N!==0?N:k.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,p=null,m=3,_=!1,g=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(k){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=k)r(u),R.sortIndex=R.expirationTime,e(l,R);else break;R=n(u)}}function v(k){if(w=!1,f(k),!g)if(n(l)!==null)g=!0,Do(E);else{var R=n(u);R!==null&&xo(v,R.startTime-k)}}function E(k,R){g=!1,w&&(w=!1,d(C),C=-1),_=!0;var N=m;try{for(f(R),p=n(l);p!==null&&(!(p.expirationTime>R)||k&&!Oe());){var b=p.callback;if(typeof b=="function"){p.callback=null,m=p.priorityLevel;var X=b(p.expirationTime<=R);R=t.unstable_now(),typeof X=="function"?p.callback=X:p===n(l)&&r(l),f(R)}else r(l);p=n(l)}if(p!==null)var Xr=!0;else{var Vt=n(u);Vt!==null&&xo(v,Vt.startTime-R),Xr=!1}return Xr}finally{p=null,m=N,_=!1}}var I=!1,T=null,C=-1,F=5,O=-1;function Oe(){return!(t.unstable_now()-O<F)}function Kn(){if(T!==null){var k=t.unstable_now();O=k;var R=!0;try{R=T(!0,k)}finally{R?Gn():(I=!1,T=null)}}else I=!1}var Gn;if(typeof c=="function")Gn=function(){c(Kn)};else if(typeof MessageChannel<"u"){var Ol=new MessageChannel,Ch=Ol.port2;Ol.port1.onmessage=Kn,Gn=function(){Ch.postMessage(null)}}else Gn=function(){x(Kn,0)};function Do(k){T=k,I||(I=!0,Gn())}function xo(k,R){C=x(function(){k(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){g||_||(g=!0,Do(E))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var N=m;m=R;try{return k()}finally{m=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,R){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var N=m;m=k;try{return R()}finally{m=N}},t.unstable_scheduleCallback=function(k,R,N){var b=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?b+N:b):N=b,k){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=N+X,k={id:h++,callback:R,priorityLevel:k,startTime:N,expirationTime:X,sortIndex:-1},N>b?(k.sortIndex=N,e(u,k),n(l)===null&&k===n(u)&&(w?(d(C),C=-1):w=!0,xo(v,N-b))):(k.sortIndex=X,e(l,k),g||_||(g=!0,Do(E))),k},t.unstable_shouldYield=Oe,t.unstable_wrapCallback=function(k){var R=m;return function(){var N=m;m=R;try{return k.apply(this,arguments)}finally{m=N}}}})(Dc);Lc.exports=Dc;var Jh=Lc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh=Me,we=Jh;function y(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xc=new Set,wr={};function cn(t,e){xn(t,e),xn(t+"Capture",e)}function xn(t,e){for(wr[t]=e,t=0;t<e.length;t++)xc.add(e[t])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gs=Object.prototype.hasOwnProperty,qh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xl={},Ml={};function Zh(t){return gs.call(Ml,t)?!0:gs.call(xl,t)?!1:qh.test(t)?Ml[t]=!0:(xl[t]=!0,!1)}function ep(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tp(t,e,n,r){if(e===null||typeof e>"u"||ep(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function de(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ne[t]=new de(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ne[e]=new de(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ne[t]=new de(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ne[t]=new de(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ne[t]=new de(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ne[t]=new de(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ne[t]=new de(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ne[t]=new de(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ne[t]=new de(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ta=/[\-:]([a-z])/g;function Ca(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ta,Ca);ne[e]=new de(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ta,Ca);ne[e]=new de(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ta,Ca);ne[e]=new de(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ne[t]=new de(t,1,!1,t.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ne[t]=new de(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pa(t,e,n,r){var i=ne.hasOwnProperty(e)?ne[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tp(e,n,i,r)&&(n=null),r||i===null?Zh(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ut=Xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ei=Symbol.for("react.element"),hn=Symbol.for("react.portal"),pn=Symbol.for("react.fragment"),Ra=Symbol.for("react.strict_mode"),vs=Symbol.for("react.profiler"),Mc=Symbol.for("react.provider"),Uc=Symbol.for("react.context"),Na=Symbol.for("react.forward_ref"),ys=Symbol.for("react.suspense"),_s=Symbol.for("react.suspense_list"),Oa=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Fc=Symbol.for("react.offscreen"),Ul=Symbol.iterator;function Qn(t){return t===null||typeof t!="object"?null:(t=Ul&&t[Ul]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,Fo;function rr(t){if(Fo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fo=e&&e[1]||""}return`
`+Fo+t}var zo=!1;function jo(t,e){if(!t||zo)return"";zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{zo=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?rr(t):""}function np(t){switch(t.tag){case 5:return rr(t.type);case 16:return rr("Lazy");case 13:return rr("Suspense");case 19:return rr("SuspenseList");case 0:case 2:case 15:return t=jo(t.type,!1),t;case 11:return t=jo(t.type.render,!1),t;case 1:return t=jo(t.type,!0),t;default:return""}}function ws(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pn:return"Fragment";case hn:return"Portal";case vs:return"Profiler";case Ra:return"StrictMode";case ys:return"Suspense";case _s:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uc:return(t.displayName||"Context")+".Consumer";case Mc:return(t._context.displayName||"Context")+".Provider";case Na:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oa:return e=t.displayName||null,e!==null?e:ws(t.type)||"Memo";case ht:e=t._payload,t=t._init;try{return ws(t(e))}catch{}}return null}function rp(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ws(e);case 8:return e===Ra?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ip(t){var e=zc(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ti(t){t._valueTracker||(t._valueTracker=ip(t))}function jc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=zc(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Es(t,e){var n=e.checked;return H({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fl(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Lt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $c(t,e){e=e.checked,e!=null&&Pa(t,"checked",e,!1)}function Ss(t,e){$c(t,e);var n=Lt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ks(t,e.type,n):e.hasOwnProperty("defaultValue")&&ks(t,e.type,Lt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zl(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ks(t,e,n){(e!=="number"||xi(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ir=Array.isArray;function Tn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Lt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Is(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(y(91));return H({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jl(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(y(92));if(ir(n)){if(1<n.length)throw Error(y(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Lt(n)}}function Bc(t,e){var n=Lt(e.value),r=Lt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $l(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vc(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ts(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vc(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ni,Hc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ni.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Er(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},op=["Webkit","ms","Moz","O"];Object.keys(cr).forEach(function(t){op.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),cr[e]=cr[t]})});function Wc(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||cr.hasOwnProperty(t)&&cr[t]?(""+e).trim():e+"px"}function bc(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wc(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var sp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cs(t,e){if(e){if(sp[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(y(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(y(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(y(61))}if(e.style!=null&&typeof e.style!="object")throw Error(y(62))}}function Ps(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rs=null;function Aa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ns=null,Cn=null,Pn=null;function Bl(t){if(t=Hr(t)){if(typeof Ns!="function")throw Error(y(280));var e=t.stateNode;e&&(e=yo(e),Ns(t.stateNode,t.type,e))}}function Kc(t){Cn?Pn?Pn.push(t):Pn=[t]:Cn=t}function Gc(){if(Cn){var t=Cn,e=Pn;if(Pn=Cn=null,Bl(t),e)for(t=0;t<e.length;t++)Bl(e[t])}}function Qc(t,e){return t(e)}function Yc(){}var $o=!1;function Jc(t,e,n){if($o)return t(e,n);$o=!0;try{return Qc(t,e,n)}finally{$o=!1,(Cn!==null||Pn!==null)&&(Yc(),Gc())}}function Sr(t,e){var n=t.stateNode;if(n===null)return null;var r=yo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(y(231,e,typeof n));return n}var Os=!1;if(it)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){Os=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{Os=!1}function ap(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var dr=!1,Mi=null,Ui=!1,As=null,lp={onError:function(t){dr=!0,Mi=t}};function up(t,e,n,r,i,o,s,a,l){dr=!1,Mi=null,ap.apply(lp,arguments)}function cp(t,e,n,r,i,o,s,a,l){if(up.apply(this,arguments),dr){if(dr){var u=Mi;dr=!1,Mi=null}else throw Error(y(198));Ui||(Ui=!0,As=u)}}function dn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xc(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vl(t){if(dn(t)!==t)throw Error(y(188))}function dp(t){var e=t.alternate;if(!e){if(e=dn(t),e===null)throw Error(y(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Vl(i),t;if(o===r)return Vl(i),e;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?t:e}function qc(t){return t=dp(t),t!==null?Zc(t):null}function Zc(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zc(t);if(e!==null)return e;t=t.sibling}return null}var ed=we.unstable_scheduleCallback,Hl=we.unstable_cancelCallback,fp=we.unstable_shouldYield,hp=we.unstable_requestPaint,G=we.unstable_now,pp=we.unstable_getCurrentPriorityLevel,La=we.unstable_ImmediatePriority,td=we.unstable_UserBlockingPriority,Fi=we.unstable_NormalPriority,mp=we.unstable_LowPriority,nd=we.unstable_IdlePriority,po=null,be=null;function gp(t){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(po,t,void 0,(t.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:_p,vp=Math.log,yp=Math.LN2;function _p(t){return t>>>=0,t===0?32:31-(vp(t)/yp|0)|0}var ri=64,ii=4194304;function or(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zi(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=or(a):(o&=s,o!==0&&(r=or(o)))}else s=n&~i,s!==0?r=or(s):o!==0&&(r=or(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Fe(e),i=1<<n,r|=t[n],e&=~i;return r}function wp(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ep(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Fe(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=wp(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Ls(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rd(){var t=ri;return ri<<=1,!(ri&4194240)&&(ri=64),t}function Bo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Br(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fe(e),t[e]=n}function Sp(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Fe(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Da(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Fe(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var D=0;function id(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var od,xa,sd,ad,ld,Ds=!1,oi=[],St=null,kt=null,It=null,kr=new Map,Ir=new Map,mt=[],kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wl(t,e){switch(t){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":kr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(e.pointerId)}}function Jn(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Hr(e),e!==null&&xa(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ip(t,e,n,r,i){switch(e){case"focusin":return St=Jn(St,t,e,n,r,i),!0;case"dragenter":return kt=Jn(kt,t,e,n,r,i),!0;case"mouseover":return It=Jn(It,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return kr.set(o,Jn(kr.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ir.set(o,Jn(Ir.get(o)||null,t,e,n,r,i)),!0}return!1}function ud(t){var e=Gt(t.target);if(e!==null){var n=dn(e);if(n!==null){if(e=n.tag,e===13){if(e=Xc(n),e!==null){t.blockedOn=e,ld(t.priority,function(){sd(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xs(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rs=r,n.target.dispatchEvent(r),Rs=null}else return e=Hr(n),e!==null&&xa(e),t.blockedOn=n,!1;e.shift()}return!0}function bl(t,e,n){wi(t)&&n.delete(e)}function Tp(){Ds=!1,St!==null&&wi(St)&&(St=null),kt!==null&&wi(kt)&&(kt=null),It!==null&&wi(It)&&(It=null),kr.forEach(bl),Ir.forEach(bl)}function Xn(t,e){t.blockedOn===e&&(t.blockedOn=null,Ds||(Ds=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,Tp)))}function Tr(t){function e(i){return Xn(i,t)}if(0<oi.length){Xn(oi[0],t);for(var n=1;n<oi.length;n++){var r=oi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(St!==null&&Xn(St,t),kt!==null&&Xn(kt,t),It!==null&&Xn(It,t),kr.forEach(e),Ir.forEach(e),n=0;n<mt.length;n++)r=mt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mt.length&&(n=mt[0],n.blockedOn===null);)ud(n),n.blockedOn===null&&mt.shift()}var Rn=ut.ReactCurrentBatchConfig,ji=!0;function Cp(t,e,n,r){var i=D,o=Rn.transition;Rn.transition=null;try{D=1,Ma(t,e,n,r)}finally{D=i,Rn.transition=o}}function Pp(t,e,n,r){var i=D,o=Rn.transition;Rn.transition=null;try{D=4,Ma(t,e,n,r)}finally{D=i,Rn.transition=o}}function Ma(t,e,n,r){if(ji){var i=xs(t,e,n,r);if(i===null)Xo(t,e,r,$i,n),Wl(t,r);else if(Ip(i,t,e,n,r))r.stopPropagation();else if(Wl(t,r),e&4&&-1<kp.indexOf(t)){for(;i!==null;){var o=Hr(i);if(o!==null&&od(o),o=xs(t,e,n,r),o===null&&Xo(t,e,r,$i,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xo(t,e,r,null,n)}}var $i=null;function xs(t,e,n,r){if($i=null,t=Aa(r),t=Gt(t),t!==null)if(e=dn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xc(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $i=t,null}function cd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pp()){case La:return 1;case td:return 4;case Fi:case mp:return 16;case nd:return 536870912;default:return 16}default:return 16}}var wt=null,Ua=null,Ei=null;function dd(){if(Ei)return Ei;var t,e=Ua,n=e.length,r,i="value"in wt?wt.value:wt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Ei=i.slice(t,1<r?1-r:void 0)}function Si(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function si(){return!0}function Kl(){return!1}function Se(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?si:Kl,this.isPropagationStopped=Kl,this}return H(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),e}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=Se(Vn),Vr=H({},Vn,{view:0,detail:0}),Rp=Se(Vr),Vo,Ho,qn,mo=H({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qn&&(qn&&t.type==="mousemove"?(Vo=t.screenX-qn.screenX,Ho=t.screenY-qn.screenY):Ho=Vo=0,qn=t),Vo)},movementY:function(t){return"movementY"in t?t.movementY:Ho}}),Gl=Se(mo),Np=H({},mo,{dataTransfer:0}),Op=Se(Np),Ap=H({},Vr,{relatedTarget:0}),Wo=Se(Ap),Lp=H({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dp=Se(Lp),xp=H({},Vn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mp=Se(xp),Up=H({},Vn,{data:0}),Ql=Se(Up),Fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $p(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jp[t])?!!e[t]:!1}function za(){return $p}var Bp=H({},Vr,{key:function(t){if(t.key){var e=Fp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Si(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(t){return t.type==="keypress"?Si(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Si(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vp=Se(Bp),Hp=H({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yl=Se(Hp),Wp=H({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),bp=Se(Wp),Kp=H({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gp=Se(Kp),Qp=H({},mo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=Se(Qp),Jp=[9,13,27,32],ja=it&&"CompositionEvent"in window,fr=null;it&&"documentMode"in document&&(fr=document.documentMode);var Xp=it&&"TextEvent"in window&&!fr,fd=it&&(!ja||fr&&8<fr&&11>=fr),Jl=" ",Xl=!1;function hd(t,e){switch(t){case"keyup":return Jp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mn=!1;function qp(t,e){switch(t){case"compositionend":return pd(e);case"keypress":return e.which!==32?null:(Xl=!0,Jl);case"textInput":return t=e.data,t===Jl&&Xl?null:t;default:return null}}function Zp(t,e){if(mn)return t==="compositionend"||!ja&&hd(t,e)?(t=dd(),Ei=Ua=wt=null,mn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fd&&e.locale!=="ko"?null:e.data;default:return null}}var em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ql(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!em[t.type]:e==="textarea"}function md(t,e,n,r){Kc(r),e=Bi(e,"onChange"),0<e.length&&(n=new Fa("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var hr=null,Cr=null;function tm(t){Cd(t,0)}function go(t){var e=yn(t);if(jc(e))return t}function nm(t,e){if(t==="change")return e}var gd=!1;if(it){var bo;if(it){var Ko="oninput"in document;if(!Ko){var Zl=document.createElement("div");Zl.setAttribute("oninput","return;"),Ko=typeof Zl.oninput=="function"}bo=Ko}else bo=!1;gd=bo&&(!document.documentMode||9<document.documentMode)}function eu(){hr&&(hr.detachEvent("onpropertychange",vd),Cr=hr=null)}function vd(t){if(t.propertyName==="value"&&go(Cr)){var e=[];md(e,Cr,t,Aa(t)),Jc(tm,e)}}function rm(t,e,n){t==="focusin"?(eu(),hr=e,Cr=n,hr.attachEvent("onpropertychange",vd)):t==="focusout"&&eu()}function im(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return go(Cr)}function om(t,e){if(t==="click")return go(e)}function sm(t,e){if(t==="input"||t==="change")return go(e)}function am(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $e=typeof Object.is=="function"?Object.is:am;function Pr(t,e){if($e(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gs.call(e,i)||!$e(t[i],e[i]))return!1}return!0}function tu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nu(t,e){var n=tu(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tu(n)}}function yd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _d(){for(var t=window,e=xi();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xi(t.document)}return e}function $a(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lm(t){var e=_d(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yd(n.ownerDocument.documentElement,n)){if(r!==null&&$a(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=nu(n,o);var s=nu(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var um=it&&"documentMode"in document&&11>=document.documentMode,gn=null,Ms=null,pr=null,Us=!1;function ru(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Us||gn==null||gn!==xi(r)||(r=gn,"selectionStart"in r&&$a(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&Pr(pr,r)||(pr=r,r=Bi(Ms,"onSelect"),0<r.length&&(e=new Fa("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gn)))}function ai(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vn={animationend:ai("Animation","AnimationEnd"),animationiteration:ai("Animation","AnimationIteration"),animationstart:ai("Animation","AnimationStart"),transitionend:ai("Transition","TransitionEnd")},Go={},wd={};it&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function vo(t){if(Go[t])return Go[t];if(!vn[t])return t;var e=vn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wd)return Go[t]=e[n];return t}var Ed=vo("animationend"),Sd=vo("animationiteration"),kd=vo("animationstart"),Id=vo("transitionend"),Td=new Map,iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(t,e){Td.set(t,e),cn(e,[t])}for(var Qo=0;Qo<iu.length;Qo++){var Yo=iu[Qo],cm=Yo.toLowerCase(),dm=Yo[0].toUpperCase()+Yo.slice(1);Mt(cm,"on"+dm)}Mt(Ed,"onAnimationEnd");Mt(Sd,"onAnimationIteration");Mt(kd,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(Id,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fm=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function ou(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cp(r,e,void 0,t),t.currentTarget=null}function Cd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ou(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ou(i,a,u),o=l}}}if(Ui)throw t=As,Ui=!1,As=null,t}function z(t,e){var n=e[Bs];n===void 0&&(n=e[Bs]=new Set);var r=t+"__bubble";n.has(r)||(Pd(e,t,2,!1),n.add(r))}function Jo(t,e,n){var r=0;e&&(r|=4),Pd(n,t,r,e)}var li="_reactListening"+Math.random().toString(36).slice(2);function Rr(t){if(!t[li]){t[li]=!0,xc.forEach(function(n){n!=="selectionchange"&&(fm.has(n)||Jo(n,!1,t),Jo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[li]||(e[li]=!0,Jo("selectionchange",!1,e))}}function Pd(t,e,n,r){switch(cd(e)){case 1:var i=Cp;break;case 4:i=Pp;break;default:i=Ma}n=i.bind(null,e,n,t),i=void 0,!Os||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xo(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Gt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Jc(function(){var u=o,h=Aa(n),p=[];e:{var m=Td.get(t);if(m!==void 0){var _=Fa,g=t;switch(t){case"keypress":if(Si(n)===0)break e;case"keydown":case"keyup":_=Vp;break;case"focusin":g="focus",_=Wo;break;case"focusout":g="blur",_=Wo;break;case"beforeblur":case"afterblur":_=Wo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=bp;break;case Ed:case Sd:case kd:_=Dp;break;case Id:_=Gp;break;case"scroll":_=Rp;break;case"wheel":_=Yp;break;case"copy":case"cut":case"paste":_=Mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Yl}var w=(e&4)!==0,x=!w&&t==="scroll",d=w?m!==null?m+"Capture":null:m;w=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=Sr(c,d),v!=null&&w.push(Nr(c,v,f)))),x)break;c=c.return}0<w.length&&(m=new _(m,g,null,n,h),p.push({event:m,listeners:w}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Rs&&(g=n.relatedTarget||n.fromElement)&&(Gt(g)||g[ot]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(g=n.relatedTarget||n.toElement,_=u,g=g?Gt(g):null,g!==null&&(x=dn(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(_=null,g=u),_!==g)){if(w=Gl,v="onMouseLeave",d="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(w=Yl,v="onPointerLeave",d="onPointerEnter",c="pointer"),x=_==null?m:yn(_),f=g==null?m:yn(g),m=new w(v,c+"leave",_,n,h),m.target=x,m.relatedTarget=f,v=null,Gt(h)===u&&(w=new w(d,c+"enter",g,n,h),w.target=f,w.relatedTarget=x,v=w),x=v,_&&g)t:{for(w=_,d=g,c=0,f=w;f;f=fn(f))c++;for(f=0,v=d;v;v=fn(v))f++;for(;0<c-f;)w=fn(w),c--;for(;0<f-c;)d=fn(d),f--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break t;w=fn(w),d=fn(d)}w=null}else w=null;_!==null&&su(p,m,_,w,!1),g!==null&&x!==null&&su(p,x,g,w,!0)}}e:{if(m=u?yn(u):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var E=nm;else if(ql(m))if(gd)E=sm;else{E=im;var I=rm}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=om);if(E&&(E=E(t,u))){md(p,E,n,h);break e}I&&I(t,m,u),t==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&ks(m,"number",m.value)}switch(I=u?yn(u):window,t){case"focusin":(ql(I)||I.contentEditable==="true")&&(gn=I,Ms=u,pr=null);break;case"focusout":pr=Ms=gn=null;break;case"mousedown":Us=!0;break;case"contextmenu":case"mouseup":case"dragend":Us=!1,ru(p,n,h);break;case"selectionchange":if(um)break;case"keydown":case"keyup":ru(p,n,h)}var T;if(ja)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else mn?hd(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(fd&&n.locale!=="ko"&&(mn||C!=="onCompositionStart"?C==="onCompositionEnd"&&mn&&(T=dd()):(wt=h,Ua="value"in wt?wt.value:wt.textContent,mn=!0)),I=Bi(u,C),0<I.length&&(C=new Ql(C,t,null,n,h),p.push({event:C,listeners:I}),T?C.data=T:(T=pd(n),T!==null&&(C.data=T)))),(T=Xp?qp(t,n):Zp(t,n))&&(u=Bi(u,"onBeforeInput"),0<u.length&&(h=new Ql("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=T))}Cd(p,e)})}function Nr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bi(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Sr(t,n),o!=null&&r.unshift(Nr(t,o,i)),o=Sr(t,e),o!=null&&r.push(Nr(t,o,i))),t=t.return}return r}function fn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function su(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Sr(n,o),l!=null&&s.unshift(Nr(n,l,a))):i||(l=Sr(n,o),l!=null&&s.push(Nr(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var hm=/\r\n?/g,pm=/\u0000|\uFFFD/g;function au(t){return(typeof t=="string"?t:""+t).replace(hm,`
`).replace(pm,"")}function ui(t,e,n){if(e=au(e),au(t)!==e&&n)throw Error(y(425))}function Vi(){}var Fs=null,zs=null;function js(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $s=typeof setTimeout=="function"?setTimeout:void 0,mm=typeof clearTimeout=="function"?clearTimeout:void 0,lu=typeof Promise=="function"?Promise:void 0,gm=typeof queueMicrotask=="function"?queueMicrotask:typeof lu<"u"?function(t){return lu.resolve(null).then(t).catch(vm)}:$s;function vm(t){setTimeout(function(){throw t})}function qo(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Tr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Tr(e)}function Tt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function uu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),We="__reactFiber$"+Hn,Or="__reactProps$"+Hn,ot="__reactContainer$"+Hn,Bs="__reactEvents$"+Hn,ym="__reactListeners$"+Hn,_m="__reactHandles$"+Hn;function Gt(t){var e=t[We];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ot]||n[We]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=uu(t);t!==null;){if(n=t[We])return n;t=uu(t)}return e}t=n,n=t.parentNode}return null}function Hr(t){return t=t[We]||t[ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(y(33))}function yo(t){return t[Or]||null}var Vs=[],_n=-1;function Ut(t){return{current:t}}function j(t){0>_n||(t.current=Vs[_n],Vs[_n]=null,_n--)}function U(t,e){_n++,Vs[_n]=t.current,t.current=e}var Dt={},se=Ut(Dt),pe=Ut(!1),en=Dt;function Mn(t,e){var n=t.type.contextTypes;if(!n)return Dt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function me(t){return t=t.childContextTypes,t!=null}function Hi(){j(pe),j(se)}function cu(t,e,n){if(se.current!==Dt)throw Error(y(168));U(se,e),U(pe,n)}function Rd(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(y(108,rp(t)||"Unknown",i));return H({},n,r)}function Wi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dt,en=se.current,U(se,t),U(pe,pe.current),!0}function du(t,e,n){var r=t.stateNode;if(!r)throw Error(y(169));n?(t=Rd(t,e,en),r.__reactInternalMemoizedMergedChildContext=t,j(pe),j(se),U(se,t)):j(pe),U(pe,n)}var Ye=null,_o=!1,Zo=!1;function Nd(t){Ye===null?Ye=[t]:Ye.push(t)}function wm(t){_o=!0,Nd(t)}function Ft(){if(!Zo&&Ye!==null){Zo=!0;var t=0,e=D;try{var n=Ye;for(D=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ye=null,_o=!1}catch(i){throw Ye!==null&&(Ye=Ye.slice(t+1)),ed(La,Ft),i}finally{D=e,Zo=!1}}return null}var wn=[],En=0,bi=null,Ki=0,ke=[],Ie=0,tn=null,Xe=1,qe="";function Wt(t,e){wn[En++]=Ki,wn[En++]=bi,bi=t,Ki=e}function Od(t,e,n){ke[Ie++]=Xe,ke[Ie++]=qe,ke[Ie++]=tn,tn=t;var r=Xe;t=qe;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var o=32-Fe(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Xe=1<<32-Fe(e)+i|n<<i|r,qe=o+t}else Xe=1<<o|n<<i|r,qe=t}function Ba(t){t.return!==null&&(Wt(t,1),Od(t,1,0))}function Va(t){for(;t===bi;)bi=wn[--En],wn[En]=null,Ki=wn[--En],wn[En]=null;for(;t===tn;)tn=ke[--Ie],ke[Ie]=null,qe=ke[--Ie],ke[Ie]=null,Xe=ke[--Ie],ke[Ie]=null}var _e=null,ye=null,$=!1,xe=null;function Ad(t,e){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fu(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_e=t,ye=Tt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_e=t,ye=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=tn!==null?{id:Xe,overflow:qe}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_e=t,ye=null,!0):!1;default:return!1}}function Hs(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ws(t){if($){var e=ye;if(e){var n=e;if(!fu(t,e)){if(Hs(t))throw Error(y(418));e=Tt(n.nextSibling);var r=_e;e&&fu(t,e)?Ad(r,n):(t.flags=t.flags&-4097|2,$=!1,_e=t)}}else{if(Hs(t))throw Error(y(418));t.flags=t.flags&-4097|2,$=!1,_e=t}}}function hu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_e=t}function ci(t){if(t!==_e)return!1;if(!$)return hu(t),$=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!js(t.type,t.memoizedProps)),e&&(e=ye)){if(Hs(t))throw Ld(),Error(y(418));for(;e;)Ad(t,e),e=Tt(e.nextSibling)}if(hu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ye=Tt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ye=null}}else ye=_e?Tt(t.stateNode.nextSibling):null;return!0}function Ld(){for(var t=ye;t;)t=Tt(t.nextSibling)}function Un(){ye=_e=null,$=!1}function Ha(t){xe===null?xe=[t]:xe.push(t)}var Em=ut.ReactCurrentBatchConfig;function Zn(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,t))}return t}function di(t,e){throw t=Object.prototype.toString.call(e),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pu(t){var e=t._init;return e(t._payload)}function Dd(t){function e(d,c){if(t){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!t)return null;for(;c!==null;)e(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Nt(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,t?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,v){return c===null||c.tag!==6?(c=ss(f,d.mode,v),c.return=d,c):(c=i(c,f),c.return=d,c)}function l(d,c,f,v){var E=f.type;return E===pn?h(d,c,f.props.children,v,f.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&pu(E)===c.type)?(v=i(c,f.props),v.ref=Zn(d,c,f),v.return=d,v):(v=Ni(f.type,f.key,f.props,null,d.mode,v),v.ref=Zn(d,c,f),v.return=d,v)}function u(d,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=as(f,d.mode,v),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function h(d,c,f,v,E){return c===null||c.tag!==7?(c=qt(f,d.mode,v,E),c.return=d,c):(c=i(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ss(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ei:return f=Ni(c.type,c.key,c.props,null,d.mode,f),f.ref=Zn(d,null,c),f.return=d,f;case hn:return c=as(c,d.mode,f),c.return=d,c;case ht:var v=c._init;return p(d,v(c._payload),f)}if(ir(c)||Qn(c))return c=qt(c,d.mode,f,null),c.return=d,c;di(d,c)}return null}function m(d,c,f,v){var E=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:a(d,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ei:return f.key===E?l(d,c,f,v):null;case hn:return f.key===E?u(d,c,f,v):null;case ht:return E=f._init,m(d,c,E(f._payload),v)}if(ir(f)||Qn(f))return E!==null?null:h(d,c,f,v,null);di(d,f)}return null}function _(d,c,f,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,a(c,d,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ei:return d=d.get(v.key===null?f:v.key)||null,l(c,d,v,E);case hn:return d=d.get(v.key===null?f:v.key)||null,u(c,d,v,E);case ht:var I=v._init;return _(d,c,f,I(v._payload),E)}if(ir(v)||Qn(v))return d=d.get(f)||null,h(c,d,v,E,null);di(c,v)}return null}function g(d,c,f,v){for(var E=null,I=null,T=c,C=c=0,F=null;T!==null&&C<f.length;C++){T.index>C?(F=T,T=null):F=T.sibling;var O=m(d,T,f[C],v);if(O===null){T===null&&(T=F);break}t&&T&&O.alternate===null&&e(d,T),c=o(O,c,C),I===null?E=O:I.sibling=O,I=O,T=F}if(C===f.length)return n(d,T),$&&Wt(d,C),E;if(T===null){for(;C<f.length;C++)T=p(d,f[C],v),T!==null&&(c=o(T,c,C),I===null?E=T:I.sibling=T,I=T);return $&&Wt(d,C),E}for(T=r(d,T);C<f.length;C++)F=_(T,d,C,f[C],v),F!==null&&(t&&F.alternate!==null&&T.delete(F.key===null?C:F.key),c=o(F,c,C),I===null?E=F:I.sibling=F,I=F);return t&&T.forEach(function(Oe){return e(d,Oe)}),$&&Wt(d,C),E}function w(d,c,f,v){var E=Qn(f);if(typeof E!="function")throw Error(y(150));if(f=E.call(f),f==null)throw Error(y(151));for(var I=E=null,T=c,C=c=0,F=null,O=f.next();T!==null&&!O.done;C++,O=f.next()){T.index>C?(F=T,T=null):F=T.sibling;var Oe=m(d,T,O.value,v);if(Oe===null){T===null&&(T=F);break}t&&T&&Oe.alternate===null&&e(d,T),c=o(Oe,c,C),I===null?E=Oe:I.sibling=Oe,I=Oe,T=F}if(O.done)return n(d,T),$&&Wt(d,C),E;if(T===null){for(;!O.done;C++,O=f.next())O=p(d,O.value,v),O!==null&&(c=o(O,c,C),I===null?E=O:I.sibling=O,I=O);return $&&Wt(d,C),E}for(T=r(d,T);!O.done;C++,O=f.next())O=_(T,d,C,O.value,v),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?C:O.key),c=o(O,c,C),I===null?E=O:I.sibling=O,I=O);return t&&T.forEach(function(Kn){return e(d,Kn)}),$&&Wt(d,C),E}function x(d,c,f,v){if(typeof f=="object"&&f!==null&&f.type===pn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ei:e:{for(var E=f.key,I=c;I!==null;){if(I.key===E){if(E=f.type,E===pn){if(I.tag===7){n(d,I.sibling),c=i(I,f.props.children),c.return=d,d=c;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&pu(E)===I.type){n(d,I.sibling),c=i(I,f.props),c.ref=Zn(d,I,f),c.return=d,d=c;break e}n(d,I);break}else e(d,I);I=I.sibling}f.type===pn?(c=qt(f.props.children,d.mode,v,f.key),c.return=d,d=c):(v=Ni(f.type,f.key,f.props,null,d.mode,v),v.ref=Zn(d,c,f),v.return=d,d=v)}return s(d);case hn:e:{for(I=f.key;c!==null;){if(c.key===I)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else e(d,c);c=c.sibling}c=as(f,d.mode,v),c.return=d,d=c}return s(d);case ht:return I=f._init,x(d,c,I(f._payload),v)}if(ir(f))return g(d,c,f,v);if(Qn(f))return w(d,c,f,v);di(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,f),c.return=d,d=c):(n(d,c),c=ss(f,d.mode,v),c.return=d,d=c),s(d)):n(d,c)}return x}var Fn=Dd(!0),xd=Dd(!1),Gi=Ut(null),Qi=null,Sn=null,Wa=null;function ba(){Wa=Sn=Qi=null}function Ka(t){var e=Gi.current;j(Gi),t._currentValue=e}function bs(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Nn(t,e){Qi=t,Wa=Sn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(he=!0),t.firstContext=null)}function Pe(t){var e=t._currentValue;if(Wa!==t)if(t={context:t,memoizedValue:e,next:null},Sn===null){if(Qi===null)throw Error(y(308));Sn=t,Qi.dependencies={lanes:0,firstContext:t}}else Sn=Sn.next=t;return e}var Qt=null;function Ga(t){Qt===null?Qt=[t]:Qt.push(t)}function Md(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ga(e)):(n.next=i.next,i.next=n),e.interleaved=n,st(t,r)}function st(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pt=!1;function Qa(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ud(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ct(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,st(t,n)}return i=r.interleaved,i===null?(e.next=e,Ga(r)):(e.next=i.next,i.next=e),r.interleaved=e,st(t,n)}function ki(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Da(t,n)}}function mu(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yi(t,e,n,r){var i=t.updateQueue;pt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,h=u=l=null,a=o;do{var m=a.lane,_=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,w=a;switch(m=e,_=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){p=g.call(_,p,m);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,m=typeof g=="function"?g.call(_,p,m):g,m==null)break e;p=H({},p,m);break e;case 2:pt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=_,l=p):h=h.next=_,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);rn|=s,t.lanes=s,t.memoizedState=p}}function gu(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var Wr={},Ke=Ut(Wr),Ar=Ut(Wr),Lr=Ut(Wr);function Yt(t){if(t===Wr)throw Error(y(174));return t}function Ya(t,e){switch(U(Lr,e),U(Ar,t),U(Ke,Wr),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ts(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ts(e,t)}j(Ke),U(Ke,e)}function zn(){j(Ke),j(Ar),j(Lr)}function Fd(t){Yt(Lr.current);var e=Yt(Ke.current),n=Ts(e,t.type);e!==n&&(U(Ar,t),U(Ke,n))}function Ja(t){Ar.current===t&&(j(Ke),j(Ar))}var B=Ut(0);function Ji(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var es=[];function Xa(){for(var t=0;t<es.length;t++)es[t]._workInProgressVersionPrimary=null;es.length=0}var Ii=ut.ReactCurrentDispatcher,ts=ut.ReactCurrentBatchConfig,nn=0,V=null,Y=null,q=null,Xi=!1,mr=!1,Dr=0,Sm=0;function re(){throw Error(y(321))}function qa(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$e(t[n],e[n]))return!1;return!0}function Za(t,e,n,r,i,o){if(nn=o,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ii.current=t===null||t.memoizedState===null?Cm:Pm,t=n(r,i),mr){o=0;do{if(mr=!1,Dr=0,25<=o)throw Error(y(301));o+=1,q=Y=null,e.updateQueue=null,Ii.current=Rm,t=n(r,i)}while(mr)}if(Ii.current=qi,e=Y!==null&&Y.next!==null,nn=0,q=Y=V=null,Xi=!1,e)throw Error(y(300));return t}function el(){var t=Dr!==0;return Dr=0,t}function He(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=t:q=q.next=t,q}function Re(){if(Y===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=Y.next;var e=q===null?V.memoizedState:q.next;if(e!==null)q=e,Y=t;else{if(t===null)throw Error(y(310));Y=t,t={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},q===null?V.memoizedState=q=t:q=q.next=t}return q}function xr(t,e){return typeof e=="function"?e(t):e}function ns(t){var e=Re(),n=e.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=t;var r=Y,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((nn&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,V.lanes|=h,rn|=h}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,$e(r,e.memoizedState)||(he=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,V.lanes|=o,rn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rs(t){var e=Re(),n=e.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);$e(o,e.memoizedState)||(he=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function zd(){}function jd(t,e){var n=V,r=Re(),i=e(),o=!$e(r.memoizedState,i);if(o&&(r.memoizedState=i,he=!0),r=r.queue,tl(Vd.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,Mr(9,Bd.bind(null,n,r,i,e),void 0,null),Z===null)throw Error(y(349));nn&30||$d(n,e,i)}return i}function $d(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bd(t,e,n,r){e.value=n,e.getSnapshot=r,Hd(e)&&Wd(t)}function Vd(t,e,n){return n(function(){Hd(e)&&Wd(t)})}function Hd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$e(t,n)}catch{return!0}}function Wd(t){var e=st(t,1);e!==null&&ze(e,t,1,-1)}function vu(t){var e=He();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:t},e.queue=t,t=t.dispatch=Tm.bind(null,V,t),[e.memoizedState,t]}function Mr(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bd(){return Re().memoizedState}function Ti(t,e,n,r){var i=He();V.flags|=t,i.memoizedState=Mr(1|e,n,void 0,r===void 0?null:r)}function wo(t,e,n,r){var i=Re();r=r===void 0?null:r;var o=void 0;if(Y!==null){var s=Y.memoizedState;if(o=s.destroy,r!==null&&qa(r,s.deps)){i.memoizedState=Mr(e,n,o,r);return}}V.flags|=t,i.memoizedState=Mr(1|e,n,o,r)}function yu(t,e){return Ti(8390656,8,t,e)}function tl(t,e){return wo(2048,8,t,e)}function Kd(t,e){return wo(4,2,t,e)}function Gd(t,e){return wo(4,4,t,e)}function Qd(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yd(t,e,n){return n=n!=null?n.concat([t]):null,wo(4,4,Qd.bind(null,e,t),n)}function nl(){}function Jd(t,e){var n=Re();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qa(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xd(t,e){var n=Re();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qa(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function qd(t,e,n){return nn&21?($e(n,e)||(n=rd(),V.lanes|=n,rn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,he=!0),t.memoizedState=n)}function km(t,e){var n=D;D=n!==0&&4>n?n:4,t(!0);var r=ts.transition;ts.transition={};try{t(!1),e()}finally{D=n,ts.transition=r}}function Zd(){return Re().memoizedState}function Im(t,e,n){var r=Rt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ef(t))tf(e,n);else if(n=Md(t,e,n,r),n!==null){var i=ue();ze(n,t,r,i),nf(n,e,r)}}function Tm(t,e,n){var r=Rt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ef(t))tf(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,$e(a,s)){var l=e.interleaved;l===null?(i.next=i,Ga(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Md(t,e,i,r),n!==null&&(i=ue(),ze(n,t,r,i),nf(n,e,r))}}function ef(t){var e=t.alternate;return t===V||e!==null&&e===V}function tf(t,e){mr=Xi=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nf(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Da(t,n)}}var qi={readContext:Pe,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Cm={readContext:Pe,useCallback:function(t,e){return He().memoizedState=[t,e===void 0?null:e],t},useContext:Pe,useEffect:yu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ti(4194308,4,Qd.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ti(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ti(4,2,t,e)},useMemo:function(t,e){var n=He();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=He();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Im.bind(null,V,t),[r.memoizedState,t]},useRef:function(t){var e=He();return t={current:t},e.memoizedState=t},useState:vu,useDebugValue:nl,useDeferredValue:function(t){return He().memoizedState=t},useTransition:function(){var t=vu(!1),e=t[0];return t=km.bind(null,t[1]),He().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=V,i=He();if($){if(n===void 0)throw Error(y(407));n=n()}else{if(n=e(),Z===null)throw Error(y(349));nn&30||$d(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,yu(Vd.bind(null,r,o,t),[t]),r.flags|=2048,Mr(9,Bd.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=He(),e=Z.identifierPrefix;if($){var n=qe,r=Xe;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Dr++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Sm++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Pm={readContext:Pe,useCallback:Jd,useContext:Pe,useEffect:tl,useImperativeHandle:Yd,useInsertionEffect:Kd,useLayoutEffect:Gd,useMemo:Xd,useReducer:ns,useRef:bd,useState:function(){return ns(xr)},useDebugValue:nl,useDeferredValue:function(t){var e=Re();return qd(e,Y.memoizedState,t)},useTransition:function(){var t=ns(xr)[0],e=Re().memoizedState;return[t,e]},useMutableSource:zd,useSyncExternalStore:jd,useId:Zd,unstable_isNewReconciler:!1},Rm={readContext:Pe,useCallback:Jd,useContext:Pe,useEffect:tl,useImperativeHandle:Yd,useInsertionEffect:Kd,useLayoutEffect:Gd,useMemo:Xd,useReducer:rs,useRef:bd,useState:function(){return rs(xr)},useDebugValue:nl,useDeferredValue:function(t){var e=Re();return Y===null?e.memoizedState=t:qd(e,Y.memoizedState,t)},useTransition:function(){var t=rs(xr)[0],e=Re().memoizedState;return[t,e]},useMutableSource:zd,useSyncExternalStore:jd,useId:Zd,unstable_isNewReconciler:!1};function Le(t,e){if(t&&t.defaultProps){e=H({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ks(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:H({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Eo={isMounted:function(t){return(t=t._reactInternals)?dn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ue(),i=Rt(t),o=nt(r,i);o.payload=e,n!=null&&(o.callback=n),e=Ct(t,o,i),e!==null&&(ze(e,t,i,r),ki(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ue(),i=Rt(t),o=nt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ct(t,o,i),e!==null&&(ze(e,t,i,r),ki(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ue(),r=Rt(t),i=nt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ct(t,i,r),e!==null&&(ze(e,t,r,n),ki(e,t,r))}};function _u(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,o):!0}function rf(t,e,n){var r=!1,i=Dt,o=e.contextType;return typeof o=="object"&&o!==null?o=Pe(o):(i=me(e)?en:se.current,r=e.contextTypes,o=(r=r!=null)?Mn(t,i):Dt),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Eo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function wu(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Eo.enqueueReplaceState(e,e.state,null)}function Gs(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Qa(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Pe(o):(o=me(e)?en:se.current,i.context=Mn(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Ks(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Eo.enqueueReplaceState(i,i.state,null),Yi(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function jn(t,e){try{var n="",r=e;do n+=np(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function is(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qs(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Nm=typeof WeakMap=="function"?WeakMap:Map;function of(t,e,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){eo||(eo=!0,ia=r),Qs(t,e)},n}function sf(t,e,n){n=nt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qs(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Qs(t,e),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Eu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Nm;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Hm.bind(null,t,e,n),e.then(t,t))}function Su(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ku(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nt(-1,1),e.tag=2,Ct(n,e,1))),n.lanes|=1),t)}var Om=ut.ReactCurrentOwner,he=!1;function le(t,e,n,r){e.child=t===null?xd(e,null,n,r):Fn(e,t.child,n,r)}function Iu(t,e,n,r,i){n=n.render;var o=e.ref;return Nn(e,i),r=Za(t,e,n,r,o,i),n=el(),t!==null&&!he?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,at(t,e,i)):($&&n&&Ba(e),e.flags|=1,le(t,e,r,i),e.child)}function Tu(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!cl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,af(t,e,o,r,i)):(t=Ni(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(s,r)&&t.ref===e.ref)return at(t,e,i)}return e.flags|=1,t=Nt(o,r),t.ref=e.ref,t.return=e,e.child=t}function af(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Pr(o,r)&&t.ref===e.ref)if(he=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(he=!0);else return e.lanes=t.lanes,at(t,e,i)}return Ys(t,e,n,r,i)}function lf(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(In,ve),ve|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,U(In,ve),ve|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(In,ve),ve|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,U(In,ve),ve|=r;return le(t,e,i,n),e.child}function uf(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ys(t,e,n,r,i){var o=me(n)?en:se.current;return o=Mn(e,o),Nn(e,i),n=Za(t,e,n,r,o,i),r=el(),t!==null&&!he?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,at(t,e,i)):($&&r&&Ba(e),e.flags|=1,le(t,e,n,i),e.child)}function Cu(t,e,n,r,i){if(me(n)){var o=!0;Wi(e)}else o=!1;if(Nn(e,i),e.stateNode===null)Ci(t,e),rf(e,n,r),Gs(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pe(u):(u=me(n)?en:se.current,u=Mn(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&wu(e,s,r,u),pt=!1;var m=e.memoizedState;s.state=m,Yi(e,r,s,i),l=e.memoizedState,a!==r||m!==l||pe.current||pt?(typeof h=="function"&&(Ks(e,n,h,r),l=e.memoizedState),(a=pt||_u(e,n,a,r,m,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Ud(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Le(e.type,a),s.props=u,p=e.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pe(l):(l=me(n)?en:se.current,l=Mn(e,l));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&wu(e,s,r,l),pt=!1,m=e.memoizedState,s.state=m,Yi(e,r,s,i);var g=e.memoizedState;a!==p||m!==g||pe.current||pt?(typeof _=="function"&&(Ks(e,n,_,r),g=e.memoizedState),(u=pt||_u(e,n,u,r,m,g,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),s.props=r,s.state=g,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Js(t,e,n,r,o,i)}function Js(t,e,n,r,i,o){uf(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&du(e,n,!1),at(t,e,o);r=e.stateNode,Om.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Fn(e,t.child,null,o),e.child=Fn(e,null,a,o)):le(t,e,a,o),e.memoizedState=r.state,i&&du(e,n,!0),e.child}function cf(t){var e=t.stateNode;e.pendingContext?cu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cu(t,e.context,!1),Ya(t,e.containerInfo)}function Pu(t,e,n,r,i){return Un(),Ha(i),e.flags|=256,le(t,e,n,r),e.child}var Xs={dehydrated:null,treeContext:null,retryLane:0};function qs(t){return{baseLanes:t,cachePool:null,transitions:null}}function df(t,e,n){var r=e.pendingProps,i=B.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),U(B,i&1),t===null)return Ws(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Io(s,r,0,null),t=qt(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=qs(n),e.memoizedState=Xs,t):rl(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Am(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Nt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Nt(a,o):(o=qt(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?qs(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Xs,r}return o=t.child,t=o.sibling,r=Nt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rl(t,e){return e=Io({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fi(t,e,n,r){return r!==null&&Ha(r),Fn(e,t.child,null,n),t=rl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Am(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=is(Error(y(422))),fi(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Io({mode:"visible",children:r.children},i,0,null),o=qt(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Fn(e,t.child,null,s),e.child.memoizedState=qs(s),e.memoizedState=Xs,o);if(!(e.mode&1))return fi(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(y(419)),r=is(o,r,void 0),fi(t,e,s,r)}if(a=(s&t.childLanes)!==0,he||a){if(r=Z,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,st(t,i),ze(r,t,i,-1))}return ul(),r=is(Error(y(421))),fi(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Wm.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,ye=Tt(i.nextSibling),_e=e,$=!0,xe=null,t!==null&&(ke[Ie++]=Xe,ke[Ie++]=qe,ke[Ie++]=tn,Xe=t.id,qe=t.overflow,tn=e),e=rl(e,r.children),e.flags|=4096,e)}function Ru(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bs(t.return,e,n)}function os(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ff(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(le(t,e,r.children,n),r=B.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ru(t,n,e);else if(t.tag===19)Ru(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(U(B,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ji(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),os(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ji(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}os(e,!0,n,null,o);break;case"together":os(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ci(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function at(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),rn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(y(153));if(e.child!==null){for(t=e.child,n=Nt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lm(t,e,n){switch(e.tag){case 3:cf(e),Un();break;case 5:Fd(e);break;case 1:me(e.type)&&Wi(e);break;case 4:Ya(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;U(Gi,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(U(B,B.current&1),e.flags|=128,null):n&e.child.childLanes?df(t,e,n):(U(B,B.current&1),t=at(t,e,n),t!==null?t.sibling:null);U(B,B.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ff(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(B,B.current),r)break;return null;case 22:case 23:return e.lanes=0,lf(t,e,n)}return at(t,e,n)}var hf,Zs,pf,mf;hf=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zs=function(){};pf=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yt(Ke.current);var o=null;switch(n){case"input":i=Es(t,i),r=Es(t,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=Is(t,i),r=Is(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vi)}Cs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&z("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};mf=function(t,e,n,r){n!==r&&(e.flags|=4)};function er(t,e){if(!$)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Dm(t,e,n){var r=e.pendingProps;switch(Va(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(e),null;case 1:return me(e.type)&&Hi(),ie(e),null;case 3:return r=e.stateNode,zn(),j(pe),j(se),Xa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ci(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xe!==null&&(aa(xe),xe=null))),Zs(t,e),ie(e),null;case 5:Ja(e);var i=Yt(Lr.current);if(n=e.type,t!==null&&e.stateNode!=null)pf(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(y(166));return ie(e),null}if(t=Yt(Ke.current),ci(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[We]=e,r[Or]=o,t=(e.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<sr.length;i++)z(sr[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":Fl(r,o),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},z("invalid",r);break;case"textarea":jl(r,o),z("invalid",r)}Cs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,a,t),i=["children",""+a]):wr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&z("scroll",r)}switch(n){case"input":ti(r),zl(r,o,!0);break;case"textarea":ti(r),$l(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vi)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vc(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[We]=e,t[Or]=r,hf(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ps(n,r),n){case"dialog":z("cancel",t),z("close",t),i=r;break;case"iframe":case"object":case"embed":z("load",t),i=r;break;case"video":case"audio":for(i=0;i<sr.length;i++)z(sr[i],t);i=r;break;case"source":z("error",t),i=r;break;case"img":case"image":case"link":z("error",t),z("load",t),i=r;break;case"details":z("toggle",t),i=r;break;case"input":Fl(t,r),i=Es(t,r),z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),z("invalid",t);break;case"textarea":jl(t,r),i=Is(t,r),z("invalid",t);break;default:i=r}Cs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?bc(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hc(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Er(t,l):typeof l=="number"&&Er(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&z("scroll",t):l!=null&&Pa(t,o,l,s))}switch(n){case"input":ti(t),zl(t,r,!1);break;case"textarea":ti(t),$l(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Lt(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Tn(t,!!r.multiple,o,!1):r.defaultValue!=null&&Tn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ie(e),null;case 6:if(t&&e.stateNode!=null)mf(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(y(166));if(n=Yt(Lr.current),Yt(Ke.current),ci(e)){if(r=e.stateNode,n=e.memoizedProps,r[We]=e,(o=r.nodeValue!==n)&&(t=_e,t!==null))switch(t.tag){case 3:ui(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ui(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=e,e.stateNode=r}return ie(e),null;case 13:if(j(B),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($&&ye!==null&&e.mode&1&&!(e.flags&128))Ld(),Un(),e.flags|=98560,o=!1;else if(o=ci(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(y(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[We]=e}else Un(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ie(e),o=!1}else xe!==null&&(aa(xe),xe=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||B.current&1?J===0&&(J=3):ul())),e.updateQueue!==null&&(e.flags|=4),ie(e),null);case 4:return zn(),Zs(t,e),t===null&&Rr(e.stateNode.containerInfo),ie(e),null;case 10:return Ka(e.type._context),ie(e),null;case 17:return me(e.type)&&Hi(),ie(e),null;case 19:if(j(B),o=e.memoizedState,o===null)return ie(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)er(o,!1);else{if(J!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ji(t),s!==null){for(e.flags|=128,er(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return U(B,B.current&1|2),e.child}t=t.sibling}o.tail!==null&&G()>$n&&(e.flags|=128,r=!0,er(o,!1),e.lanes=4194304)}else{if(!r)if(t=Ji(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),er(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!$)return ie(e),null}else 2*G()-o.renderingStartTime>$n&&n!==1073741824&&(e.flags|=128,r=!0,er(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=G(),e.sibling=null,n=B.current,U(B,r?n&1|2:n&1),e):(ie(e),null);case 22:case 23:return ll(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ve&1073741824&&(ie(e),e.subtreeFlags&6&&(e.flags|=8192)):ie(e),null;case 24:return null;case 25:return null}throw Error(y(156,e.tag))}function xm(t,e){switch(Va(e),e.tag){case 1:return me(e.type)&&Hi(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zn(),j(pe),j(se),Xa(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ja(e),null;case 13:if(j(B),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(y(340));Un()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return j(B),null;case 4:return zn(),null;case 10:return Ka(e.type._context),null;case 22:case 23:return ll(),null;case 24:return null;default:return null}}var hi=!1,oe=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,S=null;function kn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(t,e,r)}else n.current=null}function ea(t,e,n){try{n()}catch(r){W(t,e,r)}}var Nu=!1;function Um(t,e){if(Fs=ji,t=_d(),$a(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,h=0,p=t,m=null;t:for(;;){for(var _;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===t)break t;if(m===n&&++u===i&&(a=s),m===o&&++h===r&&(l=s),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zs={focusedElem:t,selectionRange:n},ji=!1,S=e;S!==null;)if(e=S,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,S=t;else for(;S!==null;){e=S;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,x=g.memoizedState,d=e.stateNode,c=d.getSnapshotBeforeUpdate(e.elementType===e.type?w:Le(e.type,w),x);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){W(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,S=t;break}S=e.return}return g=Nu,Nu=!1,g}function gr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&ea(e,n,o)}i=i.next}while(i!==r)}}function So(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ta(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gf(t){var e=t.alternate;e!==null&&(t.alternate=null,gf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[We],delete e[Or],delete e[Bs],delete e[ym],delete e[_m])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vf(t){return t.tag===5||t.tag===3||t.tag===4}function Ou(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function na(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vi));else if(r!==4&&(t=t.child,t!==null))for(na(t,e,n),t=t.sibling;t!==null;)na(t,e,n),t=t.sibling}function ra(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ra(t,e,n),t=t.sibling;t!==null;)ra(t,e,n),t=t.sibling}var ee=null,De=!1;function dt(t,e,n){for(n=n.child;n!==null;)yf(t,e,n),n=n.sibling}function yf(t,e,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(po,n)}catch{}switch(n.tag){case 5:oe||kn(n,e);case 6:var r=ee,i=De;ee=null,dt(t,e,n),ee=r,De=i,ee!==null&&(De?(t=ee,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(De?(t=ee,n=n.stateNode,t.nodeType===8?qo(t.parentNode,n):t.nodeType===1&&qo(t,n),Tr(t)):qo(ee,n.stateNode));break;case 4:r=ee,i=De,ee=n.stateNode.containerInfo,De=!0,dt(t,e,n),ee=r,De=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ea(n,e,s),i=i.next}while(i!==r)}dt(t,e,n);break;case 1:if(!oe&&(kn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){W(n,e,a)}dt(t,e,n);break;case 21:dt(t,e,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,dt(t,e,n),oe=r):dt(t,e,n);break;default:dt(t,e,n)}}function Au(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mm),e.forEach(function(r){var i=bm.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ae(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,De=!1;break e;case 3:ee=a.stateNode.containerInfo,De=!0;break e;case 4:ee=a.stateNode.containerInfo,De=!0;break e}a=a.return}if(ee===null)throw Error(y(160));yf(o,s,i),ee=null,De=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){W(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_f(e,t),e=e.sibling}function _f(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ae(e,t),Ve(t),r&4){try{gr(3,t,t.return),So(3,t)}catch(w){W(t,t.return,w)}try{gr(5,t,t.return)}catch(w){W(t,t.return,w)}}break;case 1:Ae(e,t),Ve(t),r&512&&n!==null&&kn(n,n.return);break;case 5:if(Ae(e,t),Ve(t),r&512&&n!==null&&kn(n,n.return),t.flags&32){var i=t.stateNode;try{Er(i,"")}catch(w){W(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&$c(i,o),Ps(a,s);var u=Ps(a,o);for(s=0;s<l.length;s+=2){var h=l[s],p=l[s+1];h==="style"?bc(i,p):h==="dangerouslySetInnerHTML"?Hc(i,p):h==="children"?Er(i,p):Pa(i,h,p,u)}switch(a){case"input":Ss(i,o);break;case"textarea":Bc(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?Tn(i,!!o.multiple,_,!1):m!==!!o.multiple&&(o.defaultValue!=null?Tn(i,!!o.multiple,o.defaultValue,!0):Tn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Or]=o}catch(w){W(t,t.return,w)}}break;case 6:if(Ae(e,t),Ve(t),r&4){if(t.stateNode===null)throw Error(y(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(w){W(t,t.return,w)}}break;case 3:if(Ae(e,t),Ve(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(e.containerInfo)}catch(w){W(t,t.return,w)}break;case 4:Ae(e,t),Ve(t);break;case 13:Ae(e,t),Ve(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(sl=G())),r&4&&Au(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(oe=(u=oe)||h,Ae(e,t),oe=u):Ae(e,t),Ve(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(S=t,h=t.child;h!==null;){for(p=S=h;S!==null;){switch(m=S,_=m.child,m.tag){case 0:case 11:case 14:case 15:gr(4,m,m.return);break;case 1:kn(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(w){W(r,n,w)}}break;case 5:kn(m,m.return);break;case 22:if(m.memoizedState!==null){Du(p);continue}}_!==null?(_.return=m,S=_):Du(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wc("display",s))}catch(w){W(t,t.return,w)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){W(t,t.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ae(e,t),Ve(t),r&4&&Au(t);break;case 21:break;default:Ae(e,t),Ve(t)}}function Ve(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vf(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Er(i,""),r.flags&=-33);var o=Ou(t);ra(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ou(t);na(t,a,s);break;default:throw Error(y(161))}}catch(l){W(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fm(t,e,n){S=t,wf(t)}function wf(t,e,n){for(var r=(t.mode&1)!==0;S!==null;){var i=S,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||hi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||oe;a=hi;var u=oe;if(hi=s,(oe=l)&&!u)for(S=i;S!==null;)s=S,l=s.child,s.tag===22&&s.memoizedState!==null?xu(i):l!==null?(l.return=s,S=l):xu(i);for(;o!==null;)S=o,wf(o),o=o.sibling;S=i,hi=a,oe=u}Lu(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,S=o):Lu(t)}}function Lu(t){for(;S!==null;){var e=S;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:oe||So(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Le(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&gu(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gu(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Tr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}oe||e.flags&512&&ta(e)}catch(m){W(e,e.return,m)}}if(e===t){S=null;break}if(n=e.sibling,n!==null){n.return=e.return,S=n;break}S=e.return}}function Du(t){for(;S!==null;){var e=S;if(e===t){S=null;break}var n=e.sibling;if(n!==null){n.return=e.return,S=n;break}S=e.return}}function xu(t){for(;S!==null;){var e=S;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{So(4,e)}catch(l){W(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){W(e,i,l)}}var o=e.return;try{ta(e)}catch(l){W(e,o,l)}break;case 5:var s=e.return;try{ta(e)}catch(l){W(e,s,l)}}}catch(l){W(e,e.return,l)}if(e===t){S=null;break}var a=e.sibling;if(a!==null){a.return=e.return,S=a;break}S=e.return}}var zm=Math.ceil,Zi=ut.ReactCurrentDispatcher,il=ut.ReactCurrentOwner,Ce=ut.ReactCurrentBatchConfig,L=0,Z=null,Q=null,te=0,ve=0,In=Ut(0),J=0,Ur=null,rn=0,ko=0,ol=0,vr=null,fe=null,sl=0,$n=1/0,Qe=null,eo=!1,ia=null,Pt=null,pi=!1,Et=null,to=0,yr=0,oa=null,Pi=-1,Ri=0;function ue(){return L&6?G():Pi!==-1?Pi:Pi=G()}function Rt(t){return t.mode&1?L&2&&te!==0?te&-te:Em.transition!==null?(Ri===0&&(Ri=rd()),Ri):(t=D,t!==0||(t=window.event,t=t===void 0?16:cd(t.type)),t):1}function ze(t,e,n,r){if(50<yr)throw yr=0,oa=null,Error(y(185));Br(t,n,r),(!(L&2)||t!==Z)&&(t===Z&&(!(L&2)&&(ko|=n),J===4&&gt(t,te)),ge(t,r),n===1&&L===0&&!(e.mode&1)&&($n=G()+500,_o&&Ft()))}function ge(t,e){var n=t.callbackNode;Ep(t,e);var r=zi(t,t===Z?te:0);if(r===0)n!==null&&Hl(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hl(n),e===1)t.tag===0?wm(Mu.bind(null,t)):Nd(Mu.bind(null,t)),gm(function(){!(L&6)&&Ft()}),n=null;else{switch(id(r)){case 1:n=La;break;case 4:n=td;break;case 16:n=Fi;break;case 536870912:n=nd;break;default:n=Fi}n=Rf(n,Ef.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ef(t,e){if(Pi=-1,Ri=0,L&6)throw Error(y(327));var n=t.callbackNode;if(On()&&t.callbackNode!==n)return null;var r=zi(t,t===Z?te:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=no(t,r);else{e=r;var i=L;L|=2;var o=kf();(Z!==t||te!==e)&&(Qe=null,$n=G()+500,Xt(t,e));do try{Bm();break}catch(a){Sf(t,a)}while(!0);ba(),Zi.current=o,L=i,Q!==null?e=0:(Z=null,te=0,e=J)}if(e!==0){if(e===2&&(i=Ls(t),i!==0&&(r=i,e=sa(t,i))),e===1)throw n=Ur,Xt(t,0),gt(t,r),ge(t,G()),n;if(e===6)gt(t,r);else{if(i=t.current.alternate,!(r&30)&&!jm(i)&&(e=no(t,r),e===2&&(o=Ls(t),o!==0&&(r=o,e=sa(t,o))),e===1))throw n=Ur,Xt(t,0),gt(t,r),ge(t,G()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(y(345));case 2:bt(t,fe,Qe);break;case 3:if(gt(t,r),(r&130023424)===r&&(e=sl+500-G(),10<e)){if(zi(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ue(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$s(bt.bind(null,t,fe,Qe),e);break}bt(t,fe,Qe);break;case 4:if(gt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Fe(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zm(r/1960))-r,10<r){t.timeoutHandle=$s(bt.bind(null,t,fe,Qe),r);break}bt(t,fe,Qe);break;case 5:bt(t,fe,Qe);break;default:throw Error(y(329))}}}return ge(t,G()),t.callbackNode===n?Ef.bind(null,t):null}function sa(t,e){var n=vr;return t.current.memoizedState.isDehydrated&&(Xt(t,e).flags|=256),t=no(t,e),t!==2&&(e=fe,fe=n,e!==null&&aa(e)),t}function aa(t){fe===null?fe=t:fe.push.apply(fe,t)}function jm(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!$e(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gt(t,e){for(e&=~ol,e&=~ko,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fe(e),r=1<<n;t[n]=-1,e&=~r}}function Mu(t){if(L&6)throw Error(y(327));On();var e=zi(t,0);if(!(e&1))return ge(t,G()),null;var n=no(t,e);if(t.tag!==0&&n===2){var r=Ls(t);r!==0&&(e=r,n=sa(t,r))}if(n===1)throw n=Ur,Xt(t,0),gt(t,e),ge(t,G()),n;if(n===6)throw Error(y(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bt(t,fe,Qe),ge(t,G()),null}function al(t,e){var n=L;L|=1;try{return t(e)}finally{L=n,L===0&&($n=G()+500,_o&&Ft())}}function on(t){Et!==null&&Et.tag===0&&!(L&6)&&On();var e=L;L|=1;var n=Ce.transition,r=D;try{if(Ce.transition=null,D=1,t)return t()}finally{D=r,Ce.transition=n,L=e,!(L&6)&&Ft()}}function ll(){ve=In.current,j(In)}function Xt(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mm(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(Va(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hi();break;case 3:zn(),j(pe),j(se),Xa();break;case 5:Ja(r);break;case 4:zn();break;case 13:j(B);break;case 19:j(B);break;case 10:Ka(r.type._context);break;case 22:case 23:ll()}n=n.return}if(Z=t,Q=t=Nt(t.current,null),te=ve=e,J=0,Ur=null,ol=ko=rn=0,fe=vr=null,Qt!==null){for(e=0;e<Qt.length;e++)if(n=Qt[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Qt=null}return t}function Sf(t,e){do{var n=Q;try{if(ba(),Ii.current=qi,Xi){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xi=!1}if(nn=0,q=Y=V=null,mr=!1,Dr=0,il.current=null,n===null||n.return===null){J=1,Ur=e,Q=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=te,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Su(s);if(_!==null){_.flags&=-257,ku(_,s,a,o,e),_.mode&1&&Eu(o,u,e),e=_,l=u;var g=e.updateQueue;if(g===null){var w=new Set;w.add(l),e.updateQueue=w}else g.add(l);break e}else{if(!(e&1)){Eu(o,u,e),ul();break e}l=Error(y(426))}}else if($&&a.mode&1){var x=Su(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),ku(x,s,a,o,e),Ha(jn(l,a));break e}}o=l=jn(l,a),J!==4&&(J=2),vr===null?vr=[o]:vr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=of(o,l,e);mu(o,d);break e;case 1:a=l;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pt===null||!Pt.has(f)))){o.flags|=65536,e&=-e,o.lanes|=e;var v=sf(o,a,e);mu(o,v);break e}}o=o.return}while(o!==null)}Tf(n)}catch(E){e=E,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function kf(){var t=Zi.current;return Zi.current=qi,t===null?qi:t}function ul(){(J===0||J===3||J===2)&&(J=4),Z===null||!(rn&268435455)&&!(ko&268435455)||gt(Z,te)}function no(t,e){var n=L;L|=2;var r=kf();(Z!==t||te!==e)&&(Qe=null,Xt(t,e));do try{$m();break}catch(i){Sf(t,i)}while(!0);if(ba(),L=n,Zi.current=r,Q!==null)throw Error(y(261));return Z=null,te=0,J}function $m(){for(;Q!==null;)If(Q)}function Bm(){for(;Q!==null&&!fp();)If(Q)}function If(t){var e=Pf(t.alternate,t,ve);t.memoizedProps=t.pendingProps,e===null?Tf(t):Q=e,il.current=null}function Tf(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xm(n,e),n!==null){n.flags&=32767,Q=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{J=6,Q=null;return}}else if(n=Dm(n,e,ve),n!==null){Q=n;return}if(e=e.sibling,e!==null){Q=e;return}Q=e=t}while(e!==null);J===0&&(J=5)}function bt(t,e,n){var r=D,i=Ce.transition;try{Ce.transition=null,D=1,Vm(t,e,n,r)}finally{Ce.transition=i,D=r}return null}function Vm(t,e,n,r){do On();while(Et!==null);if(L&6)throw Error(y(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(y(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Sp(t,o),t===Z&&(Q=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pi||(pi=!0,Rf(Fi,function(){return On(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var s=D;D=1;var a=L;L|=4,il.current=null,Um(t,n),_f(n,t),lm(zs),ji=!!Fs,zs=Fs=null,t.current=n,Fm(n),hp(),L=a,D=s,Ce.transition=o}else t.current=n;if(pi&&(pi=!1,Et=t,to=i),o=t.pendingLanes,o===0&&(Pt=null),gp(n.stateNode),ge(t,G()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(eo)throw eo=!1,t=ia,ia=null,t;return to&1&&t.tag!==0&&On(),o=t.pendingLanes,o&1?t===oa?yr++:(yr=0,oa=t):yr=0,Ft(),null}function On(){if(Et!==null){var t=id(to),e=Ce.transition,n=D;try{if(Ce.transition=null,D=16>t?16:t,Et===null)var r=!1;else{if(t=Et,Et=null,to=0,L&6)throw Error(y(331));var i=L;for(L|=4,S=t.current;S!==null;){var o=S,s=o.child;if(S.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(S=u;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:gr(8,h,o)}var p=h.child;if(p!==null)p.return=h,S=p;else for(;S!==null;){h=S;var m=h.sibling,_=h.return;if(gf(h),h===u){S=null;break}if(m!==null){m.return=_,S=m;break}S=_}}}var g=o.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}S=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,S=s;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:gr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,S=d;break e}S=o.return}}var c=t.current;for(S=c;S!==null;){s=S;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,S=f;else e:for(s=c;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:So(9,a)}}catch(E){W(a,a.return,E)}if(a===s){S=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,S=v;break e}S=a.return}}if(L=i,Ft(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(po,t)}catch{}r=!0}return r}finally{D=n,Ce.transition=e}}return!1}function Uu(t,e,n){e=jn(n,e),e=of(t,e,1),t=Ct(t,e,1),e=ue(),t!==null&&(Br(t,1,e),ge(t,e))}function W(t,e,n){if(t.tag===3)Uu(t,t,n);else for(;e!==null;){if(e.tag===3){Uu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){t=jn(n,t),t=sf(e,t,1),e=Ct(e,t,1),t=ue(),e!==null&&(Br(e,1,t),ge(e,t));break}}e=e.return}}function Hm(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ue(),t.pingedLanes|=t.suspendedLanes&n,Z===t&&(te&n)===n&&(J===4||J===3&&(te&130023424)===te&&500>G()-sl?Xt(t,0):ol|=n),ge(t,e)}function Cf(t,e){e===0&&(t.mode&1?(e=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):e=1);var n=ue();t=st(t,e),t!==null&&(Br(t,e,n),ge(t,n))}function Wm(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cf(t,n)}function bm(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(e),Cf(t,n)}var Pf;Pf=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pe.current)he=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return he=!1,Lm(t,e,n);he=!!(t.flags&131072)}else he=!1,$&&e.flags&1048576&&Od(e,Ki,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ci(t,e),t=e.pendingProps;var i=Mn(e,se.current);Nn(e,n),i=Za(null,e,r,t,i,n);var o=el();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,me(r)?(o=!0,Wi(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qa(e),i.updater=Eo,e.stateNode=i,i._reactInternals=e,Gs(e,r,t,n),e=Js(null,e,r,!0,o,n)):(e.tag=0,$&&o&&Ba(e),le(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ci(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Gm(r),t=Le(r,t),i){case 0:e=Ys(null,e,r,t,n);break e;case 1:e=Cu(null,e,r,t,n);break e;case 11:e=Iu(null,e,r,t,n);break e;case 14:e=Tu(null,e,r,Le(r.type,t),n);break e}throw Error(y(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Le(r,i),Ys(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Le(r,i),Cu(t,e,r,i,n);case 3:e:{if(cf(e),t===null)throw Error(y(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Ud(t,e),Yi(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=jn(Error(y(423)),e),e=Pu(t,e,r,n,i);break e}else if(r!==i){i=jn(Error(y(424)),e),e=Pu(t,e,r,n,i);break e}else for(ye=Tt(e.stateNode.containerInfo.firstChild),_e=e,$=!0,xe=null,n=xd(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===i){e=at(t,e,n);break e}le(t,e,r,n)}e=e.child}return e;case 5:return Fd(e),t===null&&Ws(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,js(r,i)?s=null:o!==null&&js(r,o)&&(e.flags|=32),uf(t,e),le(t,e,s,n),e.child;case 6:return t===null&&Ws(e),null;case 13:return df(t,e,n);case 4:return Ya(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fn(e,null,r,n):le(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Le(r,i),Iu(t,e,r,i,n);case 7:return le(t,e,e.pendingProps,n),e.child;case 8:return le(t,e,e.pendingProps.children,n),e.child;case 12:return le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,U(Gi,r._currentValue),r._currentValue=s,o!==null)if($e(o.value,s)){if(o.children===i.children&&!pe.current){e=at(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=nt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),bs(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(y(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),bs(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}le(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Nn(e,n),i=Pe(i),r=r(i),e.flags|=1,le(t,e,r,n),e.child;case 14:return r=e.type,i=Le(r,e.pendingProps),i=Le(r.type,i),Tu(t,e,r,i,n);case 15:return af(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Le(r,i),Ci(t,e),e.tag=1,me(r)?(t=!0,Wi(e)):t=!1,Nn(e,n),rf(e,r,i),Gs(e,r,i,n),Js(null,e,r,!0,t,n);case 19:return ff(t,e,n);case 22:return lf(t,e,n)}throw Error(y(156,e.tag))};function Rf(t,e){return ed(t,e)}function Km(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(t,e,n,r){return new Km(t,e,n,r)}function cl(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gm(t){if(typeof t=="function")return cl(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Na)return 11;if(t===Oa)return 14}return 2}function Nt(t,e){var n=t.alternate;return n===null?(n=Te(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ni(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")cl(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case pn:return qt(n.children,i,o,e);case Ra:s=8,i|=8;break;case vs:return t=Te(12,n,e,i|2),t.elementType=vs,t.lanes=o,t;case ys:return t=Te(13,n,e,i),t.elementType=ys,t.lanes=o,t;case _s:return t=Te(19,n,e,i),t.elementType=_s,t.lanes=o,t;case Fc:return Io(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mc:s=10;break e;case Uc:s=9;break e;case Na:s=11;break e;case Oa:s=14;break e;case ht:s=16,r=null;break e}throw Error(y(130,t==null?t:typeof t,""))}return e=Te(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function qt(t,e,n,r){return t=Te(7,t,r,e),t.lanes=n,t}function Io(t,e,n,r){return t=Te(22,t,r,e),t.elementType=Fc,t.lanes=n,t.stateNode={isHidden:!1},t}function ss(t,e,n){return t=Te(6,t,null,e),t.lanes=n,t}function as(t,e,n){return e=Te(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Qm(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bo(0),this.expirationTimes=Bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dl(t,e,n,r,i,o,s,a,l){return t=new Qm(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Te(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qa(o),t}function Ym(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Nf(t){if(!t)return Dt;t=t._reactInternals;e:{if(dn(t)!==t||t.tag!==1)throw Error(y(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(me(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(y(171))}if(t.tag===1){var n=t.type;if(me(n))return Rd(t,n,e)}return e}function Of(t,e,n,r,i,o,s,a,l){return t=dl(n,r,!0,t,i,o,s,a,l),t.context=Nf(null),n=t.current,r=ue(),i=Rt(n),o=nt(r,i),o.callback=e??null,Ct(n,o,i),t.current.lanes=i,Br(t,i,r),ge(t,r),t}function To(t,e,n,r){var i=e.current,o=ue(),s=Rt(i);return n=Nf(n),e.context===null?e.context=n:e.pendingContext=n,e=nt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ct(i,e,s),t!==null&&(ze(t,i,s,o),ki(t,i,s)),s}function ro(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fl(t,e){Fu(t,e),(t=t.alternate)&&Fu(t,e)}function Jm(){return null}var Af=typeof reportError=="function"?reportError:function(t){console.error(t)};function hl(t){this._internalRoot=t}Co.prototype.render=hl.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(y(409));To(t,e,null,null)};Co.prototype.unmount=hl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;on(function(){To(null,t,null,null)}),e[ot]=null}};function Co(t){this._internalRoot=t}Co.prototype.unstable_scheduleHydration=function(t){if(t){var e=ad();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mt.length&&e!==0&&e<mt[n].priority;n++);mt.splice(n,0,t),n===0&&ud(t)}};function pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Po(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zu(){}function Xm(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ro(s);o.call(u)}}var s=Of(e,r,t,0,null,!1,!1,"",zu);return t._reactRootContainer=s,t[ot]=s.current,Rr(t.nodeType===8?t.parentNode:t),on(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ro(l);a.call(u)}}var l=dl(t,0,!1,null,null,!1,!1,"",zu);return t._reactRootContainer=l,t[ot]=l.current,Rr(t.nodeType===8?t.parentNode:t),on(function(){To(e,l,n,r)}),l}function Ro(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ro(s);a.call(l)}}To(e,s,t,i)}else s=Xm(n,e,t,i,r);return ro(s)}od=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=or(e.pendingLanes);n!==0&&(Da(e,n|1),ge(e,G()),!(L&6)&&($n=G()+500,Ft()))}break;case 13:on(function(){var r=st(t,1);if(r!==null){var i=ue();ze(r,t,1,i)}}),fl(t,1)}};xa=function(t){if(t.tag===13){var e=st(t,134217728);if(e!==null){var n=ue();ze(e,t,134217728,n)}fl(t,134217728)}};sd=function(t){if(t.tag===13){var e=Rt(t),n=st(t,e);if(n!==null){var r=ue();ze(n,t,e,r)}fl(t,e)}};ad=function(){return D};ld=function(t,e){var n=D;try{return D=t,e()}finally{D=n}};Ns=function(t,e,n){switch(e){case"input":if(Ss(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=yo(r);if(!i)throw Error(y(90));jc(r),Ss(r,i)}}}break;case"textarea":Bc(t,n);break;case"select":e=n.value,e!=null&&Tn(t,!!n.multiple,e,!1)}};Qc=al;Yc=on;var qm={usingClientEntryPoint:!1,Events:[Hr,yn,yo,Kc,Gc,al]},tr={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zm={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qc(t),t===null?null:t.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||Jm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mi.isDisabled&&mi.supportsFiber)try{po=mi.inject(Zm),be=mi}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qm;Ee.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pl(e))throw Error(y(200));return Ym(t,e,null,n)};Ee.createRoot=function(t,e){if(!pl(t))throw Error(y(299));var n=!1,r="",i=Af;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=dl(t,1,!1,null,null,n,!1,r,i),t[ot]=e.current,Rr(t.nodeType===8?t.parentNode:t),new hl(e)};Ee.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=qc(e),t=t===null?null:t.stateNode,t};Ee.flushSync=function(t){return on(t)};Ee.hydrate=function(t,e,n){if(!Po(e))throw Error(y(200));return Ro(null,t,e,!0,n)};Ee.hydrateRoot=function(t,e,n){if(!pl(t))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Af;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Of(e,null,t,1,n??null,i,!1,o,s),t[ot]=e.current,Rr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Co(e)};Ee.render=function(t,e,n){if(!Po(e))throw Error(y(200));return Ro(null,t,e,!1,n)};Ee.unmountComponentAtNode=function(t){if(!Po(t))throw Error(y(40));return t._reactRootContainer?(on(function(){Ro(null,null,t,!1,function(){t._reactRootContainer=null,t[ot]=null})}),!0):!1};Ee.unstable_batchedUpdates=al;Ee.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Po(n))throw Error(y(200));if(t==null||t._reactInternals===void 0)throw Error(y(38));return Ro(t,e,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function Lf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lf)}catch(t){console.error(t)}}Lf(),Ac.exports=Ee;var eg=Ac.exports,ju=eg;ms.createRoot=ju.createRoot,ms.hydrateRoot=ju.hydrateRoot;var $u={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},ml={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=o>>2,p=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,_=u&63;l||(_=64,s||(m=64)),r.push(n[h],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Df(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw new ng;const m=o<<2|a>>4;if(r.push(m),u!==64){const _=a<<4&240|u>>2;if(r.push(_),p!==64){const g=u<<6&192|p;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ng extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rg=function(t){const e=Df(t);return ml.encodeByteArray(e,!0)},xf=function(t){return rg(t).replace(/\./g,"")},Mf=function(t){try{return ml.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=()=>ig().__FIREBASE_DEFAULTS__,sg=()=>{if(typeof process>"u"||typeof $u>"u")return;const t=$u.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ag=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mf(t[1]);return e&&JSON.parse(e)},gl=()=>{try{return og()||sg()||ag()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lg=t=>{var e,n;return(n=(e=gl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Uf=()=>{var t;return(t=gl())===null||t===void 0?void 0:t.config},Ff=t=>{var e;return(e=gl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ae())}function cg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fg(){const t=ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zf(){try{return typeof indexedDB=="object"}catch{return!1}}function hg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="FirebaseError";class zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pg,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?mg(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new zt(i,a,r)}}function mg(t,e){return t.replace(gg,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gg=/\{\$([^}]+)}/g;function vg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function io(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Bu(o)&&Bu(s)){if(!io(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ar(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function lr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yg(t,e){const n=new _g(t,e);return n.subscribe.bind(n)}class _g{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ls),i.error===void 0&&(i.error=ls),i.complete===void 0&&(i.complete=ls);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ls(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new la;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kg(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sg(t){return t===Kt?void 0:t}function kg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Eg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(M||(M={}));const Tg={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Cg=M.INFO,Pg={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Rg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Pg[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vl{constructor(e){this.name=e,this._logLevel=Cg,this._logHandler=Rg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const Ng=(t,e)=>e.some(n=>t instanceof n);let Vu,Hu;function Og(){return Vu||(Vu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ag(){return Hu||(Hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jf=new WeakMap,ua=new WeakMap,$f=new WeakMap,us=new WeakMap,yl=new WeakMap;function Lg(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Ot(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&jf.set(n,t)}).catch(()=>{}),yl.set(e,t),e}function Dg(t){if(ua.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});ua.set(t,e)}let ca={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ua.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$f.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xg(t){ca=t(ca)}function Mg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cs(this),e,...n);return $f.set(r,e.sort?e.sort():[e]),Ot(r)}:Ag().includes(t)?function(...e){return t.apply(cs(this),e),Ot(jf.get(this))}:function(...e){return Ot(t.apply(cs(this),e))}}function Ug(t){return typeof t=="function"?Mg(t):(t instanceof IDBTransaction&&Dg(t),Ng(t,Og())?new Proxy(t,ca):t)}function Ot(t){if(t instanceof IDBRequest)return Lg(t);if(us.has(t))return us.get(t);const e=Ug(t);return e!==t&&(us.set(t,e),yl.set(e,t)),e}const cs=t=>yl.get(t);function Fg(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Ot(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ot(s.result),l.oldVersion,l.newVersion,Ot(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const zg=["get","getKey","getAll","getAllKeys","count"],jg=["put","add","delete","clear"],ds=new Map;function Wu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ds.get(e))return ds.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zg.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ds.set(e,o),o}xg(t=>({...t,get:(e,n,r)=>Wu(e,n)||t.get(e,n,r),has:(e,n)=>!!Wu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const da="@firebase/app",bu="0.10.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new vl("@firebase/app"),Vg="@firebase/app-compat",Hg="@firebase/analytics-compat",Wg="@firebase/analytics",bg="@firebase/app-check-compat",Kg="@firebase/app-check",Gg="@firebase/auth",Qg="@firebase/auth-compat",Yg="@firebase/database",Jg="@firebase/database-compat",Xg="@firebase/functions",qg="@firebase/functions-compat",Zg="@firebase/installations",ev="@firebase/installations-compat",tv="@firebase/messaging",nv="@firebase/messaging-compat",rv="@firebase/performance",iv="@firebase/performance-compat",ov="@firebase/remote-config",sv="@firebase/remote-config-compat",av="@firebase/storage",lv="@firebase/storage-compat",uv="@firebase/firestore",cv="@firebase/vertexai-preview",dv="@firebase/firestore-compat",fv="firebase",hv="10.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="[DEFAULT]",pv={[da]:"fire-core",[Vg]:"fire-core-compat",[Wg]:"fire-analytics",[Hg]:"fire-analytics-compat",[Kg]:"fire-app-check",[bg]:"fire-app-check-compat",[Gg]:"fire-auth",[Qg]:"fire-auth-compat",[Yg]:"fire-rtdb",[Jg]:"fire-rtdb-compat",[Xg]:"fire-fn",[qg]:"fire-fn-compat",[Zg]:"fire-iid",[ev]:"fire-iid-compat",[tv]:"fire-fcm",[nv]:"fire-fcm-compat",[rv]:"fire-perf",[iv]:"fire-perf-compat",[ov]:"fire-rc",[sv]:"fire-rc-compat",[av]:"fire-gcs",[lv]:"fire-gcs-compat",[uv]:"fire-fst",[dv]:"fire-fst-compat",[cv]:"fire-vertex","fire-js":"fire-js",[fv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new Map,mv=new Map,ha=new Map;function Ku(t,e){try{t.container.addComponent(e)}catch(n){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function an(t){const e=t.name;if(ha.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;ha.set(e,t);for(const n of oo.values())Ku(n,t);for(const n of mv.values())Ku(n,t);return!0}function Bf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ue(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new Wn("app","Firebase",gv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=hv;function Vf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fa,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(n||(n=Uf()),!n)throw At.create("no-options");const o=oo.get(i);if(o){if(io(n,o.options)&&io(r,o.config))return o;throw At.create("duplicate-app",{appName:i})}const s=new Ig(i);for(const l of ha.values())s.addComponent(l);const a=new vv(n,r,s);return oo.set(i,a),a}function yv(t=fa){const e=oo.get(t);if(!e&&t===fa&&Uf())return Vf();if(!e)throw At.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let i=(r=pv[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(a.join(" "));return}an(new xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="firebase-heartbeat-database",wv=1,Fr="firebase-heartbeat-store";let fs=null;function Hf(){return fs||(fs=Fg(_v,wv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fr)}catch(n){console.warn(n)}}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),fs}async function Ev(t){try{const n=(await Hf()).transaction(Fr),r=await n.objectStore(Fr).get(Wf(t));return await n.done,r}catch(e){if(e instanceof zt)sn.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(n.message)}}}async function Gu(t,e){try{const r=(await Hf()).transaction(Fr,"readwrite");await r.objectStore(Fr).put(e,Wf(t)),await r.done}catch(n){if(n instanceof zt)sn.warn(n.message);else{const r=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(r.message)}}}function Wf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=1024,kv=30*24*60*60*1e3;class Iv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Qu();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=kv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qu(),{heartbeatsToSend:r,unsentEntries:i}=Tv(this._heartbeatsCache.heartbeats),o=xf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Qu(){return new Date().toISOString().substring(0,10)}function Tv(t,e=Sv){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Yu(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zf()?hg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ev(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yu(t){return xf(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){an(new xt("platform-logger",e=>new $g(e),"PRIVATE")),an(new xt("heartbeat",e=>new Iv(e),"PRIVATE")),Zt(da,bu,t),Zt(da,bu,"esm2017"),Zt("fire-js","")}Pv("");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new Map,Nv={activated:!1,tokenObservers:[]};function Be(t){return Rv.get(t)||Object.assign({},Nv)}const Ju={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,n,r,i,o){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=i,i>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new la,this.pending.promise.catch(n=>{}),await Av(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new la,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function Av(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},so=new Wn("appCheck","AppCheck",Lv);function bf(t){if(!Be(t).activated)throw so.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="firebase-app-check-database",xv=1,pa="firebase-app-check-store";let gi=null;function Mv(){return gi||(gi=new Promise((t,e)=>{try{const n=indexedDB.open(Dv,xv);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var i;e(so.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(pa,{keyPath:"compositeKey"})}}}catch(n){e(so.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),gi)}function Uv(t,e){return Fv(zv(t),e)}async function Fv(t,e){const r=(await Mv()).transaction(pa,"readwrite"),o=r.objectStore(pa).put({compositeKey:t,value:e});return new Promise((s,a)=>{o.onsuccess=l=>{s()},r.onerror=l=>{var u;a(so.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function zv(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new vl("@firebase/app-check");function Xu(t,e){return zf()?Uv(t,e).catch(n=>{ma.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv={error:"UNKNOWN_ERROR"};function $v(t){return ml.encodeString(JSON.stringify(t),!1)}async function ga(t,e=!1){const n=t.app;bf(n);const r=Be(n);let i=r.token,o;if(i&&!ur(i)&&(r.token=void 0,i=void 0),!i){const l=await r.cachedTokenPromise;l&&(ur(l)?i=l:await Xu(n,void 0))}if(!e&&i&&ur(i))return{token:i.token};let s=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),s=!0),i=await Be(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?ma.warn(l.message):ma.error(l),o=l}let a;return i?o?ur(i)?a={token:i.token,internalError:o}:a=Zu(o):(a={token:i.token},r.token=i,await Xu(n,i)):a=Zu(o),s&&Wv(n,a),a}async function Bv(t){const e=t.app;bf(e);const{provider:n}=Be(e);{const{token:r}=await n.getToken();return{token:r}}}function Vv(t,e,n,r){const{app:i}=t,o=Be(i),s={next:n,error:r,type:e};if(o.tokenObservers=[...o.tokenObservers,s],o.token&&ur(o.token)){const a=o.token;Promise.resolve().then(()=>{n({token:a.token}),qu(t)}).catch(()=>{})}o.cachedTokenPromise.then(()=>qu(t))}function Kf(t,e){const n=Be(t),r=n.tokenObservers.filter(i=>i.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function qu(t){const{app:e}=t,n=Be(e);let r=n.tokenRefresher;r||(r=Hv(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function Hv(t){const{app:e}=t;return new Ov(async()=>{const n=Be(e);let r;if(n.token?r=await ga(t,!0):r=await ga(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Be(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},Ju.RETRIAL_MIN_WAIT,Ju.RETRIAL_MAX_WAIT)}function Wv(t,e){const n=Be(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function ur(t){return t.expireTimeMillis-Date.now()>0}function Zu(t){return{token:$v(jv),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Be(this.app);for(const n of e)Kf(this.app,n.next);return Promise.resolve()}}function Kv(t,e){return new bv(t,e)}function Gv(t){return{getToken:e=>ga(t,e),getLimitedUseToken:()=>Bv(t),addTokenListener:e=>Vv(t,"INTERNAL",e),removeTokenListener:e=>Kf(t.app,e)}}const Qv="@firebase/app-check",Yv="0.8.4",Jv="app-check",ec="app-check-internal";function Xv(){an(new xt(Jv,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Kv(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(ec).initialize()})),an(new xt(ec,t=>{const e=t.getProvider("app-check").getImmediate();return Gv(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Zt(Qv,Yv)}Xv();var qv="firebase",Zv="10.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(qv,Zv,"app");function _l(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Gf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ey=Gf,Qf=new Wn("auth","Firebase",Gf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=new vl("@firebase/auth");function ty(t,...e){ao.logLevel<=M.WARN&&ao.warn(`Auth (${Kr}): ${t}`,...e)}function Oi(t,...e){ao.logLevel<=M.ERROR&&ao.error(`Auth (${Kr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,...e){throw El(t,...e)}function je(t,...e){return El(t,...e)}function wl(t,e,n){const r=Object.assign(Object.assign({},ey()),{[e]:n});return new Wn("auth","Firebase",r).create(e,{appName:t.name})}function rt(t){return wl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ny(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ne(t,"argument-error"),wl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function El(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qf.create(t,...e)}function P(t,e,...n){if(!t)throw El(e,...n)}function Ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oi(e),new Error(e)}function lt(t,e){t||Ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ry(){return tc()==="http:"||tc()==="https:"}function tc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ry()||cg()||"connection"in navigator)?navigator.onLine:!0}function oy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n){this.shortDelay=e,this.longDelay=n,lt(n>e,"Short delay should be less than long delay!"),this.isMobile=ug()||dg()}get(){return iy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e){lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Gr(3e4,6e4);function jt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $t(t,e,n,r,i={}){return Jf(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=br(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Yf.fetch()(Xf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Jf(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sy),e);try{const i=new uy(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw vi(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vi(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw vi(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw vi(t,"user-disabled",s);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw wl(t,h,u);Ne(t,h)}}catch(i){if(i instanceof zt)throw i;Ne(t,"network-request-failed",{message:String(i)})}}async function Qr(t,e,n,r,i={}){const o=await $t(t,e,n,r,i);return"mfaPendingCredential"in o&&Ne(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Xf(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sl(t.config,i):`${t.config.apiScheme}://${i}`}function ly(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),ay.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=je(t,e,r);return i.customData._tokenResponse=n,i}function nc(t){return t!==void 0&&t.enterprise!==void 0}class cy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ly(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function dy(t,e){return $t(t,"GET","/v2/recaptchaConfig",jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fy(t,e){return $t(t,"POST","/v1/accounts:delete",e)}async function qf(t,e){return $t(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hy(t,e=!1){const n=ct(t),r=await n.getIdToken(e),i=kl(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:_r(hs(i.auth_time)),issuedAtTime:_r(hs(i.iat)),expirationTime:_r(hs(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function hs(t){return Number(t)*1e3}function kl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Mf(n);return i?JSON.parse(i):(Oi("Failed to decode base64 JWT payload"),null)}catch(i){return Oi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rc(t){const e=kl(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zt&&py(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function py({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_r(this.lastLoginAt),this.creationTime=_r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zr(t,qf(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Zf(o.providerUserInfo):[],a=vy(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ya(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function gy(t){const e=ct(t);await lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vy(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Zf(t){return t.map(e=>{var{providerId:n}=e,r=_l(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy(t,e){const n=await Jf(t,{},async()=>{const r=br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Xf(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yf.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _y(t,e){return $t(t,"POST","/v2/accounts:revokeToken",jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){P(e.length!==0,"internal-error");const n=rc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await yy(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new An;return r&&(P(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(P(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new An,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class et{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=_l(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new my(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ya(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await zr(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hy(this,e)}reload(){return gy(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(rt(this.auth));const e=await this.getIdToken();return await zr(this,fy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:f,emailVerified:v,isAnonymous:E,providerData:I,stsTokenManager:T}=n;P(f&&T,e,"internal-error");const C=An.fromJSON(this.name,T);P(typeof f=="string",e,"internal-error"),ft(p,e.name),ft(m,e.name),P(typeof v=="boolean",e,"internal-error"),P(typeof E=="boolean",e,"internal-error"),ft(_,e.name),ft(g,e.name),ft(w,e.name),ft(x,e.name),ft(d,e.name),ft(c,e.name);const F=new et({uid:f,auth:e,email:m,emailVerified:v,displayName:p,isAnonymous:E,photoURL:g,phoneNumber:_,tenantId:w,stsTokenManager:C,createdAt:d,lastLoginAt:c});return I&&Array.isArray(I)&&(F.providerData=I.map(O=>Object.assign({},O))),x&&(F._redirectEventId=x),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new An;i.updateFromServerResponse(n);const o=new et({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lo(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];P(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Zf(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new An;a.updateFromIdToken(r);const l=new et({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ya(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new Map;function tt(t){lt(t instanceof Function,"Expected a class definition");let e=ic.get(t);return e?(lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ic.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eh.type="NONE";const oc=eh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t,e,n){return`firebase:${t}:${e}:${n}`}class Ln{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ai(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ai("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ln(tt(oc),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||tt(oc);const s=Ai(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(s);if(h){const p=et._fromJSON(e,h);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Ln(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Ln(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(th(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oh(e))return"Blackberry";if(sh(e))return"Webos";if(Il(e))return"Safari";if((e.includes("chrome/")||nh(e))&&!e.includes("edge/"))return"Chrome";if(ih(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function th(t=ae()){return/firefox\//i.test(t)}function Il(t=ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nh(t=ae()){return/crios\//i.test(t)}function rh(t=ae()){return/iemobile/i.test(t)}function ih(t=ae()){return/android/i.test(t)}function oh(t=ae()){return/blackberry/i.test(t)}function sh(t=ae()){return/webos/i.test(t)}function No(t=ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wy(t=ae()){var e;return No(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ey(){return fg()&&document.documentMode===10}function ah(t=ae()){return No(t)||ih(t)||sh(t)||oh(t)||/windows phone/i.test(t)||rh(t)}function Sy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(t,e=[]){let n;switch(t){case"Browser":n=sc(ae());break;case"Worker":n=`${sc(ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(t,e={}){return $t(t,"GET","/v2/passwordPolicy",jt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=6;class Cy{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:Ty,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ac(this),this.idTokenSubscription=new ac(this),this.beforeStateQueue=new ky(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ln.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qf(this,{idToken:e}),r=await et._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ue(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(rt(this));const n=e?ct(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Iy(this),n=new Cy(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _y(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Ln.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ty(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bt(t){return ct(t)}class ac{constructor(e){this.auth=e,this.observer=null,this.addObserver=yg(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ry(t){Oo=t}function uh(t){return Oo.loadJS(t)}function Ny(){return Oo.recaptchaEnterpriseScript}function Oy(){return Oo.gapiScript}function Ay(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ly="recaptcha-enterprise",Dy="NO_RECAPTCHA";class xy{constructor(e){this.type=Ly,this.auth=Bt(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{dy(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new cy(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;nc(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(Dy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&nc(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ny();l.length!==0&&(l+=a),uh(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function lc(t,e,n,r=!1){const i=new xy(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function _a(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await lc(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await lc(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t,e){const n=Bf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(io(o,e??{}))return i;Ne(i,"already-initialized")}return n.initialize({options:e})}function Uy(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Fy(t,e,n){const r=Bt(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=ch(e),{host:s,port:a}=zy(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),jy()}function ch(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zy(t){const e=ch(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:uc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:uc(s)}}}function uc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,n){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}async function $y(t,e){return $t(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(t,e){return Qr(t,"POST","/v1/accounts:signInWithPassword",jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(t,e){return Qr(t,"POST","/v1/accounts:signInWithEmailLink",jt(t,e))}async function Hy(t,e){return Qr(t,"POST","/v1/accounts:signInWithEmailLink",jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Tl{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new jr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new jr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _a(e,n,"signInWithPassword",By);case"emailLink":return Vy(e,{email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _a(e,r,"signUpPassword",$y);case"emailLink":return Hy(e,{idToken:n,email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(t,e){return Qr(t,"POST","/v1/accounts:signInWithIdp",jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="http://localhost";class ln extends Tl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ne("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=_l(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ln(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Dn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dn(e,n)}buildRequest(){const e={requestUri:Wy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=br(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ky(t){const e=ar(lr(t)).link,n=e?ar(lr(e)).deep_link_id:null,r=ar(lr(t)).deep_link_id;return(r?ar(lr(r)).link:null)||r||n||e||t}class Cl{constructor(e){var n,r,i,o,s,a;const l=ar(lr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=by((i=l.mode)!==null&&i!==void 0?i:null);P(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ky(e);try{return new Cl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.providerId=bn.PROVIDER_ID}static credential(e,n){return jr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cl.parseLink(n);return P(r,"argument-error"),jr._fromEmailAndCode(e,r.code,r.tenantId)}}bn.PROVIDER_ID="password";bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Yr{constructor(){super("facebook.com")}static credential(e){return ln._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Yr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ln._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Je.credential(n,r)}catch{return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com";Je.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Yr{constructor(){super("github.com")}static credential(e){return ln._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Yr{constructor(){super("twitter.com")}static credential(e,n){return ln._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(t,e){return Qr(t,"POST","/v1/accounts:signUp",jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await et._fromIdTokenResponse(e,r,i),s=cc(r);return new un({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cc(r);return new un({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends zt{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uo.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uo(e,n,r,i)}}function dh(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?uo._fromErrorAndOperation(t,o,e,r):o})}async function Qy(t,e,n=!1){const r=await zr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return un._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(t,e,n=!1){const{auth:r}=t;if(Ue(r.app))return Promise.reject(rt(r));const i="reauthenticate";try{const o=await zr(t,dh(r,i,e,t),n);P(o.idToken,r,"internal-error");const s=kl(o.idToken);P(s,r,"internal-error");const{sub:a}=s;return P(t.uid===a,r,"user-mismatch"),un._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ne(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fh(t,e,n=!1){if(Ue(t.app))return Promise.reject(rt(t));const r="signIn",i=await dh(t,r,e),o=await un._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function Jy(t,e){return fh(Bt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(t){const e=Bt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Xy(t,e,n){if(Ue(t.app))return Promise.reject(rt(t));const r=Bt(t),s=await _a(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Gy).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&hh(t),l}),a=await un._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function qy(t,e,n){return Ue(t.app)?Promise.reject(rt(t)):Jy(ct(t),bn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hh(t),r})}function Zy(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function e0(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function t0(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function n0(t){return ct(t).signOut()}const co="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(co,"1"),this.storage.removeItem(co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(){const t=ae();return Il(t)||No(t)}const i0=1e3,o0=10;class mh extends ph{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=r0()&&Sy(),this.fallbackToPolling=ah(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Ey()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,o0):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},i0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mh.type="LOCAL";const s0=mh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends ph{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gh.type="SESSION";const vh=gh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ao(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await a0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ao.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Rl("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(h),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function u0(t){Ge().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function c0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function d0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function f0(){return yh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="firebaseLocalStorageDb",h0=1,fo="firebaseLocalStorage",wh="fbase_key";class Jr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lo(t,e){return t.transaction([fo],e?"readwrite":"readonly").objectStore(fo)}function p0(){const t=indexedDB.deleteDatabase(_h);return new Jr(t).toPromise()}function wa(){const t=indexedDB.open(_h,h0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fo,{keyPath:wh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fo)?e(r):(r.close(),await p0(),e(await wa()))})})}async function dc(t,e,n){const r=Lo(t,!0).put({[wh]:e,value:n});return new Jr(r).toPromise()}async function m0(t,e){const n=Lo(t,!1).get(e),r=await new Jr(n).toPromise();return r===void 0?null:r.value}function fc(t,e){const n=Lo(t,!0).delete(e);return new Jr(n).toPromise()}const g0=800,v0=3;class Eh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>v0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ao._getInstance(f0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await c0(),!this.activeServiceWorker)return;this.sender=new l0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||d0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wa();return await dc(e,co,"1"),await fc(e,co),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>m0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Lo(i,!1).getAll();return new Jr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),g0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Eh.type="LOCAL";const y0=Eh;new Gr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t,e){return e?tt(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends Tl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _0(t){return fh(t.auth,new Nl(t),t.bypassAuthState)}function w0(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Yy(n,new Nl(t),t.bypassAuthState)}async function E0(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Qy(n,new Nl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _0;case"linkViaPopup":case"linkViaRedirect":return E0;case"reauthViaPopup":case"reauthViaRedirect":return w0;default:Ne(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=new Gr(2e3,1e4);async function k0(t,e,n){if(Ue(t.app))return Promise.reject(je(t,"operation-not-supported-in-this-environment"));const r=Bt(t);ny(t,e,Pl);const i=Sh(r,n);return new Jt(r,"signInViaPopup",e,i).executeNotNull()}class Jt extends kh{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=Rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,S0.get())};e()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="pendingRedirect",Li=new Map;class T0 extends kh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Li.get(this.auth._key());if(!e){try{const r=await C0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Li.set(this.auth._key(),e)}return this.bypassAuthState||Li.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function C0(t,e){const n=N0(e),r=R0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function P0(t,e){Li.set(t._key(),e)}function R0(t){return tt(t._redirectPersistence)}function N0(t){return Ai(I0,t.config.apiKey,t.name)}async function O0(t,e,n=!1){if(Ue(t.app))return Promise.reject(rt(t));const r=Bt(t),i=Sh(r,e),s=await new T0(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=10*60*1e3;class L0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ih(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(je(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A0&&this.cachedEventUids.clear(),this.cachedEventUids.has(hc(e))}saveEventToCache(e){this.cachedEventUids.add(hc(e)),this.lastProcessedEventTime=Date.now()}}function hc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ih({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ih(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(t,e={}){return $t(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U0=/^https?/;async function F0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await x0(t);for(const n of e)try{if(z0(n))return}catch{}Ne(t,"unauthorized-domain")}function z0(t){const e=va(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!U0.test(n))return!1;if(M0.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=new Gr(3e4,6e4);function pc(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $0(t){return new Promise((e,n)=>{var r,i,o;function s(){pc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pc(),n(je(t,"network-request-failed"))},timeout:j0.get()})}if(!((i=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Ge().gapi)===null||o===void 0)&&o.load)s();else{const a=Ay("iframefcb");return Ge()[a]=()=>{gapi.load?s():n(je(t,"network-request-failed"))},uh(`${Oy()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Di=null,e})}let Di=null;function B0(t){return Di=Di||$0(t),Di}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=new Gr(5e3,15e3),H0="__/auth/iframe",W0="emulator/auth/iframe",b0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},K0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G0(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sl(e,W0):`https://${t.config.authDomain}/${H0}`,r={apiKey:e.apiKey,appName:t.name,v:Kr},i=K0.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${br(r).slice(1)}`}async function Q0(t){const e=await B0(t),n=Ge().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:G0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b0,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=je(t,"network-request-failed"),a=Ge().setTimeout(()=>{o(s)},V0.get());function l(){Ge().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},J0=500,X0=600,q0="_blank",Z0="http://localhost";class mc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function e_(t,e,n,r=J0,i=X0){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Y0),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ae().toLowerCase();n&&(a=nh(u)?q0:n),th(u)&&(e=e||Z0,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[_,g])=>`${m}${_}=${g},`,"");if(wy(u)&&a!=="_self")return t_(e||"",a),new mc(null);const p=window.open(e||"",a,h);P(p,t,"popup-blocked");try{p.focus()}catch{}return new mc(p)}function t_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="__/auth/handler",r_="emulator/auth/handler",i_=encodeURIComponent("fac");async function gc(t,e,n,r,i,o){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kr,eventId:i};if(e instanceof Pl){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",vg(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))s[h]=p}if(e instanceof Yr){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(s.scopes=h.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${i_}=${encodeURIComponent(l)}`:"";return`${o_(t)}?${br(a).slice(1)}${u}`}function o_({config:t}){return t.emulator?Sl(t,r_):`https://${t.authDomain}/${n_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="webStorageSupport";class s_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vh,this._completeRedirectFn=O0,this._overrideRedirectResult=P0}async _openPopup(e,n,r,i){var o;lt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await gc(e,n,r,va(),i);return e_(e,s,Rl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await gc(e,n,r,va(),i);return u0(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(lt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Q0(e),r=new L0(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ps,{type:ps},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ps];s!==void 0&&n(!!s),Ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=F0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ah()||Il()||No()}}const a_=s_;var vc="@firebase/auth",yc="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function c_(t){an(new xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;P(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lh(t)},u=new Py(r,i,o,l);return Uy(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),an(new xt("auth-internal",e=>{const n=Bt(e.getProvider("auth").getImmediate());return(r=>new l_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(vc,yc,u_(t)),Zt(vc,yc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=5*60,f_=Ff("authIdTokenMaxAge")||d_;let _c=null;const h_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>f_)return;const i=n==null?void 0:n.token;_c!==i&&(_c=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function p_(t=yv()){const e=Bf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=My(t,{popupRedirectResolver:a_,persistence:[y0,s0,vh]}),r=Ff("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=h_(o.toString());e0(n,s,()=>s(n.currentUser)),Zy(n,a=>s(a))}}const i=lg("auth");return i&&Fy(n,`http://${i}`),n}function m_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ry({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=je("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",m_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});c_("Browser");const g_={apiKey:"AIzaSyDzG4P1G20ijHy1x88QJV-9QeGIHJ1ed5E",authDomain:"eyc-gestion.firebaseapp.com",projectId:"eyc-gestion",storageBucket:"eyc-gestion.appspot.com",messagingSenderId:"473796665827",appId:"1:473796665827:web:246f520a4450844415c0d6"},v_=Vf(g_),nr=p_(v_),Th=Me.createContext(),y_=()=>{const t=Me.useContext(Th);return t||console.log("Error al crear el auth context"),t};function __({children:t}){const[e,n]=Me.useState("");Me.useEffect(()=>{const a=t0(nr,l=>{l?n(l):(console.log("No hay usuario ingresado"),n(""))});return()=>a()},[]);const r=async(a,l)=>{const u=await Xy(nr,a,l);console.log(u)},i=async(a,l)=>{const u=await qy(nr,a,l);console.log(u)},o=async(a,l)=>{const u=new Je;return await k0(nr,u)},s=async()=>{const a=await n0(nr);console.log(a)};return K.jsx(Th.Provider,{value:{register:r,login:i,loginWithGoogle:o,logout:s,user:e},children:t})}function w_(){const t=y_(),{displayName:e}=t.user;console.log(e);const[n,r]=Me.useState(""),[i,o]=Me.useState(""),[s,a]=Me.useState(""),[l,u]=Me.useState("");console.log(n,i,"stateLoginFireBase");const h=g=>{g.preventDefault(),t.register(n,i)},p=g=>{g.preventDefault(),t.login(s,l)},m=g=>{g.preventDefault(),t.loginWithGoogle()},_=()=>{t.logout()};return console.log(s,l,"stateLogin"),K.jsxs("div",{className:"App",children:[e&&K.jsxs("p",{children:["User: ",e]}),K.jsxs("form",{className:"form",children:[K.jsx("h3",{className:"title",children:"Registro"}),K.jsx("input",{onChange:g=>r(g.target.value),type:"email",className:"input"}),K.jsx("input",{onChange:g=>o(g.target.value),type:"password",className:"input"}),K.jsx("button",{onClick:g=>h(g),className:"button",children:"submit"})]}),K.jsxs("form",{className:"form",children:[K.jsx("h3",{className:"title",children:"Login"}),K.jsx("input",{onChange:g=>a(g.target.value),type:"email",className:"input"}),K.jsx("input",{onChange:g=>u(g.target.value),type:"password",className:"input"}),K.jsx("button",{onClick:g=>p(g),className:"button",children:"submit"}),K.jsx("button",{onClick:g=>m(g),className:"button",children:"Google"})]}),K.jsx("button",{onClick:()=>_(),className:"button",children:"Logout"})]})}function E_(){return K.jsx("div",{children:K.jsxs(__,{children:[K.jsx("h1",{children:"E&C GESTION"}),K.jsx(w_,{})]})})}ms.createRoot(document.getElementById("root")).render(K.jsx(Hh.StrictMode,{children:K.jsx(E_,{})}));
