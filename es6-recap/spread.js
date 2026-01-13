const max = Math.max(6, 2, 1, 8, 7, 9);
const numbers = [1, 2, 11, 4, 5, 21, 6, 9, 11];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
console.log(arrayMax);
console.log(max);

// use spread operator to copy
const friends = [4, 5, 6, 7, 8];
const bondhu = friends;
const dosto = [...friends]; //copy
dosto.push(9);
console.log(dosto);
console.log(friends);

// advance
const songkha = [...friends, 99]; //add extra elements while copy
console.log(songkha);

// Task: explain js spread operator.