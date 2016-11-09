var mongoose = require('mongoose');

var EpisodeSchema = new mongoose.Schema({
  seasonNum: { type: String, required: true},
  episodeNum: { type: String, required: true},
  title: { type: String, required: true},
  character: { type: Array, required: true},
  picture1: { type: String, required: true},
  picture2: { type: String},
  picture3: { type: String},
  Description: { type: String}

});
module.exports = mongoose.model('Episodes', EpisodeSchema);
