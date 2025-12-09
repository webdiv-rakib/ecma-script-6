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
// numbers = [4, 5, 6, 7];
numbers[1] = 55;
numbers.push(4, 2, 1);
console.log(numbers);

// Object
const student = {
    name: 'moyna pakhi',
    class: 12,
}
// student = { name: 'kokil' };
student.name = 'kokil';
console.log(student);

// loop
let sum = 0
for (let i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(sum);