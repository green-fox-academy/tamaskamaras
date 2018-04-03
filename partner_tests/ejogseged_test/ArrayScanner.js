'use strict';

class ArrayScanner {
  //
  // Tedd lehetővé az osztály példányosítása során egy tömb (array) példány változóként történő beállítását.
  //
  constructor(array) {
    this.array = array;
  }

  //
  // Készíts egy olyan objektumot, aminek két kulcsa van a következőknek megfelelően:
  // { paros: [ ... ], paratlan: [ ... ] }
  // A "paros" kulcshoz kapcsolódó tömbbe a példányosítás során megadott tömbben (az objektum array változójában) szereplő páros számokat, a "paratlan" kulcshoz kapcsolódó tömbbe a példányosítás során megadott tömbben (az objektum array változójában) szereplő páratlan számokat kellene összegyűjteni.
  //
  evenAndOddNumbers() {
    let numbers = {
      even: [],
      odd: []
    };
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] % 2 === 0) {
        numbers.even.push(this.array[i]);
      } else {
        numbers.odd.push(this.array[i]);
      }
    }
    return numbers;
  }

  evenAndOddNumbersRefactor() {
    let numbers = {
      even: [],
      odd: []
    };
    for (let i = 0; i < this.array.length; i++) {
      numbers[(this.array[i] % 2 === 0) ? 'even' : 'odd'].push(this.array[i])
    }
    return numbers;
  }

  //
  // Keresd meg a példányosítás során megadott tömbnek (az objektum array változójának) maximális értékű, páratlan elemét.
  // Ha nincs a tömbben páratlan szám, akkor a visszatérési érték legyen 0.
  //
  maximalOddNumber() {
    let max = 0;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] > max && this.array[i] % 2 !== 0) {
        max = this.array[i];
      }
    }
    return max;
  }

  maximalOddNumberRefactor() {
    let max = 0;
    for (let i = 0; i < this.array.length; i++) {
      max = (this.array[i] % 2 !== 0 && this.array[i] > max) ? this.array[i] : max;
    }
    return max;
  }

  //
  // Igaz az az állítás, miszerint a példányosítás során megadott tömbnek (az objektum array változójának) minden eleme osztható 3-mal?
  //
  allNumbersAreDividableBy3() {
    let result = [];
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] % 3 === 0) {
        result.push(true);
      }
    }
    return (result.length === this.array.length);
  }

  allNumbersAreDividableBy3Refactor() {
    let result = [];
    for (let i = 0; i < this.array.length; i++) {
      (this.array[i] % 3 === 0) ? result.push(true) : 0;
    }
    return (result.length === this.array.length);
  }

  //
  // Definiálj egy olyan metódust, ami
  // * paraméterül kap egy pozitív egész számot (center) és
  // * előállít egy olyan object-et, ami tartalmazza, hogy a center változóban megadott szám (radius) 5 sugarú környezetében és a példányosítás során megadott tömbben (az objektum array változójában) is szereplő számok közül melyik hányszor szerepelt.
  //
  neighborhoodOfPoint(center) {
    let radius = 5;
    let result = {};
    for (let i = 0; i < this.array.length; i++) {
      if (center - radius <= this.array[i] && center + radius >= this.array[i]) {
        (result[this.array[i]] += 1) || (result[this.array[i]] = 1);
      }
    }
    return result;
  }
}

let myArrayScanner = new ArrayScanner([1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 43, 8, 9, 10, 11, 25]);

console.log(myArrayScanner.neighborhoodOfPoint(5));
