const express = require("express");

const app = express();

require("./routes")(app);

// Listener
const PORT = 1234;
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
