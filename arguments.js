function sum(a, b, c) {
    // console.log(arguments[1]);
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
};
// console.log(arguments);
const total = sum(10, 10, 10, 10, 10);
console.log(total);