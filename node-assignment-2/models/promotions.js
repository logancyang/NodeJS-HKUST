var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// create a schema
var promoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  price: {
    type: Currency,
    default: ''
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var Promos = mongoose.model('Promo', promoSchema);

module.exports = Promos;