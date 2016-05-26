A bunch of modules to allow RAD for a SPA rest-to-admin interface:

* `Spadmin.page`: Single Page Application (SPA) using [page](https://npmjs.org/package/page)
* `Spadmin.template`: reactive templates using [transparency](https://npmjs.org/package/transparency) 
* `Spadmin.api`: REST-to-object mapping using [restful.js](https://npmjs.org/package/restful.js)
* `Spadmin.loader`: hipster toploaderbar using [nano](https://npmjs.org/package/nanobar)

Theme/CSS agnostic so you can roll/use your own.

## Example server 

    $ npm install restful-admin-spa request compression express body-parser
    $ ln -s restful-admin-spa/app.js .
    $ node app.js
   
now surf to `http://localhost:3000`

## Transitions

You can override the 'update' function like so :

    Spadmin.prototype.update = function (page, html, data) {
      this.loader.go(0)
      page.innerHTML = html
      this.loader.go(100)
    }
