const user = { id: 1, name: 'Gorib Amir', job: 'Actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
// JavaScript Object Notation ===> JSON

const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}
console.log(shop);
const stringifiedShop = JSON.stringify(shop);
console.log(stringifiedShop);
const shopObj = JSON.parse(stringifiedShop);
console.log(shopObj);