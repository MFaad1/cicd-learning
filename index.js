const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Started Working, Express!");
    });


    app.listen(3400, () => {
        console.log(`Server listening at port: ${3400}`);
        });