'use strict';

function Sharpie(color, width) {
    this.color = color,
    this.width = width,
    this.inkAmount = 100,
    this.use = function() {
        this.inkAmount -= this.width;
    }
}

let mySharpie = new Sharpie('red', 10);

console.log(mySharpie);

while (mySharpie.inkAmount > 0) {
    mySharpie.use();
    console.log(mySharpie.inkAmount)
}

console.log(mySharpie);
