'use strict';

const stateMachine = {
	states: {
		0: 'hiding',
		1: 'playing',
		2: 'eating'
	},
	callToKindergarten: (child) => {
		let from = child.state;
		child.mood = 0;
		child.state = stateMachine.states[0];
		changeBackground(from, child.state);
		return `${child.name}'s state transited from "${from}" to "${child.state}"`;
	},
	callToPlay: (child) => {
		let from = child.state;
		if (from !== stateMachine.states[1]) {
			child.state = stateMachine.states[1];
			alterBySnack.giveSnack(child);
			if (from === stateMachine.states[2]) {
				alterBySnack.consumeSnack(child);
			}
			changeBackground(from, child.state);
			return `${child.name}'s state transited from "${from}" to "${child.state}"`;
		}
		return `Cannot transition from "${child.state}" with "call to eat"`;
	},
	callToEat: (child) => {
		let from = child.state;
		if (from === stateMachine.states[1]) {
			alterBySnack.giveSnack(child);
			child.state = stateMachine.states[2];
			changeBackground(from, child.state);
			return `${child.name}'s state transited from "${from}" to "${child.state}"`;
		}
		return `Cannot transition from "${child.state}" with "call to eat"`;
	}
};

const alterBySnack = {
	giveSnack: (child) => {
		child.snacks++;
	},
	consumeSnack: (child) => {
		child.snacks = 0;
		child.snackConsumption++;
		alterBySnack.raiseMood(child);
	},
	raiseMood: (child) => {
		if (child.snackConsumption % 15 === 0) {
			child.mood += 8;
		} else if (child.snackConsumption % 5 === 0) {
			child.mood += 4;
		} else if (child.snackConsumption % 3 === 0) {
			child.mood += 2;
		} else {
			child.mood++;
		}
	}
};

function checkButton(event) {
	if (event.target.textContent === 'call to kindergarten') {
		displayText(stateMachine.callToKindergarten(pete));
  } else if (event.target.textContent === 'call to play') {
		displayText(stateMachine.callToPlay(pete));
  } else if (event.target.textContent === 'call to eat') {
		displayText(stateMachine.callToEat(pete));
  }
}

function changeBackground(from, to) {
	document.querySelector(`.${from}`).classList.remove('state');
	document.querySelector(`.${to}`).classList.add('state');
}

function displayText(string) {
	document.querySelector('p[id="message"]').textContent = string;
	document.querySelector('p[id="mood"]').textContent = `Pete's mood: ${pete.mood}`;
	document.querySelector('p[id="snacks"]').textContent = `Pete's snacks: ${pete.snacks}`;
}

document.querySelector('.buttons').addEventListener('click', checkButton);

function Child(name) {
	this.name = name;
	this.state = 'playing';
	this.mood = 0;
	this.snacks = 0;
	this.snackConsumption = 0;
}

let pete = new Child('Pete');

module.exports = {
	alterBySnack,
	stateMachine,
	Child
};
