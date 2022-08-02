//Replicate code from slide 11, create instances of car and truck. Try to call different methods for both, investigate output using console.log().

export default class Vechicle {
    constructor(type, size){
        this.type = type;
        this.size = size;
        this.color = "Green - parent color";
    }
    getParentColor() {
        console.log(`The ${this.type} color is: ${this.color}`);
    }
    getInfo() {
        console.log("I am a main vechicle");
    }
    static showSize(){
        console.log("Big vechicle");
    }
    getSize() {
        Vechicle.showSize();
    } 
}
    
//module.exports = Vechicle;



