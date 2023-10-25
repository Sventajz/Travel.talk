const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();
require("dotenv/config");
// Get Posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add Post
router.post("/", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    countryVisited: req.body.countryVisited,
    countryBlog: req.body.countryBlog,
    createdAt: new Date(),
  });
  res.status(201).send();
});

// Delete Post
router.delete("/:id", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send({});
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(`${process.env.MONGO_API}`, {
    useNewUrlParser: true,
  });

  return client.db("vue_express").collection("countries");
}

module.exports = router;
