'use strict';

let testArray = [1, 3, 7, 9]

let sum = function (array) {
  let total = 0;
  if (Array.isArray(array)) {
    array.forEach(element => {
      total += element;
    });
    return total;
  } else {
    return 'The input is not an array!';
  }
};

module.exports = sum;
