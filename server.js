// server.js
var express = require('express')
var jsonServer = require('json-server')
var serveStatic = require('serve-static')
var app = express()
var path = require('path')
app.use(serveStatic(path.join(__dirname, 'dist')))
app.use('/api', jsonServer.router('server/db.json'))
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started at ' + port)
