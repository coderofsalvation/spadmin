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

Spadmin.prototype.loadScript = function(url){
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

window.Spadmin = Spadmin
window.Nanobar = Nanobar
window.mapAsync =   mapAsync = function(arr, done, cb) {
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

