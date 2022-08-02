import Vechicle from "/Users/tar/simpleJSApp/vechicle.js";
import Car from "/Users/tar/simpleJSApp/car.js";
import Truck from "/Users/tar/simpleJSApp/truck.js";

//Vechicle class
// New instance created
let main = new Vechicle();
//Called own method
main.getInfo();

//Car class
// New instance created
let bmw = new Car('M5', 2000, 300);
//Own method is called (used private property)
bmw.accelerate();
//Own method is called (used private method)
bmw.getInfo();


// Truck class
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