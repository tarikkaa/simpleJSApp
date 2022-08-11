
//Create student object and set ‘name’, ‘surname’ and ‘rate.
//Name and surname generate using randomstring
//Rate generate using Math, in range 1-100
//Use JSON.stringify() method to make student a JSON string and write it into file (not existed)
//Read previous string from file and convert to object
//Make some change to object and append it as new line to existed file



let randomstring = require("randomstring");
let fs = require("fs");

let person = {
    name: randomstring.generate({
        length: 5,
        charset: "alphabetic"
    }),
    surname: randomstring.generate({
        length: 7,
        charset: "alphabetic"
    }),
    rate: Math.floor(Math.random() * 100)
};

let personJson = JSON.stringify(person);

fs.appendFile("file.txt", personJson, (err) => {
    if (err) throw err;
    console.log("File saved !");
});

fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) throw err;
    let result = JSON.parse(data);
    //Object.assign(result, {age:30});
    result.age = 30;

    fs.appendFile("file.txt", "\n" + JSON.stringify(result), (err) => {
        if (err) throw err;
        console.log("File updated !")

        fs.unlink("file.txt", (err) => {
            if (err) throw err;
            console.log("File removed !");
        }); 
    });   
});



