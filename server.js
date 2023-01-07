const express = require("express");
const app = express();
const harrowData = require("./data/Harrow.json");
const heathrowData = require("./data/Heathrow.json");
const strafordData = require("./data/Stratford.json");
const PORT = process.env.PORT || 3003;

app.get("/", (req, res) => {
  res.send({
    "/pharmacies": "returns an array of pharmacies in a specific area",
    "/colleges": "returns an array of colleges in a specific area",
    "/doctors": "returns an array of doctors in a specific area",
    "/hospitals": "returns an array of hospitals in a specific area",
  });
});

app.get("/:city", (req, res) => {
  let cityName = req.params.city.toLocaleLowerCase();
  if (cityName === "straford") {
    res.send(strafordData);
  } else if (cityName === "harrow") {
    res.send(harrowData);
  } else if (cityName === "heathrow") {
    res.send(heathrowData);
  } else {
    res.sendStatus(404);
  }
});

app.get("/:city/:category", (req, res) => {
  let cityName = req.params.city.toLocaleLowerCase();
  let category = req.params.category;

  if (cityName === "straford" && category === "pharmacies") {
    res.send(strafordData.pharmacies);
  } else if (cityName === "straford" && category === "colleges") {
    res.send(strafordData.colleges);
  } else if (cityName === "straford" && category === "doctors") {
    res.send(strafordData.doctors);
  } else if (cityName === "straford" && category === "hospitals") {
    res.send(strafordData.hospitals);
  } else if (cityName === "harrow" && category === "pharmacies") {
    res.send(harrowData.pharmacies);
  } else if (cityName === "harrow" && category === "colleges") {
    res.send(harrowData.colleges);
  } else if (cityName === "harrow" && category === "doctors") {
    res.send(harrowData.doctors);
  } else if (cityName === "harrow" && category === "hospitals") {
    res.send(harrowData.hospitals);
  } else if (cityName === "heathrow" && category === "pharmacies") {
    res.send(heathrowData.pharmacies);
  } else if (cityName === "heathrow" && category === "colleges") {
    res.send(heathrowData.colleges);
  } else if (cityName === "heathrow" && category === "doctors") {
    res.send(heathrowData.doctors);
  } else if (cityName === "heathrow" && category === "hospitals") {
    res.send(heathrowData.hospitals);
  } else {
    res.sendStatus(404);
  } 
});





const listener = app.listen(PORT, () => {
  console.log(`listening on port: ${listener.address().port}`);
});
