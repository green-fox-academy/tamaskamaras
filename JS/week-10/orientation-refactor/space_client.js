'use strict';

function requestPlanets() {
	let request = new XMLHttpRequest();
	request.open('GET', 'http://localhost:8080/planets');
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
      let planets = JSON.parse(request.response);
      requestShip(planets);
		}
	}
	request.send()
}

function requestShip(planets) {
	let request = new XMLHttpRequest();
	request.open('GET', 'http://localhost:8080/ship');
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
      let ship = JSON.parse(request.response)[0];
      createTableHeader(planets, ship);
		}
	}
	request.send()
}

function createTableHeader(planets, ship) {
  const table = document.createElement('table');
  const head = document.createElement('thead');
  const headContainer = document.createElement('tr');
  document.querySelector('main').appendChild(table);
  table.appendChild(head);
  head.appendChild(headContainer);
  const fieldValues = ['Planet', 'Population', 'Spaceship location', 'People on ship'];
  for (let i = 0; i < 4; i++) {
    const field = document.createElement('th');
    field.textContent = fieldValues[i];
    headContainer.appendChild(field);
  }
  fillTable(planets, ship, table);
}

function fillTable(planets, ship, table) {
  const body = document.createElement('tbody');
  table.appendChild(body);
  planets.forEach(element => {
    let rows = document.createElement('tr');
    body.appendChild(rows);
    rows.innerHTML += `
    <td>${element.name}</td>
    <td>${element.population}</td>`
    if (element.name === ship.planet) {
      rows.innerHTML += `
      <td>
        <button type="submit" class="${element.id}" id="toplanet">\u2190 to planet</button>
        <button type="submit" class="${element.id}" id="toship">to ship \u2192</button>
      </td>
      <td>${ship.utilization}</td>`
    } else {
      rows.innerHTML += `
      <td>
        <button type="submit" class="${element.id}">Move here</button>
      </td>
      <td>-</td>`
    }
  })
  document.querySelector('table').addEventListener('click', checkButton);
}

function checkButton(event) {
  if (event.target.textContent === 'Move here') {
    putRequest(event.target.className, 'movehere');
  } else if (event.target.id === 'toplanet') {
    putRequest(event.target.className, 'toplanet');
  } else if (event.target.id === 'toship') {
    putRequest(event.target.className, 'toship');
  }
}

function putRequest(id, endpoint) {
  let request = new XMLHttpRequest();
  request.open('PUT', `http://localhost:8080/${endpoint}/?planet_id=${id}`);
  request.setRequestHeader('Accept', 'application/json');
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      let rows = JSON.parse(request.response);
      document.querySelector('main').textContent = '';
      requestPlanets();
    }
  }
  request.send();
}

requestPlanets();
