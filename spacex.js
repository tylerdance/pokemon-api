// All
fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})
.then(spaceXData => {
    console.log(spaceXData);
})

// Dragons
fetch('https://api.spacexdata.com/v3/dragons')
.then(response => {
    return response.json();
})

.then(dragonData => {
    console.log(dragonData);
})

// Rockets
fetch('https://api.spacexdata.com/v3/rockets')
.then(response => {
    return response.json();
})

.then(dragonData => {
    console.log(dragonData);
})