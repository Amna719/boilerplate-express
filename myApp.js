var express = require('express');
var app = express();

app.use((req,res,next) => {
    let output= `${req.method} ${req.path} - ${req.ip}`;
    console.log(output);
    next();
});

 module.exports = app;
