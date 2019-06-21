// Queue of festivalgoers at entry
// no. of alcohol units 
// no. of guns

// Create a security_check function that returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival.

'use strict';

var watchlist = [];
var securityAlcholLoot = 0;
let festivalGoers = [];

var queue = [
	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
	{ 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
];

function securityCheck() {
    queue.forEach(function(element) {
        if (element.alcohol !== 0) {
            securityAlcholLoot += element.alcohol
            element.alcohol = 0
        }
        if (element.guns === 0) {
            festivalGoers.push(element.name)
        } else {
            element.guns = 0
            watchlist.push(element.name)
        }
    })
    return festivalGoers
};


console.log(securityCheck());
console.log(watchlist);
console.log(Object.values(queue));
console.log(securityAlcholLoot);
