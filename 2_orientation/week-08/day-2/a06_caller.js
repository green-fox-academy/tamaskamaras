// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array

'use strict';

function printNumber(num) {
    console.log(num);
};

function selectLastEvenNumber(numbers, printer) {
    let lastEvenNum = 0;
    numbers.forEach(function(number) {
        if (number % 2 === 0 && number > lastEvenNum) {
            lastEvenNum = number
        };
    });
    printer(lastEvenNum);
};
  
selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8
