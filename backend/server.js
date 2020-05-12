require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/public"));
  app.use(cors());
}

const MongoDB_URI = process.env.MONGODB_URI || "mongodb://localhost/roadMap";
mongoose.connect(MongoDB_URI, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

//once connection is "open" run function which logs that we connected to MongoDB
connection.once("open", () => {
  console.log("Successfully connected to MongoDB");
});
// Send every request to the React app
// Define any API routes before this runs
const usersRouter = require("./routes/users");
const unitRouter = require("./routes/units");

app.use("/users", usersRouter);
app.use("/units", unitRouter);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
