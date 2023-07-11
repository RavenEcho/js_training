const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index_1.html");
});

app.get("/vote", (req, res) => {
  const timestamp = new Date().toLocaleString();
  res.status(200).json({ timestamp });
});

app.use(express.static(__dirname));

app.listen(5600, () => {
  console.log("Server started on port 5600");
});
