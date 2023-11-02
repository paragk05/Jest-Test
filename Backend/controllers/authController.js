const bcrypt = require("bcrypt");
const User = require("../models/User");
const validator = require("validator")

module.exports = {
  async register(req, res) {
    const { email, password } = req.body;
    if (!validator.isEmail(email)) {
      return res.status(409).send('Incorrect Email Format');
    }
    if (password.length < 8 ||
      password[0] !== password[0].toUpperCase() ||
      !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !
      /[!@#$%^&*]/.test(password)) {
      return res.status(409).send(`Password length should not be less than 8 characters,
       First character must be capital and password must contain at least one number`);
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).send('Email is already in use.');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = new User({
        email,
        password: hashedPassword,
      });
      await user.save();
      res.status(201).send('User registered successfully.');
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  async login(req, res) {
    const { email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(409).send('Incorrect Email Format');
    }
    if (password.length < 8 ||
      password[0] !== password[0].toUpperCase() ||
      !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !
      /[!@#$%^&*]/.test(password)) {
      return res.status(409).send(`Password length should not be less than 8 characters,
       First character must be capital and password must contain at least one number`);
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send("User not found.");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      res.status(200).send("Login successful.");
    } else {
      res.status(401).send("Incorrect password.");
    }
  },
};
