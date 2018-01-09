// - Create variable named `al` and assign the value `Greenfox` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear Greenfox`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

'use strict'

let al = 'Greenfox';

function greet(someone) {
    if (someone === undefined) {
        console.log('Greetings, all,')
    } else {
        console.log('Greetings, dear ' + someone)
    }
};

greet();
greet(al);
