const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
  const user = await new User(req.body);
  await user.save();
  res.status(201).redirect('/login');
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.redirect('/login');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.redirect('/login');
  }
  req.session.userID = user.id;
  res.redirect('/');
};

exports.logoutUser = async (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};
