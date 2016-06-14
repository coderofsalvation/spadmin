var Spadmin = function(){
  console.log("*TODO* add typeshave")
  this.page = page
  this.template = Transparency
  this.loader = new Nanobar()
}

Spadmin.prototype.init = function(opts){
  console.log("inited")
  this.pageid = opts.content.replace(/^#/g, '')
  this.page() 
  this.api = restful(opts.apiurl)
}

Spadmin.prototype.renderPage = function(template, data){
  this.update( this.pageid, {show:false})
  this.render(template, data, this.pageid )
  this.update( this.pageid, {show:true})
}

Spadmin.prototype.renderDOM = function (domel, data,  targetid) {
  var target = domel
  if( targetid ){
    target = document.getElementById(targetid)
    if( !target ) throw "cannot find domid #"+targetid
  } 
  this.template.render( domel, data[0] || data, data[1] || {} )
  if( targetid ) target.innerHTML = domel.innerHTML 
  this.executeScripts( domel ) 
}

Spadmin.prototype.executeScripts = function( el ){
  var codes = el.getElementsByTagName("script");   
  for(var i=0;i<codes.length;i++){
    if( codes[i].src == undefined ) eval(codes[i].text);  
    else {
      var scriptNode = document.createElement('script');
      scriptNode.src = codes[i].src;
      document.body.appendChild(scriptNode)
    }
  }
}

Spadmin.prototype.renderHTML = function (domel, data) {
  var d = document.createElement("div")
  d.innerHTML = domel.innerHTML
  this.template.render( d, data[0] || data, data[1] || {} )
  return d.innerHTML
}

Spadmin.prototype.render = function (template, data, targetid) {
  var template_is_url   = template.match(/^http/) != null || template.match(/\//) != null
  var template_is_domid = template.match(/^#/) != null
  if( targetid != undefined && targetid.length ) targetid = targetid.replace(/^#/, '')
  var me = this

  // fetch template using url or domid
  if( template_is_domid ){
    var domel = document.getElementById( template.replace(/^#/,'') )
    this.renderDOM( domel, data, targetid )
  }else if(template_is_url){
    fetch( template ) 
    .then(function(response) { return response.text() })
    .then(function(body) {
      var domel = document.createElement('div')
      domel.innerHTML = body
      me.renderDOM( domel, data, targetid )
    })
  }else{
    this.renderDOM(domel, data, targetid ) // domid = domelement
  }
}

Spadmin.prototype.update = function (target, opts){
  if( opts && opts.show != undefined){
    if( opts.show === false) this.loader.go(0)
    if( opts.show === true ) this.loader.go(100)
  }
} 

window.Spadmin = Spadmin
window.Nanobar = Nanobar
