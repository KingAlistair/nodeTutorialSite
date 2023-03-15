const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/pages/frontpage.html");
});

app.get("/firstServer", (req,res) => {
    res.sendFile(__dirname + "/public/pages/firstServer.html");
});



const PORT = 8080;
app.listen(PORT, (error)=> {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Serven is running on port: " + PORT);
});