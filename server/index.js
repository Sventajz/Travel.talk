const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware

app.use(bodyParser.json());
app.use(cors());

const post = require("./routes/api/posts");
const auth = require("./routes/api/auth");
app.use("/api/posts", post);
app.use("/api", auth);
app.use("/api/posts", auth);
const country = require("./routes/api/countriesVisited");
//app.use('/api/countriesVisited',country)
app.use("/uploads", express.static("uploads"));
const port = process.env.port || 5000;
require('dotenv').config()
console.log('this is env file', process.env.GOOGLE_API)
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
