//let Vechicle = require("./vechicle.js");

import Vechicle from "/Users/tar/simpleJSApp/vechicle.js";

export default class Truck extends Vechicle {
    constructor(carModel, carYear, maxSpeed) {
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



