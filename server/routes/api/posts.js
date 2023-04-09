const express = require("express");
const mongodb = require("mongodb");
const multer = require("multer");
const { body, param, validationResult } = require("express-validator");

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
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
router.get("/", async (req, res, next) => {
  try {
    const posts = await loadPostsCollection();
    const allPosts = await posts.find({}).toArray();
    res.status(200).json({ posts: allPosts });
  } catch (err) {
    next(err);
  }
});

// Add post
router.post(
  "/",
  upload.single("profileImage"),
  body("text", "Text is required").trim().notEmpty(),
  body("userName", "Username is required").trim().notEmpty(),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const posts = await loadPostsCollection();

      const newPost = {
        text: req.body.text,
        createdAt: new Date(),
        userName: req.body.userName,
        profileImage: req.file ? req.file.path : "",
      };

      const result = await posts.insertOne(newPost);
      res.status(201).json({ post: result.ops[0] });
    } catch (err) {
      next(err);
    }
  }
);

// Delete post
router.delete("/:id", param("id").isMongoId(), async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const posts = await loadPostsCollection();

    const result = await posts.deleteOne({
      _id: new mongodb.ObjectId(req.params.id),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    next(err);
  }
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://SvenTajz:CLONErepublic2@piprojekt.mnzp0np.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  return client.db("piProjekt").collection("posts");
}

module.exports = router;
