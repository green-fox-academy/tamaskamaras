// Reverse the string!
'use strict';

var reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";

function reverse(text) {
    let result = ''
    for (let i = text.length -1; i > -1; i--) {
        result += text[i]
    }
    return result
};

console.log(reverse(reversed));
