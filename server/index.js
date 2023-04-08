const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware

app.use(bodyParser.json());
app.use(cors());

const post = require("./routes/api/posts");
app.use("/api/posts", post);
app.use("/uploads", express.static("uploads"));
const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
