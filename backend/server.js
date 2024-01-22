const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const port = process.env.PORT || 3000;
const app = express();
dotenv.config();
// const apiKey = process.env.API_KEY; 

const options = {
    method: 'GET',
    url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
    headers: {
        'X-RapidAPI-Key': '75370bcb0dmshdf024307fb0108dp1b4ac4jsn26b27f924cb3',
        'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
    }
};

async function fetchJoke() {
    try {
        const response = await axios.request(options);
        console.log(response.data[0].joke);
    } catch (error) {
        console.log(error);
    }
}

fetchJoke();

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});

//workflow of new sever based changes on the site
//-- adding backend and frontend both separate folders
    //-- frontend contains all the parts of react

//-- backend containes all parts of the 
    //-- all the api calls and server running that serves react app and //backend code