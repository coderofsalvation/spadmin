/*! (C) WebReflection Mit Style License */
(function(e,t,n,r){"use strict";function rt(e,t){for(var n=0,r=e.length;n<r;n++)vt(e[n],t)}function it(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],nt(r,b[ot(r)])}function st(e){return function(t){j(t)&&(vt(t,e),rt(t.querySelectorAll(w),e))}}function ot(e){var t=e.getAttribute("is"),n=e.nodeName.toUpperCase(),r=S.call(y,t?v+t.toUpperCase():d+n);return t&&-1<r&&!ut(n,t)?-1:r}function ut(e,t){return-1<w.indexOf(e+'[is="'+t+'"]')}function at(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;Q&&(!i||i===t)&&t.attributeChangedCallback&&r!=="style"&&e.prevValue!==e.newValue&&t.attributeChangedCallback(r,n===e[a]?null:e.prevValue,n===e[l]?null:e.newValue)}function ft(e){var t=st(e);return function(e){X.push(t,e.target)}}function lt(e){K&&(K=!1,e.currentTarget.removeEventListener(h,lt)),rt((e.target||t).querySelectorAll(w),e.detail===o?o:s),B&&pt()}function ct(e,t){var n=this;q.call(n,e,t),G.call(n,{target:n})}function ht(e,t){D(e,t),et?et.observe(e,z):(J&&(e.setAttribute=ct,e[i]=Z(e),e.addEventListener(p,G)),e.addEventListener(c,at)),e.createdCallback&&Q&&(e.created=!0,e.createdCallback(),e.created=!1)}function pt(){for(var e,t=0,n=F.length;t<n;t++)e=F[t],E.contains(e)||(n--,F.splice(t--,1),vt(e,o))}function dt(e){throw new Error("A "+e+" type is already registered")}function vt(e,t){var n,r=ot(e);-1<r&&(tt(e,b[r]),r=0,t===s&&!e[s]?(e[o]=!1,e[s]=!0,r=1,B&&S.call(F,e)<0&&F.push(e)):t===o&&!e[o]&&(e[s]=!1,e[o]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="attached",o="detached",u="extends",a="ADDITION",f="MODIFICATION",l="REMOVAL",c="DOMAttrModified",h="DOMContentLoaded",p="DOMSubtreeModified",d="<",v="=",m=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,g=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],y=[],b=[],w="",E=t.documentElement,S=y.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},x=n.prototype,T=x.hasOwnProperty,N=x.isPrototypeOf,C=n.defineProperty,k=n.getOwnPropertyDescriptor,L=n.getOwnPropertyNames,A=n.getPrototypeOf,O=n.setPrototypeOf,M=!!n.__proto__,_=n.create||function mt(e){return e?(mt.prototype=e,new mt):this},D=O||(M?function(e,t){return e.__proto__=t,e}:L&&k?function(){function e(e,t){for(var n,r=L(t),i=0,s=r.length;i<s;i++)n=r[i],T.call(e,n)||C(e,n,k(t,n))}return function(t,n){do e(t,n);while((n=A(n))&&!N.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),P=e.MutationObserver||e.WebKitMutationObserver,H=(e.HTMLElement||e.Element||e.Node).prototype,B=!N.call(H,E),j=B?function(e){return e.nodeType===1}:function(e){return N.call(H,e)},F=B&&[],I=H.cloneNode,q=H.setAttribute,R=H.removeAttribute,U=t.createElement,z=P&&{attributes:!0,characterData:!0,attributeOldValue:!0},W=P||function(e){J=!1,E.removeEventListener(c,W)},X,V=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)},$=!1,J=!0,K=!0,Q=!0,G,Y,Z,et,tt,nt;O||M?(tt=function(e,t){N.call(t,e)||ht(e,t)},nt=ht):(tt=function(e,t){e[i]||(e[i]=n(!0),ht(e,t))},nt=tt),B?(J=!1,function(){var e=k(H,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(c,{bubbles:!0});t.attrName=e,t.prevValue=this.getAttribute(e),t.newValue=null,t[l]=t.attrChange=2,R.call(this,e),this.dispatchEvent(t)},r=function(e,t){var n=this.hasAttribute(e),r=n&&this.getAttribute(e),i=new CustomEvent(c,{bubbles:!0});q.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[f]=i.attrChange=1:i[a]=i.attrChange=0,this.dispatchEvent(i)},s=function(e){var t=e.currentTarget,n=t[i],r=e.propertyName,s;n.hasOwnProperty(r)&&(n=n[r],s=new CustomEvent(c,{bubbles:!0}),s.attrName=n.name,s.prevValue=n.value||null,s.newValue=n.value=t[r]||null,s.prevValue==null?s[a]=s.attrChange=0:s[f]=s.attrChange=1,t.dispatchEvent(s))};e.value=function(e,o,u){e===c&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[i]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",s)),t.call(this,e,o,u)},C(H,"addEventListener",e)}()):P||(E.addEventListener(c,W),E.setAttribute(i,1),E.removeAttribute(i),J&&(G=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=Z(t);for(s in r){if(!(s in n))return Y(0,t,s,n[s],r[s],a);if(r[s]!==n[s])return Y(1,t,s,n[s],r[s],f)}for(s in n)if(!(s in r))return Y(2,t,s,n[s],r[s],l)}},Y=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,at(o)},Z=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){c=n.toUpperCase(),$||($=!0,P?(et=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new P(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,Q&&s.attributeChangedCallback&&i.attributeName!=="style"&&(o=s.getAttribute(i.attributeName),o!==i.oldValue&&s.attributeChangedCallback(i.attributeName,i.oldValue,o)))})}(st(s),st(o)),et.observe(t,{childList:!0,subtree:!0})):(X=[],V(function E(){while(X.length)X.shift().call(null,X.shift());V(E)}),t.addEventListener("DOMNodeInserted",ft(s)),t.addEventListener("DOMNodeRemoved",ft(o))),t.addEventListener(h,lt),t.addEventListener("readystatechange",lt),t.createElement=function(e,n){var r=U.apply(t,arguments),i=""+e,s=S.call(y,(n?v:d)+(n||i).toUpperCase()),o=-1<s;return n&&(r.setAttribute("is",n=n.toLowerCase()),o&&(o=ut(i.toUpperCase(),n))),Q=!t.createElement.innerHTMLHelper,o&&nt(r,b[s]),r},H.cloneNode=function(e){var t=I.call(this,!!e),n=ot(t);return-1<n&&nt(t,b[n]),e&&it(t.querySelectorAll(w)),t}),-2<S.call(y,v+c)+S.call(y,d+c)&&dt(n);if(!m.test(c)||-1<S.call(g,c))throw new Error("The type "+n+" is invalid");var i=function(){return f?t.createElement(l,c):t.createElement(l)},a=r||x,f=T.call(a,u),l=f?r[u].toUpperCase():c,c,p;return f&&-1<S.call(y,d+l)&&dt(l),p=y.push((f?v:d)+c)-1,w=w.concat(w.length?",":"",f?l+'[is="'+n.toLowerCase()+'"]':l),i.prototype=b[p]=T.call(a,"prototype")?a.prototype:_(H),rt(t.querySelectorAll(w),s),i}})(window,document,Object,"registerElement");(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.superagent = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],2:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}],3:[function(require,module,exports){
/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null != obj && 'object' == typeof obj;
}

module.exports = isObject;

},{}],4:[function(require,module,exports){
/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = require('./is-object');

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

exports.clearTimeout = function _clearTimeout(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Force given parser
 *
 * Sets the body parser no matter type.
 *
 * @param {Function}
 * @api public
 */

exports.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

exports.timeout = function timeout(ms){
  this._timeout = ms;
  return this;
};

/**
 * Faux promise support
 *
 * @param {Function} fulfill
 * @param {Function} reject
 * @return {Request}
 */

exports.then = function then(fulfill, reject) {
  return this.end(function(err, res) {
    err ? reject(err) : fulfill(res);
  });
}

/**
 * Allow for extension
 */

exports.use = function use(fn) {
  fn(this);
  return this;
}


/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

exports.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

exports.getHeader = exports.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

exports.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
exports.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
exports.field = function(name, val) {
  this._getFormData().append(name, val);
  return this;
};

},{"./is-object":3}],5:[function(require,module,exports){
// The node and browser modules expose versions of this with the
// appropriate constructor function bound as first argument
/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(RequestConstructor, method, url) {
  // callback
  if ('function' == typeof url) {
    return new RequestConstructor('GET', method).end(url);
  }

  // url first
  if (2 == arguments.length) {
    return new RequestConstructor('GET', method);
  }

  return new RequestConstructor(method, url);
}

module.exports = request;

},{}],"superagent":[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');
var requestBase = require('./request-base');
var isObject = require('./is-object');

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  root = this;
}

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Expose `request`.
 */

var request = module.exports = require('./request').bind(null, Request);

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pushEncodedKeyValuePair(pairs, key, obj[key]);
        }
      }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (Array.isArray(val)) {
    return val.forEach(function(v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  }
  pairs.push(encodeURIComponent(key)
    + '=' + encodeURIComponent(val));
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  return /[\/+]json\b/.test(mime);
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text ? this.text : this.xhr.response)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = request.parse[this.type];
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }

  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
      // issue #876: return the http status code if the response parsing fails
      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
      return self.callback(err);
    }

    self.emit('response', res);

    if (err) {
      return self.callback(err, res);
    }

    if (res.status >= 200 && res.status < 300) {
      return self.callback(err, res);
    }

    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
    new_err.original = err;
    new_err.response = res;
    new_err.status = res.status;

    self.callback(new_err, res);
  });
}

/**
 * Mixin `Emitter` and `requestBase`.
 */

Emitter(Request.prototype);
for (var key in requestBase) {
  Request.prototype[key] = requestBase[key];
}

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set responseType to `val`. Presently valid responseTypes are 'blob' and 
 * 'arraybuffer'.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (!options) {
    options = {
      type: 'basic'
    }
  }

  switch (options.type) {
    case 'basic':
      var str = btoa(user + ':' + pass);
      this.set('Authorization', 'Basic ' + str);
    break;

    case 'auto':
      this.username = user;
      this.password = pass;
    break;
  }
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  this._getFormData().append(field, file, filename || file.name);
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this._header['content-type'];

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj || isHost(data)) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * @deprecated
 */
Response.prototype.parse = function serialize(fn){
  if (root.console) {
    console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0");
  }
  this.serialize(fn);
  return this;
};

Response.prototype.serialize = function serialize(fn){
  this._parser = fn;
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (0 == status) {
      if (self.timedout) return self.timeoutError();
      if (self.aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(e){
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = 'download';
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    xhr.onprogress = handleProgress;
  }
  try {
    if (xhr.upload && this.hasListeners('progress')) {
      xhr.upload.onprogress = handleProgress;
    }
  } catch(e) {
    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
    // Reported here:
    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.timedout = true;
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  if (this.username && this.password) {
    xhr.open(this.method, this.url, true, this.username, this.password);
  } else {
    xhr.open(this.method, this.url, true);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};


/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

function del(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

},{"./is-object":3,"./request":5,"./request-base":4,"emitter":1,"reduce":2}]},{},[])("superagent")
});

var restglue = function(apiurl){
  this.url = apiurl || ""
  this.sandbox = {}
  this.headers = {}
  this.requestPre  = []
  this.requestPost = []
}

restglue.prototype.beforeRequest = function (cb) {
  this.requestPre.push(cb)
}

restglue.prototype.afterRequest = function (cb) {
  this.requestPost.push(cb)
}

restglue.prototype.request = function(method, url, payload, query, headers) {
  var me = this
  var config = {method:method, url:url, query:query, payload:payload, headers:headers, api:this }
  if( query && typeof query == "string" ) url+= ( config.queryString = query )
  if( query && typeof query != "string" ) url+= ( config.queryString = "?"+me.toQueryString(query) )
  for( var i in this.requestPre ) this.requestPre[i](config)
  var sandbox = this.getSandboxedUrl(config.method,config.url)
  if( sandbox && typeof sandbox != "string" ) return sandbox // return sandboxed promise
  url = sandbox ? sandbox : config.url                       // set sandboxed url
  var req = superagent[method]( url )
  for( i in this.headers ) req.set( i,  this.headers[i] )
  for( i in headers ) req.set( i,  headers[i] )
  if( method != "get" ) req.send(payload)
  return new Promise(function(resolve, reject){
    req.end( function(err, res){
      for( i in me.requestPost ) me.requestPost[i](config, res, err)
      if( !err ){
        if( typeof res.body == 'object' ) res.body.getResponse = function(){ return res }
        resolve(res.body)
      } else{
        console.error(err)
        console.error(JSON.stringify({url:url, payload:payload, query:query, headers:headers}))
        reject(err, res)
      } 
    })
  // older android browser (2.3.6) doesn't like this..why?
  //}).catch(function(err){
  //  throw err
  })
}

restglue.prototype.toQueryString = function(data){
  var args = []
  for( var i in data ) args.push( i +"="+ encodeURI(data[i]) )
  return args.join("&")
}

restglue.prototype.addEndpoint = function ( resourcename ){
  var endpoint = function(resourcename,api){
    this.resourcename = resourcename
    this.api = api
  }
  endpoint.prototype.getAll = function( query, headers){
    return this.get( false, query, headers )
  }
  endpoint.prototype.get = function(id, query, headers){
    var url = this.api.url + "/"+resourcename
    if( id ) url+= "/"+id
    return this.api.request( "get", url, false, query, headers)
  }
  var methods = ['post', 'put', 'options', 'patch']
  methods.map( function(method){
    endpoint.prototype[method] = function(id, payload, query, headers){
      var url = this.api.url + "/"+resourcename + "/" + id
      return this.api.request( method, url, payload, query, headers)
    }
  })
  this[resourcename] = new endpoint(resourcename, this)
}

restglue.prototype.sandboxUrl = function(url,destination){ // configure sandboxdata for url(pattern)
  this.sandbox[url] = destination
}

restglue.prototype.getSandboxedUrl = function(method,url){
  var config = {method:method, url:url, payload:{}, headers: this.headers, api:this }
  for ( var regex in this.sandbox ) {
    var item = this.sandbox[regex]
    var method = method.toUpperCase()
    if( url.match( new RegExp(regex, "g") ) != null ){
      if( item.path ){
        var slug = ''
        slug = url.replace( this.url, "")
        //slug = '/' + slug.join('/')
        slug = slug.replace(/\/?\?.*/,'')                   // remove query
        slug = slug.replace(/\/[0-9]+/, '')   // remove id-parmeters
        var url_sandboxed = item.path + slug + "/" + method.toLowerCase() + ".json"
        console.log("sandboxed url: "+method+" "+url+" => "+url_sandboxed)
        return url_sandboxed
      }
      if( item.data ){
        console.log("sandboxed url: "+method+" "+url+" => {}")
        var res = {body:item.data}
        for( var i in this.requestPost ) this.requestPost[i](config, res)
        return new Promise(function(resolve, reject){ resolve(res.body) })
      }
    }
  }
  return false
}

restglue.prototype.compose = function(chain){
  return function(){
    return new Promise( function(resolve, reject){
      var _res
      var done = function(){ resolve(_res) }
      mapAsync( chain, done, function(func, i,  next){
        var promise = func(_res)
        var output = promise 
        if( !promise.then ) promise = new Promise( function(resolve,reject){
          resolve(output)
        })
        promise.then( function(res){
          _res = res; 
          next() 
        })
      })
    })    
  }        
}

mapAsync = function(arr, done, cb) {
  var f, funcs, i, k, v; funcs = []; i = 0;
  for (k in arr) {
    v = arr[k];
    f = function(i, v) {
      return function() {
        var e, error;
        try {
          return cb(v, i, funcs[i+1] || done);
        } catch (error) {
          e = error;
          return done(new Error(e));
        }
      };
    };
    funcs.push(f(i++, v));
  }
  return funcs[0]();
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  var superagent = require('superagent')
  module.exports = restglue;
} else{
  window.restglue = restglue
}
bus = function(opts){
  this.opts = opts || {}
  this.channels = []
  this._state = opts ? opts.defaultstate || "" : ""
  this.debug = false
}

bus.prototype.state = function(state){ // pubsub state: state("mystate") or state() returns current state-string
  if(state){
    if( this._state == state ) return                                 // dont set state unnecessary
    if( this.opts.statemachine && ! this.opts.statemachine( this._state, state) ) 
      return // dont set state when statemachine says no
    var prevstate = this._state
    this._state = state
    this.publish("state",{to:state,from:prevstate})
  }else return this._state
}

bus.prototype.publish = function (channel, data) { // pubsub publish: publish('some/channel', ['Denis', 'Ciccale'], "mystate" // optional )
  if( this.debug ){
    console.log("--> bus.publish('"+channel+"') state="+this._state)
    if( data ) console.dir(data)
  }
  var me = this
  var subscribes = (this.channels[channel] || []).map( function (handler) {
    handler( data, me._state )
  }) 
};

bus.prototype.subscribe = function (channel, handler) { // pubsub Usage: var handle = subscribe('some/channel', function (name, lastName) {})
  (this.channels[channel] = this.channels[channel] || []).push(handler);
  return [channel, handler];
};

bus.prototype.unsubscribe = function (handle) { // pubsub Usage: unsubscribe(handle);
  var subscribes = this.channels[handle[0]],
    l = subscribes.length;
  while (l--) {
    if (subscribes[l] === handle[1]) {
      subscribes.splice(l, 1);
    }
  }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
  module.exports = bus;
else
  window.bus = bus 
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.page=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
  /* globals require, module */

  'use strict';

  /**
   * Module dependencies.
   */

  var pathtoRegexp = require('path-to-regexp');

  /**
   * Module exports.
   */

  module.exports = page;

  /**
   * Detect click event
   */
  var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';

  /**
   * To work properly with the URL
   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
   */

  var location = ('undefined' !== typeof window) && (window.history.location || window.location);

  /**
   * Perform initial dispatch.
   */

  var dispatch = true;


  /**
   * Decode URL components (query string, pathname, hash).
   * Accommodates both regular percent encoding and x-www-form-urlencoded format.
   */
  var decodeURLComponents = true;

  /**
   * Base path.
   */

  var base = '';

  /**
   * Running flag.
   */

  var running;

  /**
   * HashBang option
   */

  var hashbang = false;

  /**
   * Previous context, for capturing
   * page exit events.
   */

  var prevContext;

  /**
   * Register `path` with callback `fn()`,
   * or route `path`, or redirection,
   * or `page.start()`.
   *
   *   page(fn);
   *   page('*', fn);
   *   page('/user/:id', load, user);
   *   page('/user/' + user.id, { some: 'thing' });
   *   page('/user/' + user.id);
   *   page('/from', '/to')
   *   page();
   *
   * @param {string|!Function|!Object} path
   * @param {Function=} fn
   * @api public
   */

  function page(path, fn) {
    // <callback>
    if ('function' === typeof path) {
      return page('*', path);
    }

    // route <path> to <callback ...>
    if ('function' === typeof fn) {
      var route = new Route(/** @type {string} */ (path));
      for (var i = 1; i < arguments.length; ++i) {
        page.callbacks.push(route.middleware(arguments[i]));
      }
      // show <path> with [state]
    } else if ('string' === typeof path) {
      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);
      // start [options]
    } else {
      page.start(path);
    }
  }

  /**
   * Callback functions.
   */

  page.callbacks = [];
  page.exits = [];

  /**
   * Current path being processed
   * @type {string}
   */
  page.current = '';

  /**
   * Number of pages navigated to.
   * @type {number}
   *
   *     page.len == 0;
   *     page('/login');
   *     page.len == 1;
   */

  page.len = 0;

  /**
   * Get or set basepath to `path`.
   *
   * @param {string} path
   * @api public
   */

  page.base = function(path) {
    if (0 === arguments.length) return base;
    base = path;
  };

  /**
   * Bind with the given `options`.
   *
   * Options:
   *
   *    - `click` bind to click events [true]
   *    - `popstate` bind to popstate [true]
   *    - `dispatch` perform initial dispatch [true]
   *
   * @param {Object} options
   * @api public
   */

  page.start = function(options) {
    options = options || {};
    if (running) return;
    running = true;
    if (false === options.dispatch) dispatch = false;
    if (false === options.decodeURLComponents) decodeURLComponents = false;
    if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
    if (false !== options.click) {
      document.addEventListener(clickEvent, onclick, false);
    }
    if (true === options.hashbang) hashbang = true;
    if (!dispatch) return;
    var url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
    page.replace(url, null, true, dispatch);
  };

  /**
   * Unbind click and popstate event handlers.
   *
   * @api public
   */

  page.stop = function() {
    if (!running) return;
    page.current = '';
    page.len = 0;
    running = false;
    document.removeEventListener(clickEvent, onclick, false);
    window.removeEventListener('popstate', onpopstate, false);
  };

  /**
   * Show `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} dispatch
   * @param {boolean=} push
   * @return {!Context}
   * @api public
   */

  page.show = function(path, state, dispatch, push) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    if (false !== dispatch) page.dispatch(ctx);
    if (false !== ctx.handled && false !== push) ctx.pushState();
    return ctx;
  };

  /**
   * Goes back in the history
   * Back should always let the current route push state and then go back.
   *
   * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
   * @param {Object=} state
   * @api public
   */

  page.back = function(path, state) {
    if (page.len > 0) {
      // this may need more testing to see if all browsers
      // wait for the next tick to go back in history
      history.back();
      page.len--;
    } else if (path) {
      setTimeout(function() {
        page.show(path, state);
      });
    }else{
      setTimeout(function() {
        page.show(base, state);
      });
    }
  };


  /**
   * Register route to redirect from one path to other
   * or just redirect to another route
   *
   * @param {string} from - if param 'to' is undefined redirects to 'from'
   * @param {string=} to
   * @api public
   */
  page.redirect = function(from, to) {
    // Define route from a path to another
    if ('string' === typeof from && 'string' === typeof to) {
      page(from, function(e) {
        setTimeout(function() {
          page.replace(/** @type {!string} */ (to));
        }, 0);
      });
    }

    // Wait for the push state and replace it with another
    if ('string' === typeof from && 'undefined' === typeof to) {
      setTimeout(function() {
        page.replace(from);
      }, 0);
    }
  };

  /**
   * Replace `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} init
   * @param {boolean=} dispatch
   * @return {!Context}
   * @api public
   */


  page.replace = function(path, state, init, dispatch) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    ctx.init = init;
    ctx.save(); // save before dispatching, which may redirect
    if (false !== dispatch) page.dispatch(ctx);
    return ctx;
  };

  /**
   * Dispatch the given `ctx`.
   *
   * @param {Context} ctx
   * @api private
   */
  page.dispatch = function(ctx) {
    var prev = prevContext,
      i = 0,
      j = 0;

    prevContext = ctx;

    function nextExit() {
      var fn = page.exits[j++];
      if (!fn) return nextEnter();
      fn(prev, nextExit);
    }

    function nextEnter() {
      var fn = page.callbacks[i++];

      if (ctx.path !== page.current) {
        ctx.handled = false;
        return;
      }
      if (!fn) return unhandled(ctx);
      fn(ctx, nextEnter);
    }

    if (prev) {
      nextExit();
    } else {
      nextEnter();
    }
  };

  /**
   * Unhandled `ctx`. When it's not the initial
   * popstate then redirect. If you wish to handle
   * 404s on your own use `page('*', callback)`.
   *
   * @param {Context} ctx
   * @api private
   */
  function unhandled(ctx) {
    if (ctx.handled) return;
    var current;

    if (hashbang) {
      current = base + location.hash.replace('#!', '');
    } else {
      current = location.pathname + location.search;
    }

    if (current === ctx.canonicalPath) return;
    page.stop();
    ctx.handled = false;
    location.href = ctx.canonicalPath;
  }

  /**
   * Register an exit route on `path` with
   * callback `fn()`, which will be called
   * on the previous context when a new
   * page is visited.
   */
  page.exit = function(path, fn) {
    if (typeof path === 'function') {
      return page.exit('*', path);
    }

    var route = new Route(path);
    for (var i = 1; i < arguments.length; ++i) {
      page.exits.push(route.middleware(arguments[i]));
    }
  };

  /**
   * Remove URL encoding from the given `str`.
   * Accommodates whitespace in both x-www-form-urlencoded
   * and regular percent-encoded form.
   *
   * @param {string} val - URL component to decode
   */
  function decodeURLEncodedURIComponent(val) {
    if (typeof val !== 'string') { return val; }
    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
  }

  /**
   * Initialize a new "request" `Context`
   * with the given `path` and optional initial `state`.
   *
   * @constructor
   * @param {string} path
   * @param {Object=} state
   * @api public
   */

  function Context(path, state) {
    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;
    var i = path.indexOf('?');

    this.canonicalPath = path;
    this.path = path.replace(base, '') || '/';
    if (hashbang) this.path = this.path.replace('#!', '') || '/';

    this.title = document.title;
    this.state = state || {};
    this.state.path = path;
    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
    this.params = {};

    // fragment
    this.hash = '';
    if (!hashbang) {
      if (!~this.path.indexOf('#')) return;
      var parts = this.path.split('#');
      this.path = parts[0];
      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
      this.querystring = this.querystring.split('#')[0];
    }
  }

  /**
   * Expose `Context`.
   */

  page.Context = Context;

  /**
   * Push state.
   *
   * @api private
   */

  Context.prototype.pushState = function() {
    page.len++;
    history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Save the context state.
   *
   * @api public
   */

  Context.prototype.save = function() {
    history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Initialize `Route` with the given HTTP `path`,
   * and an array of `callbacks` and `options`.
   *
   * Options:
   *
   *   - `sensitive`    enable case-sensitive routes
   *   - `strict`       enable strict matching for trailing slashes
   *
   * @constructor
   * @param {string} path
   * @param {Object=} options
   * @api private
   */

  function Route(path, options) {
    options = options || {};
    this.path = (path === '*') ? '(.*)' : path;
    this.method = 'GET';
    this.regexp = pathtoRegexp(this.path,
      this.keys = [],
      options);
  }

  /**
   * Expose `Route`.
   */

  page.Route = Route;

  /**
   * Return route middleware with
   * the given callback `fn()`.
   *
   * @param {Function} fn
   * @return {Function}
   * @api public
   */

  Route.prototype.middleware = function(fn) {
    var self = this;
    return function(ctx, next) {
      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
      next();
    };
  };

  /**
   * Check if this route matches `path`, if so
   * populate `params`.
   *
   * @param {string} path
   * @param {Object} params
   * @return {boolean}
   * @api private
   */

  Route.prototype.match = function(path, params) {
    var keys = this.keys,
      qsIndex = path.indexOf('?'),
      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
      m = this.regexp.exec(decodeURIComponent(pathname));

    if (!m) return false;

    for (var i = 1, len = m.length; i < len; ++i) {
      var key = keys[i - 1];
      var val = decodeURLEncodedURIComponent(m[i]);
      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
        params[key.name] = val;
      }
    }

    return true;
  };


  /**
   * Handle "populate" events.
   */

  var onpopstate = (function () {
    var loaded = false;
    if ('undefined' === typeof window) {
      return;
    }
    if (document.readyState === 'complete') {
      loaded = true;
    } else {
      window.addEventListener('load', function() {
        setTimeout(function() {
          loaded = true;
        }, 0);
      });
    }
    return function onpopstate(e) {
      if (!loaded) return;
      if (e.state) {
        var path = e.state.path;
        page.replace(path, e.state);
      } else {
        page.show(location.pathname + location.hash, undefined, undefined, false);
      }
    };
  })();
  /**
   * Handle "click" events.
   */

  function onclick(e) {

    if (1 !== which(e)) return;

    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (e.defaultPrevented) return;



    // ensure link
    // use shadow dom when available
    var el = e.path ? e.path[0] : e.target;
    while (el && 'A' !== el.nodeName) el = el.parentNode;
    if (!el || 'A' !== el.nodeName) return;



    // Ignore if tag has
    // 1. "download" attribute
    // 2. rel="external" attribute
    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

    // ensure non-hash for the same path
    var link = el.getAttribute('href');
    if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;



    // Check for mailto: in the href
    if (link && link.indexOf('mailto:') > -1) return;

    // check target
    if (el.target) return;

    // x-origin
    if (!sameOrigin(el.href)) return;



    // rebuild path
    var path = el.pathname + el.search + (el.hash || '');

    // strip leading "/[drive letter]:" on NW.js on Windows
    if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
      path = path.replace(/^\/[a-zA-Z]:\//, '/');
    }

    // same page
    var orig = path;

    if (path.indexOf(base) === 0) {
      path = path.substr(base.length);
    }

    if (hashbang) path = path.replace('#!', '');

    if (base && orig === path) return;

    e.preventDefault();
    page.show(orig);
  }

  /**
   * Event button.
   */

  function which(e) {
    e = e || window.event;
    return null === e.which ? e.button : e.which;
  }

  /**
   * Check if `href` is the same origin.
   */

  function sameOrigin(href) {
    var origin = location.protocol + '//' + location.hostname;
    if (location.port) origin += ':' + location.port;
    return (href && (0 === href.indexOf(origin)));
  }

  page.sameOrigin = sameOrigin;

}).call(this,require('_process'))
},{"_process":2,"path-to-regexp":3}],2:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],3:[function(require,module,exports){
var isarray = require('isarray')

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {String} str
 * @return {Array}
 */
function parse (str) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var suffix = res[6]
    var asterisk = res[7]

    var repeat = suffix === '+' || suffix === '*'
    var optional = suffix === '?' || suffix === '*'
    var delimiter = prefix || '/'
    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      pattern: escapeGroup(pattern)
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {String}   str
 * @return {Function}
 */
function compile (str) {
  return tokensToFunction(parse(str))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^' + tokens[i].pattern + '$')
    }
  }

  return function (obj) {
    var path = ''
    var data = obj || {}

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encodeURIComponent(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = encodeURIComponent(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {String} str
 * @return {String}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {String} group
 * @return {String}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {RegExp} re
 * @param  {Array}  keys
 * @return {RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {String}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {RegExp} path
 * @param  {Array}  keys
 * @return {RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {Array}  path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {String} path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function stringToRegexp (path, keys, options) {
  var tokens = parse(path)
  var re = tokensToRegExp(tokens, options)

  // Attach keys back to the regexp.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] !== 'string') {
      keys.push(tokens[i])
    }
  }

  return attachKeys(re, keys)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {Array}  tokens
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function tokensToRegExp (tokens, options) {
  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''
  var lastToken = tokens[tokens.length - 1]
  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = token.pattern

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (prefix) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(String|RegExp|Array)} path
 * @param  {Array}                 [keys]
 * @param  {Object}                [options]
 * @return {RegExp}
 */
function pathToRegexp (path, keys, options) {
  keys = keys || []

  if (!isarray(keys)) {
    options = keys
    keys = []
  } else if (!options) {
    options = {}
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys, options)
  }

  if (isarray(path)) {
    return arrayToRegexp(path, keys, options)
  }

  return stringToRegexp(path, keys, options)
}

},{"isarray":4}],4:[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}]},{},[1])(1)
});!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.superagent=t()}}(function(){return function t(e,r,i){function n(o,a){if(!r[o]){if(!e[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(s)return s(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var c=r[o]={exports:{}};e[o][0].call(c.exports,function(t){var r=e[o][1][t];return n(r?r:t)},c,c.exports,t,e,r,i)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)n(i[o]);return n}({1:[function(t,e,r){function i(t){return null!==t&&"object"==typeof t}e.exports=i},{}],2:[function(t,e,r){var i=t("./is-object");r.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},r.parse=function(t){return this._parser=t,this},r.serialize=function(t){return this._serializer=t,this},r.timeout=function(t){return this._timeout=t,this},r.then=function(t,e){if(!this._fullfilledPromise){var r=this;this._fullfilledPromise=new Promise(function(t,e){r.end(function(r,i){r?e(r):t(i)})})}return this._fullfilledPromise.then(t,e)},r.use=function(t){return t(this),this},r.get=function(t){return this._header[t.toLowerCase()]},r.getHeader=r.get,r.set=function(t,e){if(i(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},r.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},r.field=function(t,e){return this._getFormData().append(t,e),this},r.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},r.withCredentials=function(){return this._withCredentials=!0,this},r.redirects=function(t){return this._maxRedirects=t,this},r.toJSON=function(){return{method:this.method,url:this.url,data:this._data}},r._isHost=function(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}},r.send=function(t){var e=i(t),r=this._header["content-type"];if(e&&i(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],"application/x-www-form-urlencoded"==r?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(r||this.type("json"),this)}},{"./is-object":1}],3:[function(t,e,r){function i(t,e,r){return"function"==typeof r?new t("GET",e).end(r):2==arguments.length?new t("GET",e):new t(e,r)}e.exports=i},{}],4:[function(t,e,r){function i(t){return t?n(t):void 0}function n(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}"undefined"!=typeof e&&(e.exports=i),i.prototype.on=i.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},i.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i,n=0;n<r.length;n++)if(i=r[n],i===e||i.fn===e){r.splice(n,1);break}return this},i.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var i=0,n=r.length;n>i;++i)r[i].apply(this,e)}return this},i.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},i.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],5:[function(t,e,r){e.exports=function(t,e,r){for(var i=0,n=t.length,s=3==arguments.length?r:t[i++];n>i;)s=e.call(null,s,t[i],++i,t);return s}},{}],6:[function(t,e,r){function i(){}function n(t){if(!b(t))return t;var e=[];for(var r in t)null!=t[r]&&s(e,r,t[r]);return e.join("&")}function s(t,e,r){if(Array.isArray(r))return r.forEach(function(r){s(t,e,r)});if(b(r))for(var i in r)s(t,e+"["+i+"]",r[i]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}function o(t){for(var e,r,i={},n=t.split("&"),s=0,o=n.length;o>s;++s)e=n[s],r=e.indexOf("="),-1==r?i[decodeURIComponent(e)]="":i[decodeURIComponent(e.slice(0,r))]=decodeURIComponent(e.slice(r+1));return i}function a(t){var e,r,i,n,s=t.split(/\r?\n/),o={};s.pop();for(var a=0,u=s.length;u>a;++a)r=s[a],e=r.indexOf(":"),i=r.slice(0,e).toLowerCase(),n=w(r.slice(e+1)),o[i]=n;return o}function u(t){return/[\/+]json\b/.test(t)}function h(t){return t.split(/ *; */).shift()}function c(t){return m(t.split(/ *; */),function(t,e){var r=e.split(/ *= */),i=r.shift(),n=r.shift();return i&&n&&(t[i]=n),t},{})}function l(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this._setStatusProperties(this.xhr.status),this.header=this.headers=a(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function p(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new l(r)}catch(i){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=i,t.rawResponse=r.xhr&&r.xhr.responseText?r.xhr.responseText:null,t.statusCode=r.xhr&&r.xhr.status?r.xhr.status:null,r.callback(t)}if(r.emit("response",e),t)return r.callback(t,e);try{if(e.status>=200&&e.status<300)return r.callback(t,e);var n=new Error(e.statusText||"Unsuccessful HTTP response");n.original=t,n.response=e,n.status=e.status,r.callback(n,e)}catch(i){r.callback(i)}})}function f(t,e){var r=v("DELETE",t);return e&&r.end(e),r}var d,y=t("emitter"),m=t("reduce"),_=t("./request-base"),b=t("./is-object");d="undefined"!=typeof window?window:"undefined"!=typeof self?self:this;var v=e.exports=t("./request").bind(null,p);v.getXHR=function(){if(!(!d.XMLHttpRequest||d.location&&"file:"==d.location.protocol&&d.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1};var w="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};v.serializeObject=n,v.parseString=o,v.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},v.serialize={"application/x-www-form-urlencoded":n,"application/json":JSON.stringify},v.parse={"application/x-www-form-urlencoded":o,"application/json":JSON.parse},l.prototype.get=function(t){return this.header[t.toLowerCase()]},l.prototype._setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=h(e);var r=c(e);for(var i in r)this[i]=r[i]},l.prototype._parseBody=function(t){var e=v.parse[this.type];return!e&&u(this.type)&&(e=v.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null},l.prototype._setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=4==e||5==e?this.toError():!1,this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},l.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,i="cannot "+e+" "+r+" ("+this.status+")",n=new Error(i);return n.status=this.status,n.method=e,n.url=r,n},v.Response=l,y(p.prototype);for(var x in _)p.prototype[x]=_[x];p.prototype.type=function(t){return this.set("Content-Type",v.types[t]||t),this},p.prototype.responseType=function(t){return this._responseType=t,this},p.prototype.accept=function(t){return this.set("Accept",v.types[t]||t),this},p.prototype.auth=function(t,e,r){switch(r||(r={type:"basic"}),r.type){case"basic":var i=btoa(t+":"+e);this.set("Authorization","Basic "+i);break;case"auto":this.username=t,this.password=e}return this},p.prototype.query=function(t){return"string"!=typeof t&&(t=n(t)),t&&this._query.push(t),this},p.prototype.attach=function(t,e,r){return this._getFormData().append(t,e,r||e.name),this},p.prototype._getFormData=function(){return this._formData||(this._formData=new d.FormData),this._formData},p.prototype.callback=function(t,e){var r=this._callback;this.clearTimeout(),r(t,e)},p.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},p.prototype._timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},p.prototype._appendQueryString=function(){var t=this._query.join("&");t&&(this.url+=~this.url.indexOf("?")?"&"+t:"?"+t)},p.prototype.end=function(t){var e=this,r=this.xhr=v.getXHR(),n=this._timeout,s=this._formData||this._data;this._callback=t||i,r.onreadystatechange=function(){if(4==r.readyState){var t;try{t=r.status}catch(i){t=0}if(0==t){if(e.timedout)return e._timeoutError();if(e._aborted)return;return e.crossDomainError()}e.emit("end")}};var o=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),t.direction="download",e.emit("progress",t)};this.hasListeners("progress")&&(r.onprogress=o);try{r.upload&&this.hasListeners("progress")&&(r.upload.onprogress=o)}catch(a){}if(n&&!this._timer&&(this._timer=setTimeout(function(){e.timedout=!0,e.abort()},n)),this._appendQueryString(),this.username&&this.password?r.open(this.method,this.url,!0,this.username,this.password):r.open(this.method,this.url,!0),this._withCredentials&&(r.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof s&&!this._isHost(s)){var h=this._header["content-type"],c=this._serializer||v.serialize[h?h.split(";")[0]:""];!c&&u(h)&&(c=v.serialize["application/json"]),c&&(s=c(s))}for(var l in this.header)null!=this.header[l]&&r.setRequestHeader(l,this.header[l]);return this._responseType&&(r.responseType=this._responseType),this.emit("request",this),r.send("undefined"!=typeof s?s:null),this},v.Request=p,v.get=function(t,e,r){var i=v("GET",t);return"function"==typeof e&&(r=e,e=null),e&&i.query(e),r&&i.end(r),i},v.head=function(t,e,r){var i=v("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},v.options=function(t,e,r){var i=v("OPTIONS",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},v.del=f,v["delete"]=f,v.patch=function(t,e,r){var i=v("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},v.post=function(t,e,r){var i=v("POST",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},v.put=function(t,e,r){var i=v("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i}},{"./is-object":1,"./request":3,"./request-base":2,emitter:4,reduce:5}]},{},[6])(6)});
!function t(e,n,r){function i(s,u){if(!n[s]){if(!e[s]){var l="function"==typeof require&&require;if(!u&&l)return l(s,!0);if(o)return o(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var h=n[s]={exports:{}};e[s][0].call(h.exports,function(t){var n=e[s][1][t];return i(n?n:t)},h,h.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){var r,i,o,s,u,l=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};s=t("../lib/lodash.js"),u=t("./helpers"),i=t("./context"),o={},o.render=function(t,e,n,r){var l,a;return null==e&&(e=[]),null==n&&(n={}),null==r&&(r={}),a=r.debug&&console?u.consoleLogger:u.nullLogger,a("Transparency.render:",t,e,n,r),t?(s.isArray(e)||(e=[e]),t=(l=u.data(t)).context||(l.context=new i(t,o)),t.render(e,n,r).el):void 0},o.matcher=function(t,e){return t.el.id===e||l.call(t.classNames,e)>=0||t.el.name===e||t.el.getAttribute("data-bind")===e},o.clone=function(t){return r(t).clone()[0]},o.jQueryPlugin=u.chainable(function(t,e,n){var r,i,s,u;for(u=[],i=0,s=this.length;s>i;i++)r=this[i],u.push(o.render(r,t,e,n));return u}),("undefined"!=typeof jQuery&&null!==jQuery||"undefined"!=typeof Zepto&&null!==Zepto)&&(r=jQuery||Zepto,null!=r&&(r.fn.render=o.jQueryPlugin)),("undefined"!=typeof e&&null!==e?e.exports:void 0)&&(e.exports=o),"undefined"!=typeof window&&null!==window&&(window.Transparency=o),("undefined"!=typeof define&&null!==define?define.amd:void 0)&&define(function(){return o})},{"../lib/lodash.js":7,"./context":3,"./helpers":5}],2:[function(t,e,n){var r,i,o,s,u,l,a,h,c=function(t,e){function n(){this.constructor=t}for(var r in e)p.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},p={}.hasOwnProperty;a=t("../lib/lodash"),h=t("./helpers"),e.exports=i={Attributes:{},createAttribute:function(t,e){var n;return new(n=i.Attributes[e]||r)(t,e)}},r=function(){function t(t,e){this.el=t,this.name=e,this.templateValue=this.el.getAttribute(this.name)||""}return t.prototype.set=function(t){return this.el[this.name]=t,this.el.setAttribute(this.name,t.toString())},t}(),o=function(t){function e(t,e){this.el=t,this.name=e,this.templateValue=this.el.getAttribute(this.name)||!1}var n,r,o,s;for(c(e,t),n=["hidden","async","defer","autofocus","formnovalidate","disabled","autofocus","formnovalidate","multiple","readonly","required","checked","scoped","reversed","selected","loop","muted","autoplay","controls","seamless","default","ismap","novalidate","open","typemustmatch","truespeed"],r=0,o=n.length;o>r;r++)s=n[r],i.Attributes[s]=e;return e.prototype.set=function(t){return this.el[this.name]=t,t?this.el.setAttribute(this.name,this.name):this.el.removeAttribute(this.name)},e}(r),l=function(t){function e(t,e){var n;this.el=t,this.name=e,this.templateValue=function(){var t,e,r,i;for(r=this.el.childNodes,i=[],t=0,e=r.length;e>t;t++)n=r[t],n.nodeType===h.TEXT_NODE&&i.push(n.nodeValue);return i}.call(this).join(""),this.children=a.toArray(this.el.children),(this.textNode=this.el.firstChild)?this.textNode.nodeType!==h.TEXT_NODE&&(this.textNode=this.el.insertBefore(this.el.ownerDocument.createTextNode(""),this.textNode)):this.el.appendChild(this.textNode=this.el.ownerDocument.createTextNode(""))}return c(e,t),i.Attributes.text=e,e.prototype.set=function(t){for(var e,n,r,i,o;e=this.el.firstChild;)this.el.removeChild(e);for(this.textNode.nodeValue=t,this.el.appendChild(this.textNode),i=this.children,o=[],n=0,r=i.length;r>n;n++)e=i[n],o.push(this.el.appendChild(e));return o},e}(r),u=function(t){function e(t){this.el=t,this.templateValue="",this.children=a.toArray(this.el.children)}return c(e,t),i.Attributes.html=e,e.prototype.set=function(t){for(var e,n,r,i,o;e=this.el.firstChild;)this.el.removeChild(e);for(this.el.innerHTML=t+this.templateValue,i=this.children,o=[],n=0,r=i.length;r>n;n++)e=i[n],o.push(this.el.appendChild(e));return o},e}(r),s=function(t){function e(t){e.__super__.constructor.call(this,t,"class")}return c(e,t),i.Attributes["class"]=e,e}(r)},{"../lib/lodash":7,"./helpers":5}],3:[function(t,e,n){var r,i,o,s,u,l,a;a=t("./helpers"),s=a.before,o=a.after,u=a.chainable,l=a.cloneNode,i=t("./instance"),e.exports=r=function(){function t(t,e){this.el=t,this.Transparency=e,this.template=l(this.el),this.instances=[new i(this.el,this.Transparency)],this.instanceCache=[]}var e,n;return n=u(function(){return this.parent=this.el.parentNode,this.parent?(this.nextSibling=this.el.nextSibling,this.parent.removeChild(this.el)):void 0}),e=u(function(){return this.parent?this.nextSibling?this.parent.insertBefore(this.el,this.nextSibling):this.parent.appendChild(this.el):void 0}),t.prototype.render=s(n)(o(e)(u(function(t,e,n){for(var r,o,s,u,a,h,c;t.length<this.instances.length;)this.instanceCache.push(this.instances.pop().remove());for(;t.length>this.instances.length;)u=this.instanceCache.pop()||new i(l(this.template),this.Transparency),this.instances.push(u.appendTo(this.el));for(c=[],s=o=0,a=t.length;a>o;s=++o)h=t[s],u=this.instances[s],r=[],c.push(u.prepare(h,r).renderValues(h,r).renderDirectives(h,s,e).renderChildren(h,r,e,n));return c}))),t}()},{"./helpers":5,"./instance":6}],4:[function(t,e,n){var r,i,o,s,u,l,a,h,c,p,f,d={}.hasOwnProperty,m=function(t,e){function n(){this.constructor=t}for(var r in e)d.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};p=t("../lib/lodash.js"),f=t("./helpers"),r=t("./attributeFactory"),e.exports=s={Elements:{input:{}},createElement:function(t){var e,n;return new(e="input"===(n=t.nodeName.toLowerCase())?s.Elements[n][t.type.toLowerCase()]||u:s.Elements[n]||o)(t)}},o=function(){function t(t){this.el=t,this.attributes={},this.childNodes=p.toArray(this.el.childNodes),this.nodeName=this.el.nodeName.toLowerCase(),this.classNames=this.el.className.split(" "),this.originalAttributes={}}return t.prototype.empty=function(){for(var t;t=this.el.firstChild;)this.el.removeChild(t);return this},t.prototype.reset=function(){var t,e,n,r;n=this.attributes,r=[];for(e in n)t=n[e],r.push(t.set(t.templateValue));return r},t.prototype.render=function(t){return this.attr("text",t)},t.prototype.attr=function(t,e){var n,i;return n=(i=this.attributes)[t]||(i[t]=r.createAttribute(this.el,t,e)),null!=e&&n.set(e),n},t.prototype.renderDirectives=function(t,e,n){var r,i,o,s;o=[];for(i in n)d.call(n,i)&&(r=n[i],"function"==typeof r&&(s=r.call(t,{element:this.el,index:e,value:this.attr(i).templateValue}),null!=s?o.push(this.attr(i,s)):o.push(void 0)));return o},t}(),a=function(t){function e(t){e.__super__.constructor.call(this,t),this.elements=f.getElements(t)}return m(e,t),s.Elements.select=e,e.prototype.render=function(t){var e,n,r,i,o;for(t=t.toString(),i=this.elements,o=[],e=0,n=i.length;n>e;e++)r=i[e],"option"===r.nodeName&&o.push(r.attr("selected",r.el.value===t));return o},e}(o),c=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}var n,r,i,o;for(m(e,t),n=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],r=0,i=n.length;i>r;r++)o=n[r],s.Elements[o]=e;return e.prototype.attr=function(t,n){return"text"!==t&&"html"!==t?e.__super__.attr.call(this,t,n):void 0},e}(o),u=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return m(e,t),e.prototype.render=function(t){return this.attr("value",t)},e}(c),h=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return m(e,t),s.Elements.textarea=e,e}(u),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return m(e,t),s.Elements.input.checkbox=e,e.prototype.render=function(t){return this.attr("checked",Boolean(t))},e}(u),l=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return m(e,t),s.Elements.input.radio=e,e}(i)},{"../lib/lodash.js":7,"./attributeFactory":2,"./helpers":5}],5:[function(t,e,n){var r,i,o,s;r=t("./elementFactory"),n.before=function(t){return function(e){return function(){return t.apply(this,arguments),e.apply(this,arguments)}}},n.after=function(t){return function(e){return function(){return e.apply(this,arguments),t.apply(this,arguments)}}},n.chainable=n.after(function(){return this}),n.onlyWith$=function(t){return"undefined"!=typeof jQuery&&null!==jQuery||"undefined"!=typeof Zepto&&null!==Zepto?function(e){return t(arguments)}(jQuery||Zepto):void 0},n.getElements=function(t){var e;return e=[],i(t,e),e},i=function(t,e){var o,s;for(o=t.firstChild,s=[];o;)o.nodeType===n.ELEMENT_NODE&&(e.push(new r.createElement(o)),i(o,e)),s.push(o=o.nextSibling);return s},n.ELEMENT_NODE=1,n.TEXT_NODE=3,s=function(){return"<:nav></:nav>"!==document.createElement("nav").cloneNode(!0).outerHTML},n.cloneNode="undefined"==typeof document||null===document||s()?function(t){return t.cloneNode(!0)}:function(t){var e,r,i,s,u;if(e=Transparency.clone(t),e.nodeType===n.ELEMENT_NODE)for(e.removeAttribute(o),u=e.getElementsByTagName("*"),i=0,s=u.length;s>i;i++)r=u[i],r.removeAttribute(o);return e},o="transparency",n.data=function(t){return t[o]||(t[o]={})},n.nullLogger=function(){},n.consoleLogger=function(){return console.log(arguments)},n.log=n.nullLogger},{"./elementFactory":4}],6:[function(t,e,n){var r,i,o,s,u={}.hasOwnProperty;i=t("../lib/lodash.js"),o=(s=t("./helpers")).chainable,e.exports=r=function(){function t(t,e){this.Transparency=e,this.queryCache={},this.childNodes=i.toArray(t.childNodes),this.elements=s.getElements(t)}return t.prototype.remove=o(function(){var t,e,n,r,i;for(r=this.childNodes,i=[],t=0,e=r.length;e>t;t++)n=r[t],i.push(n.parentNode.removeChild(n));return i}),t.prototype.appendTo=o(function(t){var e,n,r,i,o;for(i=this.childNodes,o=[],e=0,n=i.length;n>e;e++)r=i[e],o.push(t.appendChild(r));return o}),t.prototype.prepare=o(function(t){var e,n,r,i,o;for(i=this.elements,o=[],n=0,r=i.length;r>n;n++)e=i[n],e.reset(),o.push(s.data(e.el).model=t);return o}),t.prototype.renderValues=o(function(t,e){var n,r,o,s;if(i.isElement(t)&&(n=this.elements[0]))return n.empty().el.appendChild(t);if("object"==typeof t){o=[];for(r in t)u.call(t,r)&&(s=t[r],null!=s&&(i.isString(s)||i.isNumber(s)||i.isBoolean(s)||i.isDate(s)?o.push(function(){var t,e,i,o;for(i=this.matchingElements(r),o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.render(s));return o}.call(this)):"object"==typeof s?o.push(e.push(r)):o.push(void 0)));return o}}),t.prototype.renderDirectives=o(function(t,e,n){var r,i,o,s;s=[];for(o in n)u.call(n,o)&&(r=n[o],"object"==typeof r&&("object"!=typeof t&&(t={value:t}),s.push(function(){var n,s,u,l;for(u=this.matchingElements(o),l=[],n=0,s=u.length;s>n;n++)i=u[n],l.push(i.renderDirectives(t,e,r));return l}.call(this))));return s}),t.prototype.renderChildren=o(function(t,e,n,r){var i,o,s,u,l;for(l=[],o=0,u=e.length;u>o;o++)s=e[o],l.push(function(){var e,o,u,l;for(u=this.matchingElements(s),l=[],e=0,o=u.length;o>e;e++)i=u[e],l.push(this.Transparency.render(i.el,t[s],n[s],r));return l}.call(this));return l}),t.prototype.matchingElements=function(t){var e,n,r;return r=(e=this.queryCache)[t]||(e[t]=function(){var e,r,i,o;for(i=this.elements,o=[],e=0,r=i.length;r>e;e++)n=i[e],this.Transparency.matcher(n,t)&&o.push(n);return o}.call(this)),s.log("Matching elements for '"+t+"':",r),r},t}()},{"../lib/lodash.js":7,"./helpers":5}],7:[function(t,e,n){var r={};r.toString=Object.prototype.toString,r.toArray=function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=t[n];return e},r.isString=function(t){return"[object String]"==r.toString.call(t)},r.isNumber=function(t){return"[object Number]"==r.toString.call(t)},r.isArray=Array.isArray||function(t){return"[object Array]"===r.toString.call(t)},r.isDate=function(t){return"[object Date]"===r.toString.call(t)},r.isElement=function(t){return!(!t||1!==t.nodeType)},r.isPlainValue=function(t){var e;return e=typeof t,"object"!==e&&"function"!==e||n.isDate(t)},r.isBoolean=function(t){return t===!0||t===!1},e.exports=r},{}]},{},[1]);(function(root){"use strict";var css=".nanobar{width:100%;height:4px;z-index:9999;top:0}.bar{width:0;height:100%;transition:height .3s;background:#000}";function addCss(){var s=document.getElementById("nanobarcss");if(s===null){s=document.createElement("style");s.type="text/css";s.id="nanobarcss";document.head.insertBefore(s,document.head.firstChild);if(!s.styleSheet)return s.appendChild(document.createTextNode(css));s.styleSheet.cssText=css}}function addClass(el,cls){if(el.classList)el.classList.add(cls);else el.className+=" "+cls}function createBar(rm){var el=document.createElement("div"),width=0,here=0,on=0,bar={el:el,go:go};addClass(el,"bar");function move(){var dist=width-here;if(dist<.1&&dist>-.1){place(here);on=0;if(width===100){el.style.height=0;setTimeout(function(){rm(el)},300)}}else{place(width-dist/4);setTimeout(go,16)}}function place(num){width=num;el.style.width=width+"%"}function go(num){if(num>=0){here=num;if(!on){on=1;move()}}else if(on){move()}}return bar}function Nanobar(opts){opts=opts||{};var el=document.createElement("div"),applyGo,nanobar={el:el,go:function(p){applyGo(p);if(p===100){init()}}};function rm(child){el.removeChild(child)}function init(){var bar=createBar(rm);el.appendChild(bar.el);applyGo=bar.go}addCss();addClass(el,"nanobar");if(opts.id)el.id=opts.id;if(opts.classname)addClass(el,opts.classname);if(opts.target){el.style.position="relative";opts.target.insertBefore(el,opts.target.firstChild)}else{el.style.position="fixed";document.getElementsByTagName("body")[0].appendChild(el)}init();return nanobar}if(typeof exports==="object"){module.exports=Nanobar}else if(typeof define==="function"&&define.amd){define([],function(){return Nanobar})}else{root.Nanobar=Nanobar}})(this);
var Spadmin = function(){
  console.log("*TODO* add typeshave")
  this.channels = {}
  this.page = page
  this.template = Transparency
  this.loader = new Nanobar()
  this.request = window.superagent
}

Spadmin.prototype.bus = new bus()

Spadmin.prototype.init = function(opts){ // initializes spadmin
  if( opts.bus          ) this.bus = opts.bus
  if( opts.defaultstate ) this.bus._state = (this.bus.opts.defaultstate = opts.defaultstate )
  if( opts.debug ) this.bus.debug = true
  if( opts.sandbox ) this.sandbox = sandbox
  this.bus.publish("init",this)
  this.opts = opts
  this.pageid = opts.content.replace(/^#/g, '')
  this.api = new restglue(opts.apiurl,this)
  this.bus.publish("init/post",this)
  this.bus.state( this.bus.opts.defaultstate )
}

Spadmin.prototype.renderPage = function(template, data, cb){ // evaluates transparency-template+data into spadmin.pageid 
  var me = this
  this.bus.publish("renderpage/pre",arguments)
  this.update( this.pageid, {show:false})
  this.render(template, data, this.pageid, function(){
    if( cb ) cb.apply(this, arguments)
    me.update( this.pageid, {show:true})
    me.bus.publish("renderpage/post",arguments)
  })
}

Spadmin.prototype.renderDOM = function (domel, data,  target,  cb) { // evaluates transparency-domtemplate+data into (dom) targetid-string (or replaces domtemplate)
  this.bus.publish("renderdom/pre",arguments)
  var _target = false
  if( target ){
    if( typeof target == "string" ) _target = document.getElementById(target)
    else _target = target
    if( !_target ) throw "cannot find target: "+targetid
  }else _target = domel
  this.template.render( domel, data[0] || data, data[1] || {} )
  _target.innerHTML = domel.innerHTML 
  this.executeScripts( domel ) 
  if( cb  ) cb(domel, arguments) 
  this.bus.publish("renderdom/post",arguments)
}

Spadmin.prototype.executeScripts = function( el ){ // evaluates scripttags found in el.innerHTML
  var codes = el.getElementsByTagName("script");   
  for(var i=0;i<codes.length;i++){
    if( codes[i].text ) eval(codes[i].text)
    //if( codes[i].text ) (new Function( 'return (' + codes[i].text + ')' )())
    if( codes[i].src  ) this.loadScript( codes[i].src )
  }
}

Spadmin.prototype.loadScript = function(url){ // loads js-url and evaluates (synchronously)
  this.bus.publish("loadscript",arguments)
  var scriptNode = document.createElement('script');
  scriptNode.src = url
  scriptNode.async = false
  scriptNode.type = "text/javascript"
  document.body.appendChild(scriptNode)
}

Spadmin.prototype.renderHTML = function (domel, data) { // evaluates transparency-data into domelement (and returns html-string)
  this.bus.publish("renderhtml/post",arguments)
  try{ 
    var d = document.createElement("div")
    d.innerHTML = domel.innerHTML
    this.template.render( d, data[0] || data, data[1] || {} )
    this.bus.publish("renderhtml/post",d)
    return d.innerHTML
  }catch (e){ 
    console.dir( {args:arguments, func:"spadmin.renderHTML", error:e } ) 
  }
}

Spadmin.prototype.render = function (template, data, targetid,  cb) { // evaluates transparency-template (url or domid) + data into targetid (dom id string)
  this.bus.publish("render",arguments)
  try{
    var template_is_url   = template.match(/^http/) != null || template.match(/\//) != null
    var template_is_domid = template.match(/^#/) != null
    if( targetid != undefined && targetid.length ) targetid = targetid.replace(/^#/, '')
    var me = this

    // fetch template using url or domid
    if( template_is_domid ){
      var domel = document.getElementById( template.replace(/^#/,'') )
      this.renderDOM( domel, data, targetid, cb )
    }else if(template_is_url){
      superagent.get( template ).end( function(err,res){
        if( err ){
          if( String(err).match(/Error:/) || String(err).match(/cannot find/) ) throw err 
          else return me.bus.publish("error",{type:"server",data:{err:err,res:res}})
        }
        var domel = document.createElement('div')
        domel.innerHTML = res.text
        me.renderDOM( domel, data, targetid, cb )
      })
    }else{
      this.renderDOM(domel, data, targetid, cb ) // domid = domelement
    }
  }catch (e){ 
    console.dir( {args:arguments, func:"spadmin.render", error:e } ) 
  }
}

Spadmin.prototype.update = function (target, opts){ // monkeypatchable function to control transitions between renderPage()-calls
  this.bus.publish("update",arguments)
  if( opts && opts.show != undefined){
    if( opts.show === false) this.loader.go(50)
    if( opts.show === true ) this.loader.go(100)
  }
  this.bus.publish("update/post",arguments)
} 


var fp = function(){}

fp.prototype.compose = function() { // FRP function, compose(curry(add)(1), curry(mul)(2))(2), will output 6
  var fs;
  fs = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];
  var ret = fs.reverse().reduce( function(f, g) {
    return function() {
      var as;
      as = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];
      return f(g.apply(null, as));
    };
  });                                                                                                                                                                                         
  return ret
}

fp.prototype.ncurry = function(n, f, as) { // FRP function: finite curry, ncurry(2, add)(1)(2) will output 3
  if (as == null) {
    as = [];
  } 
  return function() {
    var bs;
    bs = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];
    bs = as.concat(bs);
    if (bs.length < n) {                   
      return fp.prototype.ncurry(n, f, bs);             
    } else {
      return f.apply(null, bs);            
    }
  };
}

fp.prototype.eq = function(str, path){ // FRP function: eq("foo") or eq("foo", 'path.to.value') does stringcompare on function input
  return curry(function(str,path,v){
    if( str == v || str == pick(path)(v) ) return v
  })(str)(path)
}

fp.prototype.curry = function(f) { // FRP function: anonymous curry, curry(add)(1)(2) will output 3                
  me = this
  return function() {                      
    var as;                                
    as = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];
    if (f.length > as.length) {            
      return fp.prototype.ncurry(f.length, f, as);      
    } else {
      return f.apply(null, as);            
    }
  };
}

fp.prototype.pick = fp.prototype.curry(function(x, xs) { // FRP function
  return String(x).split('.').reduce(function(acc, x) {
    if (acc == null) {
      return;
    }
    if( fp.prototype.debug ) console.log("-- spadmin.fp.pick("+x+","+xs+")")
    return acc[x];
  }, xs);
})

fp.prototype.createEventStream = function(selector, event_or_events, statefunction) { // FRP function: allows stateful DOM eventstreams (think baconjs/rxjs)
  var me = this
  var events = typeof event_or_events == "string" ? [event_or_events] : event_or_events 
  var ret = function(next) {
    var element, elements, l, len, results;
    function addEvents(el, events) {
      events.map(function (event) {
        el.addEventListener(event, next )
      }) 
    }
    if (selector[0] === "#") {
      element = document.querySelector(selector);
      if (element) {
        addEvents(element, events)
        return element
      }
    } else {
      var elements = document.querySelectorAll(selector)
      Array.prototype.forEach.call(
          elements,  
          function(el){
            addEvents(el, events )
          }
      );
      return elements
    }
  }
  return ret 
}

fp.prototype.mapAsync = function(arr, done, next) {
  var f, funcs, i, k, v;
  funcs = [];
  i = 0;
  for (k in arr) {
    v = arr[k];
    f = function(i, v) {
      return function() {
        var e, error;
        try {
          return cb(v, i, funcs[i + 1] || done);
        } catch (error) {
          e = error;
          return done(new Error(e));
        }
      };
    };
    funcs.push(f(i++, v));
  }
  return funcs[0]();
};

fp.prototype.once = function(fn, context){ 
  var result;
  return function() { 
    if(fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}

fp.prototype.delay = function(func,ms){  // setTimeout() with arguments order swapped
  return fp.prototype.curry(function(){
    setTimeout(func,ms)
  })
}

fp.prototype.throttleDelay = function(delay,fn){ // ignore calls within ms, and only execute last call 
  timeoutid = null
  return function(){
    if( timeoutid != null ) clearTimeout(timeoutid)
    var args = [ fn, delay ]
    for ( var i in arguments )  args.push( arguments[i] )
    timeoutid = setTimeout.apply( this, args )
  }
}

fp.prototype.throttle = fp.prototype.curry(function(delay, fn) { // execute fn, and then only execute every delay ms
  execute = true
  return function () {
    var context = this, args = arguments;
    if( execute ){
      fn.apply(context, args)
      execute = false
      setTimeout(function () {
        execute = true 
      }, delay);
    } 
  }
})

Spadmin.prototype.fp = new fp

Spadmin.prototype.registerElement = function (type, options) {
  for( i in options )
    if( typeof options[i] == "function" )
      options[i] = { value: options[i] }
  var prototype = { "prototype": Object.create( HTMLElement.prototype, options ) } 
  return document.registerElement( type, prototype )
}

window.Spadmin = Spadmin
window.Nanobar = Nanobar
