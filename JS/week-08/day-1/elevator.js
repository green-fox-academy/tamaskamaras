'use strict';

class ElevatorController {

    constructor(maxFloor, maxPeople) {
        this.maxFloor = maxFloor;
        this.maxPeople = maxPeople;
        let model = new ElevatorModel(this.maxFloor, this.maxPeople);
        let view = new ElevatorView(model.maxFloor);
    };
};

class ElevatorModel {

    constructor(maxFloor, maxPeople) {
        this.maxFloor = maxFloor;
        this.maxPeople = maxPeople;
    };   
};

class ElevatorView{

    constructor(floors) {
        this.floors = floors;
    };

    drawElevator()
};

let myElevator = new ElevatorController(10, 10);
