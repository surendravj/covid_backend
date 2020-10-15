const db = require("./mongo_config");
const fs = require("fs");
const data = require("./data/Hyderabad1.json");

exports.getCenters = (req, res) => {
  res.send(JSON.parse(JSON.stringify(data)));
};
