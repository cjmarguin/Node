

//variables can change in js
var http = require('http');
var path = require('path');


// constants in js never change
const express = require("express"); // I need this in the library

var bodyParser = require("body-parser");

const app = express(); // calling express
const port = process.env.PORT || 3000; // port established as constant for maintability


app.set("views", path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({ encoded: true}));
var task = ["yeet", "yote"];

app.get('/', function(req, res){
    res.render("index");
});

app.post('/addTask', function(req, res){
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect('/');

});
http.createServer(app).listen(port, function(){ //will not run in heroku, porte numberh

});
