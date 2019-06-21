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

app.get('/search', function(req, res) {
  let select = ``;
  if (req.query.plate.match(/^[a-z0-9-]{0,7}$/i)) {
    connQuery(res, createSelect(req.query));
  } else {
    res.json({ "result": "error", "message": "invalid input" });
  }
})

app.get('/search/:brand', function(req, res) {
  let select = `SELECT * FROM licence_plates WHERE car_brand = "${req.params.brand}"`;
  connQuery(res, select);
})

app.listen(port, function(){
  console.log(`App is listening on port ${port}`)
})

function createSelect(query) {
  let select = 'SELECT * FROM licence_plates WHERE plate LIKE "';
  if (query.plate.length > 0) {
    select += `%${query.plate}%";`;
  } else if (query.police === 'true') {
    select += `RB%";`;
  } else if (query.diplomat === 'true') {
    select += `DT%";`;
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

// function validation(query) {
//   return query.match(/^[a-z0-9-]{0,7}$/i);
  // return (isAlphaNumeric(query) && query.length < 8);
// }

// function isAlphaNumeric(str) {
//   let code;
//   for (let i = 0; i < str.length; i++) {
//     code = str.charCodeAt(i);
//     if ((code === 189) && !(code > 47 && code < 58) && // numeric (0-9)
//         !(code > 64 && code < 91) && // upper alpha (A-Z)
//         !(code > 96 && code < 123)) { // lower alpha (a-z)
//       return false;
//     }
//   }
//   return true;
// };
