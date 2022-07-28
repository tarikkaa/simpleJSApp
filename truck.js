//let Vechicle = require("./vechicle.js");

import Vechicle from "/Users/tar/simpleJSApp/vechicle.js";

//Imported class Car as a new object
//import Car from "/Users/tar/simpleJSApp/car.js";

//Imported class Car
import {Car} from "/Users/tar/simpleJSApp/car.js";

class Truck extends Vechicle {
    constructor(carModel, carYear, maxSpeed){
        super("Parent type", 21);
        this.carModel = carModel;
        this.carYear = carYear;
        this.maxSpeed = maxSpeed;
        this.type = "Truck";
        
    }
    getInfo() {
        console.log(`Truck's own type is: ${this.type}`); 
    }
    truckGo(speed) {
        console.log(`Truck's speed is: ${speed}` );
    }
    static TruckStatic() {
        console.log(`Truck static method has been got`);
    }
    static getTruckStatic() {
        this.TruckStatic();
    }
    getTruckStatic1() {
        Truck.getTruckStatic();
    }
}

// New instance created
let man = new Truck('MAN 202', 1999, 150);
//Own method is called
man.truckGo(60);
// Own class method is called (overwrite the Parent method)
man.getInfo();
// Parent method is called by new instance
man.getParentColor();
// Own static method is called by class name
Truck.TruckStatic();
// Own static method is called by another own method
man.getTruckStatic1();
// New instance of Parent class
let parentVechicle = new Vechicle("Bus", 22);
// Parent static method is called
parentVechicle.getSize(); 

//Imported class Car
let mers = new Car("AMG", 2022, 320);
mers.accelerate();

//Imported class Car as a new object
//Car.accelerate();



// Чому виконується Кар методи коли запускаю Трак ?
// Чому працює без ретурн (методи в Трак, Вечікл) а в Кар з ретурн ?
// Чи можна експортнути окремі методи класу ?
// Чи можна викликати методи класу без створення істансу ?

