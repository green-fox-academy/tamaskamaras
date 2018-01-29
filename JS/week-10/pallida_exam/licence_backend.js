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
  conn.query('SELECT * FROM plates WHERE plate = ')
})

app.listen(port, function(){
  console.log(`App is listening on port ${port}`)
})
