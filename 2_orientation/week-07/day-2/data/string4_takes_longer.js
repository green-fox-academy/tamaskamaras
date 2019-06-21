// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

'use strict';

var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."

quote = quote.substr(0, 21) + 'always takes longer than ' + quote.substr(21, quote.length);

console.log(quote);
