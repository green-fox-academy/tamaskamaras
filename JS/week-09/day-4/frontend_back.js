'use strict';

const express = require('express');

const app = express();
let post = 8080;

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function(req, res) {
  let message = {};
  if (req.query.input === undefined) {
    message = {"error": "Please provide an input!"};
  } else {
    message = {
          "received": req.query.input,
          "result": (2 * req.query.input)
        };
  };
  res.send(message);
});

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
    result = {"appended": (req.params.word + 'a')};
    res.send(result);
  };
});

app.post('/dountil/*', function(req, res) {
  let result = {};
  if (req.params[0] === 'sum') {
    result = {"result": fibonacci(req.body.until)};
  } else if (req.params[0] === 'factor') {
    result = {"result": factorial(req.body.until)};
  };
  res.send(result);
});

function fibonacci (until) {
  let result = 0;
    for (let i = 1; i < until + 1; i++) {
        result += i
    }
    return result
  }
  
function factorial (until) {
  let result = 1;
    for (let i = 1; i < until + 1; i++) {
        result *= i
    }
    return result
}

app.listen(8080, function() {
  console.log(`App is listening on ${post}`)
});
