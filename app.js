const express = require("express"); // I need this in the library
const app = express(); // calling express
const port = process.env.PORT || 3000; // port established as constant for maintability

app.get('/', function(req, res){
    res.send("supp bro");
});

app.get('/about', function()[
    res.send('<h1>sup beech this about me</h1>');

])
app.listen(port, function(){ //will not run in heroku, porte number

});
