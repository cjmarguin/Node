

//variables can change in js
var http = require('http');
var path = require('path');


// constants (const) in js never change
var express = require("express"); // I need this in the library

var bodyParser = require("body-parser");

var app = express(); // calling express
var port = process.env.PORT || 3000; // port established as constant for maintability


app.set("views", path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({ encoded: true}));

var task = ["yeet", "yote"];
var complete = ["yeehaw", 'boiz'];

app.get('/', function(req, res){
    res.render("index", {task:task, complete:complete});
});

app.post('/addTask', function(req, res){
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect('/');


app.post('/removeTask', function(req, res){
    var completeTask = req.body.check;
    if(typeof completeTask === 'string'){
        complete.push(completeTask);
        task.splice(task.indexOf(completeTask), 1);
    }else if(typeof competeTask === "object"){
        for(var i = 0; i < completeTask.length ; i++ ){
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);

        }
    }
    res.redirect('/');
});
http.createServer(app).listen(port, function(){ //will not run in heroku, porte numberh

});
