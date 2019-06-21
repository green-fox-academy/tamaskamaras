// Create a constructor for creating Animal.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

'use strict';

function Animal(sound) {
  this.sound = sound;
};

Animal.prototype.say = function() {
  console.log(this.sound);
};

let dog = new Animal('woof');
dog.say();
