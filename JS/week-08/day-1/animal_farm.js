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
    this.breed = function(totalAnimals) {
        for (let i = 0; i < totalAnimals; i++) {
            if (this.animals.length < this.slots) {
                let animal = new Animal();
                this.animals.push(animal);
            }
        }
    },
    this.slaughter = function() {
        let leastHungry = this.animals[0];
        let indexLeastHungry = 0;
        this.animals.forEach(function(element, i) {
            if (element.hunger < leastHungry.hunger) {
                leastHungry = element;
                indexLeastHungry = i;
            };
        });
        this.animals.splice(indexLeastHungry, 1);
    },
    this.printReport = function() {
        console.log('The farm has ' + this.animals.length + ' living animals.');
        if (this.animals.length <= 0) {
            console.log('Bankrupt!');
        } else if (this.animals.length > 0 && this.animals.length < this.slots) {
            console.log('Okay');
        } else if (this.animals.length === this.slots) {
            console.log('Full');
        }
    },
    this.progress = function() {
        this.animals.forEach(function(element) {
            if (Math.floor(Math.random() * 2) === 0) {
                element.eat();
                element.drink();
                element.play();
            }
        })
        this.breed(this.slots);
        this.slaughter();
        this.printReport();
    },
    this.breed(this.slots);
};


// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);

console.log(SheepFarm.animals); // Should log 20 Animal objects

console.log(SheepFarm.animals.length);
SheepFarm.slaughter();
console.log(SheepFarm.animals.length);
SheepFarm.printReport();
SheepFarm.progress()

const button = document.querySelector('button');

let sheepProgress = SheepFarm.progress.bind(SheepFarm);

button.addEventListener('click', sheepProgress);

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  - The farm has 20 living animals, we are full