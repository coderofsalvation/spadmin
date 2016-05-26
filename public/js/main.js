var Spadmin = function(opts){
  console.log("*TODO* add typeshave")
  this.pageid = opts.content.replace(/^#/g, '')
  this.page = page
  this.template = Transparency
  this.loader = new Nanobar()
  this.init(opts)
}

Spadmin.prototype.init = function(opts){
  console.log("inited")
  this.page({ hashbang: true })
  this.api = restful(opts.apiurl)
}

Spadmin.prototype.render = function (target, data) {
  var page     = document.getElementById(this.pageid)
  var is_url   = target.match(/^http/) != null || target.match(/\//) != null
  var is_domid = target.match(/^#/) != null
  var me = this
  var html = ''
  this.loader.go(0)
  var _render = function(page, html, data){
    var div = document.createElement('div')
    div.innerHTML = html
    me.template.render( div, data )
    me.update(page, div.innerHTML, data)
  }
  if( is_domid ){
    var domel = document.getElementById( target.replace(/^#/,'') )
    _render(page,  domel.innerHTML, data)
  }else{
    fetch( target ) 
    .then(function(response) { return response.text() })
    .then(function(body) {
      _render( page, body,  data )
    })
  }
}

Spadmin.prototype.update = function (page, html, data) {
  page.innerHTML = html
  this.loader.go(100)
}
