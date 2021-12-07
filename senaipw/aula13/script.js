var xp = require("express");
var app = xp();


var xphb = require('express-handlebars');

app.engine("handlebars", xphb.engine({defaultLayout: "principal"}));
app.set("view engine", "handlebars");


app.listen(2550); 