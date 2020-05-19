const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
const session = require("express-session");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: "some secret", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());
// Add routes, both API and view
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/codersroadmap",
  {
    useNewUrlParser: true,
  }
);

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
