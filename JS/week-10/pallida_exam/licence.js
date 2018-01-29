'use strict';

document.querySelector('button').addEventListener('click', getInput);

function getInput() {
  let plateNumber = document.getElementById('plate').value;
  let policeFilter = document.getElementById('police').checked;
  let diplomatFilter = document.getElementById('diplomat').checked;
  console.log(plateNumber, policeFilter, diplomatFilter);
  queryPlates(plateNumber, policeFilter, diplomatFilter);
}

function queryPlates(number, police, diplomat) {
  let request = new XMLHttpRequest();
  request.open('GET', `http://localhost:8080/queries/?plate=${number}&police=${police}&diplomat=${diplomat}`);
  request.setRequestHeader('Accept', 'application/json');
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      console.log(JSON.parse(request.response));
    }
  }
  request.send();
}
