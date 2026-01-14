const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,
};
// console.log(glass);
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
// console.log(keys);

const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
// console.log(values);

const pairs = Object.entries(glass);
// console.log(pairs);
// array of array or two dimantional array
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 12 ],
//   [ 'isCleaned', true ]
// ]
// delete glass.isCleaned;
// console.log(glass);

const { isCleaned, ...shortGlass } = glass;
// console.log(shortGlass);

// freeze
// Object.freeze(glass);
glass.source = 'Bangladesh'
console.log(glass);


