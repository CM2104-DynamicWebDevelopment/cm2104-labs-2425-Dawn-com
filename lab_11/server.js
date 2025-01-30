var express = require('express');
var app = express();
app.get('/', function(req, res){
 res.send('Hello world! by express');
});
app.get('/test', function(req, res){
    res.send('this is route 2');
});
app.get('/joke', function(req, res){
res.send('What is a bee in the us called? a USB');
});
app.get('/add', function(req, res){
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    res.send('X + Y='+(x+y));
});
app.get('/getform', function(req, res){
    var name = req.query.name;
    var quest = req.query.quest;
    res.send("Hi "+name+" I am sure you will "+quest) ;
});
app.use(express.static('public'))
app.listen(8080);