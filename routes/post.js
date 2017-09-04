var express = require('express');
var queryString = require('querystring');
var router = express.Router();
var Provider = require('./contentProvider');
var postProvider = new Provider();
/* GET users listing. */
router.get('/blog/:id', function(req, res, next) {
  var id = queryString(req.url);
  res.render('post', {title: 'post', })


  res.send('respond with a resource');
});

module.exports = router;
