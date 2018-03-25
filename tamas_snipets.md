# Fundation snipets


- Create variables and methods on a given specification

	**Variables:**
	```
	let changingVariable = 'abcd';
	const constantVariable = 'abcd';
	```

	**Function:**
	```
	const al = 'Greenfox';

	function greet(someone) {
	  if (someone) {
	    console.log('Greetings, dear ' + someone);
	  } else {
	    console.log('Greetings, all,');
	  }
	};
	```
- Use conditions and loops:

    - Filtering
		```
		const queue = [
		  { 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
		  { 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
		];

		function festivalCheck(goers) {
		  return goers.filter(goer => goer.guns === 0);
		}
		```
    - Finding elements or index
		```
		const numbersToCheck = [2, 4, 6, 8, 10, 12, 14, 16];
		const baseNumbers = [4, 8, 12, 16];

		function numChecker(base, list) {
		  let sum = 0;
		  base.forEach((element) => {
		    if (list.includes(element)) {
		      sum += 1;
		    }
		  });
		  if (sum === base.length) {
		    return true;
		  }
		  return false;
		}		
		```
    - Generating lists
    ```
    function diagonal(size) {
      let matrix = [];
      for (let i = 0; i < size; i++) {
        matrix.push([('0'.repeat(size - i - 1)) +
        '1' +
        '0'.repeat(i)])
        };
      return matrix;
    }
    ```
    - Checking mutiple values and counting
		```
		const students = [
		  { 'name': 'Teodor', 'age': 3, 'candies': 2 },
		  { 'name': 'Rezso', 'age': 9.5, 'candies': 2 },
		  { 'name': 'Zsombor', 'age': 12, 'candies': 5 },
		  { 'name': 'Aurel', 'age': 7, 'candies': 3 },
		  { 'name': 'Olaf', 'age': 12, 'candies': 7 },
		  { 'name': 'Gerzson', 'age': 10, 'candies': 1 },
		];

		function totalCandies(list) {
		  let sum = 0;
		  list.forEach((student) => {
		    sum += student.candies;
		  });
		  return `Total candies: ${sum}`;
		}

		function getAge(list) {
		  let age = 0;
		  list.forEach((student) => {
		    age += student.age;
		  });
		  return `Age: ${age}`;
		}

		function studentFilter(list) {
		  return list.filter(student => student.candies > 5);
		}

		totalCandies(students);
		getAge(studentFilter(students));
		```
    - Maping values
		```
		let farm = ["kuty", "macsk", "kacs", "rók", "halacsk"];

		let farm2 = farm.map(item => `${item}a`);
		```

- Use object orientation:

    - Create and inherit classes including fields and methods on a given specification
		```
		function Sharpie(color, width) {
		  this.color = color,
		  this.width = width,
		  this.inkAmount = 100,
		  this.use = () => {
		    this.inkAmount -= this.width;
		  };
		}

		let mySharpie = new Sharpie('red', 10);

		while (mySharpie.inkAmount > 0) {
		  mySharpie.use();
		}
		```
		Python:
		https://github.com/tamaskamaras/corsac-basic-exam-retake/blob/master/santafactory/santa_claus.py
    - Understanding the difference between classes and objects
    - Instantiating and using objects
    - Understanding "this" keyword

- Handle errors and exceptions
```
const addString = (str1, str2, printStr) => {
  let newStr = str1 + str2;
  printStr(newStr);
};

const printStr = (str) => {
  console.log(str);
};

try {
  addString(1234, 56789, 'printStr');
} catch (err) {
  console.log(err.message);
  console.log(`This is a(n), ${typeof 'printStr'}`);
}
```
```
const anagram = function (word1, word2) {
  let temp1 = (JSON.stringify(Array.from(word1).sort()));
  let temp2 = (JSON.stringify(Array.from(word2).sort()));
  if (word1.length === word2.length) {
    return Object.is(temp1, temp2);
  }
  throw 'Word length is not equal!';
};

anagram('listens', 'silents');
```
- Determine the output of expressions
- Explain their own code
- Write unit tests for functions and methods
```
const sum = (array) => {
  let total = 0;
  if (Array.isArray(array)) {
    array.forEach((element) => {
      total += element;
    });
    return total;
  }
  return 'The input is not an array!';
};
```
```
const test = require('tape');
const sum = require('./sum');

test('four element', (t) => {
  let actual = sum([9, 5, 2]);
  let expected = 16;

  t.equal(actual, expected);
  t.end();
});

test('empty', (t) => {
  let value = [].length === 0;

  t.ok(value);
  t.end();
});

test('deep equality', (t) => {
  t.plan(3);
  let actual = sum([9, 5, 2]);
  let expected = sum([9, 5, 1+1]);

  t.deepEqual(actual, expected);
  t.pass('Test passed');
  t.fail('Test failed');
  t.end();
});
```

# Orientation snipets
https://github.com/greenfox-academy/tamaskamaras/tree/master/JS/week-10/orientation-refactor

SQL

Importing database
```
mysql -u username -p database_name < file.sql
```
Making queries\
Using conditions
```
SELECT column, another_column, FROM mytable
WHERE condition
    AND/OR another_condition
```
Join tables
```
SELECT column, another_table_column, FROM mytable
INNER JOIN another_table 
    ON mytable.id = another_table.id
WHERE condition(s)
ORDER BY column, ASC/DESC
```