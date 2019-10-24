

//variables can change in js
var http = require('http');
var path = require('path');


// constants (const) in js never change
var express = require("express"); // I need this in the library

var bodyParser = require("body-parser");

var app = express(); // calling express
var mongoose = require('mongoose');
const fetch = require('node-fetch');
var port = process.env.PORT || 3000; // port established as constant for maintability


app.set("views", path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ encoded: false}));
const Todo = require('./models/todo.model');
const mongoDB = 'mongodb+srv://beech:iYD7FBjjqKyqcK3z@cluster0-trlwr.mongodb.net/test?retryWrites=true&w=majority' ;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var task = []; // make sure it's clean every time
var complete = [];

app.get('/', function(req, res){
    Todo.find(function(err, todo){
        if(err){
            console.log(err)
        }else{
            task = [];
            for(i = 0; i < todo.length; i++){
                task.push(todo[i].item);
            }
        }
    })
    res.render("index", {task:task, complete:complete});
});

app.post('/addTask', function(req, res){
    let newTodo = new Todo({
        item: req.body.newtask,
        done: false
    })
    //                                    var newTask = req.body.newtask;      no longer needed
    //                                    task.push(newTask);
    newTodo.save(function(err){
        if (err){
            console.log(err);

        }
        res.redirect('/');
    });
});



app.post('/removeTask', function(req, res){
    var completeTask = req.body.check;

    if(typeof completeTask === 'string'){
        Todo.updateOne({item: completeTask}, {done: true}, function(err){
        console.log(err);
        })
    //complete.push(completeTask);
    //task.splice

    }else if(typeof completeTask === "object"){
        for(var i = 0; i < completeTask.length; i++ ){
            //complete.push(completeTask[i]);
            //task.splice(task.indexOf(completeTask[i]), 1);
            Todo.updateOne({item: completeTask[i]}, {done: true}, function(err){
            console.log(err);
            })
        }
    }
    res.redirect('/');
});
http.createServer(app).listen(port, function(){

});
