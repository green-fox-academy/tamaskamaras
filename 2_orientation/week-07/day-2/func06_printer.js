// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

'use strict'

function printer() {
    console.log(Object.values(arguments))
};

printer('a', 'b', 'c', 'd');
