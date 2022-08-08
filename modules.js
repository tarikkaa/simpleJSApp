export {person, person1};

// Module example
let personDetails = () => {
    let name = "Taras";
    let age = 30;
    let city = "Lviv";
    let salary = 1000;
    let calculateBonus = (amount) => salary + amount;
    return {
        "name" : name,
        "age" : age,
        "city" : city,
        "bonus" : calculateBonus
    }
}

let person = personDetails();


//////////////////////////////////////////////////////////// Module 2

let personDetails1 = (amount) => {
    let name = "Taras";
    let age = 30;
    let city = "Lviv";
    let salary = 1000;
    let calculateBonus = (amount) => salary + amount;
    return [name, age, city, calculateBonus(amount)];
}

let person1 = personDetails1(200);

