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

app.post('/toship', function(request, response) {
  let select = `SELECT max_capacity, utilization, population FROM spaceship, planet 
  WHERE spaceship.id = 1 AND planet.id = ${request.query.planet_id};`;
  conn.query(select, function(selectError, selectRows) {
    if (selectError) {
      console.log(selectError.toString());
      response.status(500).send('Database error');
      return;
    }
    let update = validationToShip(selectRows, request.query.planet_id);
    console.log(update);
    conn.query(update, function(updateError, rows) {
      if (updateError) {
        console.log(updateError.toString());
        response.status(500).send('Database error, update');
        return;
      };
      response.json({message: 'OK',});
    })
  })
})

function validationToShip(rows, planet_id) {
  let update = `UPDATE spaceship, planet SET spaceship.utilization = spaceship.utilization + `;
  let freeSeats = rows[0].max_capacity - rows[0].utilization;
  if (freeSeats > 0 && rows[0].population > freeSeats) {
    update += `${freeSeats}, planet.population = planet.population - ${freeSeats} WHERE spaceship.id = 1 AND planet.id = ${planet_id};`;
    return update;
    } else if (freeSeats > 0 && rows[0].population < freeSeats) {
    update += `planet.population, planet.population = 0 WHERE spaceship.id = 1 AND planet.id = ${planet_id};`;
    return update;
  }
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
