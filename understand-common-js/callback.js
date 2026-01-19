function greeting(greetingHandler, name) {
    greetingHandler(name);
}
// const number = [45, 55, 65];
// const name = 'Halim Mama'
// const laptop = { price: 45000, brand: 'lenovo' };
// greeting(number);

function greetingHandler(name) {
    console.log('Good Morning', name);
}

function greetEvening(name) {
    console.log('Good Evening', name);
}

function greetNight(name) {
    console.log('Good Night', name);
}
greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brandy');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Tom Solaiman');
greeting(greetNight, 'Tanisha Rahman');