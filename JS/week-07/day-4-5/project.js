'use strict'

let centerImage = document.querySelector('img');
let galeryItems = document.querySelector('#thumbnail');

let imageUrls = [];
document.querySelectorAll('#thumbnail > a > img').forEach(function(element, i) {
    imageUrls.push(element.src)
});

let leftButton = document.querySelector('.side:first-child')
let rightButton = document.querySelector('.side:last-child')

galeryItems.addEventListener('click', changePicture);
// leftButton.addEventListener('click', );
rightButton.addEventListener('click', stepPicture);

var current = 'file:///C:/Users/K/Desktop/greenfox/tamaskamaras/JS/week-07/day-4-5/image01.jpg';

var clicks = 1;

function stepPicture() {
    centerImage.setAttribute('src', imageUrls[clicks])
    clicks += 1
};

function changePicture(e) {
    centerImage.setAttribute('src', e.target.src)
    document.querySelector('h1').textContent = e.target.alt
    current = e.target.src
    imageUrls.forEach(function(element, i) {
        if (element === e.target.src) {
            clicks = i + 1
        }
    })
};