const express = require('express');
export const API_KEY = process.env.API_KEY;
const port = process.env.PORT || 3000;
const app = express();


// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});

//workflow of new sever based changes on the site
//-- adding backend and frontend both separate folders
    //-- frontend contains all the parts of react

//-- backend containes all parts of the 
    //-- all the api calls and server running that serves react app and //backend code