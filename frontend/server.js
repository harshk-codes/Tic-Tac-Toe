const express = require("express");
const app = express();
const port = process.env.PORT || 3400;

app.get("/", (req, res) => {
    res.send("Socket server working successfully");
})


app.use(port, () => {
    console.log(`Socket server running on port ${port}`);
});
