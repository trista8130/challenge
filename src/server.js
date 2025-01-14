"use strict";
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
const registerRoutes = require("./routes");
// server config
const port = process.env.PORT || 3000;

// register routes
registerRoutes(app);
// create server start method

const start = () => {
  return new Promise((resolve, reject) => {
    app.listen(port, () => {
      console.log(`Connected to Port ${port}`);
      resolve();
    });
  }).catch((error) => {
    console.log(`failed to start server => ${error.message}`);
  });
};

module.exports = start;
