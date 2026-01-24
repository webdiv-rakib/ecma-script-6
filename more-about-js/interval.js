console.log(1);
console.log(2);
// setTimeout(() => {
//     console.log(3);
// },3000)
console.log(4);
console.log(5);
let num = 0;
const clockId = setInterval(() => {
    num++;
    // clearInterval(clockId);
    if (num > 6) {
        clearInterval(clockId);
    }
    console.log(clockId, num);
}, 2000)