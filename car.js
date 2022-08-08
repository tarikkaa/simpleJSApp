export default class Car {
    constructor(wheels, type){
        this.wheels = wheels;
        this.type = type;
        this.color = "white";
        this.price = 12000;
    }
    #coefficient = 1.5;
    getInfo(){
        console.log(`Car wheels: ${this.wheels},\nType is: ${this.type}`);
    }
    getPrice(){
        let fullPrice = this.#coefficient * this.price;
        console.log(`Full price is: ${fullPrice}`);
    }
}

