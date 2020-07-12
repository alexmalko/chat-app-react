const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config(); //to be able to load invirenmental variables
const connectDB = require("./config/db"); //connect to mongo which is in config/db.js file
const cors = require("cors");

// to avoid CORS in the browser
app.use(cors());
// Connect Database
connectDB();

// Init Middleware - replacement for bodyparser allows us to read data from the form
app.use(express.json());

app.use("/api/posts", require("./routes/posts"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
