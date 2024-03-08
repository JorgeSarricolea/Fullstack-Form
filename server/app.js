const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

require("./routes")(app);

// Listener
const PORT = 1234;
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
