import Car from "/Users/tar/simpleJSApp/car.js";

export default class Honda extends Car {
    constructor(color, model, price) {
        super(4, "passenger");
        this.color = color;
        this.price = price;
        this.model = model;
    }
    getInfo(){
        console.log(`Car wheels: ${this.wheels},\nType: ${this.type},\ncolor: ${this.color}`);
    }
    getDefaultColor(){
        console.log(`Default car's color is: ${super.color}`);
    }
    getPrice(){
        return this.price;
    }
}



