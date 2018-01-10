'use strict'

let pLast = document.querySelector('body > p:last-of-type');

let allP = document.querySelectorAll('p');

allP.forEach(function(e) {
    e.textContent = pLast.textContent
});
