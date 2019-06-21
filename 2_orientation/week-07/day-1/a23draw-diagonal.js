'use strict'

var lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

for (let i = 0; i < lineCount + 1; i++) {
    for (let j = 0; j < lineCount + 1; j++) {
        if (i === 0 && j === 0 || i === lineCount && j === lineCount) {
            console.log('%'.repeat(lineCount));
        } else if (i === j && i !== 0 && j !==0 && i !== lineCount && j !== lineCount -1) {
            console.log(
                '%' +
                ' '.repeat(i - 1) +
                '%' +
                ' '.repeat(lineCount - i - 2) +
                '%'
            )
        }
    } 
}