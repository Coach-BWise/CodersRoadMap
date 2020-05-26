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
    activites: [
      {
        name: "Activity 1",
        videos: "HTML basics",
        resources: "HTML basics",
      },
      {
        name: "Activity 2",
        videos: "HTML basics",
        resources: "HTML basics",
      },
    ],
    creator: "5ecd6bf9298614ffe1cc1b01",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTX9hISjQ-LGa_L1VRbf5LY5k_l3y1ntxAP_fCGaMB1iCEuHGC4&usqp=CAU",
  },
  {
    name: "Algorithms",
    description:
      "In mathematics and computer science, an algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation.",
    activites: [
      {
        name: "Activity 1",
        videos: "HTML basics",
        resources: "HTML basics",
      },
      {
        name: "Activity 2",
        videos: "HTML basics",
        resources: "HTML basics",
      },
    ],
    creator: "5ecd6c0c298614ffe1cc1b02",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbY3VPvvCxLKswUKAWxLRudd1MMtLVs3oVrMgDNkcoWosbADoi&usqp=CAU",
  },
  {
    name: "Express Handlebars",
    description:
      "One of the most popular template engines for Express.js, web application framework for Node.js.",
    activites: [
      {
        name: "Activity 1",
        videos: "HTML basics",
        resources: "HTML basics",
      },
    ],
    creator: "5ecd6bf9298614ffe1cc1b01",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLkxYR0YjiQi8LvvBy_2tBFzc0KZBmN5_Mp78BSiOiWjHlwjzF&usqp=CAU",
  },
  {
    name: "UI",
    description:
      "User interface (UI) design is the process of making interfaces in software or computerized devices with a focus on looks or style.",
    activites: [
      {
        name: "Activity 1",
        videos: "HTML basics",
        resources: "HTML basics",
      },
    ],
    creator: "5ecd6bb8298614ffe1cc1aff",
    image: "https://i.ytimg.com/vi/c6S-eUipCBI/maxresdefault.jpg",
  },
  {
    name: "Python Course",
    description:
      "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.",
    activites: [
      {
        name: "Activity 1",
        videos: "HTML basics",
        resources: "HTML basics",
      },
    ],
    creator: "5ecd6bf9298614ffe1cc1b01",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_Cg2qAyPlRUSqs_UstleQ6g7vz_BdMR1z5fbga9jJEcOPA294&usqp=CAU",
  },
  {
    name: "Prepare for Coding Interviews",
    description:
      "Nailing that interview is very important, take my course to be the best!",
    activites: [
      {
        name: "Activity 1",
        videos: "HTML basics",
        resources: "HTML basics",
      },
    ],
    creator: "5ecd6c0c298614ffe1cc1b02",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUU20hks9QBnaDs8v3noXOtmF78Xy85_vlaxL0uLaDilbj4lKD&usqp=CAU",
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

const userSeed = [
  {
    _id: ObjectId("5ecd6c0c298614ffe1cc1b02"),
    firstName: "Owais",
    lastName: "Leech",
    email: "Owais@gmail.com",
    password: "$2a$10$Ca.8wfQziLGNI/fxuafvLOUabLZqVa6Rs.iaVU4WHDW2VrU55yZsK",
  },
  {
    _id: ObjectId("5ecd6bf9298614ffe1cc1b01"),
    isInstructor: false,
    isEnrolled: [],
    createdCourses: [],
    firstName: "Cassius",
    lastName: "Clay",
    email: "Cassius@gmail.com",
    password: "$2a$10$fVG4/OYf6.4WB90Nf.k7y.PNO4TAihD21DnSifeg8Yr5cLYGJQuA2",
    __v: 0,
  },
  {
    _id: ObjectId("5ecd6bb8298614ffe1cc1aff"),
    isInstructor: false,
    isEnrolled: [],
    createdCourses: [],
    firstName: "Mary",
    lastName: "Beth",
    email: "mbeth@gmail.com",
    password: "$2a$10$I3nh7SCO4MMcljM/6IbezuLELj4HcgnWEFw2CC9WX/mKjNnelNr06",
    __v: 0,
  },
];

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

db.Course.remove({})
  .then(() => db.Course.collection.insertMany(coursesSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
