const express = require("express");
const _ = require("lodash");

const app = express();

app.get("/", (req, res) => {
  res.json(_.pick({ name: "dagsec-demo", status: "ok" }, ["name", "status"]));
});

app.listen(process.env.PORT || 3000);
