const knex = require("./database"); // Import knex object from database.js

const table = "APPLICATIONS";

// CREATE an application
const createApplication = (newApplication) => {
  // Receives a single parameter, an object
  return knex(table).insert(newApplication);
};

// GET all applications
const getApplications = () => {
  return knex(table).select();
};

// GET an application by ID
const getApplicationById = (id) => {
  return knex(table).where({ id: id }).first();
};

// UPDATE an application by ID
const updateApplicationById = (id, updatedFields) => {
  return knex(table).where({ id: id }).update(updatedFields);
};

// DELETE an application by ID
const deleteApplicationById = (id) => {
  return knex(table).where({ id: id }).del();
};

module.exports = {
  createApplication,
  getApplicationById,
  getApplications,
  updateApplicationById,
  deleteApplicationById,
};
