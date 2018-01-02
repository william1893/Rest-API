var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ActionSchema = new Schema({
    timestamp: [],
    label: [],
    intensity: []
});


var Action = mongoose.model('action',ActionSchema);

module.exports = Action;
