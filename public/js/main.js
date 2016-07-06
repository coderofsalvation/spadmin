
var Spadmin = function(){
  console.log("*TODO* add typeshave")
  this.channels = {}
  this.page = page
  this.template = Transparency
  this.loader = new Nanobar()
  this.bus = new bus()
  this.request = window.superagent
}

Spadmin.prototype.init = function(opts){ // initializes spadmin
  this.bus = new bus()
  if( opts.debug ) this.bus.debug = true
  if( opts.sandbox ) this.sandbox = sandbox
  this.bus.publish("init",arguments,"loading")
  this.opts = opts
  this.pageid = opts.content.replace(/^#/g, '')
  this.api = new api(opts.apiurl,this)
  this.bus.publish("init/post",arguments)
}

Spadmin.prototype.renderPage = function(template, data){ // evaluates transparency-template+data into spadmin.pageid 
  this.bus.publish("renderpage/pre",arguments)
  this.update( this.pageid, {show:false})
  this.render(template, data, this.pageid )
  this.update( this.pageid, {show:true})
  this.bus.publish("renderpage/post",arguments)
}

Spadmin.prototype.renderDOM = function (domel, data,  targetid,  cb) { // evaluates transparency-domtemplate+data into (dom) targetid-string (or replaces domtemplate)
  this.bus.publish("renderdom/pre",arguments)
  var target = domel
  if( targetid ){
    target = document.getElementById(targetid)
    if( !target ) throw "cannot find domid #"+targetid
  } 
  this.template.render( domel, data[0] || data, data[1] || {} )
  if( targetid ) target.innerHTML = domel.innerHTML 
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
          if( String(err).match(/Error:/) ) throw err 
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
  this.bus.publish("update",arguments,"loading")
  if( opts && opts.show != undefined){
    if( opts.show === false) this.loader.go(50)
    if( opts.show === true ) this.loader.go(100)
  }
  this.bus.publish("update/post",arguments)
  this.bus.state("normal")
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

fp.prototype.delay = function(func,ms){  // setTimeout() with arguments order swapped
  return fp.prototype.curry(function(){
    setTimeout(func,ms)
  })
}

fp.prototype.throttleDelay = function(delay,fn){ // ignore calls within ms, and only execute last call 
  timeoutid = null
  return fp.prototype.curry(function(){
    if( timeoutid != null ) clearTimeout(timeoutid)
    timeoutid = setTimeout(fn,delay)
  })
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

var api = function(apiurl){
  this.url = apiurl
  this.sandbox = {}
  this.headers = {}
  this.requestPre  = []
  this.requestPost = []
}

api.prototype.headers = {}
api.prototype.beforeRequest = function (cb) {
  this.requestPre.push(cb)   
}
api.prototype.afterRequest = function (cb) {
  this.requestPost.push(cb)   
}

api.prototype.request = function(method, url, payload, headers) {
  var config = {method:method, url:url, payload:payload, headers:headers, api:this }
  if( method == "get" && typeof payload == "string" && payload[0] == "?" ) url+=payload
  for( i in api.requestPre ) api.requestPre[i](config)
  var sandbox = this.getSandboxedUrl(method,url)
  if( sandbox && typeof sandbox != "string" ) return sandbox // return sandboxed promise
  url = sandbox ? sandbox : url                              // set sandboxed url
  var req = superagent[method]( url )
  for( i in this.headers ) req.set( i,  this.headers[i] ) 
  for( i in headers ) req.set( i,  headers[i] ) 
  if( method != "get" ) req.send(payload)
  return new Promise(function(resolve, reject){
    req.end( function(err, res){
      spadmin.bus.publish(method+"."+url.replace(/\?.*/g,"").replace(/\/[0-9]+$/,"/:id"), arguments )
      for( i in this.requestPost ) this.requestPost[i](config, res, err)
      if( !err ) resolve(res.body)
      else reject(err, res)
    })
  }).catch(function(err){
    throw err 
  })
}

api.prototype.addEndpoint = function ( resourcename ){
  var endpoint = function(resourcename,api){
    this.resourcename = resourcename
    this.api = api 
  }
  endpoint.prototype.getAll = function(payload, headers){
    return this.get( false, payload, headers )
  }
  endpoint.prototype.get = function(id, payload, headers){
    var url = this.api.url + "/"+resourcename
    if( id ) url+= "/"+id
    return this.api.request( "get", url, payload, headers, this.api)
  }
  var methods = ['post', 'put', 'options', 'patch'] 
  methods.map( function(method){
    endpoint.prototype[method] = function(id, payload, headers){
      var url = this.api.url + "/"+resourcename + "/" + id
      return this.api.request( method, url, payload, headers)
    }
  })
  this[resourcename] = new endpoint(resourcename, this)
}

api.prototype.sandboxUrl = function(url,destination){ // configure sandboxdata for url(pattern)
  this.sandbox[url] = destination
}

api.prototype.getSandboxedUrl = function(method,url){
  var config = {method:method, url:url, payload:{}, headers: this.headers, api:this }
  for ( var regex in this.sandbox ) {                                                                            
    var item = this.sandbox[regex]                                                                               
    var method = method.toUpperCase()                                                                            
    if( url.match( new RegExp(regex, "g") ) != null ){                                                           
      if( item.path ){
        var url_sandboxed = url.replace(/\/?\?.*/,'').replace( this.url, item.path ) + "/" + method.toLowerCase() + ".json"
        console.log("sandboxed url: "+method+" "+url+" => "+url_sandboxed)                                       
        return url_sandboxed 
      }
      if( item.data ){                                                                                           
        console.log("sandboxed url: "+method+" "+url+" => {}")                                                   
        var res = {body:item.data}                                                                               
        for( i in this.requestPost ) this.requestPost[i](config, res)                                            
        return new Promise(function(resolve, reject){ resolve(res.body) })                                       
      }
    }
  }   
  return false
}

Spadmin.prototype.registerElement = function (type, options) {
  for( i in options )
    if( typeof options[i] == "function" )
      options[i] = { value: options[i] }
  var prototype = { "prototype": Object.create( HTMLElement.prototype, options ) } 
  return document.registerElement( type, prototype )
}

window.Spadmin = Spadmin
window.Nanobar = Nanobar
