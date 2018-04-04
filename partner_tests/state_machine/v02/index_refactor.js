'use strict';

function Child(name) {
	this.name = name;
	this.state = 'playing';
	this.mood = 0;
	this.snacks = 0;
  this.snackConsumption = 0;
  this.callToKindergarten = (state) => {
    let from = state || this.state;
    this.state = 'hiding';
		return `${this.name}'s state transited from "${from}" to "${this.state}".`;
  };
  this.callToPlay = (state) => {
    let from = state || this.state;
    consumeSnack(this);
    if (from !== 'playing') {
      this.state = 'playing';
      return `${this.name}'s state transited from "${from}" to "${this.state}".`;    
    }
		return `Cannot transit from "${from}" with "call to play".`;
  };
  this.callToEat = (state) => {
    let from = state || this.state;
    if (from === 'playing') {
      this.state = 'eating';
			return `${this.name}'s state transited from "${from}" to "${this.state}".`;
    }
		return `Cannot transit from "${from}" with "call to eat".`;
  };
}

function giveSnack (state, child) {
  let toChild = child || mock;
  let position = state || toChild.state;
  (!child) ? toChild.snacks = 0 : null;
  if (position === 'playing' || position === 'eating') {
    toChild.snacks++;
  }
  return toChild.snacks;
}

function consumeSnack (state, child) {
  let toChild = child || mock;
  let position = state || toChild.state;
  (!child) ? toChild.snacks = 1 : null;
  if (position === 'eating') {
    toChild.snacks = 0;
  }
  return toChild.snacks;
}

function raiseMood (child) {
}

let mock = new Child('Mock');
let pete = new Child('Pete');

function displayChild(child) {}

// console.log(pete.state);
// giveSnack(pete);
// giveSnack(pete);
// giveSnack(pete);
// giveSnack(pete);
// console.log(pete.snacks);


// console.log(giveSnack());
// console.log(pete.callToPlay('hiding'));
// console.log(pete.state);
// console.log(pete.callToEat());
// console.log(pete.state);

module.exports = {
  Child,
  giveSnack,
  consumeSnack,
  raiseMood
}