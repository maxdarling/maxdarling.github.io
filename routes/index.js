var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.sendFile(__basedir + '/public/index.html');
});

/* resume */
router.get('/resume', function(req, res, next) {
  res.sendFile(__basedir + '/public/resume.pdf');
});

/* redirect any un-caught urls to home */
router.get('*', function(req, res, next) {
  res.redirect('/home');
});

module.exports = router;
