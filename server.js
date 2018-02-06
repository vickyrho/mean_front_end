var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');


app.use(bodyParser.urlencoded({extended:true }));
app.use(bodyParser.json());

app.use(cors());

app.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,	POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});


app.use(morgan('dev'));


app.use('/',express.static(__dirname+'/public'));


app.listen(9000);
console.log('Magic does not happen 9000');