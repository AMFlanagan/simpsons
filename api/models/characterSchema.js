var mongoose = require('mongoose');

var CharacterSchema = new mongoose.Schema({
  character : { type: String, required: true},
  picture : { type: String, required: true }
});
module.exports = mongoose.model('Characters', CharacterSchema);
