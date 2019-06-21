'use strict'

let p3 = document.querySelector('p:nth-of-type(3n)').getAttribute('class');

if (p3 = 'red-dot') {
    // alert('OMG DOTS')
};

let p4 = document.querySelector('p:nth-child(3n)').classList.value;

if (p4.includes('cat')) {
    document.querySelector('p:nth-child(4n)').textContent = 'pear'
};

if (document.querySelector('p').classList.value.includes('apple')) {
    document.querySelector('.cat').textContent = 'dog'
};

document.querySelector('p').setAttribute('class', 'red');
document.querySelector('.balloon').removeAttribute('class');
