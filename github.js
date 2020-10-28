const container = document.querySelector('.container');

fetch('https://api.github.com/users/tylerdance')
.then(response => {
    return response.json();
})
.then(githubData => {
    const tylerObj = {
        location: githubData.location,
        username: githubData.login,
        name: githubData.name
    }
    console.log(tylerObj);

    const newElement = document.createElement('p');
    newElement.textContent = tylerObj.location;
    console.log(newElement);
    container.appendChild(newElement);  
})

// .catch(error => {
//     console.log(error);
// });


