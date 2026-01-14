const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers; i++) {

}

for (const num of numbers) {
    // console.log(num);
}

const nobab = 'Siraj Ud Doula'
for (const char of nobab) {
    // console.log(char);
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,
};

for (const key in glass) {
    const value = glass[key];
    console.log(key,value);
}