const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const propertyRoutes = require("./Routes/propertyRoute.js");
const taskRoutes = require("./Routes/taskRouter.js");

const app = express();

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend's origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

app.use(cors(corsOptions)); // Enable CORS (Move this to the top)
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/WAQF_TASK_TRACKER", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// API Routes
app.use("/api/properties", propertyRoutes);
app.put('/api/properties/:id', async (req, res) => {
  const { id } = req.params;
  // Your update logic here
  res.status(200).send(updatedProperty);
});
app.use("/api/tasks", taskRoutes);
app.put('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  // Your update logic here
  res.status(200).send(updatedTask);
});


// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
