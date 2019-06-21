'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
let PORT = 8080;

app.use(express.json())
app.use(express.static(__dirname))

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootSql',
  database: 'clothing'
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
  res.sendFile(__dirname + '/webstore.html');
})

app.get('/warehouse', function(req, res) {
  let select = `SELECT * FROM warehouse`;
  connQuery(res, select);
})

app.get('/price-check', function(req, res) {
  let select = `SELECT in_store, unit_price FROM warehouse WHERE item_name = "${req.query.item}" AND size = "${req.query.size}";`
  conn.query(select, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    let stack = (JSON.stringify(rows[0].in_store))
    let response;
    if (req.query.quantity > 3 && parseInt(req.query.quantity) <= stack) {
      response = {
        result: 'ok',
        total_price: JSON.stringify(rows[0].unit_price)
      }
    } else if (req.query.quantity <= 3) {
      response = {result: 'please order at least 3, one for yourself, two for your friends'}
    } else if (req.query.quantity >= stack) {
      response = {result: 'error, we don\'t have enough items in store'}      
    }
    res.json(response);
  })
})

function connQuery(res, select) {
  conn.query(select, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      result: 'ok',
      clothes: rows
    });
  })
}
