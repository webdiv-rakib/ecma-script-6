// object destructuring
const actor = {
    name: 'Ananta',
    age: 41,
    phone: '01794181719',
    money: 150000,
}
// if right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value
const { phone } = actor;
const { age } = actor;
// const phone = actor.phone;
// const age = actor.age;
// const name = actor.name;
// const money = actor.money;
console.log(phone);
console.log(age);

// array destructuring
const numbers = [2, 3];
const [first, second] = numbers;
const [x, y] = [5, 6];

function doubleThem(a, b) {
    return [a * 2, b * 3];
}

// advance
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);