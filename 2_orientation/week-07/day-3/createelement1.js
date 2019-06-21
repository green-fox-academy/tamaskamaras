'use strict';

let newItem = document.createElement('li');
newItem.textContent = 'The Green Fox';
document.querySelector('ul').appendChild(newItem);

let newItem2 = document.createElement('li');
newItem2.textContent = 'The Lamplighter';
document.querySelector('ul').appendChild(newItem2);

let heading = document.createElement('header');
heading.textContent = 'I can add elements to the DOM';
document.querySelector('.container').appendChild(heading);

let image = document.createElement('img');
image.setAttribute('src', 'hero-down.png');
document.querySelector('.container').appendChild(image);
