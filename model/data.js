var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SessionSchema = new Schema({
    
    timestamp: [],
    lable: [],
    intensity: []
});
var DataSchema = new Schema({
   childName:{
       type: String//,
       //required:[ true, 'Child name feild is required']
   },
    session: [SessionSchema],
    attentionLevels: [],
    relaxationLevels:[],
    timestamps:[],
    timestamp: [],
    label: [],
    intensity: []
});



var Data = mongoose.model('data',DataSchema);

module.exports = Data;
