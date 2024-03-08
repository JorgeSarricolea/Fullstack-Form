module.exports = function (app, createApplication, getApplications) {
  // Testing server
  app.get("/", (req, res) => {
    res.json({ message: "it works!" });
  });

  // GET all applications
  app.get("/applications", (req, res) => {
    getApplications()
      .then((applications) => {
        res.json(applications);
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  });

  // POST a new application
  app.post("/applications", (req, res) => {
    const newApplication = req.body;
    createApplication(newApplication)
      .then(() => {
        res.json({ message: "A new application was submitted!" });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  });
};
