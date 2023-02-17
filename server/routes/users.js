// Mohamed Erwa
// 301282137
// COMP229 Sec004
// 17/2/2023

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
