var express = require('express');
var app = express();

app.get('/name', (req,res)=>{
    let firstName = req.query.first;
    let lastName = req.query.last;
    res.json({name: `${firstName} ${lastName}`})
});

 module.exports = app;
