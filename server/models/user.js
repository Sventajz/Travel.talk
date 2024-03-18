const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      text: {
        type: String
      },
      place: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now // Default value will set the current date and time
      }
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
