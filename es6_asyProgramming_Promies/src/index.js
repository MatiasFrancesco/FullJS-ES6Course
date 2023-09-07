let p = new Promise((resolve, reject) => {
    // reject('rejected promise data');
    // resolve('resolved promise data');

    setTimeout(() => resolve('Resolved promise data'), 3000);

})
console.log('after primise consumption...');
p.then(response => console.log(response))
    .catch(error => console.log(error));


/* HTTP & Fetch */
const root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

fetch(root, { method: 'GET'})
    .then(response => response.json)
    .then(json => console.log(json));