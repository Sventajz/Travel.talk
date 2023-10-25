const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();
const router = express.Router();

// Get Posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add Post
router.post("/", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    userName: req.body.userName,
    text: req.body.text,
    place: req.body.place,
    createdAt: new Date(),
  });
  res.status(201).send();
});

// Delete Post
router.delete("/:id", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.status(200).send({});
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://SvenTajz:CLONErepublic2IMPERIAL2@piprojekt.mnzp0np.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );

  return client.db("vue_express").collection("posts");
}

module.exports = router;
