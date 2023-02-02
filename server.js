/* Third-party packages */

const express = require("express");
const path = require("path");

/* Initialize app */

const app = express();
const publicPath = path.resolve(__dirname, "./build");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Starts the app
app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
