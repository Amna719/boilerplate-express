var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/name', (req,res)=>{
   var userName = req.body.first + " " + req.body.last;
  res.json({ name: userName });
});


module.exports = app;
