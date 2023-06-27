<<<<<<< HEAD
=======
const mongoose = require("mongoose");
>>>>>>> travel-test
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

<<<<<<< HEAD
const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log("Password:", password);
    console.log(name);
=======
mongoose
  .connect(
    "mongodb+srv://SvenTajz:CLONErepublic2@piprojekt.mnzp0np.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
>>>>>>> travel-test
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    // Check if user with the provided email already exists
<<<<<<< HEAD
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(409).json({ message: "User already exists" });
    // }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

=======
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("this is hashed password: ", hashedPassword);
>>>>>>> travel-test
    // Create a new user using the User model
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
<<<<<<< HEAD

=======
    console.log(newUser);
>>>>>>> travel-test
    // Save the new user to the database
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, "your-secret-key");
<<<<<<< HEAD
=======
    console.log('this is your token" ', token);
>>>>>>> travel-test

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

<<<<<<< HEAD
module.exports = {
  register,
=======
const login = (req, res, next) => {
  var identifier = req.body.identifier; // Assuming the field for email/username is called "identifier"
  var password = req.body.password;

  User.findOne({
    $or: [{ email: identifier }, { name: identifier }], // Search by email or username
  }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.status(500).send({ error: err });
        }
        if (result) {
          let token = jwt.sign({ name: user.name }, "verySecretValue", {
            expiresIn: "1h",
          });
          res.status(200).send({
            message: "login successful!",
            token,
          });
        } else {
          res.status(401).send({
            message: "password does not match",
          });
        }
      });
    } else {
      res.status(404).send({
        message: "no user found!",
      });
    }
  });
};

module.exports = {
  register,
  login,
>>>>>>> travel-test
};
