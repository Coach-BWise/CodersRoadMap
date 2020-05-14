import axios from "axios";

export default {
  createUser: function (userData) {
    return axios.post("api/users/add", userData);
  },
  login: function (userData) {
    return axios.post("api/users/login", userData);
  },
};
