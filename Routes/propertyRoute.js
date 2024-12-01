const express = require("express");
const Property = require("../Models/Property");

const router = express.Router();

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
