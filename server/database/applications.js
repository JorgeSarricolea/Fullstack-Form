const knex = require("./database"); // Import knex object from database.js

const table = "APPLICATIONS";

// GET all applications
const getApplications = () => {
  return knex(table).select();
};

// CREATE an application
const createApplication = (newApplication) => {
  // Receives a single parameter, an object
  return knex(table).insert(newApplication);
};

module.exports = { createApplication, getApplications };
