class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`Sleeping now ${this.name}`)
    }
    activity() {
        this.sleep();
    }

}
const kodom = new Person('Kodolm Ali', 21);
// console.log(kodom);
// kodom.sleep();

const badam = new Person('Kacha Badam', 27);
console.log(badam);
badam.sleep();

// Task==> explain ths keyword in javascript