'use strict';

const express = require('express');

const app = express();
let post = 8080;

app.use('/assets', express.static('assets'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.get('/doubling', function(req, res) {
  let temp = {}
  if (req.query.input === undefined) {
    temp = {"error": "Please provide an input!"}
  } else {
    temp = {
          "received": req.query.input,
          "result": (2 * req.query.input)
        }
  }
  res.send(temp);
})

app.get('/greeter', function(req, res) {
  let greet = {};
  if (req.query.name === undefined) {
    greet = {"error": "Please provide a name!"};
  } else if (req.query.title === undefined) {
    greet = {"error": "Please provide a title!"};
  } else {
    greet = {"welcome_message": "Oh, hi there " + req.query.name + ", my dear " + req.query.title + "!"};
  }
  res.send(greet);
});

app.get('/appenda/:word', function(req, res) {
  let result = {};
  if (req.params.word.length > 0) {
    result = {
      "appended": (req.params.word + 'a')
    }
    res.send(result)
  }
});

app.listen(8080, function() {
  console.log(`App is listening on ${post}`)
});
