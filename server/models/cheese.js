var mongoose = require('mongoose');

var CheeseSchema = mongoose.Schema({
  name: { type: String, required: true },
  milk_source: { type: String, required: true },
  country: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: false },
  }, { timestamps: true });

module.exports = mongoose.model('Cheese', CheeseSchema);
