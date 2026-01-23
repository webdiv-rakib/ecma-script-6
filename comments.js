// api call system 1
const loadComments = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('error happened', error))
}

// api call system 2
const loadComments2 = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    console.log(data);
}

// api call system 3
const loadComments3 = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comment');
        const data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.log('data load error');
    }
}