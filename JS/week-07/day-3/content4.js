'use strict'

let subjects = ['apple', 'banana', 'cat', 'dog'];

let lis = document.querySelectorAll('li');

for (let i in subjects) {
    lis[i].textContent = subjects[i]
    lis[i].setAttribute('style', 'background: limegreen')
};
