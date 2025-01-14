import axios from "axios";

const port = "http://localhost:3000";
const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3005",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

const fetchAllUser = () => {
  return axios
    .get(`${port}/users`)
    .then((response) => response.data)
    .catch((err) => console.log(err.response));
};
const fetchAllItems = () => {
  return axios
    .get(`${port}/users/items`)
    .then((response) => response.data)
    .catch((err) => console.log(err.response));
};


const fetchListOfAges = (item) => {
  return axios
    .get(`${port}/users/age`, {
      params: { item },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err.response));
};

const Servides = {
  fetchAllUser,
  fetchAllItems,
  fetchListOfAges,
};

export default Servides;
