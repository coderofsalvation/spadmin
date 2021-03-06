A wrapper around barebone npm-modules to easify framework-agnostic SPA rest-to-admin interface:

* `Spadmin.page`: Single Page Application (SPA) using [page](https://npmjs.org/package/page)
* `Spadmin.template`: reactive templates using [transparency](https://npmjs.org/package/transparency) 
* `Spadmin.api`: RESTapi-to-object mapping using [restglue](https://npmjs.org/package/restglue)
* `Spadmin.loader`: hipster toploaderbar using [nano](https://npmjs.org/package/nanobar)
* `Spadmin.fetch`: fetch http request polyfill [fetch](https://github.com/github/fetch)
* `Spadmin.bus` a stateful pubsub bus using [stateful-event](https://npmjs.org/package/stateful-event)
* `Spadmin.registerElement`: Custom html-elements using polyfill [document-register-element](https://npmjs.org/package/document-register-element)

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
      var spadmin = new Spadmin()
      spadmin.init({
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
            onmouseover: "blink(this)"
          }
        }
      }])
    </script>

Functions:

    Spadmin.prototype.init(opts)                             // initializes spadmin
    Spadmin.prototype.executeScripts( el )                   // evaluates scripttags found in el.innerHTML
    Spadmin.prototype.loadScript(url)                        // loads js-url and evaluates (synchronously)
    Spadmin.prototype.renderPage(template, data)             // evaluates transparency-template+data into spadmin.pageid
    Spadmin.prototype.render(template, data, targetid,  cb)  // evaluates transparency-template (url or domid) + data into targetid (dom id string)
    Spadmin.prototype.renderDOM(domel, data,  targetid,  cb) // evaluates transparency-domtemplate+data into (dom) targetid-string (or replaces domtemplate)
    Spadmin.prototype.renderHTML(domel, data)                // evaluates transparency-data into domelement (and returns html-string)
    Spadmin.prototype.update(target, opts)                   // monkeypatchable function to control transitions between renderPage()-calls

## Page Transitions

You can override the 'update' function like so :

    Spadmin.prototype.update = function (target, opts){
      this.bus.publish("update",arguments.true)
      if( opts && opts.show != undefined){
        if( opts.show === false) this.loader.go(0)
        if( opts.show === true ) this.loader.go(100)
      }
      this.bus.publish("update/post",arguments)
      this.bus.state("normal")
    }

## REST / api

You can easily setup an api like this:

    spadmin.api.addEndpoint("foo")

Voila! Now `spadmin.api.foo` gives you these functions:
  
    getAll(payload, headers)
    get(id, payload, headers)
    post(id, payload, headers)
    put(id, payload, headers)
    patch(id, payload, headers)
    options(id, payload, headers)

Example:

    // request items from api
    spadmin.api.foo.getAll().then(function(items){    // GET {apiurl}/foo

    })

    spadmin.api.foo.get('134').then(function(item){   // GET {apiurl}/foo/134

    })

> NOTE: pass the apiurl using spadmin.init()

Global headers & hooks could be used for api-specific purposes:

    api.headers['Authorization'] = 'Basic '+btoa( me.data.ui.api.login+":"+me.data.ui.api.password )
    api.headers['Accept']        = 'application/json'

    api.beforeRequest( function(config){
      // do something
    })

    api.afterRequest( function(config){
      // do something
    })

## Multiple api's 

    spadmin.otherapi = new api("http://otherapi.com/v1")
    spadmin.otherapi.addEndpoint("foo")
    spadmin.otherapi.foo.getAll().then( function(data){
      // voila
    })

> Don't use `spadmin.api.request` or `superagent` directly: you'll lose the sandbox-, beforeRequest() and afterRequest() features.

## States / events / channels

An eventbus is handy to easily distribute data/events:

    spadmin.bus.state("normal")

    spadmin.bus.debug = true                        // prints publish()-calls to console

    var fooHandler = spadmin.bus.subscribe("foo", function(data,state){
      if( navigator.onLine && state == "normal") spadmin.bus.state("offline")
    })
    
    spadmin.bus.subscribe("cleanup", function(data,state){
      spadmin.bus.unsubscribe(fooHandler)
    })

    spadmin.bus.publish("foo", {foo:"bar"})

    var mybus = new spadmin.bus // or roll your own stateful eventbus

Why state/bus is handy in an applications:

* unregister/ignore code execution
* merging datastreams

## Example server 

    $ npm install restful-admin-spa request compression express body-parser
    $ ln -s restful-admin-spa/app.js .
    $ node app.js
   
now surf to `http://localhost:3000`

## FP / FRP / Reactive programming

FP/FRP is hot atm, and it promotes (arguably) clean code.
Instead of including frameworks like RSJX/Baconjs, `Spadmin.fp` includes some barebone fp functions to facilitate reactive/streams:

    createEventStream('.button', ['click','mouseover'] )(
      chain( 
        pick('target.innerHTML'), 
        haltOnEmptyString, 
        handleButton
      ) 
    )

> The snippet above will fire the chain on any __click__ or __mouseover__ events from all buttons with classname '.button'

The Functions:

    spadmin.fp.chain()                                      // pass functions as arguments and have them returned as one function
    spadmin.fp.ncurry(n, f, as)                             // finite curry, ncurry(2, add)(1)(2) will output 3
    spadmin.fp.eq(str, path)                                // eq("foo") or eq("foo", 'path.to.value') does stringcompare on function input
    spadmin.fp.curry(f)                                     // anonymous curry, curry(add)(1)(2) will output 3                
    spadmin.fp.pick(x)                                      // pick value from input
    spadmin.fp.createEventStream(selector, event_or_events) // allows barebones DOM eventstreams (think baconjs/rxjs)
    spadmin.fp.mapAsync(arr, done, next)                    // async loop over array
    spadmin.fp.flipargs(function)                           // returns same function (but with reversed argument-order)
    spadmin.fp.delay(ms)                                    // will execute 2nd argument (=function) with setTimeout(function,ms)
    spadmin.fp.throttle(ms)                                 // will execute call, but ignore calls within x milliseconds 
    spadmin.fp.throttleDelay(ms)                            // will only execute last call, and ignore calls within x milliseconds 

An example:

    // your own fp-function
    var continueWhenStateIsNormal = spadmin.fp.continueWhenStateIsNormal = function(e){
      if( e && spadmin.bus.state() == "normal" ) return e
    }

    var handleButton = function(value){
      if( !value ) return
      // do stuff 
    }

    createEventStream('.button', ['click','mouseover'] )(
      chain( 
        continueWhenStateIsNormal,
        pick('target.textContent'), 
        handleButton
      ) 
    )

    spadmin.bus.state("normal")     // event will cascade into handleButton
    //spadmin.bus.state("offline")  // event will not cascade into handleButton

## Offline sandbox 

You can fake responses (for offline development etc) in 2 ways, like so:

    spadmin.api.addEndpoint("foobar")
    spadmin.api.addEndpoint("foo")

    spadmin.api.sandboxUrl('/foobar',       {'data':{"foo":true}}  ) 
    spadmin.api.sandboxUrl('/myapi',        {'path':"/js/sandbox"} )
    spadmin.api.sandboxUrl( /some.*regex/,  "/js/foo" )

    spadmin.api.foobar.getAll().then(function(data){    
      // data = {"foo":true}
    })

    spadmin.api.foo.getAll().then(function(data){    
      // data = /js/sandbox/foo/get.json instead of GET {apiurl}/myapi/foo 
    })

> NOTE: {apiurl} is passed using `spadmin.init()`    

## Custom HTML elements
G
Example:

    <-- include this after spadmin.min.js -->
    <script type="text/javascript" src"js/element/my-element.js"/>

    <my-element></my-element>

Now put this inside `js/element/my-element.js` :

    var myElement = function(){
      this.createdCallback          = function(){}
      this.attachedCallback         = function(){
        this.innerHTML        = "Foobar"       // set HTMLElement properties
        this.somevariable  = "Hello world"     // store/reference data 
      }
      this.detachedCallback         = function(){}
      this.attributeChangedCallback = function( name, previousValue, value ){}
    }
    Spadmin.prototype.registerElement("my-element", new myElement )

## Javascript modules / Lazy loading 

Instead of cool libs like `requirejs`, you can just register to the bus which is global state 

main.js: 

      var spadmin = new Spadmin()
      spadmin.init({
        content: '#page',   
        apiurl: 'http://localhost:3000'
      })

module.js:
      Spadmin.prototype.bus.subscribe("init/post",  function(spadmin){
        // do stuff
      }) 

      Spadmin.prototype.bus.subscribe("init/post",  function(spadmin){
        // do stuff
      }) 

## Initializing & Global state 

By default spadmin will have a bus which is initialized in global state.
If you don't want this (you are running 2 spadmins etc), then initialize like this:

      var spadmin = new Spadmin()
      spadmin.init({
        bus: new bus({defaultstate:"notloggedin"}) // defaulstate is 'normal' by default
        content: '#page',   
        apiurl: 'http://localhost:3000'
      })

> What happened here is that this spadmin got its own bus (instead of the global one)

## Philosophy

* framework-agnostic javascript micro-framework
* Theme/CSS agnostic so you can roll your own (or use Metronics/AdminLTE/SB Admin)
* easy setting up api's
