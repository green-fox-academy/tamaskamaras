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
    this.mood = 0;
		return `${this.name}'s state transited from "${from}" to "${this.state}".`;
  };
  this.callToPlay = (state) => {
    let from = state || this.state;
    consumeSnacks(this);
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

function giveSnack (child, state) {
  let toChild = child || mock;
  let position = state || toChild.state;
  (state) ? toChild.snacks = 0 : null;
  if (position === 'playing' || position === 'eating') {
    toChild.snacks++;
  }
  return toChild.snacks;
}

function consumeSnacks (child, state) {
  let toChild = child || mock;
  let position = state || toChild.state;
  (state) ? toChild.snacks = 1 : null;
  if (position === 'eating') {
    toChild.snackConsumption += toChild.snacks;
    toChild.snacks = 0;
    raiseMood(toChild);
  }
  return toChild.snacks;
}

function raiseMood (child, consumption) {
  let toChild = child || mock;
  let snackConsumption = consumption || toChild.snackConsumption;
  (consumption) ? toChild.mood = 0 : null;
  if (snackConsumption > 0) {
      if (snackConsumption % 15 === 0) {
      toChild.mood += 8;
    } else if (snackConsumption % 5 === 0) {
      toChild.mood += 4;
    } else if (snackConsumption % 3 === 0) {
      toChild.mood += 2;
    } else {
      toChild.mood++;
    }
  }
  return toChild.mood;
}

let mock = new Child('Mock');
let pete = new Child('Pete');

document.querySelector('.buttons').addEventListener('click', checkButton);

function changeBackground(child, callback) {
  document.querySelector(`.${child.state}`).classList.remove('state');
  callback()
	document.querySelector(`.${child.state}`).classList.add('state');
}

function checkButton(event) {
  if (event.target.textContent === 'call to kindergarten') {
    changeBackground(pete, pete.callToKindergarten);
  } else if (event.target.textContent === 'call to play') {
    changeBackground(pete, pete.callToPlay);
  } else if (event.target.textContent === 'call to eat') {
    changeBackground(pete, pete.callToEat);
  } else if (event.target.textContent === 'GIVE SNACK!') {
    console.log(event.target.textContent);
  }
}



module.exports = {
  Child,
  giveSnack,
  consumeSnacks,
  raiseMood
}


