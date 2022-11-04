var express = require('express');
var app = express();

//setting middleware
var __dirname='./day2/';
var safety='';
app.use(express.static(__dirname + safety)); //Serves resources from public folderno
app.listen(8080);