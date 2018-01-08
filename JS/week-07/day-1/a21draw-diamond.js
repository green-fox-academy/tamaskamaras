'use strict'

// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

var lineCount = 7;

console.log('')
let upIteration = Math.ceil(lineCount / 2);
let stars = '*'
for (let i = 1; i < upIteration + 1; i++) {
    console.log(
        ' '.repeat(upIteration - i) +
        stars
    )
    stars += '**'
}

let downIteration = Math.floor(lineCount / 2);
let varia = 0
if (lineCount % 2 !== 0) {
    varia += 1;
}

for (let j = 0; j < downIteration; j++) {
    console.log(
        ' '.repeat(j + varia) +
        '*'.repeat((downIteration + 3 - varia) - (j * 2) )
    );
}
