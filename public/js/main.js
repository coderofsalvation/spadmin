var Spadmin = function(){
  console.log("*TODO* add typeshave")
  this.page = page
  this.template = Transparency
  this.loader = new Nanobar()
  this.object = panoptic 
}

Spadmin.prototype.init = function(opts){ // initializes spadmin
  console.log("inited")
  this.opts = opts
  this.pageid = opts.content.replace(/^#/g, '')
  this.page() 
  this.api = restful(opts.apiurl)
}

Spadmin.prototype.renderPage = function(template, data){ // evaluates transparency-template+data into spadmin.pageid 
  this.update( this.pageid, {show:false})
  this.render(template, data, this.pageid )
  this.update( this.pageid, {show:true})
}

Spadmin.prototype.renderDOM = function (domel, data,  targetid,  cb) { // evaluates transparency-domtemplate+data into (dom) targetid-string (or replaces domtemplate)
  try{
    var target = domel
    if( targetid ){
      target = document.getElementById(targetid)
      if( !target ) throw "cannot find domid #"+targetid
    } 
    this.template.render( domel, data[0] || data, data[1] || {} )
    if( targetid ) target.innerHTML = domel.innerHTML 
    this.executeScripts( domel ) 
    if( cb  ) cb(domel, arguments) 
  }catch (e){ 
    console.dir( {args:arguments, func:"renderDOM", error:e } ) 
  }
}

Spadmin.prototype.executeScripts = function( el ){ // evaluates scripttags found in el.innerHTML
  var codes = el.getElementsByTagName("script");   
  for(var i=0;i<codes.length;i++){
    if( codes[i].text ) (new Function( 'return (' + codes[i].text + ')'  )()) 
    if( codes[i].src  ) this.loadScript( codes[i].src )
  }
}

Spadmin.prototype.loadScript = function(url){ // loads js-url and evaluates (synchronously)
  var scriptNode = document.createElement('script');
  scriptNode.src = url
  scriptNode.async = false
  scriptNode.type = "text/javascript"
  document.body.appendChild(scriptNode)
}

Spadmin.prototype.renderHTML = function (domel, data) { // evaluates transparency-data into domelement (and returns html-string)
  try{ 
    var d = document.createElement("div")
    d.innerHTML = domel.innerHTML
    this.template.render( d, data[0] || data, data[1] || {} )
    return d.innerHTML
  }catch (e){ 
    console.dir( {args:arguments, func:"spadmin.renderHTML", error:e } ) 
  }
}

Spadmin.prototype.render = function (template, data, targetid,  cb) { // evaluates transparency-template (url or domid) + data into targetid (dom id string)
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
  if( opts && opts.show != undefined){
    if( opts.show === false) this.loader.go(0)
    if( opts.show === true ) this.loader.go(100)
  }
} 


var fp = function(){}

fp.prototype.chain = function(){
  var chain
  for ( var i in arguments  ) chain = !chain ? arguments[i] : fp.prototype.pipe(chain,arguments[i]) 
  return chain
}

fp.prototype.pipe = function() { // FRP function, pipe(curry(add)(1), curry(mul)(2))(2), will output 6
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

fp.prototype.createEventStream = function(selector, event_or_events) { // FRP function: allows barebones DOM eventstreams (think baconjs/rxjs)
  var me = this
  var events = typeof event_or_events == "string" ? [event_or_events] : event_or_events 
  console.dir(events)
  var ret = function(next) {
    var element, elements, l, len, results;
    function addEvents(el, events) {
      events.map(function (event) {
        el.addEventListener(event, next)         
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

window.Spadmin = Spadmin
window.Nanobar = Nanobar
