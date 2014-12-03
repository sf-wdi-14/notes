#Introduction to Node.js (Node)
A lecture introducing students to Node.js.

# Objectives
Students will be able to...

- describe the use of Node
- import and export modules
- create a simple HTTP server using Node

## What's Node? 
Node is a platform that uses JavaScript for creating network applications. 

## Node Modules 
Node's module system allows code written in a partiuclar file (or folder) to be exported and then imported into other files. 

To view a practical example of importing and exporting modules, please read [this article](http://www.sitepoint.com/understanding-module-exports-exports-node-js/)











##Example web server with Node
The below is to demonstrate how Node can be used to create network applications.

**server.js**

```
var http = require("http");

function requestHandler(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Hello World");
  res.end();
}

var server = http.createServer(requestHandler);

server.listen(3000);

```


