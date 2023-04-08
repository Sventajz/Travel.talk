const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");

const app = express();

// Set up MongoDB connection
mongoose.connect(
  "mongodb+srv://SvenTajz:CLONErepublic2@piprojekt.mnzp0np.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB connected");
});

// Define image schema and model
const imageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String,
});

const Image = mongoose.model("Image", imageSchema);

// Set up Multer storage and limits
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB
  },
});

// Define API endpoint for image upload
app.post("/api/images", upload.single("image"), async (req, res) => {
  const { originalname, buffer, mimetype } = req.file;
  const image = new Image({
    name: originalname,
    data: buffer,
    contentType: mimetype,
  });
  try {
    await image.save();
    res.json({ message: "Image uploaded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to upload image" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
