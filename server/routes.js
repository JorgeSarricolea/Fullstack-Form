module.exports = function (app) {
  // Testing server
  app.get("/", (req, res) => {
    res.json({ message: "it works!" });
  });

  // GET all applications
  app.get("/applications", (req, res) => {
    res.json({ message: "List of applications" });
  });

  // POST a new application
  app.post("/applications", (req, res) => {
    const newApplication = req.body;
    console.log("\nNew application generated:\n", newApplication);
    res.json({ message: "Application submited" });
  });
};
