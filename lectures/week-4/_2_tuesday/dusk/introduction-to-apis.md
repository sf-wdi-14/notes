# Introduction to APIs
A lecture introducing APIs.

# Objectives
Students will be able to...

- describe an API
- reference example 
- create their own API
- integrate data from an (RESTful)
API
- name at least three minions :)

# Link
APIs are everywhere. They provide, moreover, data that would be nearly impossible for one web-based application to provide on its own. In this context, it every developer would benefit from understanding what is an API and how to use APIs. 

# Educate and Engage 
## Semantics of an API: Application’s Programming Interface

- An Application’s Programming Interface
- An Application’s Programming Conversation
- An Application’s Planned Conversation
- An Application’s Planned Communication
- An Application’s Planned Communication (with other Applications)

## Create our own API
```javascript
var express = require('express');
var app1     = express();
var app2     = express();
var request = require('request');

app1.get('/api/instructors', function(req, res) {
  res.send(["Cho", "Dennis", "Brian"]);
})

app2.get('/', function(req, res) {
  request('http://localhost:7000/api/instructors', function (error, response, body) {

      var instructors = JSON.parse(body);
      instructors.push("DELMER"); 
      res.send(instructors); 
  });
})


// API 
app1.listen(7000, function() {
  console.log("app1 is running");
});

app2.listen(8000, function() {
  console.log("app2 is running");
});
```

## Use an external API
```javascript
// code will be placed here, soon.
```