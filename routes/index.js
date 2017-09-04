var express = require('express');
var Provider = require('./contentProvider').Provider;
var postProvider = new Provider();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Posts' , posts : postProvider.findAll(function(posts){
    return posts;
  })});
});

module.exports = router;
