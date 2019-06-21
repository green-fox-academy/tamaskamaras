// - Create a function called `factorio`
//   that returns it's input's factorial

'use strict'

function factorio(number) {
    let result = 1
    for (let i = 1; i < number + 1; i++) {
        result *= i
    }
    return result
};

console.log(factorio(5));
