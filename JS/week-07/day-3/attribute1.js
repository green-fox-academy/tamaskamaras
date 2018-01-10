'use strict';

console.log(document.querySelector('img').getAttribute('src'));

document.querySelector('img').setAttribute('src', 'hero-down.png');
let link = document.getElementsByTagName('a');

link[0].setAttribute('href', 'https://www.greenfoxacademy.com/')

document.querySelector('.this-one').disabled = true;
document.querySelector('.this-one').textContent = 'Don\'t click me';
