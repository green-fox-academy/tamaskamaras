// Create a function that takes two strings and decides if one is anagram of the other

'use strict';

const anagramBuiltIn = (word1, word2) => {
	let temp1 = (JSON.stringify(Array.from(word1).sort()));
	let temp2 = (JSON.stringify(Array.from(word2).sort()));
	return (temp1 === temp2);
};

console.log(anagramBuiltIn('listens', 'silents'));

///////////////////////


const anagramArrayFrom = (word1, word2) => {
	if (word1.length === word2.length) {
		let temp1 = (Array.from(word1).sort());
		let temp2 = (Array.from(word2).sort());
		let tempBoolean = [];
		for (let i = 0; i < temp1.length; i++) {
			if (temp1[i] === temp2[i]) {
				tempBoolean.push(true);
			}
		}
		return (word1.length === tempBoolean.length);
	}
};

console.log(anagramArrayFrom('listens', 'silents'));

////////////////////////


const arrayify = (word) => {
	let tempArray = [];
	for (let i = 0; i < word.length; i++) {
		tempArray.push(word[i]);
	}
	return tempArray;
};

const anagram = (word1, word2) => {
	let temp1 = word1.sort();
	let temp2 = word2.sort();
	let tempBoolean = [];
	for (let i = 0; i < temp1.length; i++) {
		if (temp1[i] === temp2[i]) {
			tempBoolean.push(true);
		}
	}
	return (word1.length === tempBoolean.length);
};

console.log(anagram(arrayify('listens'), arrayify('silents')));
