const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/codersroadmap"
);

const unitSeed = [
  {
    name: "HTML5",
    description: "HTML is the standard markup language for Web pages.",
    image: "https://www.tutorialrepublic.com/lib/images/html-illustration.png",
    link: "https://www.w3schools.com/html/default.asp",
    activityLinks: "/html",
  },
  {
    name: "CSS",
    description:
      "CSS is a language that describes the style of an HTML document.",
    image: "https://www.tutorialrepublic.com/lib/images/css-illustration.png",
    link: "https://www.w3schools.com/css/default.asp",
    activityLinks: "/css-activites",
  },
  {
    name: "Javascript",
    description: "Javascript is the programming language of HTML and the Web.",
    image:
      "https://www.tutorialrepublic.com/lib/images/javascript-illustration.png",
    link: "https://www.w3schools.com/js/default.asp",
    activityLinks: "/js-activites",
  },
];

const activitySeed = [
  {
    name: "Activity 1",
    helperLink: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    activityLinks: "/html/1",
  },
  {
    name: "Activity 2",
    helperLink: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    activityLinks: "/html/2",
  },
  {
    name: "Activity 3",
    helperLink: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    activityLinks: "/html/3",
  },
];

db.Unit.remove({})
  .then(() => db.Unit.collection.insertMany(unitSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
