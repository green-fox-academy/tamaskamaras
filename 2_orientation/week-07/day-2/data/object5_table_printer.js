'use strict';

// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients = [
	{ "name": "vodka", "in_stock": 1, "needs_cooling": true },
	{ "name": "coffee_liqueur", "in_stock": 0, "needs_cooling": true },
	{ "name": "fresh_cream", "in_stock": 1, "needs_cooling": true },
	{ "name": "captain_morgan_rum", "in_stock": 2, "needs_cooling": true },
	{ "name": "mint_leaves", "in_stock": 0, "needs_cooling": false },
	{ "name": "sugar", "in_stock": 0, "needs_cooling": false },
	{ "name": "lime juice", "in_stock": 0, "needs_cooling": true },
	{ "name": "soda", "in_stock": 0, "needs_cooling": true }
];

function getColumnWidth() {
    let firstColumn = 0
    ingredients.forEach(function(element) {
        if (firstColumn < element.name.length) {
            firstColumn = element.name.length
        }
    })
    return firstColumn
};

function printSeparator(width) {
    console.log('+' + '-'.repeat(width + 2) + '+' + '-'.repeat(15) + '+' + '-'.repeat(10) + '+')
};

function printLine(list, width) {
    let needsCooling = ''
    list.forEach(function(element) {
        if (element.needs_cooling) {
            needsCooling = 'Yes'
        } else {
            needsCooling = 'No'
        }
        console.log('| ' +
        element.name +
        ' '.repeat(width - element.name.length) +
        ' | ' +
        needsCooling +
        ' '.repeat(14 - needsCooling.length) +
        '| ' +
        element.in_stock +
        ' '.repeat(8) +
        '|'
    )
    })
};

function printTable(list) {
    let columnWidth = getColumnWidth()
    printSeparator(columnWidth)
    console.log('| Ingredient         | Needs cooling | In stock |')
    printSeparator(columnWidth)
    printLine(list, columnWidth)
    printSeparator(columnWidth)
};

printTable(ingredients);
