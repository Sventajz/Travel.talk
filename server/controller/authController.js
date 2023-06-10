const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log("Password:", password);
    console.log(name);
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    // Check if user with the provided email already exists
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(409).json({ message: "User already exists" });
    // }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user using the User model
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, "your-secret-key");

    res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    console.error("Error occurred while registering the user:", error);
    res
      .status(500)
      .json({ message: "An error occurred while registering the user" });
  }
};

module.exports = {
  register,
};
