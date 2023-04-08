const express = require("express");
const mongodb = require("mongodb");
const multer = require("multer");
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else cb(null, false);
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});
const router = express.Router();

// Get posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add posts
router.post("/", upload.single("profileImage"), async (req, res) => {
  const posts = await loadPostsCollection();
  console.log(req.file);
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date(),
    userName: req.body.userName,
    profileImage: req.file.path,
  });
  res.status(201).send();
});
// Delete post

router.delete("/:id", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.status(200).send();
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://SvenTajz:CLONErepublic2@piprojekt.mnzp0np.mongodb.net/?retryWrites=true&w=majority",
    { useNewURLParser: true }
  );
  return client.db("piProjekt").collection("posts");
}

module.exports = router;
