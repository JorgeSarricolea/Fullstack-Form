require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Applications
const {
  createApplication,
  getApplicationById,
  getApplications,
  updateApplicationById,
  deleteApplicationById,
} = require("./database/applications");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Applications
require("./routes/applications")(
  app,
  createApplication,
  getApplicationById,
  getApplications,
  updateApplicationById,
  deleteApplicationById
);

// Listener
const PORT = 1234;
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
