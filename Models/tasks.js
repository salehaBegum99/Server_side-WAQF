const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  assignedTo: { type: String, required: false },
  dueDate: { type: Date, required: true },
  priority: { type: String, required: true, enum: ["Low", "Medium", "High"] },
  status: { type: String, required: true, enum: ["Pending", "in_progress", "completed"] },
  description: { type: String },
  category: { type: String, required: true },
});

module.exports = mongoose.model("Task", taskSchema);
