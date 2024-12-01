const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  Property_Name: { type: String, required: true },
  Street: { type: String, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  Land_Area: { type: String, required: true },
  Category: { type: String, required: true },
});

module.exports = mongoose.model("Property", propertySchema);
