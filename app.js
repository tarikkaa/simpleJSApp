let number = (num) => {
    new Promise((res, rej) => {
        if (typeof num !== "number") {
        rej(new Error ("Input data is not a number"));
        }
        else if (num % 2 === 0) {
            let result = "EVEN";
            setTimeout(()=> res(result), 1000);   
        }
        else {
            let result = "ODD";
            setTimeout(()=> res(result), 2000);
        }
    }).then((result) => console.log(`Your number is ${result}`))
    .catch((err) => console.log(`${err.message}`));
}
number("s");
 