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

    let col3 = document.createElement('td');
    rows.appendChild(col3);
    let col4 = document.createElement('td');
    rows.appendChild(col4);
    if (element.name === ship.planet) {
      let leftArrow = document.createElement('button');
      leftArrow.setAttribute('type', 'submit')
      leftArrow.setAttribute('class', element.id)
      leftArrow.setAttribute('id', 'toplanet')
      leftArrow.textContent = '\u2190 to planet';

      let rightArrow = document.createElement('button');
      rightArrow.setAttribute('type', 'submit')
      rightArrow.setAttribute('class', element.id)
      rightArrow.setAttribute('id', 'toship')
      rightArrow.textContent = 'to ship \u2192';

      col3.appendChild(leftArrow);
      col3.appendChild(rightArrow);
      col4.textContent = ship.utilization;
    } else {
      let button = document.createElement('button');
      button.setAttribute('type', 'submit')
      button.setAttribute('class', element.id)
      button.textContent = 'Move here';
      col3.appendChild(button);
      col4.textContent = '-';
    }
  })
  document.querySelector('table').addEventListener('click', checkButton);
}

function checkButton(event) {
  if (event.target.textContent === 'Move here') {
    moveShip(event.target.className);
  } else if (event.target.id === 'toplanet') {
    toPlanet(event.target.className);
  } else if (event.target.id === 'toship') {
    toShip(event.target.className);
  }
}

function moveShip(id) {
  let request = new XMLHttpRequest();
  request.open('POST', `http://localhost:8080/movehere/?planet_id=${id}`);
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

function toPlanet(id) {
  console.log(id);
  let request = new XMLHttpRequest();
  request.open('PUT', `http://localhost:8080/toplanet/?planet_id=${id}`);
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

function toShip(id) {
  let request = new XMLHttpRequest();
  request.open('PUT', `http://localhost:8080/toship/?planet_id=${id}`);
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
