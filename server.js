var express = require('express');
var app = express();
var collect = require('./collector.js')
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname+'/views');

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/collect', function (req, res) {
    collect.collectAllEmployees(function(employeesData){
        res.json(employeesData);
    });
});

app.listen(3000, function () {
    console.log('IQP app listening on port 3000!')
});