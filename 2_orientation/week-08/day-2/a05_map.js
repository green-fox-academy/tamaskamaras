// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.

'use strict';

var fruits = [
    'melon',
    'apple',
    'strawberry',
    'blueberry',
    'pear',
    'banana'
  ];

let es = fruits.map(function(item) {
    let sum = 0;
    Array.from(item).map(function(letter) {
        if (letter === 'e') {
            sum++
        }
    });
    return sum;
});

console.log(es);
