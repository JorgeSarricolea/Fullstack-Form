require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const database = require("./database/database");

// Applications
const {
  createApplication,
  getApplications,
} = require("./database/applications");

const app = express();

app.use(bodyParser.json());

// Applications
require("./routes/applications")(app, createApplication, getApplications);

// Listener
const PORT = 1234;
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
