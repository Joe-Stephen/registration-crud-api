const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = db.users;

//@desc registering user
//@route POST /register
//@access Public
const registerUser = async (req, res) => {
  try {
    console.log("Register function called");
    const { first_name, last_name, email, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
      res.status(400).json({ error: "Please add all fields." });
      throw new Error("Please add all fields.");
    }
    const existingUser = await User.findOne({
      where: {
        email: `${email}`,
      },
    });
    if (existingUser) {
      res.status(400).json("This email is already registered!");
    } else {
      //hashing password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      //user creation
      const newUser = await User.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: hashedPassword,
      });
      console.log("User created successfully");
      res.status(201).send(newUser);
    }
  } catch (error) {
    console.error("Failed to create user : ", error);
    res.status(400).json("Unable to create user");
  }
};

//@desc validating user login details
//@route POST /login
//@access Public
const validateLoginDetails = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Please add all fields." });
      throw new Error("Please add all fields.");
    }
    console.log(email, password);

    const existingUser = await User.findOne({
      where: {
        email: `${email}`,
      },
    });
    if (!existingUser) {
      res.status(400).json("This email is not registered!");
    }
    bcrypt.compare(password, existingUser.password, (err, result) => {
      if (err) {
        console.error(err);
        res.status(400).json("An error happened while logging in.");
      }
      if (result) {
        console.log("Passwords matched!.");
        const loggedInUser = {
          userId: existingUser.id,
          name: existingUser.first_name + " " + existingUser.last_name,
          email: existingUser.email,
          token: generateToken(existingUser.email),
        };
        res.header("Authorization", loggedInUser.token).send(loggedInUser);
      } else {
        console.log("Incorrect password.");
        res.status(400).json("Incorrect password.");
      }
    });
  } catch (error) {
    console.error(error);
  }
};

//JWT generator function
const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  registerUser,
  validateLoginDetails,
};
