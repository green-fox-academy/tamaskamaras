'use strict';

let anagram = function (word1, word2) {
  let temp1 = (JSON.stringify(Array.from(word1).sort()));
  let temp2 = (JSON.stringify(Array.from(word2).sort()));
  return Object.is(temp1, temp2);
};

anagram('listens', 'silents');

module.exports = anagram;
