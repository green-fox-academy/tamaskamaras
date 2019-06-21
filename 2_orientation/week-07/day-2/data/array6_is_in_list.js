// Check if array contains all of the following elements: 4,8,12,16
// Create a 'numChecker' function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

'use strict';

var listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
let baseNumbers = [4, 8, 12, 16];

function numChecker(base, list) {
    let sum = 0
    base.forEach(function(element) {
        if (list.includes(element)) {
            sum += 1
        }
    })
    if (sum === base.length) {
        return true
    } else {
        return false
    }
};

console.log(numChecker(baseNumbers, listOfNumbers));
