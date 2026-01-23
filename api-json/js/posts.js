function loadPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
        .then(res => res.json())
        .then(data => displayPost(data))
}

/**
 * 1. get the container element where you want to add the new elements
 * 2. create child element
 * 3. set innerText or innerHTML
 * 4. appendChild
 */


function displayPost(posts) {
    const postsContainer = document.getElementById('posts-container')
    for (const post of posts) {
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h4>User- ${post.userId}</h4>
            <h5>Post-Title: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `
        postsContainer.appendChild(postDiv);
    }
}

// loadPosts();