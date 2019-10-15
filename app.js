

//variables can change in js
var http = require('http');
var path = require('path');


// constants in js never change
const express = require("express"); // I need this in the library
const app = express(); // calling express
const port = process.env.PORT || 3000; // port established as constant for maintability

app.set("views", path.join(__dirname, 'views'));

app.set("view engine", 'ejs');


app.get('/', function(req, res){
    res.render("index");
});

app.get('/about', function(req, res){
    res.send('<h1>sup beech this about me</h1>');

});
http.createServer(app).listen(port, function(){ //will not run in heroku, porte numberh

});
