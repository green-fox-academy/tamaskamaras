'use strict'

document.querySelector('#thumbnail').addEventListener('click', changePicture);

let centerImage = document.querySelector('img');

function changePicture(e) {
    centerImage.setAttribute('src', e.target.src)
};
