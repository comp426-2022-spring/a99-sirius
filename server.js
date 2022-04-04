// Require http module
const http = require('http')
// Require fs module
const fs = require('fs')
const express = require('express')
// Require minimist module (make sure you install this one via npm).
// Use minimist to process one argument `--port=` on the command line after `node server.js`.
const args = require('minimist')(process.argv.slice(2))
// Define allowed argument name 'port'.
args["port"]
// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.
const port = args.port || process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Web Server Created on port 3000\n')
})

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})