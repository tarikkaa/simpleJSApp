//➔Develop a simple calculator function (+, -, /, * operations), like calc(3, 3, “+”) should return 6 (3+3). 
//Also, handle a cases when not supported math operation is provided or wrong data format
//➔Create a test suitefile to verify if calculator function works correctly for positive scenarios
//➔Create a test suitefile to verify if calculator function works correctly for negative scenarios



function calc (a, b, c) {
    if (typeof a !== "number" || typeof b !== "number"){
        return "Check is first two inputs are numbers";
        //console.log("Check is first two inputs are numbers");     
    }
    else{
        switch(c){
            case "+":
                return `${a+b} (${a}+${b})`;
                //console.log(`${a+b} (${a}+${b})`);
                //break;
            case "-":
                return `${a-b} (${a}-${b})`;
                //console.log(`${a-b} (${a}-${b})`);
                //break;
            case "*":
                return `${a*b} (${a}*${b})`;
                //console.log(`${a*b} (${a}*${b})`);
                //break;
            case "/":
                return `${a/b} (${a}/${b})`;
                //console.log(`${a/b} (${a}/${b})`);
                //break;
            default:
                return 'Check if the third input is one of: "+", "-", "*", "/"';
                //console.log('Check if the third input is one of: "+", "-", "*", "/"');
        }
    }
}

//calc(4,4,"+");

module.exports = {calc};