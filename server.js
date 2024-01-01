const exp = require('constants')
const express = require('express')
const path = require("path")
const server = express()
const port = 3000


server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use(express.static(path.join(__dirname, "/front")));



server.post("/", (req, res) =>{
    console.log(req.body);
    res.send("Thank you " + req.body.username + " for signing in!")
})

server.listen(port, () => {
    console.log("Server started on port 3000");
})


