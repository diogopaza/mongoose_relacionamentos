var express = require("express");
var route = express.Router;
var app = express();
var mongoose = require('./app');

mongoose.conectar;
//mongoose.esquemaUser;
//mongoose.esquemaUserWeb;

app.get("/", function (req, res) {
    res.send(" Welcome Node js ");
});  

app.listen(8000, function () {
    console.log("Node server is runing on port 8000...");
})

app.get('/listar',mongoose.esquemaUserWeb);