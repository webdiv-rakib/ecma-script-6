//=====Users Data Load on website==========
function loadUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => loadUsersData(data))
}

function loadUsersData(data) {
    const ul = document.getElementById('users-list');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}