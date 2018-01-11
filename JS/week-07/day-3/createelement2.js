'use strict';

document.querySelector('ul');
removeChild(document.querySelector('li'));

for (let i = 1; i < 17; i++) {
    let box = document.createElement('li')
    box.textContent = 'Empty box #' + i
    document.querySelector('ul').appendChild(box)
};