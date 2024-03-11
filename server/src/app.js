require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Applications
const {
  createApplication,
  getApplicationById,
  getApplications,
  updateApplicationById,
  deleteApplicationById,
} = require("./services/applicationsService");

const app = express();

// Hanlde images paths
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(bodyParser.json());
app.use(cors());

// Applications
require("./routes/applicationsRoutes")(
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
  console.log(`🚀App listening on port ${PORT}`);
});
