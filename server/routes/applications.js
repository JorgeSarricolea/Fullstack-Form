const multer = require("multer");
const path = require("path");

// Configuring Multer to store files to disk
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Here 'uploads/' is the folder destination
  },
  filename: function (req, file, cb) {
    // Construct new file name to avoid name conflicts
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Store files to disk
const upload = multer({
  storage: storage,
});

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
  app.post("/applications", upload.single("profilePicture"), (req, res) => {
    // req.file now contains information about the saved file, including the path
    const newApplication = {
      ...req.body,
      profilePicture: req.file ? req.file.path : null, // Save the file path
    };

    // Now newApplication contains the path of the file to save in the DB
    createApplication(newApplication)
      .then(() => {
        res.json({ message: "A new application was submitted!" });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: error.message || error });
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
