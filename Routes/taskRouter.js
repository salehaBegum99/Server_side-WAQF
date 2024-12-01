const express = require("express");
const Task = require("../Models/tasks");

const router = express.Router();
// POST - Add a new task
router.post("/", async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
