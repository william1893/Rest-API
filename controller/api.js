var express = require('express');
var router= express.Router();
var Data = require('../model/data');
var Action = require('../model/action');

//get a list of data from the db
router.get('/data', function(req, res,next){
   Data.find({}).then(function(datas){
       res.send(datas);
   });
   //res.send({type:'GET'}); 
});

//post a list of data from the db
router.post('/data', function(req, res,next){
    console.log(req.body);
    Data.create(req.body).then(function(data){
        res.send(data);
        
    }).catch(next);
});


router.get('/action', function(req, res,next){
   Action.find({}).then(function(actions){
       res.send(actions);
   });
   //res.send({type:'GET'}); 
});

//post a list of data from the db
router.post('/action', function(req, res,next){
    console.log(req.body);
    Action.create(req.body).then(function(action){
        res.send(action);
        
    }).catch(next);
});

module.exports = router;