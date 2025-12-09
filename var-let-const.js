// var: no reason to use var
// let: allow it to reassign
// const: do not allow to reassign
const money = 25;
const rich = money + 25;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count);

const numbers = [24, 4, 7, 12, 1];
numbers = [4, 5, 6, 7];
console.log(numbers);