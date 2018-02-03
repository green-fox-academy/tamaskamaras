'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
let PORT = 8080;

app.use(express.json());
app.use(express.static(__dirname));

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootSql',
  database: 'spacetravel'
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
  res.sendFile(__dirname + '/space.html');
})

app.get('/planets', function(req, res) {
  let select = `SELECT * FROM planet`;
  connQuery(res, select);
})

app.get('/ship', function(req, res) {
  let select = `SELECT * FROM spaceship`;
  connQuery(res, select);
})

app.post('/movehere', function(req, res) {
  let select2 = `UPDATE spaceship SET planet = 
  (SELECT name FROM planet WHERE id = ${req.query.planet_id}) WHERE id = "1"`;
  conn.query(select2, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error, post');
      return;
    };
    res.json({message: 'OK',});
  })
})

app.post('/toship', function(req, res) {
  let select = `SELECT max_capacity, utilization FROM spaceship WHERE id = ${req.query.planet_id};`;
  conn.query(select, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    // res.json(rows);
    console.log(rows)
    queryPlanet(res, rows, req.query.planet_id);
  })
})

function queryPlanet(res, spaceship, planet_id) {
  let select = `SELECT population FROM planet WHERE id = ${planet_id};`
  conn.query(select, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    // res.json(rows);
    console.log(spaceship);
    let population = parseInt(rows[0].population);
    let shipCapacity = parseInt(spaceship[0].max_capacity);
    let shipUtilization = parseInt(spaceship[0].utilization);
    let diff = shipCapacity - shipUtilization;
    if (diff > 0) {
      changePassengersNum(res, diff);
      changePopulationNum(res, diff, planet_id);
    }
  })
}

function changePassengersNum(res, diff) {
  console.log(diff);
  let select = `UPDATE spaceship SET utilization = utilization + ${diff} WHERE id = 1`;
  conn.query(select, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error, post');
      return;
    };
    res.json({message: 'OK',});
  })

}

function changePopulationNum(res, diff, planet_id) {
  console.log(diff);
  let select = `UPDATE planet SET population = population - ${diff} WHERE id = ${planet_id}`;
  conn.query(select, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error, post');
      return;
    };
    res.json({message: 'OK',});
  })
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
