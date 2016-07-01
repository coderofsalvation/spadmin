#!/usr/bin/env node
// vim:ft=coffee ts=2 sw=2 et :
// -*- mode:coffee -*-
"use strict";

var cluster = require('cluster')
let numCPUs = process.env.MULTICORE ? require('os').cpus().length : 1
if (cluster.isMaster) {
  let i = 0
  while (i < numCPUs) {
    cluster.fork()
    i++
  }
  cluster.on('exit', function(worker, code, signal) {
    console.log(`worker ${worker.process.pid} died..restarting`)
    cluster.fork()
    return
  })

} else {

  let request    = require("request")
  let compress   = require('compression')
  //minify     = require('minify')
  let express    = require("express")

  let app        = express()
  let bodyParser = require('body-parser')
  let port       = process.env.PORT || 3000
  let ip         = process.env.IP   || '0.0.0.0'
  
  // speed up data transfer
  app.use(compress());                                  // fast data

  // parse payloads
  app.use(bodyParser.json());                           // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true }));   // for parsing application/x-www-form-urlencoded

  // SPA routing
  app.use(function(req, res, next) {
    if ( req.url != "/" && req.url.match(/(\/$|\.html$|\.js|\.css|\.ttf|\.png|\.gif|\.jpg|\.woff)/) == null )
      req.url = "/index.html"
    next()
  })

  // middleware stack: try static files
  app.use(express.static(__dirname + "/public"))

  // middleware stack: try proxy 
  if (process.env.PROXY_URL) {
    app.use(function(req, res, next) {
      if( ["favicon.ico","robots.txt"].indexOf(req.url) != -1 ) return // prevent unnecessary traffic
      let method = req.method.toLowerCase()
      let url = process.env.PROXY_URL+req.url
      var r
      switch (method) {
        case "get":  r = request.get({uri: url}); break
        case "put":  r = request.put({uri: url, json: req.body}); break
        case "post": r = request.post({uri: url, json: req.body}); break
        case "delete": r = request.del({uri:url, json: req.body}); break
        default: return res.send("invalid method")
      }
      return req.pipe(r).pipe(res,{end:true})
    })
  }

  console.log(`listening on ${ip}:${port}`)
  app.listen(port, ip)
}

