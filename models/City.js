const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  city: { type: String, required: true, unique: true },
  name: { type: String, required: true},
  location: {}
});

const City = mongoose.model("City", citySchema);

module.exports = City;