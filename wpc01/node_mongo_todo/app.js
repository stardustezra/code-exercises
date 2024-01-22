const express = require("express");
const app = express();
const port = 4000;

app.listen(port, () => console.log(`todo app is listening on port ${port}`));

app.get("/", (req, res) => {
  console.log(req);
  console.log(res);
  res.send("Hello World");
});
