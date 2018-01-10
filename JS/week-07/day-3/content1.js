
let h1 = document.querySelector('h1');

console.log(h1.textContent);

let p1 = document.querySelector('p')

console.log(p1.textContent);

let p2 = document.querySelector('p:nth-of-type(2n)');

console.log(p2.textContent);

h1.textContent = 'New content';

document.querySelector('.result').textContent = p1.textContent;
