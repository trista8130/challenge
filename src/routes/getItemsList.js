"use strict";
const mockDBCalls = require("../database/index.js");

const getItemsList = async (request, response) => {
  const data = await mockDBCalls.getItemsList();

  return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
  app.get("/users/items", getItemsList);
};
