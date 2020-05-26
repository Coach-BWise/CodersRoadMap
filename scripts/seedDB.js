const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/codersroadmap"
);
const coursesSeed = [
  {
    name: "HTML for Beginners",
    description:
      "Intro class to HTML for people with little to no coding experience.",
    units: [
      {
        name: "Unit 1 - HTML Basics",
        description: "HTML basics",
        links: "https://www.w3schools.com/html/",
        activites: [
          {
            name: "Activity 1",
            videos: "https://www.youtube.com/watch?v=UB1O30fR-EE",
            resources: "https://www.w3schools.com/html/html_basic.asp",
          },
          {
            name: "Activity 1",
            videos: "https://www.youtube.com/watch?v=UB1O30fR-EE",
            resources: "https://www.w3schools.com/html/html_basic.asp",
          },
        ],
      },
      {
        name: "Unit 2 - CSS Basics",
        description: "CSS basics",
        links: "https://www.w3schools.com/css/",
        activites: {
          name: "Activity 1",
          videos: "https://www.youtube.com/watch?v=UB1O30fR-EE",
          resources: "https://www.w3schools.com/html/html_basic.asp",
        },
      },
    ],
    ratings: [],
  },
];

const unitSeed = [
  {
    name: "HTML5",
    description: "HTML is the standard markup language for Web pages.",
    links: "https://www.w3schools.com/html/default.asp",
    course: "5ecbf122a7d435bf5d6867e6",
    activities: ["5eccc404a9e0ba821c78d3d6", "5eccc404a9e0ba821c78d3d7"],
  },
];

const activitySeed = [
  {
    name: "Activity 1",
    videos: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    resources: "/html/1",
    unit: "5ecb2013354da8d65129a11e",
  },
  {
    name: "Activity 2",
    videos: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    resources: "/html/1",
    unit: "5ecb2013354da8d65129a11e",
  },
  {
    name: "Activity 3",
    videos: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    resources: "/html/1",
    unit: "5ecb2013354da8d65129a11e",
  },
];

const userSeed = {
  email: "marketing@southernoaksinnstaug.com",
  course: ["5ecb4271abd92fef396791bc"],
};

// I was hard coding in an id of a created course for testing purposes
// You will need to use whatever course _id is in your database for testing.
// I also just created the user using the sign up form in the app because
// I was having issues when I tried to create a user using the seed data
// db.User.findOneAndUpdate(
//   { email: userSeed.email },
//   { isEnrolled: userSeed.course }
// )
//   .then((data) => {
//     console.log(data);
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

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
