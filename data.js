const axios = require('axios');
const { response } = require('express');

axios.get('https://api.spacexdata.com/v4/roadster')
.then(response => {
    console.log(response.data);
});

axios.get('https://api.spacexdata.com/v4/dragons')
.then(response => {
    console.log(response.data);
});