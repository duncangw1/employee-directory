import axios from "axios";

const API = {
  randomUsers: function () {
    return axios.get("https://randomuser.me/api/?results=15&nat=us");
  },
};

export default API;
