// data access
const data = [{ id: 1, name: 'raju', address: 'dhaka' }];
// console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo', price: 15000 },
        { id: 2, name: 'asus', price: 20000 },
    ]
};
// console.log(products.data[1].name);

const user = {
    id: 501,
    name: 'raju',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no darai'
        },
        city: 'Dhaka'
    }
}
console.log(user.address.street.third);