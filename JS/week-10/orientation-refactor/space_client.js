'use strict';

function requestPlanets() {
	let request = new XMLHttpRequest();
	request.open('GET', 'http://localhost:8080/planets');
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      console.log(request);
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
		if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      let ship = JSON.parse(request.response)[0];
      createTable(planets, ship);
		}
	}
	request.send()
}

function createTable(planets, ship) {
  const main = document.querySelector('main');
  main.innerHTML = `
  <table>
    <thead>
      <tr></tr>
    </thead>
    <tbody></tbody>
  </table>
  `;
  const fieldValues = ['Planet', 'Population', 'Spaceship location', 'People on ship'];
  let headRow = document.querySelector('thead > tr');
  fieldValues.forEach(value => {
    headRow.innerHTML += `<th>${value}</th>`
  }) 
  const body = document.createElement('tbody');
  document.querySelector('table').appendChild(body);
  planets.forEach(element => {
    let rows = document.createElement('tr');
    body.appendChild(rows);
    body.innerHTML += `
    <tr>
      <td>${element.name}</td>
      <td>${element.population}</td>
    </tr>`;
      if (element.name === ship.planet) {
        document.querySelector('tbody > tr:last-of-type').innerHTML += `
        <td>
          <button type="submit" class="${element.id}" id="toplanet">\u2190 to planet</button>
          <button type="submit" class="${element.id}" id="toship">to ship \u2192</button>
        </td>
        <td>${ship.utilization}</td>`
      } else {
        document.querySelector('tbody > tr:last-of-type').innerHTML += `
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
