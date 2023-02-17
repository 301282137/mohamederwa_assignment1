// Mohamed Erwa
// 301282137
// COMP229 Sec004
// 4/2/2023

var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');
let userModel = require('../models/user');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
});

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('home', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
});

/* GET About Us page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About', displayName: req.user ? req.user.displayName : '' });
});

/* GET Products page. */
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects', displayName: req.user ? req.user.displayName : '' });
});

/* GET Services page. */
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Services', displayName: req.user ? req.user.displayName : '' });
});

/* GET Contact Us page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact', displayName: req.user ? req.user.displayName : '' });
});

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
