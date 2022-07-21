// Write a JavaScript function to get the last element  of an array
let names = ["Taras", "Ivan", "Oleg", "Petro", "John"];
let cars = ["BMW", "Volvo", "Honda", "VW", "Audi"];

function last1() {
let myindex1 = names.slice(-1);
console.log(`The last name in the array is: ${myindex1[0]}`); 
};

let last2 = () => {
    let myindex2 = names.length -1;
    console.log(`The last name in the array is: ${names[myindex2]}`); 
};

last1();
last2();


//Write a simple  JavaScript program  to join all elements  of the following  array into a string
console.log(`The string of the names is: ${names.join(" ")}`);


//There  are two arrays with individual values, write a JavaScript program to compute  the sum 
// of each individual  index  value from  the given arrays and save them to third array

let num1 = [1, 2, 3, 4]; 
let num2 = [1, 2, 3, 4, 5]; 
let result = [];
let ind = 0;

/* while(ind < num1.length && ind < num2.lengt) {
    result.push(num1[ind] + num2[ind]);
    ind++;
}
console.log(result); */

do {
    result.push(num1[ind] + num2[ind]);
    ind++;
}while(ind < num1.length && ind < num2.length);
console.log(result);

let result1 = [];
for (let ind1 = 0; ind1 < num1.length && ind1 < num2.length; ind1++) {
    result1.push(num1[ind1] + num2[ind1]);
}
console.log(result1);


//Write a JavaScript program  to calculate the area and  perimeter  of a rectangle. 
//Rectangle should  be an object with properties width  and  height  and methods  getArea()  and getPerimeter();

let rectangle = {
    width : 20,
    height : 40,
    getArea : function(){
        return this.width * this.height;
    },
    getPerimeter : function(){
        return 2 * (this.width + this.height);
    }
};
console.log(`The area of the rectangle is: ${rectangle.getArea()} and the perimeter is: ${rectangle.getPerimeter()}`);

