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
    "/doctors": "returns an array of doctors in a specific area",
    "/hospitals": "returns an array of hospitals in a specific area",
  });
});

app.get("/Straford", (req, res) => {
  res.send(Straford);
});

app.get("/Straford/pharmacies", (req, res) => {
  res.send(Straford.pharmacies);
});

app.get("/Straford/colleges", (req, res) => {
  res.send(Straford.colleges);
});

app.get("/Straford/doctors", (req, res) => {
  res.send(Straford.doctors);
});

app.get("/Straford/hospitals", (req, res) => {
  res.send(Straford.hospitals);
});

const listener = app.listen(PORT, () => {
  console.log(`listening on port: ${listener.address().port}`);
});
