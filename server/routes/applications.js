module.exports = function (
  app,
  createApplication,
  getApplicationById,
  getApplications,
  updateApplicationById,
  deleteApplicationById
) {
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
        res
          .status(500)
          .json({ message: "Get all applications is not working:/" });
      });
  });

  // GET an application by ID
  app.get("/applications/:id", (req, res) => {
    const id = req.params.id;
    getApplicationById(id)
      .then((application) => {
        res.json(application);
      })
      .catch((error) => {
        res.json({ message: "Get application by id is not working:/" });
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

  // PUT update an application by ID
  app.put("/applications/:id", (req, res) => {
    const id = req.params.id;
    const updatedFields = req.body;
    updateApplicationById(id, updatedFields)
      .then(() => {
        res.json({ message: "Application updated successfully" });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  });

  // DELETE an application by ID
  app.delete("/applications/:id", (req, res) => {
    const id = req.params.id;
    deleteApplicationById(id)
      .then(() => {
        res.json({ message: "Application deleted successfully" });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  });
};
