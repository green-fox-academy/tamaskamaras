'use strict'

var lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let a = '';
for (let i = 0; i < (lineCount + 1); i++) {
    console.log(a);
    a += '*';
}
