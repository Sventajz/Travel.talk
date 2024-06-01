const express = require("express");
const router = express.Router();
const connectToDatabase = require('../../db'); // Adjust the path as necessary
const User = require('../../models/user');
const mongodb = require('mongodb')

router.get("/", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const users = db.collection('users');

    // Aggregate all posts from each user along with user information
    const allPosts = await users.aggregate([
      { $unwind: "$posts" }, // Deconstruct the posts array
      {
        $project: {
          post: "$posts",
          userName: "$name",
          userEmail: "$email"
        }
      }
    ]).toArray();

    res.send(allPosts);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    res.status(500).send({ error: 'Failed to fetch posts' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const users = db.collection('users');
    const allUsers = await users.find({}).toArray();
    res.send(allUsers);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch users' });
  }
});

router.post('/users/:userId/posts', async (req, res) => {
  const userId = req.params.userId;
  const postData = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.posts.push(postData);
    await user.save();

    res.status(201).json({ message: 'Post added successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const users = db.collection('users');

    // Delete a specific post by its ID
    const result = await users.updateOne(
      { "posts._id": new mongodb.ObjectId(req.params.id) },
      { $pull: { posts: { _id: new mongodb.ObjectId(req.params.id) } } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).send({ error: 'Post not found' });
    }

    res.status(200).send({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error("Failed to delete post:", error);
    res.status(500).send({ error: 'Failed to delete post' });
  }
});

module.exports = router;