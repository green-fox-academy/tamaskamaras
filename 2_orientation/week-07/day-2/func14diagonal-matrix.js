// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

'use strict'

let size = 15;
let matrix = [];

for (let i = 0; i < size; i++) {
    matrix.push([('0'.repeat(size - 1 - i)) +
    '1' +
    '0'.repeat(i)])
};

console.log(matrix);
