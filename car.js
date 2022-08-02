export default class Car {
    constructor(carModel, carYear, maxSpeed){
        this.carModel = carModel;
        this.carYear = carYear;
        this.maxSpeed = maxSpeed;
        this.type = "Car";
        
    }
    #stop = 0;
    accelerate() {
        console.log(`Car's speed is: ${this.#stop + 20}`);
    } 
    #carInfo(){
        console.log(`car model: ${this.carModel} \ncar year is: ${this.carYear} \nmax speed is: ${this.maxSpeed}`); 
    }
    getInfo(){
        return this.#carInfo();
    }

}

//Export class Car
//export {Car};

//Export class Car as a new object
//export default new Car("Mazda", 2010, 180);


