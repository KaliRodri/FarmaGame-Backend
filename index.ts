const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Farmagame Backend Funcionando 100%");
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});