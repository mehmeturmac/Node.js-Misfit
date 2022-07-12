const User = require('../models/User');

exports.getIndexPage = async (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
};
exports.getAboutPage = async (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};
exports.getContactPage = async (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};
exports.getGalleryPage = async (req, res) => {
  res.status(200).render('gallery', {
    page_name: 'gallery',
  });
};
exports.getTrainerPage = async (req, res) => {
  const antrenors = await User.find({ role: 'antrenor' });
  res.status(200).render('trainer', {
    page_name: 'trainer',
    antrenors,
  });
};
exports.getLoginPage = async (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};
exports.getRegisterPage = async (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};
