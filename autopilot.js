import Honda from "/Users/tar/simpleJSApp/honda.js";

export default class Autopilot{
   constructor(car){
    this.car = car;
   }
   getPrice(){
    return this.car.getPrice() + 5000;
   }
}

