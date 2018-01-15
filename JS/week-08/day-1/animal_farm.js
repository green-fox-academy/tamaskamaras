'use strict';

function Animal() {
    this.hunger = 5,
    this.thirst = 5,
    this.eat = function() {
        this.hunger--;
    },
    this.drink = function() {
        this.thirst--;
    },
    this.play = function() {
        this.hunger++;
        this.thirst++;
    }
};

function Farm(slots) {
    this.animals = [],
    this.slots = slots,
    this.breed = function() {
        for (let i = 0; i < this.slots; i++) {
            console.log(i);
            if (this.animals.length < this.slots) {
                let animal = new Animal();
                this.animals.push(animal);
            }
        }
    },
    this.slaughter = function() {
        let leastHungry = animals[0];
        let indexLeastHungry = 0;
        this.animals.forEach(function(element, i) {
            if (element.hunger < leastHungry.hunger) {
                leastHungry = element;
                indexLeastHungry = i;
            };
        });
        this.animals.splice(indexLeastHungry, 1);
    }
}


// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);

console.log(SheepFarm.animals); // Should log 20 Animal objects


////////////////////////////////////
// const button = document.querySelector('button');

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  - The farm has 20 living animals, we are full