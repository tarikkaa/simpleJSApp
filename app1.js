

function delay(num) {
    return new Promise((res, rej) => {
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
    });
}


async function number (num) {
    try {
        let result = await delay(num);
        console.log(`Your number is ${result}`);
    }catch(er) {
    console.log(er.message);
    }
}

number(234568);