var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var leaderSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    default: ''
  },
  designation: {
    type: String,
    default: ''
  },
  abbr: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;