//Write a JavaScript function to check if given string includes given symbol.
let string1 = 'Happy new year';
let myWord = 'new';
console.log(`This string includes the word "${myWord}":`,string1.includes(myWord));

//Write a JavaScript function to check whether a string is blank or not (string with spaces should be also blank).

let string2 = "   "
let string3 = string2.trim();
if (string3.length === 0){
    console.log("The string is blank");
}
else{
    console.log("The sting is not blank");
}

//Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Nazar Babii")) – should be “N.B.” (should convert lower case names to upper)

function abbrev (yourName){
    let firstLetters = yourName.match(/\b(\w)/g);
    let nameAbbrev = firstLetters.join('.');
    console.log(`The abbrev of your name is: "${nameAbbrev.toUpperCase()}."`);
}
abbrev('Nazar Babii');

//Write a JavaScript function that accept two integers and display the larger.
let largerNumber = (a, b) => {
    if (a > b){
        console.log(`The number ${a} is larger`);
    }
    if (a < b){
        console.log(`The number ${b} is larger`);
    }
    else{
        console.log(`The number ${a} equals ${b}`);
    }
}
largerNumber(10, 10);

//Write a JavaScript function with conditional statement to sort three numbers

function sortThreeNumbers(a, b, c) {
    if(a < b && a < c && b < c){
        console.log(`${a}, ${b}, ${c}`);
    }
    if(a < b && a < c && c < b){
        console.log(`${a}, ${c}, ${b}`);
    }
    if(b < a && b < c && a < c){
        console.log(`${b}, ${a}, ${c}`);
    }
    if(b < a && b < c && c < a){
        console.log(`${b}, ${c}, ${a}`);
    }
    if(c < a && c < b && a < b){
        console.log(`${c}, ${a}, ${b}`);  
    }
    if(c < a && c < b && b < a){
        console.log(`${c}, ${b}, ${a}`);
    }
    //else{
    //   console.log('Some of the numbers are equal');
    //}
}
sortThreeNumbers(3, 1, 2);

