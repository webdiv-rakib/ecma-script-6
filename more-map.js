const numbers = [12, 10, 8, 15, 7];
const double = numbers.map(num => num * 2);
// console.log(double);

const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];
const length = friends.map(frnd => frnd.length);
console.log(length);
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);
