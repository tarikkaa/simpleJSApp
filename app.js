

import {person, person1} from "./modules.js";
import Honda from "/Users/tar/simpleJSApp/honda.js";
import Car from "/Users/tar/simpleJSApp/car.js";
import Autopilot from "/Users/tar/simpleJSApp/autopilot.js";
// Module 1
console.log(person.bonus(500));
console.log(person.city);

// Module 2
console.log(person1[0]);
console.log(person1.join(" , "));

//Car module execution
let truck = new Car(6, "truck");
truck.getInfo();
truck.getPrice(20);

//Honda module execution
let honda = new Honda("red", "CRV", 17000);
honda.getInfo();
honda.getPrice(honda.price);
honda.getDefaultColor();

//Why "Default car's color is: undefined"

//Decorator execution
let civic = new Honda("black", "civic", 3000);
let hondaWithAutopilot = new Autopilot(civic);
console.log(hondaWithAutopilot.getPrice());