fetch('https://api.github.com/users/tylerdance')
.then(response => {
    return response.json();
})
.then(githubData => {
    console.log(githubData);
})

// .catch(error => {
//     console.log(error);
// });