// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

'use strict'

function sum(number) {
    let result = 0
    for (let i = 1; i < number + 1; i++) {
        result += i
    }
    return result
};

console.log(sum(5));
