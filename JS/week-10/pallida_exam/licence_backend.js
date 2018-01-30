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
  if (req.query.plate.length > 0) {
    select = `SELECT * FROM licence_plates WHERE plate LIKE "%${req.query.plate}%"`;
  } else if (req.query.police === 'true') {
    select = `SELECT * FROM licence_plates WHERE plate LIKE "%RB%"`;
  } else if (req.query.diplomat === 'true') {
  select = `SELECT * FROM licence_plates WHERE plate LIKE "DT%"`;
}
  conn.query(select, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(rows);
  })
})

app.get('/brandquery', function(req, res) {
  conn.query(`SELECT * FROM licence_plates WHERE car_brand = "${req.query.brand}"`, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error, brand query');
      return;
    }
    res.json(rows);
  })
})

app.listen(port, function(){
  console.log(`App is listening on port ${port}`)
})
