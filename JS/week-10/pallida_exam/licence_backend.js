'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
let port = 8080;

app.use(express.json());
app.use(express.static(__dirname));

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootSql',
  database: 'plates'
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to DB');
    return;
  }
  console.log('Connected to DB');
})

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/licence.html');
})

app.get('/queries', function(req, res) {
  let select = ``;
  if (validation(req.query.plate)) {
    connQuery(res, createSelect(req.query));
  } else {
    res.json({ "result": "error", "message": "invalid input" });
  }
})

app.get('/brandquery', function(req, res) {
  let select = `SELECT * FROM licence_plates WHERE car_brand = "${req.query.brand}"`;
  conn.query(select, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(rows);
  })
})

app.listen(port, function(){
  console.log(`App is listening on port ${port}`)
})

function validation(query) {
  if (isAlphaNumeric(query) && query.length < 8) {
    return true;
  }
  return false;
}

function isAlphaNumeric(str) {
  let code;
  for (let i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);
    if ((code === 189) && !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

function createSelect(query) {
  let select = ``;
  if (query.plate.length > 0) {
    select = `SELECT * FROM licence_plates WHERE plate LIKE "%${query.plate}%";`;
  } else if (query.police === 'true') {
    select = `SELECT * FROM licence_plates WHERE plate LIKE "RB%";`;
  } else if (query.diplomat === 'true') {
  select = `SELECT * FROM licence_plates WHERE plate LIKE "DT%";`;
  }
  return select;
}

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