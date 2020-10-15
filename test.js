const request = require("request");
const fs = require("fs");

var ACCESS_TOKEN =
  "pk.eyJ1Ijoic3VyZW5kcmEtMTQiLCJhIjoiY2tjeDE5ZmlhMGprajMwcXVzeHpjcTBrcCJ9.hmsg14Got1Ad09_N_E0RXQ";

const data = require("./data/Hyderabad.json");

var arr = [];
const test = () => {
  data.map((e, index) => {
    var url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      encodeURIComponent(e.add) +
      ".json?access_token=" +
      ACCESS_TOKEN +
      "&limit=1";
    request({ url: url, json: true }, function (error, response) {
      if (error) {
        callback("Unable to connect to Geocode API", undefined);
      } else if (response.body.features.length == 0) {
        callback(
          "Unable to find location. Try to " + "search another location."
        );
      } else {
        var longitude = response.body.features[0].center[0];
        var latitude = response.body.features[0].center[1];
        data[index].lat = latitude;
        data[index].long = longitude;
        fs.writeFile("./data/Hyderabad1.json", JSON.stringify(data), (err) => {
          if (err) {
            console.log(e);
            return;
          }
          console.log("done");
        });
      }
    });
  });
};

test();
