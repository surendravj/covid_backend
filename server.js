const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const port = process.env.PORT || 5000;
const app = express();
const cookieparser = require("cookie-parser");
const {getCenters} =require('./controller');
const mongoose = require("mongoose");
const dbUrl =
  "mongodb+srv://covid19:districts@cluster0.ilkuy.mongodb.net/Covidlist?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use(cookieparser());
app.use(urlencoded({ extended: true }));

mongoose
  .connect(dbUrl, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

app.get("/centers", getCenters);

app.listen(port);
