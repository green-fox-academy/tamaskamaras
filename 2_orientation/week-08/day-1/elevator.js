'use strict';

class ElevatorController {
    
    constructor(maxFloor, maxPeople) {
        this.maxFloor = maxFloor;
        this.maxPeople = maxPeople;
        this.buttonUp = document.getElementById('up');
        this.buttonDown = document.getElementById('down');
        let model = new ElevatorModel(this.maxFloor, this.maxPeople);
        let view = new ElevatorView(model.maxFloor);
        let moveUp = model.moveUp.bind(model);
        let moveDown = model.moveDown.bind(model);
        this.buttonUp.addEventListener('click', moveUp);
        this.buttonDown.addEventListener('click', moveDown);
    };
};

class ElevatorModel {

    constructor(maxFloor, maxPeople) {
        this.maxFloor = maxFloor;
        this.maxPeople = maxPeople;
        this.ground = 1;
        console.log(this.ground);
    };

    moveUp() {
        if (this.ground <= this.maxFloor) {
            document.getElementById('f' + this.ground).className = 'elevator';
            if (this.ground > 0) {
                document.getElementById('f' + (this.ground - 1)).classList.remove('elevator');
            }
            this.ground++;
            console.log(this.ground);
        }
    };

    moveDown() {
        if (this.ground > 0) {
            document.getElementById('f' + (this.ground - 1)).className = 'elevator';
            if (this.ground <= this.maxFloor) {
                document.getElementById('f' + (this.ground)).classList.remove('elevator');
            }
            this.ground--;
            console.log(this.ground);
        }
    };
};

class ElevatorView{

    constructor(floors) {
        this.floors = floors;
        this.drawElevator();
    };
    
    drawElevator() {
        let shaft = document.querySelector('div');
        for (let i = 0; i < this.floors + 1; i++) {
            let floor = document.createElement('p');
            floor.id = 'f' + i;
            floor.textContent = 0;
            shaft.appendChild(floor);
        }
        document.getElementById('f0').className = 'elevator';
    }
};

let myElevator = new ElevatorController(10, 10);