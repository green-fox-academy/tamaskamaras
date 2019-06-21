'use strict';

function requestProducts() {
	let request = new XMLHttpRequest();
	request.open('GET', 'http://localhost:8080/warehouse');
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
      let products = JSON.parse(request.response);
      createTableHeader(products.clothes);
		}
	}
	request.send();
}

function createTableHeader(products) {
  const table = document.createElement('table');
  const head = document.createElement('thead');
  const headContainer = document.createElement('tr');
  document.querySelector('main').appendChild(table);
  table.appendChild(head);
  head.appendChild(headContainer);
  const fieldValues = ['Item name', 'Manufacturer', 'Category', 'Size', 'Unit price'];
  for (let i = 0; i < 5; i++) {
    const field = document.createElement('th');
    field.textContent = fieldValues[i];
    headContainer.appendChild(field);
  }
  fillTable(products, table)
}

function fillTable(products, table) {
  const body = document.createElement('tbody');
  table.appendChild(body);
  const fieldValues = ['item_name', 'manufacturer', 'category', 'size', 'unit_price']
  products.forEach(element => {
    let rows = document.createElement('tr');
    body.appendChild(rows);
    for (let i = 0; i < 5; i++) {
      let row = document.createElement('td');
      row.textContent = element[fieldValues[i]];
      rows.appendChild(row);
    }
  })
  fillDropdownItems()
  fillDropdownSizes()
}

function fillDropdownItems() {
  const items = document.querySelector('select[name="item"]')
  const itemFields = ['Green Fox Jumper', 'Half-Ip Ribbed Mock-Turtleneck Sweater', 'Green Fox Short-Sleeved Mesh Polo Shirt', 'Wool/Alpaca Shawl Collar Cardigan', 'Two-Tone Sleeveless Sheath Dress', 'Strecth Steamed Pencil Skirt']
  itemFields.forEach(item => {
    let record = document.createElement('option')
    record.textContent = item;
    items.appendChild(record);
  })
}

function fillDropdownSizes() {
  const items = document.querySelector('select[name="size"]')
  const itemFields = ['s', 'm', 'l', 'xl', 'xxl']
  itemFields.forEach(item => {
    let record = document.createElement('option')
    record.textContent = item;
    items.appendChild(record);
  })
}

requestProducts();

document.querySelector('button').addEventListener('click', getInput);

function getInput(e) {
  e.preventDefault();
  let item = document.querySelector('select[name="item"]').value;
  let size = document.querySelector('select[name="size"]').value;
  let quantity = document.querySelector('input').value;
  document.querySelector('form').reset();
  queryGetTotal(item, size, quantity)
}

function queryGetTotal(item, size, quantity) {
  let request = new XMLHttpRequest();
  request.open('GET', `http://localhost:8080/price-check/?item=${item}&size=${size}&quantity=${quantity}`);
  request.setRequestHeader('Accept', 'application/json');
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      let rows = JSON.parse(request.response);
      displayResult(rows);
    }
  }
  request.send();
}

function displayResult(rows) {
  const p = document.querySelector('p');
  if (rows.result === 'ok') {
    p.textContent = `The item can be ordered at the price of ${rows.total_price}`;
  } else {
    p.textContent = rows.result;
  }
}
