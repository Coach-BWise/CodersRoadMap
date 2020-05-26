var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");
const User = require("../models/user");

// user signup
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      db.User.findOne({ email: email }).then(function (err, user) {
        if (err) {
          console.log("failed here");

          return done(err);
        }
        if (user) {
          console.log("Failed on line 44" + user);
          return done(null, false, { message: "Email is already in use." });
        }
        db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: email,
          password: password,
        }).then(function (dbUser) {
          console.log(dbUser);
          return done(null, dbUser);
        });
      });
    }
  )
);

// user login
passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      db.User.findOne({ email: email }).then(function (user) {
        if (!user) {
          return done(null, false, { message: "Email incorrect" });
        }
        if (!user.validPassword(password)) {
          console.log("Failed on line 48" + password);

          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  User.findOne({ _id: user._id }, (err, user) => {
    // console.log("*** Deserialize user, user:");
    // console.log(user);
    // console.log("--------------");
    done(null, user);
  });
});

module.exports = passport;
