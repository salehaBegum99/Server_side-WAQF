const express = require("express");
const Property = require("../Models/Property");

const router = express.Router();
// 1. Get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/properties/:_id', async (req, res) => {
  const { _id } = req.params;
  try {
    const property = await Property.findById(_id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.put('/:_id', async (req, res) => {
  const { _id } = req.params;
  const updated = req.body;

  try {
    const updatedProperty = await Property.findByIdAndUpdate(_id, updated, { new: true });
    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({ message: "Property updated successfully", Property: updatedProperty });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// POST - Add a new property
router.post("/", async (req, res) => {
  try {
    const property = new Property(req.body);
    const savedProperty = await property.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
