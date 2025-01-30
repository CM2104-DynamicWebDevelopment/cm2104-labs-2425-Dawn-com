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
   app.listen(8080);