// - Create an array variable named `ag` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

'use strict'

let ag = ['Gin', 'Whiskey', 'Wine', 'Beer'];

ag = ag.map(x => x + x);

console.log(ag);
