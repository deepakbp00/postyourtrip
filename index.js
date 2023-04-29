const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemon = require("nodemon");
const mongoose = require("mongoose");
const routes = require("./routes/posts");
const dotenv = require("dotenv").config();
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());
app.use("/posts", routes);

const CONNECTION_URL = process.env.Mongoose_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);
