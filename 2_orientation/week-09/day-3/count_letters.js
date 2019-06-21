'use strict';

let letterCounter = function(string) {
  let lowerString = string.toLowerCase();
  let myObject = {};
  for (let letter of lowerString) {
    if (!myObject.hasOwnProperty(letter)) {
      myObject[letter] = 1;
    } else {
      myObject[letter] += 1;
    };
  };
};

module.exports = letterCounter;
