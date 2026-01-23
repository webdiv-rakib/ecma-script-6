function loadPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

// ==============================
function loadComments() {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
        .then(res => res.json())
        .then(data => displayComments(data))
}

function displayComments(data) {
    console.log(data);
};
// ==============================

function loadAlbums() {
    const url = 'https://jsonplaceholder.typicode.com/albums';
    fetch(url)
        .then(res => res.json())
        .then(data => displayAlbums(data))
}

function displayAlbums(data) {
    console.log(data);
}