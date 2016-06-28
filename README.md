A bunch of modules to allow RAD for a SPA rest-to-admin interface:

* `Spadmin.page`: Single Page Application (SPA) using [page](https://npmjs.org/package/page)
* `Spadmin.template`: reactive templates using [transparency](https://npmjs.org/package/transparency) 
* `Spadmin.api`: REST-to-object mapping using [restful.js](https://npmjs.org/package/restful.js)
* `Spadmin.loader`: hipster toploaderbar using [nano](https://npmjs.org/package/nanobar)
* `Spadmin.fetch`: fetch http request polyfill [fetch](https://github.com/github/fetch)
* `Spadmin.object`: Simple PubSub / Observers / Functional Reactive Programming using [panoptic](https://github.com/davidrekow/panoptic)

## Usage 

    <script type="text/javascript" src="dist/spadmin.min.js"></script>
    <style type="text/css"> .template { display: none } </style>

    <!-- menu -->
    <a href="/foo">foo</a> 

    <!-- page -->
    <div id="page"></div>

    <!-- template -->
    <div id="foo" class="template">
      <h1 class="title"></h1>
    </div>

    <script>
      var spadmin = new Spadmin({
        content: '#page',   
        apiurl: 'http://localhost:3000'
      })

      // render template into #page
      spadmin.page('/foo', function(){
        spadmin.renderPage("#foo", {title: "My Title"}) 
      })

      // render remote template into #page
      spadmin.page('/bar', function(){
        spadmin.renderPage("/bar.html", {title: "My Title"}) 
      })
    </script>

For a full example see [simple.html](public/simple.html)

## Template engine: rendering a menu 

    <ul id="#menu">
      <div class="items">
        <li><a class="item"></a></li>
      </div>
    </ul>

    <script>
      spadmin.render( '#menu', [{
        title: "Menu", 
        items: [
          {item: "/user/123",  foo: "#"}, 
          {item: "/users",  foo: "#"} 
        ]
      },{
        items: {
          item: {
            href: function(params){ return this.foo + params.element.innerHTML; }, 
            onclick: function(params){ 
              return '('+function(){ 
                alert('hi!')
              }+')()'
            }
          }
        }
      }])
    </script>

## Transitions

You can override the 'update' function like so :

    Spadmin.prototype.update = function (target, opts){
      if( opts && opts.show != undefined){
        if( opts.show === false) this.loader.go(0)
        if( opts.show === true ) this.loader.go(100)
      }
    }

## Example server 

    $ npm install restful-admin-spa request compression express body-parser
    $ ln -s restful-admin-spa/app.js .
    $ node app.js
   
now surf to `http://localhost:3000`

## Philosophy

* framework-agnostic javascript micro-framework
* Theme/CSS agnostic so you can roll your own (or use Metronics/AdminLTE/SB Admin)

