const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Import routes
const auth = require("./backend/routes/userRoutes");
app.use("/api", auth);

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

// Start the server
mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log("Connected to the database successfully.");
    });
  })
  .catch(error => {
    console.error("Database connection error:", error);
  });
