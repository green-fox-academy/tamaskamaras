// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

'use strict';

var students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
];

function totalCandies(list) {
    let sum = 0
    for (let i in list) {
        sum += list[i]['candies']
    }
    console.log('Total candies: ' + sum)
};

function getAge(list) {
    let age = 0
    for (let i in list) {
        if (list[i]['candies'] < 5) {
            age += list[i]['age']
        }
    }
    console.log('Age: ' + age)
}

totalCandies(students);
getAge(students);
