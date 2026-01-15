// filter selects elements base on a condition and returns an array with the elements that fulfilled the condition.
const numbers = [1, 3, 5, 7, 9];
const players = [75, 65, 67, 72, 55, 59];
const selected = players.filter(n => n > 70);
console.log(selected);
const selectedOdd = players.filter(p => p % 2 === 1);
console.log(selectedOdd);

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];
const oddFriends = friends.filter(frnd => frnd.length > 4);
console.log(oddFriends);
