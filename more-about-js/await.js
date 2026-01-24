// normal fetch structure
function loadUser() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

// async await structure for fetch data
async function loadUserAsync() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

// arrow function async and await
const loadUserArrow = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

// fetch data using try and catch
const loadUserCatch = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
    }
    catch (error) {

    }
}