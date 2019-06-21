// npm init -y
// npm i express mysql --save

// (npm install express
// npm install mysql
// npm install tape)

////////////////////////////
// BACKEND

'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
let PORT = 8080;

app.use(express.json()) // handle the body
app.use(express.static('frontend_reddit')) // provides a child directory to the client
app.use(express.static(__dirname)) // provides the same own directory to the client

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootSql',
  database: 'reddit'
})

conn.connect(function(err){
  if (err){
    console.log('Error connecting to DB');
    return;
  }
  console.log('Connected to DB')
})

app.listen(PORT, function(){
  console.log(`App is listening on port ${PORT}`)
})

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

// CATCH GET REQUESTS - PARAMS
// CLIENT SIDE: request.open('GET', `http://localhost:8080/search/Volvo`);
app.get('/search/:brand', function(req, res) {
  let select = `SELECT * FROM licence_plates WHERE car_brand = "${req.params.brand}"`;
  connQuery(res, select);
})

// CATCH GET REQUESTS - QUERY
// CLIENT SIDE: request.open('GET', `http://localhost:8080/search/?plate=TDB-325&police=false`);
app.get('/search', function(req, res) {
  let select = `SELECT * FROM licence_plates WHERE plate = "${req.query.plate}"`;
  connQuery(res, select);
})

// CATCH THE BODY
// CLIENT SIDE: request.open('POST', 'http://localhost:8080/posts');
app.post('/posts', function(req, res) {
  let select = `INSERT INTO posts (title, url) VALUES("${req.body.title}", "${req.body.url}");`
  conn.query(select, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error, post');
      return;
    };
    res.json({message: 'OK',});
  })
})

// CATCH DELETE REQUEST
// CLIENT SIDE: request.open('DELETE', 'http://localhost:8080/posts/32');
app.delete('/posts/:id', function(req, res) {
  let select = `DELETE FROM posts WHERE id = "${req.params.id}";`
  connQuery(res, select);
})

function connQuery(res, select) {
  conn.query(select, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(rows);
  })
}

////////////////////////////
// FRONTEND

'use strict';

{/* html Tag:
<form id="form" name="reset">
  <button type="submit">Query database</button>
</form> */}

document.querySelector('button').addEventListener('click', getInput);

function getInput(e) {
  e.preventDefault();
  let plateNumber = document.getElementById('plate').value;
  let policeFilter = document.getElementById('police').checked;
  document.getElementById('plate').value = '';
  document.getElementById('police').checked = false;
  launchRequest(plateNumber, policeFilter)
}

// SEND PARAMS REQUEST
function paramsQuery() {
  let request = new XMLHttpRequest();
  request.open('GET', `http://localhost:8080/search/Volvo`);
  request.setRequestHeader('Accept', 'application/json');
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      let rows = JSON.parse(request.response);
      console.log(rows);
    }
  }
  request.send();
}

// SEND QUERY REQUEST
function queryRequest() {
  let request = new XMLHttpRequest();
  request.open('GET', `http://localhost:8080/search/?plate=TDB-325&police=false`);
  request.setRequestHeader('Accept', 'application/json');
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      let rows = JSON.parse(request.response);
      console.log(rows);
    }
  }
  request.send();
}

// SEND BODY REQUEST
function loadBodyRequest() {
	let request = new XMLHttpRequest();
	request.open('GET', 'http://localhost:8080/posts');
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
      let posts = JSON.parse(request.response);
      console.log(posts);
		}
	}
	request.send()
}

function sendBodyRequest() {
	let localUrl = 'http://localhost:8080/posts/';
	let request = new XMLHttpRequest();
	request.open('PUT', localUrl + id + '/upvote');
	request.setRequestHeader('Accept', 'application/json');
	let body = JSON.stringify({
		"id": target.className,
		"score": 1
	});
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
			let scoreTag = document.querySelector('p[class="' + target.className + '"]');
			scoreTag.textContent = JSON.parse(request.response).score;
		};
	};
	request.send(body);
}