'use strict';

var TennisGame1 = function(player1Name, player2Name) {
	this.m_score1 = 0;
	this.m_score2 = 0;
	this.player1Name = player1Name;
	this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
	if (playerName === "player1") {
		this.m_score1 += 1;
	} else {
		this.m_score2 += 1;
	};
};

function addScores(tempScore) {
	let simpleScores = {
		0: 'Love',
		1: 'Fifteen',
		2: 'Thirty',
		3: 'Forty'
	}
	return simpleScores[tempScore] || 'Deuce';
};

function setScores(tempScore) {
	let simpleScores = {
		0: 'Love-All',
		1: 'Fifteen-All',
		2: 'Thirty-All'
	}
	return simpleScores[tempScore] || 'Deuce';
};

TennisGame1.prototype.getScore = function() {
	let score = "";
	let tempScore = 0;
	if (this.m_score1 === this.m_score2) {
		score = setScores(this.m_score1);
	} else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
		let minusResult = this.m_score1 - this.m_score2;
		if (minusResult === 1) {
			score = "Advantage player1";
		} else if (minusResult === -1) {
			score = "Advantage player2";
		} else if (minusResult >= 2) {
			score = "Win for player1";
		} else score = "Win for player2";
	} else {
		for (let i = 1; i < 3; i++) {
			if (i === 1) {
				tempScore = this.m_score1;
			} else {
				score += "-";
				tempScore = this.m_score2;
			}
			score += addScores(tempScore);
		}
	}
	return score;
}

if (typeof window === "undefined") {
	module.exports = TennisGame1;
}
