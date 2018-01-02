var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// set up express
var app = express();
//connect to mongo db

//mongoose.connect('mongodb://localhost/eeggo');
//mongoose.Promise = global.Promise;

// Using `mongoose.connect`...
var promise = mongoose.connect('mongodb://localhost/eeggo', {
  useMongoClient: true,
  /* other options */
});

app.use(bodyParser.json());

//app.use(express.static(__dirname + "/API"));

app.use('/api', require('./controller/api'));

// error handling 
app.use(function(err,req,res,next){
    //console.log(err); 
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    
    console.log('now listening for request');
    
    
});