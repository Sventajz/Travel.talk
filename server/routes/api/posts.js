const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();
const router = express.Router();
const User = require('../../models/user')
// Get Posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});


router.get('/users', async (req,res) =>{
  const users = await loadUserCollection();
  res.send(await users.find({}).toArray());
})

// Add Post
 // Assuming your User model is defined in a separate file

// Define a route to handle adding new posts
router.post('/users/:userId/posts', async (req, res) => {
  const userId = req.params.userId;
  const postData = req.body; // Assuming you're sending post data in the request body
  
  try {
    // Find the user by ID
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Add the new post to the user's posts array
    user.posts.push(postData);
    
    // Save the user with the new post
    await user.save();

    res.status(201).json({ message: 'Post added successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;


// Delete Post
router.delete("/:id", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.status(200).send({});
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(`${process.env.MONGO_API}`, {
    useNewUrlParser: true,
  });

  return client.db("vue_express").collection("posts");
}

async function loadUserCollection(){
  const client = await mongodb.MongoClient.connect(`${process.env.MONGO_API}`, {
    useNewUrlParser: true,
  });

  return client.db('test').collection('users')
}

module.exports = router;
