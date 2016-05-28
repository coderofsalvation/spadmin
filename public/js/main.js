var Spadmin = function(){
  console.log("*TODO* add typeshave")
  this.page = page
  this.template = Transparency
  this.loader = new Nanobar()
}

Spadmin.prototype.init = function(opts){
  console.log("inited")
  this.pageid = opts.content.replace(/^#/g, '')
  this.page({ hashbang: true })
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
}

Spadmin.prototype.render = function (template, data, targetid) {
  var template_is_url   = template.match(/^http/) != null || template.match(/\//) != null
  var template_is_domid = template.match(/^#/) != null
  if( targetid != undefined && targetid.length ) targetid = targetid.replace(/^#/, '')
  var me = this
  var html = ''

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
