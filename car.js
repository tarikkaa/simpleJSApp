class Car {
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

// New instance created
let bmw = new Car('M5', 2000, 300);
//Own method is called (used private property)
bmw.accelerate();
//Own method is called (used private method)
bmw.getInfo();

//Export class Car
export {Car};

//Export class Car as a new object
//export default new Car("Mazda", 2010, 180);


