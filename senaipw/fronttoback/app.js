var express = require("express");
var app = express();
var { engine } = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', function(request, response){
    response.render('index');    
});
app.get('/newpage',function(request, response){
    response.render('newpage');
});

app.listen(3000);