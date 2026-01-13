const difference = (x, y) => x - y;
const multi = (first, second, third) => first * second * third;

// Single Parameter or One parameter
const getAge = (person) => person.age;
const student = {
    name: 'rakib',
    age: 26,
}
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([1, 2, 3, 4, 5]);
console.log(third);

const doubleIt = num => num * 2;

// No Parameter
const getPi = () => Math.PI;
console.log(getPi());

// Large arrow function. if you want to get anything returned from this function. then you have to use the return keyword
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multi = x * y * z;
    const result = sum + multi;
    return result;
}
const numbers = doMath(2, 3, 4);
console.log(numbers);