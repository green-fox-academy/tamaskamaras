'use strict';

document.querySelector('button').addEventListener('click', getInput);

function getInput() {
  let plateNumber = document.getElementById('plate').value;
  let policeFilter = document.getElementById('police').checked;
  let diplomatFilter = document.getElementById('diplomat').checked;
  console.log(plateNumber, policeFilter, diplomatFilter);
  queryPlates(plateNumber, policeFilter, diplomatFilter);
}

