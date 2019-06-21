'use strict';

document.querySelector('button').addEventListener('click', getSum);

function getSum() {
    document.querySelector('.result').textContent =
    document.querySelectorAll('li').length;
}