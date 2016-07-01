
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
  this.bus.publish("init",arguments,"loading")
  this.opts = opts
  this.pageid = opts.content.replace(/^#/g, '')
  this.page() 
  this.api = new api(opts.apiurl)
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
  try{
    var target = domel
    if( targetid ){
      target = document.getElementById(targetid)
      if( !target ) throw "cannot find domid #"+targetid
    } 
    this.template.render( domel, data[0] || data, data[1] || {} )
    if( targetid ) target.innerHTML = domel.innerHTML 
    this.executeScripts( domel ) 
    if( cb  ){
      cb(domel, arguments) 
      this.bus.publish("renderdom/post",arguments)
    }
  }catch (e){ 
    this.bus.publish("renderdom/post",arguments)
  }
}

Spadmin.prototype.executeScripts = function( el ){ // evaluates scripttags found in el.innerHTML
  this.bus.publish("executeScripts",arguments)
  var codes = el.getElementsByTagName("script");   
  for(var i=0;i<codes.length;i++){
    if( codes[i].text ) (new Function( 'return (' + codes[i].text + ')'  )()) 
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
      fetch( template ) 
      .then(function(response) { return response.text() })
      .then(function(body) {
        var domel = document.createElement('div')
        domel.innerHTML = body
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
    if( opts.show === false) this.loader.go(0)
    if( opts.show === true ) this.loader.go(100)
  }
  this.bus.publish("update/post",arguments)
  this.bus.state("normal")
} 


var fp = function(){}

fp.prototype.chain = function() { // FRP function, chain(curry(add)(1), curry(mul)(2))(2), will output 6
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

fp.prototype.mapAsync = function(arr, done, cb) {
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

Spadmin.prototype.fp = new fp

var api = function(apiurl){
  this.url = apiurl
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

api.prototype.addEndpoint = function ( resourcename ){
  function returnRequestPromise(method, url, payload, headers, api) {

    var config = {method:method, url:url, payload:payload, headers:headers, api:api }
    for( i in api.requestPre ) api.requestPre[i](config)
    var req = superagent[method]( url )
    for( i in api.headers ) req.set( i,  api.headers[i] ) 
    for( i in headers ) req.set( i,  headers[i] ) 
    req.send(payload)
    return new Promise(function(resolve, reject){
      req.end( function(err, res){
        for( i in api.requestPost ) api.requestPost[i](config, res, err)
        if( !err ) resolve(res.body)
        else reject(err, res)
      })
    }).catch(function(err){
      throw err 
    })
  }
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
    return returnRequestPromise( "get", url, payload, headers, this.api)
  }
  var methods = ['post', 'put', 'options', 'patch'] 
  methods.map( function(method){
    endpoint.prototype[method] = function(id, payload, headers){
      var url = this.api.url + "/"+resourcename + "/" + id
      return returnRequestPromise( method, url, payload, headers, this.api)
    }
  })
  this[resourcename] = new endpoint(resourcename, this)
}

window.Spadmin = Spadmin
window.Nanobar = Nanobar
