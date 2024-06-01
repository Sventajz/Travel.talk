const express = require("express");
const mongodb = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const post = require("./routes/api/posts");
const auth = require("./routes/api/auth");
const country = require("./routes/api/countriesVisited");

app.use("/api", post);
app.use("/api", auth);
app.use("/api", auth);
app.use("/uploads", express.static("uploads"));



app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});