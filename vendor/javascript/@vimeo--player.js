// @vimeo/player@2.24.0 downloaded from https://ga.jspm.io/npm:@vimeo/player@2.24.0/dist/player.es.js

function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _regeneratorRuntime(){_regeneratorRuntime=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function define(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{define({},"")}catch(e){define=function(e,t,r){return e[t]=r}}function wrap(e,t,r,o){var a=t&&t.prototype instanceof Generator?t:Generator,i=Object.create(a.prototype),c=new Context(o||[]);return n(i,"_invoke",{value:makeInvokeMethod(e,r,c)}),i}function tryCatch(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=wrap;var u={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var l={};define(l,a,(function(){return this}));var s=Object.getPrototypeOf,f=s&&s(s(values([])));f&&f!==t&&r.call(f,a)&&(l=f);var d=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(l);function defineIteratorMethods(e){["next","throw","return"].forEach((function(t){define(e,t,(function(e){return this._invoke(t,e)}))}))}function AsyncIterator(e,t){function invoke(n,o,a,i){var c=tryCatch(e[n],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){invoke("next",e,a,i)}),(function(e){invoke("throw",e,a,i)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return invoke("throw",e,a,i)}))}i(c.arg)}var o;n(this,"_invoke",{value:function(e,r){function callInvokeWithMethodAndArg(){return new t((function(t,n){invoke(e,r,t,n)}))}return o=o?o.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return doneResult()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=maybeInvokeDelegate(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=tryCatch(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function maybeInvokeDelegate(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,maybeInvokeDelegate(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),u;var o=tryCatch(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,u;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function pushTryEntry(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function resetTryEntry(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Context(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function next(){for(;++n<e.length;)if(r.call(e,n))return next.value=e[n],next.done=!1,next;return next.value=void 0,next.done=!0,next};return o.next=o}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,n(d,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),n(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,define(e,c,"GeneratorFunction")),e.prototype=Object.create(d),e},e.awrap=function(e){return{__await:e}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,i,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new AsyncIterator(wrap(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},defineIteratorMethods(d),define(d,c,"Generator"),define(d,a,(function(){return this})),define(d,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function next(){for(;r.length;){var e=r.pop();if(e in t)return next.value=e,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function handle(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return handle("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:values(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}function asyncGeneratorStep(e,t,r,n,o,a,i){try{var c=e[a](i);var u=c.value}catch(e){r(e);return}c.done?t(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function _next(e){asyncGeneratorStep(a,n,o,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,n,o,_next,_throw,"throw",e)}_next(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){t&&_defineProperties(e.prototype,t);r&&_defineProperties(e,r);Object.defineProperty(e,"prototype",{writable:false});return e}function _defineProperty(e,t,r){t=_toPropertyKey(t);t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}function _inherits(e,t){if(typeof t!=="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)};return _getPrototypeOf(e)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){e.__proto__=t;return e};return _setPrototypeOf(e,t)}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(e){return false}}function _construct(e,t,r){_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function _construct(e,t,r){var n=[null];n.push.apply(n,t);var o=Function.bind.apply(e,n);var a=new o;r&&_setPrototypeOf(a,r.prototype);return a};return _construct.apply(null,arguments)}function _isNativeFunction(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function _wrapNativeSuper(e){var t=typeof Map==="function"?new Map:void 0;_wrapNativeSuper=function _wrapNativeSuper(e){if(e===null||!_isNativeFunction(e))return e;if(typeof e!=="function")throw new TypeError("Super expression must either be null or a function");if(typeof t!=="undefined"){if(t.has(e))return t.get(e);t.set(e,Wrapper)}function Wrapper(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}Wrapper.prototype=Object.create(e.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,e)};return _wrapNativeSuper(e)}function _assertThisInitialized(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){if(t&&(typeof t==="object"||typeof t==="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _toPrimitive(e,t){if(typeof e!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return typeof t==="symbol"?t:String(t)}
/**
 * Check to see this is a node environment.
 * @type {Boolean}
 */var e=typeof global!=="undefined"&&{}.toString.call(global)==="[object global]";
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */function getMethodName(e,t){return e.indexOf(t.toLowerCase())===0?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */function isDomElement(e){return Boolean(e&&e.nodeType===1&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */function isInteger(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */function isVimeoUrl(e){return/^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(e)}
/**
 * Check to see if the URL is for a Vimeo embed.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */function isVimeoEmbed(e){var t=/^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;return t.test(e)}function getOembedDomain(e){var t=(e||"").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/);var r=(t&&t[1]||"").replace("player.","");var n=[".videoji.hk",".vimeo.work",".videoji.cn"];for(var o=0,a=n;o<a.length;o++){var i=a[o];if(r.endsWith(i))return r}return"vimeo.com"}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */function getVimeoUrl(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var t=e.id;var r=e.url;var n=t||r;if(!n)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(isInteger(n))return"https://vimeo.com/".concat(n);if(isVimeoUrl(n))return n.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(n,"” is not a vimeo.com url."))}
/**
 * A utility method for attaching and detaching event handlers
 *
 * @param {EventTarget} target
 * @param {string | string[]} eventName
 * @param {function} callback
 * @param {'addEventListener' | 'on'} onName
 * @param {'removeEventListener' | 'off'} offName
 * @return {{cancel: (function(): void)}}
 */var t=function subscribe(e,t,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"addEventListener";var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"removeEventListener";var a=typeof t==="string"?[t]:t;a.forEach((function(t){e[n](t,r)}));return{cancel:function cancel(){return a.forEach((function(t){return e[o](t,r)}))}}};var r=typeof Array.prototype.indexOf!=="undefined";var n=typeof window!=="undefined"&&typeof window.postMessage!=="undefined";if(!e&&(!r||!n))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var o=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */}(function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty;var r=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{value:1}).x===1}catch(e){}}();var defineProperty=function(e,t,n){r?Object.defineProperty(e,t,{configurable:true,writable:true,value:n}):e[t]=n};e.WeakMap=function(){function WeakMap(){if(this===void 0)throw new TypeError("Constructor WeakMap requires 'new'");defineProperty(this,"_id",genId("_WeakMap"));if(arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}defineProperty(WeakMap.prototype,"delete",(function(e){checkInstance(this,"delete");if(!isObject(e))return false;var t=e[this._id];if(t&&t[0]===e){delete e[this._id];return true}return false}));defineProperty(WeakMap.prototype,"get",(function(e){checkInstance(this,"get");if(isObject(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}));defineProperty(WeakMap.prototype,"has",(function(e){checkInstance(this,"has");if(!isObject(e))return false;var t=e[this._id];return!(!t||t[0]!==e)}));defineProperty(WeakMap.prototype,"set",(function(e,t){checkInstance(this,"set");if(!isObject(e))throw new TypeError("Invalid value used as weak map key");var r=e[this._id];if(r&&r[0]===e){r[1]=t;return this}defineProperty(e,this._id,[e,t]);return this}));function checkInstance(e,r){if(!isObject(e)||!t.call(e,"_id"))throw new TypeError(r+" method called on incompatible receiver "+typeof e)}function genId(e){return e+"_"+rand()+"."+rand()}function rand(){return Math.random().toString().substring(2)}defineProperty(WeakMap,"_polyfill",true);return WeakMap}()}function isObject(e){return Object(e)===e}})(typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:typeof window!=="undefined"?window:(typeof o!=="undefined",o));var a=createCommonjsModule((function(e){(function UMD(t,r,n){r[t]=r[t]||n();e.exports&&(e.exports=r[t])})("Promise",(typeof o!="undefined",o),(function DEF(){var e,t,r,n=Object.prototype.toString,o=typeof setImmediate!="undefined"?function timer(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{});e=function builtInProp(e,t,r,n){return Object.defineProperty(e,t,{value:r,writable:true,configurable:n!==false})}}catch(t){e=function builtInProp(e,t,r){e[t]=r;return e}}r=function Queue(){var e,r,n;function Item(e,t){this.fn=e;this.self=t;this.next=void 0}return{add:function add(t,o){n=new Item(t,o);r?r.next=n:e=n;r=n;n=void 0},drain:function drain(){var n=e;e=r=t=void 0;while(n){n.fn.call(n.self);n=n.next}}}}();function schedule(e,n){r.add(e,n);t||(t=o(r.drain))}function isThenable(e){var t,r=typeof e;e==null||r!="object"&&r!="function"||(t=e.then);return typeof t=="function"&&t}function notify(){for(var e=0;e<this.chain.length;e++)notifyIsolated(this,this.state===1?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function notifyIsolated(e,t,r){var n,o;try{if(t===false)r.reject(e.msg);else{n=t===true?e.msg:t.call(void 0,e.msg);n===r.promise?r.reject(TypeError("Promise-chain cycle")):(o=isThenable(n))?o.call(n,r.resolve,r.reject):r.resolve(n)}}catch(e){r.reject(e)}}function resolve(e){var t,r=this;if(!r.triggered){r.triggered=true;r.def&&(r=r.def);try{if(t=isThenable(e))schedule((function(){var n=new MakeDefWrapper(r);try{t.call(e,(function $resolve$(){resolve.apply(n,arguments)}),(function $reject$(){reject.apply(n,arguments)}))}catch(e){reject.call(n,e)}}));else{r.msg=e;r.state=1;r.chain.length>0&&schedule(notify,r)}}catch(e){reject.call(new MakeDefWrapper(r),e)}}}function reject(e){var t=this;if(!t.triggered){t.triggered=true;t.def&&(t=t.def);t.msg=e;t.state=2;t.chain.length>0&&schedule(notify,t)}}function iteratePromises(e,t,r,n){for(var o=0;o<t.length;o++)(function IIFE(o){e.resolve(t[o]).then((function $resolver$(e){r(o,e)}),n)})(o)}function MakeDefWrapper(e){this.def=e;this.triggered=false}function MakeDef(e){this.promise=e;this.state=0;this.triggered=false;this.chain=[];this.msg=void 0}function Promise(e){if(typeof e!="function")throw TypeError("Not a function");if(this.__NPO__!==0)throw TypeError("Not a promise");this.__NPO__=1;var t=new MakeDef(this);this.then=function then(e,r){var n={success:typeof e!="function"||e,failure:typeof r=="function"&&r};n.promise=new this.constructor((function extractChain(e,t){if(typeof e!="function"||typeof t!="function")throw TypeError("Not a function");n.resolve=e;n.reject=t}));t.chain.push(n);t.state!==0&&schedule(notify,t);return n.promise};this.catch=function $catch$(e){return this.then(void 0,e)};try{e.call(void 0,(function publicResolve(e){resolve.call(t,e)}),(function publicReject(e){reject.call(t,e)}))}catch(e){reject.call(t,e)}}var a=e({},"constructor",Promise,false);Promise.prototype=a;e(a,"__NPO__",0,false);e(Promise,"resolve",(function Promise$resolve(e){var t=this;return e&&typeof e=="object"&&e.__NPO__===1?e:new t((function executor(t,r){if(typeof t!="function"||typeof r!="function")throw TypeError("Not a function");t(e)}))}));e(Promise,"reject",(function Promise$reject(e){return new this((function executor(t,r){if(typeof t!="function"||typeof r!="function")throw TypeError("Not a function");r(e)}))}));e(Promise,"all",(function Promise$all(e){var t=this;return n.call(e)!="[object Array]"?t.reject(TypeError("Not an array")):e.length===0?t.resolve([]):new t((function executor(r,n){if(typeof r!="function"||typeof n!="function")throw TypeError("Not a function");var o=e.length,a=Array(o),i=0;iteratePromises(t,e,(function resolver(e,t){a[e]=t;++i===o&&r(a)}),n)}))}));e(Promise,"race",(function Promise$race(e){var t=this;return n.call(e)!="[object Array]"?t.reject(TypeError("Not an array")):new t((function executor(r,n){if(typeof r!="function"||typeof n!="function")throw TypeError("Not a function");iteratePromises(t,e,(function resolver(e,t){r(t)}),n)}))}));return Promise}))}));var i=new WeakMap;
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */function storeCallback(e,t,r){var n=i.get(e.element)||{};t in n||(n[t]=[]);n[t].push(r);i.set(e.element,n)}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */function getCallbacks(e,t){var r=i.get(e.element)||{};return r[t]||[]}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */function removeCallback(e,t,r){var n=i.get(e.element)||{};if(!n[t])return true;if(!r){n[t]=[];i.set(e.element,n);return true}var o=n[t].indexOf(r);o!==-1&&n[t].splice(o,1);i.set(e.element,n);return n[t]&&n[t].length===0}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */function shiftCallbacks(e,t){var r=getCallbacks(e,t);if(r.length<1)return false;var n=r.shift();removeCallback(e,t,n);return n}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */function swapCallbacks(e,t){var r=i.get(e);i.set(t,r);i.delete(e)}
/**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */function parseMessageData(e){if(typeof e==="string")try{e=JSON.parse(e)}catch(e){console.warn(e);return{}}return e}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */function postMessage(e,t,r){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var n={method:t};r!==void 0&&(n.value=r);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(n=JSON.stringify(n));e.element.contentWindow.postMessage(n,e.origin)}}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */function processData(e,t){t=parseMessageData(t);var r=[];var n;if(t.event){if(t.event==="error"){var o=getCallbacks(e,t.data.method);o.forEach((function(r){var n=new Error(t.data.message);n.name=t.data.name;r.reject(n);removeCallback(e,t.data.method,r)}))}r=getCallbacks(e,"event:".concat(t.event));n=t.data}else if(t.method){var a=shiftCallbacks(e,t.method);if(a){r.push(a);n=t.value}}r.forEach((function(t){try{if(typeof t==="function"){t.call(e,n);return}t.resolve(n)}catch(e){}}))}var c=["airplay","audio_tracks","autopause","autoplay","background","byline","cc","chapter_id","chapters","chromecast","color","colors","controls","dnt","end_time","fullscreen","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","play_button_position","playsinline","portrait","progress_bar","quality_selector","responsive","speed","start_time","texttrack","title","transcript","transparent","unmute_button","url","vimeo_logo","volume","watch_full_video","width"];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */function getOEmbedParameters(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return c.reduce((function(t,r){var n=e.getAttribute("data-vimeo-".concat(r));(n||n==="")&&(t[r]=n===""?1:n);return t}),t)}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */function createEmbed(e,t){var r=e.html;if(!t)throw new TypeError("An element must be provided");if(t.getAttribute("data-vimeo-initialized")!==null)return t.querySelector("iframe");var n=document.createElement("div");n.innerHTML=r;t.appendChild(n.firstChild);t.setAttribute("data-vimeo-initialized","true");return t.querySelector("iframe")}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */function getOEmbedData(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};var r=arguments.length>2?arguments[2]:void 0;return new Promise((function(n,o){if(!isVimeoUrl(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var a=getOembedDomain(e);var i="https://".concat(a,"/api/oembed.json?url=").concat(encodeURIComponent(e));for(var c in t)t.hasOwnProperty(c)&&(i+="&".concat(c,"=").concat(encodeURIComponent(t[c])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,true);u.onload=function(){if(u.status!==404)if(u.status!==403)try{var t=JSON.parse(u.responseText);if(t.domain_status_code===403){createEmbed(t,r);o(new Error("“".concat(e,"” is not embeddable.")));return}n(t)}catch(e){o(e)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))};u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))};u.send()}))}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function initializeEmbeds(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;var t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));var r=function handleError(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(e.getAttribute("data-vimeo-defer")!==null)return;var t=getOEmbedParameters(e);var n=getVimeoUrl(t);getOEmbedData(n,t,e).then((function(t){return createEmbed(t,e)})).catch(r)}catch(e){r(e)}}))}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function resizeEmbeds(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=true;var t=function onMessage(t){if(isVimeoUrl(t.origin)&&t.data&&t.data.event==="spacechange"){var r=e.querySelectorAll("iframe");for(var n=0;n<r.length;n++)if(r[n].contentWindow===t.source){var o=r[n].parentElement;o.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}}};window.addEventListener("message",t)}}
/**
 * Add chapters to existing metadata for Google SEO
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function initAppendVideoMetadata(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=true;var t=function onMessage(t){if(isVimeoUrl(t.origin)){var r=parseMessageData(t.data);if(r&&r.event==="ready"){var n=e.querySelectorAll("iframe");for(var o=0;o<n.length;o++){var a=n[o];var i=a.contentWindow===t.source;if(isVimeoEmbed(a.src)&&i){var c=new h(a);c.callMethod("appendVideoMetadata",window.location.href)}}}}};window.addEventListener("message",t)}}
/**
 * Seek to time indicated by vimeo_t query parameter if present in URL
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function checkUrlTimeParam(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=true;var t=function handleError(e){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(e))};var r=function onMessage(r){if(isVimeoUrl(r.origin)){var n=parseMessageData(r.data);if(n&&n.event==="ready"){var o=e.querySelectorAll("iframe");var a=function _loop(){var e=o[i];var n=e.contentWindow===r.source;if(isVimeoEmbed(e.src)&&n){var a=new h(e);a.getVideoId().then((function(e){var t=new RegExp("[?&]vimeo_t_".concat(e,"=([^&#]*)")).exec(window.location.href);if(t&&t[1]){var r=decodeURI(t[1]);a.setCurrentTime(r)}})).catch(t)}};for(var i=0;i<o.length;i++)a()}}};window.addEventListener("message",r)}}function initializeScreenfull(){var e=function(){var e;var t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];var r=0;var n=t.length;var o={};for(;r<n;r++){e=t[r];if(e&&e[1]in document){for(r=0;r<e.length;r++)o[t[0][r]]=e[r];return o}}return false}();var t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror};var r={request:function request(t){return new Promise((function(n,o){var a=function onFullScreenEntered(){r.off("fullscreenchange",onFullScreenEntered);n()};r.on("fullscreenchange",a);t=t||document.documentElement;var i=t[e.requestFullscreen]();i instanceof Promise&&i.then(a).catch(o)}))},exit:function exit(){return new Promise((function(t,n){if(r.isFullscreen){var o=function onFullScreenExit(){r.off("fullscreenchange",onFullScreenExit);t()};r.on("fullscreenchange",o);var a=document[e.exitFullscreen]();a instanceof Promise&&a.then(o).catch(n)}else t()}))},on:function on(e,r){var n=t[e];n&&document.addEventListener(n,r)},off:function off(e,r){var n=t[e];n&&document.removeEventListener(n,r)}};Object.defineProperties(r,{isFullscreen:{get:function get(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:true,get:function get(){return document[e.fullscreenElement]}},isEnabled:{enumerable:true,get:function get(){return Boolean(document[e.fullscreenEnabled])}}});return r}
/** @typedef {import('./timing-src-connector.types').PlayerControls} PlayerControls */
/** @typedef {import('./timing-object.types').TimingObject} TimingObject */
/** @typedef {import('./timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions */
/** @typedef {(msg: string) => any} Logger */
/** @typedef {import('timing-object.types').TConnectionState} TConnectionState */
/**
 * @type {TimingSrcConnectorOptions}
 *
 * For details on these properties and their effects, see the typescript definition referenced above.
 */var u={role:"viewer",autoPlayMuted:true,allowedDrift:.3,maxAllowedDrift:1,minCheckInterval:.1,maxRateAdjustment:.2,maxTimeToCatchUp:1};var l=function(e){_inherits(TimingSrcConnector,e);var r=_createSuper(TimingSrcConnector);
/**
   * @param {PlayerControls} player
   * @param {TimingObject} timingObject
   * @param {TimingSrcConnectorOptions} options
   * @param {Logger} logger
   */function TimingSrcConnector(e,t){var n;var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};var a=arguments.length>3?arguments[3]:void 0;_classCallCheck(this,TimingSrcConnector);n=r.call(this);_defineProperty(_assertThisInitialized(n),"logger",void 0);_defineProperty(_assertThisInitialized(n),"speedAdjustment",0);
/**
     * @param {PlayerControls} player
     * @param {number} newAdjustment
     * @return {Promise<void>}
     */_defineProperty(_assertThisInitialized(n),"adjustSpeed",function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(e,t){var r;return _regeneratorRuntime().wrap((function _callee$(o){while(1)switch(o.prev=o.next){case 0:if(!(n.speedAdjustment===t)){o.next=2;break}return o.abrupt("return");case 2:o.next=4;return e.getPlaybackRate();case 4:o.t0=o.sent;o.t1=n.speedAdjustment;o.t2=o.t0-o.t1;o.t3=t;r=o.t2+o.t3;n.log("New playbackRate:  ".concat(r));o.next=12;return e.setPlaybackRate(r);case 12:n.speedAdjustment=t;case 13:case"end":return o.stop()}}),_callee)})));return function(t,r){return e.apply(this,arguments)}}());n.logger=a;n.init(t,e,_objectSpread2(_objectSpread2({},u),o));return n}_createClass(TimingSrcConnector,[{key:"disconnect",value:function disconnect(){this.dispatchEvent(new Event("disconnect"))}
/**
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @param {TimingSrcConnectorOptions} options
     * @return {Promise<void>}
     */},{key:"init",value:function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(e,r,n){var o=this;var a,i,c;return _regeneratorRuntime().wrap((function _callee2$(u){while(1)switch(u.prev=u.next){case 0:u.next=2;return this.waitForTOReadyState(e,"open");case 2:if(!(n.role==="viewer")){u.next=10;break}u.next=5;return this.updatePlayer(e,r,n);case 5:a=t(e,"change",(function(){return o.updatePlayer(e,r,n)}));i=this.maintainPlaybackPosition(e,r,n);this.addEventListener("disconnect",(function(){i.cancel();a.cancel()}));u.next=14;break;case 10:u.next=12;return this.updateTimingObject(e,r);case 12:c=t(r,["seeked","play","pause","ratechange"],(function(){return o.updateTimingObject(e,r)}),"on","off");this.addEventListener("disconnect",(function(){return c.cancel()}));case 14:case"end":return u.stop()}}),_callee2,this)})));function init(t,r,n){return e.apply(this,arguments)}return init}()
/**
     * Sets the TimingObject's state to reflect that of the player
     *
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @return {Promise<void>}
     */},{key:"updateTimingObject",value:function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function _callee3(e,t){return _regeneratorRuntime().wrap((function _callee3$(r){while(1)switch(r.prev=r.next){case 0:r.t0=e;r.next=3;return t.getCurrentTime();case 3:r.t1=r.sent;r.next=6;return t.getPaused();case 6:if(!r.sent){r.next=10;break}r.t2=0;r.next=13;break;case 10:r.next=12;return t.getPlaybackRate();case 12:r.t2=r.sent;case 13:r.t3=r.t2;r.t4={position:r.t1,velocity:r.t3};r.t0.update.call(r.t0,r.t4);case 16:case"end":return r.stop()}}),_callee3)})));function updateTimingObject(t,r){return e.apply(this,arguments)}return updateTimingObject}()
/**
     * Sets the player's timing state to reflect that of the TimingObject
     *
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @param {TimingSrcConnectorOptions} options
     * @return {Promise<void>}
     */},{key:"updatePlayer",value:function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function _callee5(e,t,r){var n,o,a;return _regeneratorRuntime().wrap((function _callee5$(i){while(1)switch(i.prev=i.next){case 0:n=e.query(),o=n.position,a=n.velocity;typeof o==="number"&&t.setCurrentTime(o);if(!(typeof a==="number")){i.next=25;break}if(!(a===0)){i.next=11;break}i.next=6;return t.getPaused();case 6:i.t0=i.sent;if(!(i.t0===false)){i.next=9;break}t.pause();case 9:i.next=25;break;case 11:if(!(a>0)){i.next=25;break}i.next=14;return t.getPaused();case 14:i.t1=i.sent;if(!(i.t1===true)){i.next=19;break}i.next=18;return t.play().catch(function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function _callee4(e){return _regeneratorRuntime().wrap((function _callee4$(n){while(1)switch(n.prev=n.next){case 0:if(!(e.name==="NotAllowedError"&&r.autoPlayMuted)){n.next=5;break}n.next=3;return t.setMuted(true);case 3:n.next=5;return t.play().catch((function(e){return console.error("Couldn't play the video from TimingSrcConnector. Error:",e)}));case 5:case"end":return n.stop()}}),_callee4)})));return function(t){return e.apply(this,arguments)}}());case 18:this.updatePlayer(e,t,r);case 19:i.next=21;return t.getPlaybackRate();case 21:i.t2=i.sent;i.t3=a;if(!(i.t2!==i.t3)){i.next=25;break}t.setPlaybackRate(a);case 25:case"end":return i.stop()}}),_callee5,this)})));function updatePlayer(t,r,n){return e.apply(this,arguments)}return updatePlayer}()
/**
     * Since video players do not play with 100% time precision, we need to closely monitor
     * our player to be sure it remains in sync with the TimingObject.
     *
     * If out of sync, we use the current conditions and the options provided to determine
     * whether to re-sync via setting currentTime or adjusting the playbackRate
     *
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @param {TimingSrcConnectorOptions} options
     * @return {{cancel: (function(): void)}}
     */},{key:"maintainPlaybackPosition",value:function maintainPlaybackPosition(e,t,r){var n=this;var o=r.allowedDrift,a=r.maxAllowedDrift,i=r.minCheckInterval,c=r.maxRateAdjustment,u=r.maxTimeToCatchUp;var l=Math.min(u,Math.max(i,a))*1e3;var s=function(){var r=_asyncToGenerator(_regeneratorRuntime().mark((function _callee6(){var r,i,l,s,f;return _regeneratorRuntime().wrap((function _callee6$(d){while(1)switch(d.prev=d.next){case 0:d.t0=e.query().velocity===0;if(d.t0){d.next=6;break}d.next=4;return t.getPaused();case 4:d.t1=d.sent;d.t0=d.t1===true;case 6:if(!d.t0){d.next=8;break}return d.abrupt("return");case 8:d.t2=e.query().position;d.next=11;return t.getCurrentTime();case 11:d.t3=d.sent;r=d.t2-d.t3;i=Math.abs(r);n.log("Drift: ".concat(r));if(!(i>a)){d.next=22;break}d.next=18;return n.adjustSpeed(t,0);case 18:t.setCurrentTime(e.query().position);n.log("Resync by currentTime");d.next=29;break;case 22:if(!(i>o)){d.next=29;break}l=i/u;s=c;f=l<s?(s-l)/2:s;d.next=28;return n.adjustSpeed(t,f*Math.sign(r));case 28:n.log("Resync by playbackRate");case 29:case"end":return d.stop()}}),_callee6)})));return function check(){return r.apply(this,arguments)}}();var f=setInterval((function(){return s()}),l);return{cancel:function cancel(){return clearInterval(f)}}}
/**
     * @param {string} msg
     */},{key:"log",value:function log(e){var t;(t=this.logger)===null||t===void 0?void 0:t.call(this,"TimingSrcConnector: ".concat(e))}},{key:"waitForTOReadyState",value:
/**
     * @param {TimingObject} timingObject
     * @param {TConnectionState} state
     * @return {Promise<void>}
     */
function waitForTOReadyState(e,t){return new Promise((function(r){var n=function check(){e.readyState===t?r():e.addEventListener("readystatechange",check,{once:true})};n()}))}}]);return TimingSrcConnector}(_wrapNativeSuper(EventTarget));var s=new WeakMap;var f=new WeakMap;var d={};var h=function(){
/**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */
function Player(e){var t=this;var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};_classCallCheck(this,Player);if(window.jQuery&&e instanceof jQuery){e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element.");e=e[0]}typeof document!=="undefined"&&typeof e==="string"&&(e=document.getElementById(e));if(!isDomElement(e))throw new TypeError("You must pass either a valid element or a valid id.");if(e.nodeName!=="IFRAME"){var n=e.querySelector("iframe");n&&(e=n)}if(e.nodeName==="IFRAME"&&!isVimeoUrl(e.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(s.has(e))return s.get(e);this._window=e.ownerDocument.defaultView;this.element=e;this.origin="*";var o=new a((function(n,o){t._onMessage=function(e){if(isVimeoUrl(e.origin)&&t.element.contentWindow===e.source){t.origin==="*"&&(t.origin=e.origin);var r=parseMessageData(e.data);var a=r&&r.event==="error";var i=a&&r.data&&r.data.method==="ready";if(i){var c=new Error(r.data.message);c.name=r.data.name;o(c)}else{var u=r&&r.event==="ready";var l=r&&r.method==="ping";if(u||l){t.element.setAttribute("data-ready","true");n()}else processData(t,r)}}};t._window.addEventListener("message",t._onMessage);if(t.element.nodeName!=="IFRAME"){var a=getOEmbedParameters(e,r);var i=getVimeoUrl(a);getOEmbedData(i,a,e).then((function(r){var n=createEmbed(r,e);t.element=n;t._originalElement=e;swapCallbacks(e,n);s.set(t.element,t);return r})).catch(o)}}));f.set(this,o);s.set(this.element,this);this.element.nodeName==="IFRAME"&&postMessage(this,"ping");if(d.isEnabled){var i=function exitFullscreen(){return d.exit()};this.fullscreenchangeHandler=function(){d.isFullscreen?storeCallback(t,"event:exitFullscreen",i):removeCallback(t,"event:exitFullscreen",i);t.ready().then((function(){postMessage(t,"fullscreenchange",d.isFullscreen)}))};d.on("fullscreenchange",this.fullscreenchangeHandler)}return this}
/**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */_createClass(Player,[{key:"callMethod",value:function callMethod(e){var t=this;var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new a((function(n,o){return t.ready().then((function(){storeCallback(t,e,{resolve:n,reject:o});postMessage(t,e,r)})).catch(o)}))}
/**
     * Get a promise for the value of a player property.
     *
     * @param {string} name The property name
     * @return {Promise}
     */},{key:"get",value:function get(e){var t=this;return new a((function(r,n){e=getMethodName(e,"get");return t.ready().then((function(){storeCallback(t,e,{resolve:r,reject:n});postMessage(t,e)})).catch(n)}))}
/**
     * Get a promise for setting the value of a player property.
     *
     * @param {string} name The API method to call.
     * @param {mixed} value The value to set.
     * @return {Promise}
     */},{key:"set",value:function set(e,t){var r=this;return new a((function(n,o){e=getMethodName(e,"set");if(t===void 0||t===null)throw new TypeError("There must be a value to set.");return r.ready().then((function(){storeCallback(r,e,{resolve:n,reject:o});postMessage(r,e,t)})).catch(o)}))}
/**
     * Add an event listener for the specified event. Will call the
     * callback with a single parameter, `data`, that contains the data for
     * that event.
     *
     * @param {string} eventName The name of the event.
     * @param {function(*)} callback The function to call when the event fires.
     * @return {void}
     */},{key:"on",value:function on(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if(typeof t!=="function")throw new TypeError("The callback must be a function.");var r=getCallbacks(this,"event:".concat(e));r.length===0&&this.callMethod("addEventListener",e).catch((function(){}));storeCallback(this,"event:".concat(e),t)}
/**
     * Remove an event listener for the specified event. Will remove all
     * listeners for that event if a `callback` isn’t passed, or only that
     * specific callback if it is passed.
     *
     * @param {string} eventName The name of the event.
     * @param {function} [callback] The specific callback to remove.
     * @return {void}
     */},{key:"off",value:function off(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&typeof t!=="function")throw new TypeError("The callback must be a function.");var r=removeCallback(this,"event:".concat(e),t);r&&this.callMethod("removeEventListener",e).catch((function(e){}))}
/**
     * Load a new video into this embed. The promise will be resolved if
     * the video is successfully loaded, or it will be rejected if it could
     * not be loaded.
     *
     * @param {number|string|object} options The id of the video, the url of the video, or an object with embed options.
     * @return {LoadVideoPromise}
     */},{key:"loadVideo",value:function loadVideo(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function ready(){var e=f.get(this)||new a((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return a.resolve(e)}
/**
     * Add a cue point to the player.
     *
     * @param {number} time The time for the cue point.
     * @param {object} [data] Arbitrary data to be returned with the cue point.
     * @return {AddCuePointPromise}
     */},{key:"addCuePoint",value:function addCuePoint(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}
/**
     * Remove a cue point from the video.
     *
     * @param {string} id The id of the cue point to remove.
     * @return {RemoveCuePointPromise}
     */},{key:"removeCuePoint",value:function removeCuePoint(e){return this.callMethod("removeCuePoint",e)}
/**
     * A representation of a text track on a video.
     *
     * @typedef {Object} VimeoTextTrack
     * @property {string} language The ISO language code.
     * @property {string} kind The kind of track it is (captions or subtitles).
     * @property {string} label The human‐readable label for the track.
     */
/**
     * Enable the text track with the specified language, and optionally the
     * specified kind (captions or subtitles).
     *
     * When set via the API, the track language will not change the viewer’s
     * stored preference.
     *
     * @param {string} language The two‐letter language code.
     * @param {string} [kind] The kind of track to enable (captions or subtitles).
     * @return {EnableTextTrackPromise}
     */},{key:"enableTextTrack",value:function enableTextTrack(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function disableTextTrack(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function pause(){return this.callMethod("pause")}},{key:"play",value:function play(){return this.callMethod("play")}},{key:"requestFullscreen",value:function requestFullscreen(){return d.isEnabled?d.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function exitFullscreen(){return d.isEnabled?d.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function getFullscreen(){return d.isEnabled?a.resolve(d.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function requestPictureInPicture(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function exitPictureInPicture(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function getPictureInPicture(){return this.get("pictureInPicture")}},{key:"remotePlaybackPrompt",value:function remotePlaybackPrompt(){return this.callMethod("remotePlaybackPrompt")}},{key:"unload",value:function unload(){return this.callMethod("unload")}},{key:"destroy",value:function destroy(){var e=this;return new a((function(t){f.delete(e);s.delete(e.element);if(e._originalElement){s.delete(e._originalElement);e._originalElement.removeAttribute("data-vimeo-initialized")}e.element&&e.element.nodeName==="IFRAME"&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element));if(e.element&&e.element.nodeName==="DIV"&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var r=e.element.querySelector("iframe");r&&r.parentNode&&(r.parentNode.parentNode&&e._originalElement&&e._originalElement!==r.parentNode?r.parentNode.parentNode.removeChild(r.parentNode):r.parentNode.removeChild(r))}e._window.removeEventListener("message",e._onMessage);d.isEnabled&&d.off("fullscreenchange",e.fullscreenchangeHandler);t()}))}},{key:"getAutopause",value:function getAutopause(){return this.get("autopause")}
/**
     * Enable or disable the autopause behavior of this player.
     *
     * By default, when another video is played in the same browser, this
     * player will automatically pause. Unless you have a specific reason
     * for doing so, we recommend that you leave autopause set to the
     * default (`true`).
     *
     * @param {boolean} autopause
     * @return {SetAutopausePromise}
     */},{key:"setAutopause",value:function setAutopause(e){return this.set("autopause",e)}},{key:"getBuffered",value:function getBuffered(){return this.get("buffered")}
/**
     * @typedef {Object} CameraProperties
     * @prop {number} props.yaw - Number between 0 and 360.
     * @prop {number} props.pitch - Number between -90 and 90.
     * @prop {number} props.roll - Number between -180 and 180.
     * @prop {number} props.fov - The field of view in degrees.
     */},{key:"getCameraProps",value:function getCameraProps(){return this.get("cameraProps")}
/**
     * For 360° videos set the camera properties for this player.
     *
     * @param {CameraProperties} camera The camera properties
     * @return {SetCameraPromise}
     */},{key:"setCameraProps",value:function setCameraProps(e){return this.set("cameraProps",e)}
/**
     * A representation of a chapter.
     *
     * @typedef {Object} VimeoChapter
     * @property {number} startTime The start time of the chapter.
     * @property {object} title The title of the chapter.
     * @property {number} index The place in the order of Chapters. Starts at 1.
     */},{key:"getChapters",value:function getChapters(){return this.get("chapters")}},{key:"getCurrentChapter",value:function getCurrentChapter(){return this.get("currentChapter")}},{key:"getColor",value:function getColor(){return this.get("color")}},{key:"getColors",value:function getColors(){return a.all([this.get("colorOne"),this.get("colorTwo"),this.get("colorThree"),this.get("colorFour")])}
/**
     * Set the accent color of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     * Note this is deprecated in place of `setColorTwo`.
     *
     * @param {string} color The hex or rgb color string to set.
     * @return {SetColorPromise}
     */},{key:"setColor",value:function setColor(e){return this.set("color",e)}
/**
     * Set the colors of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     * The colors should be passed in as an array: [colorOne, colorTwo, colorThree, colorFour].
     * If a color should not be set, the index in the array can be left as null.
     *
     * @param {string[]} colors Array of the hex or rgb color strings to set.
     * @return {SetColorsPromise}
     */},{key:"setColors",value:function setColors(e){if(!Array.isArray(e))return new a((function(e,t){return t(new TypeError("Argument must be an array."))}));var t=new a((function(e){return e(null)}));var r=[e[0]?this.set("colorOne",e[0]):t,e[1]?this.set("colorTwo",e[1]):t,e[2]?this.set("colorThree",e[2]):t,e[3]?this.set("colorFour",e[3]):t];return a.all(r)}
/**
     * A representation of a cue point.
     *
     * @typedef {Object} VimeoCuePoint
     * @property {number} time The time of the cue point.
     * @property {object} data The data passed when adding the cue point.
     * @property {string} id The unique id for use with removeCuePoint.
     */},{key:"getCuePoints",value:function getCuePoints(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function getCurrentTime(){return this.get("currentTime")}
/**
     * Set the current playback position in seconds. If the player was
     * paused, it will remain paused. Likewise, if the player was playing,
     * it will resume playing once the video has buffered.
     *
     * You can provide an accurate time and the player will attempt to seek
     * to as close to that time as possible. The exact time will be the
     * fulfilled value of the promise.
     *
     * @param {number} currentTime
     * @return {SetCurrentTimePromise}
     */},{key:"setCurrentTime",value:function setCurrentTime(e){return this.set("currentTime",e)}},{key:"getDuration",value:function getDuration(){return this.get("duration")}},{key:"getEnded",value:function getEnded(){return this.get("ended")}},{key:"getLoop",value:function getLoop(){return this.get("loop")}
/**
     * Set the loop state of the player. When set to `true`, the player
     * will start over immediately once playback ends.
     *
     * @param {boolean} loop
     * @return {SetLoopPromise}
     */},{key:"setLoop",value:function setLoop(e){return this.set("loop",e)}
/**
     * Set the muted state of the player. When set to `true`, the player
     * volume will be muted.
     *
     * @param {boolean} muted
     * @return {SetMutedPromise}
     */},{key:"setMuted",value:function setMuted(e){return this.set("muted",e)}},{key:"getMuted",value:function getMuted(){return this.get("muted")}},{key:"getPaused",value:function getPaused(){return this.get("paused")}},{key:"getPlaybackRate",value:function getPlaybackRate(){return this.get("playbackRate")}
/**
     * Set the playback rate of the player on a scale from `0` to `2`. When set
     * via the API, the playback rate will not be synchronized to other
     * players or stored as the viewer's preference.
     *
     * @param {number} playbackRate
     * @return {SetPlaybackRatePromise}
     */},{key:"setPlaybackRate",value:function setPlaybackRate(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function getPlayed(){return this.get("played")}},{key:"getQualities",value:function getQualities(){return this.get("qualities")}},{key:"getQuality",value:function getQuality(){return this.get("quality")}
/**
     * Set a video quality.
     *
     * @param {string} quality
     * @return {SetQualityPromise}
     */},{key:"setQuality",value:function setQuality(e){return this.set("quality",e)}},{key:"getRemotePlaybackAvailability",value:function getRemotePlaybackAvailability(){return this.get("remotePlaybackAvailability")}},{key:"getRemotePlaybackState",value:function getRemotePlaybackState(){return this.get("remotePlaybackState")}},{key:"getSeekable",value:function getSeekable(){return this.get("seekable")}},{key:"getSeeking",value:function getSeeking(){return this.get("seeking")}},{key:"getTextTracks",value:function getTextTracks(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function getVideoEmbedCode(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function getVideoId(){return this.get("videoId")}},{key:"getVideoTitle",value:function getVideoTitle(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function getVideoWidth(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function getVideoHeight(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function getVideoUrl(){return this.get("videoUrl")}},{key:"getVolume",value:function getVolume(){return this.get("volume")}
/**
     * Set the volume of the player on a scale from `0` to `1`. When set
     * via the API, the volume level will not be synchronized to other
     * players or stored as the viewer’s preference.
     *
     * Most mobile devices do not support setting the volume. An error will
     * *not* be triggered in that situation.
     *
     * @param {number} volume
     * @return {SetVolumePromise}
     */},{key:"setVolume",value:function setVolume(e){return this.set("volume",e)}
/** @typedef {import('./lib/timing-object.types').TimingObject} TimingObject */
/** @typedef {import('./lib/timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions */
/** @typedef {import('./lib/timing-src-connector').TimingSrcConnector} TimingSrcConnector */
/**
     * Connects a TimingObject to the video player (https://webtiming.github.io/timingobject/)
     *
     * @param {TimingObject} timingObject
     * @param {TimingSrcConnectorOptions} options
     *
     * @return {Promise<TimingSrcConnector>}
     */},{key:"setTimingSrc",value:function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(e,t){var r=this;var n;return _regeneratorRuntime().wrap((function _callee$(o){while(1)switch(o.prev=o.next){case 0:if(e){o.next=2;break}throw new TypeError("A Timing Object must be provided.");case 2:o.next=4;return this.ready();case 4:n=new l(this,e,t);postMessage(this,"notifyTimingObjectConnect");n.addEventListener("disconnect",(function(){return postMessage(r,"notifyTimingObjectDisconnect")}));return o.abrupt("return",n);case 8:case"end":return o.stop()}}),_callee,this)})));function setTimingSrc(t,r){return e.apply(this,arguments)}return setTimingSrc}()}]);return Player}();if(!e){d=initializeScreenfull();initializeEmbeds();resizeEmbeds();initAppendVideoMetadata();checkUrlTimeParam()}export{h as default};

