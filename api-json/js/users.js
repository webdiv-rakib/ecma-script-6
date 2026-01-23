function loadUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(users) {
    const usersContainer = document.getElementById('users-container');
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h4>User ID: ${user.id}</h4>
            <h6>User Name: ${user.name}</h6>
            <p>Email: ${user.email}</p>
        `
        usersContainer.appendChild(userDiv);
    }
}
// loadUsers();