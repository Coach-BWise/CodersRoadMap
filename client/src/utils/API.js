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
};
