'use strict';

document.querySelector('button').addEventListener('click', getInput);

let requestCounter = 0;

function clearWindow() {
  document.querySelector('div').textContent = '';
  let garbage = document.querySelector('table');
  let main = document.querySelector('main');
  if (garbage !== null) {
    main.removeChild(garbage);
  }
}

function getInput(e) {
  e.preventDefault();
  let plateNumber = document.getElementById('plate').value;
  let policeFilter = document.getElementById('police').checked;
  let diplomatFilter = document.getElementById('diplomat').checked;
  document.getElementById('plate').value = '';
  document.getElementById('police').checked = false;
  document.getElementById('diplomat').checked = false;
  // document.getElementById('form').reset(); // does not work
  queryPlates(plateNumber, policeFilter, diplomatFilter);
  if (requestCounter > 0) {
    clearWindow();
  }
  requestCounter++;
}

function queryPlates(number, police, diplomat) {
  let request = new XMLHttpRequest();
  request.open('GET', `http://localhost:8080/search/?plate=${number}&police=${police}&diplomat=${diplomat}`);
  request.setRequestHeader('Accept', 'application/json');
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      let rows = JSON.parse(request.response);
      if (rows.result === 'error') {
        document.querySelector('div').textContent = 'Sorry, the submitted licence plate is not valid!';
      } else {
        createTableHeader(rows);
      }
    }
  }
  request.send();
}

function createTableHeader(data) {
  const table = document.createElement('table');
  const head = document.createElement('thead');
  const headContainer = document.createElement('tr');
  document.querySelector('main').appendChild(table);
  table.appendChild(head);
  head.appendChild(headContainer);
  const fieldValues = ['Licence plate', 'Brand', 'Model', 'Color', 'Year'];
  for (let i = 0; i < 5; i++) {
    const field = document.createElement('th');
    field.textContent = fieldValues[i];
    headContainer.appendChild(field);
  }
  fillTable(data, table);
}

function fillTable(data, table) {
  const body = document.createElement('tbody');
  table.appendChild(body);
  const fieldValues = ['plate', 'car_brand', 'car_model', 'color', 'year']
  data.forEach(element => {
    let rows = document.createElement('tr');
    body.appendChild(rows);
    for (let i = 0; i < 5; i++) {
      let row = document.createElement('td');
      if (fieldValues[i] === 'car_brand') {
        row.setAttribute('style', 'cursor: pointer;')
      }
      row.className = fieldValues[i];
      row.textContent = element[fieldValues[i]];
      rows.appendChild(row);
    }
  });
  table.addEventListener('click', checkField);
}

function checkField(e) {
  if (e.target.className === 'car_brand') {
    brandQuery(e.target.textContent);
  }
}

function brandQuery(brand) {
  let request = new XMLHttpRequest();
  request.open('GET', `http://localhost:8080/search/${brand}`);
  request.setRequestHeader('Accept', 'application/json');
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      let rows = JSON.parse(request.response);
      clearWindow();
      createTableHeader(rows);
    }
  }
  request.send();
}