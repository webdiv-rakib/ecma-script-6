// =====Posts=====
function loadPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => displayPosts(data))
}
function displayPosts(data) {
    const ul = document.getElementById('posts-list');
    for (const post of data) {
        console.log(post);
        const li = document.createElement('li');
        li.innerText = post.title;
        ul.appendChild(li);
    }
}

// =====Comments=====
function loadComments() {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    fetch(url)
        .then(res => res.json())
        .then(data => displayComments(data));
}
function displayComments(data) {
    const ul = document.getElementById('comments-list');
    for (const comment of data) {
        const li = document.createElement('li');
        li.innerText = comment.email;
        ul.appendChild(li);
    }
}

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
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}