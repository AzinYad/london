const express = require("express");
const app = express();
const Harrow = require("./data/Harrow.json");
const Heathrow = require("./data/Heathrow.json");
const Straford = require("./data/Stratford.json");
const PORT = process.env.PORT || 3003;

app.get("/", (req, res) => {
  res.send({
    "/pharmacies": "returns an array of pharmacies in a specific area",
    "/colleges": "returns an array of colleges in a specific area",
    "/schools": "returns an array of schools in a specific area",
  });
});

const listener = app.listen(PORT, () => {
  console.log(`listening on port: ${listener.address().port}`);
});
