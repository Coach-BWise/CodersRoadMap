import axios from "axios";

export default {
  createUser: function (userData) {
    return axios.post("api/users/add", userData);
  },
  login: function (userData) {
    return axios.post("api/users/login", userData);
  },
  getUnits: function () {
    return axios.get("api/units");
  },
  getActivites: function () {
    return axios.get("api/activites/html");
  },
  getUser: function () {
    return axios.get("api/users/");
  },
  createCourse: function (courseData) {
    return axios.post("api/course/create", courseData);
  },
  getUserCourses: function (userData) {
    return axios.get("api/users/my-courses");
  },
  getCourses: function () {
    return axios.get("api/course/");
  },
  enrollUser: function (courseId) {
    return axios.post("api/users/enroll/" + courseId);
  },
  unenrollUser: function (courseId) {
    return axios.delete("api/users/" + courseId);
  },
};
