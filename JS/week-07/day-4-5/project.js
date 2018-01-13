'use strict'

let centerImage = document.querySelector('img');
let galeryItems = document.querySelector('#thumbnail');

let imageUrls = [];
document.querySelectorAll('#thumbnail > a > img').forEach(function(element, i) {
    imageUrls.push(element.src)
});

let leftButton = document.querySelector('.side:first-child');
let rightButton = document.querySelector('.side:last-child');

galeryItems.addEventListener('click', changePicture);
leftButton.addEventListener('click', stepPictureLeft);
rightButton.addEventListener('click', stepPictureRight);

var current = 'file:///C:/Users/K/Desktop/greenfox/tamaskamaras/JS/week-07/day-4-5/image01.jpg';
var clicks = 0;

function removeAnimation() {
    centerImage.removeAttribute('style')
}

function stepPictureRight() {
    if (clicks === imageUrls.length - 1) {
        clicks = -1
    }
    clicks += 1
    centerImage.setAttribute('src', imageUrls[clicks])
    centerImage.setAttribute('style', 'animation-name: fadein; animation-duration: 1s')
    setTimeout(removeAnimation, 1000)
};

function stepPictureLeft() {
    if (clicks === 0) {
        clicks = imageUrls.length
    }
    clicks -= 1
    centerImage.setAttribute('src', imageUrls[clicks])
    centerImage.setAttribute('style', 'animation-name: fadein; animation-duration: 1s')
    setTimeout(removeAnimation, 1000)
};

function changePicture(e) {
    centerImage.setAttribute('src', e.target.src)
    document.querySelector('h1').textContent = e.target.alt
    current = e.target.src
    imageUrls.forEach(function(element, i) {
        if (element === e.target.src) {
            clicks = i
        }
    })
    centerImage.setAttribute('style', 'animation-name: fadein; animation-duration: 1s')
    setTimeout(removeAnimation, 1000)
};