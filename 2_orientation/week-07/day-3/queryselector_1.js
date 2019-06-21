'use strict'

let king = document.querySelector('#b325');

console.log(king);

let conceited = document.querySelector('.b326');

console.log(conceited);

let businessLamp = document.querySelectorAll('.big');

businessLamp.forEach(function(e) {
    console.log(e)
});

let conceitedKing = document.querySelectorAll('section > div');

conceitedKing.forEach(function(e) {
    // alert(e)
});

let noBusiness = document.querySelectorAll('div');

noBusiness.forEach(function(e) {
    console.log(e)
});

let allBizniss = document.querySelector('p');

alert(allBizniss);
