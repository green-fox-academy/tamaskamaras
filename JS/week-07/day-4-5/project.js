'use strict'

let centerImage = document.querySelector('img');
let galeryItems = document.querySelector('#thumbnail');

let leftButton = document.querySelector('.side:first-child')
let rightButton = document.querySelector('.side:last-child')

galeryItems.addEventListener('click', changePicture);
// leftButton.addEventListener('click', )
// rightButton.addEventListener('click', )

var current = 'file:///C:/Users/K/Desktop/greenfox/tamaskamaras/JS/week-07/day-4-5/image01.jpg';

console.log(current);

function changePicture(e) {
    centerImage.setAttribute('src', e.target.src)
    document.querySelector('h1').textContent = e.target.alt
    current = e.target.src
    console.log(current);
};
