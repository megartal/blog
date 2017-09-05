var express = require('express');
var router = express.Router();
var Provider = require('../contentProvider').Provider;
var postProvider = new Provider();

// test data
postProvider.data = [
  {
      _id             :1,
      author          :"Akbar",
      title           :"Hi, it's me! Akbar", 
      body            :"I am in the website field since 2004 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam at orci commodo hendrerit vitae nec eros. Vestibulum neque est, imperdiet nec tortor nec, tempor semper metus. I am a developer, et accumsan nisi. Duis laoreet pretium ultricies. Curabitur rhoncus auctor nunc congue sodales. Sed posuere nisi ipsum, eget dignissim nunc dapibus eget. Aenean elementum sollicitudin sapien ut sapien fermentum aliquet mollis. Curabitur ac quam orci sodales quam ut tempor. suspendisse, gravida in augue in, interdum Work bibendum dui. Suspendisse sit amet justo sit amet diam fringilla commodo. Praesent ac magna at metus malesuada tincidunt non ac arcu. Nunc gravida eu felis vel elementum. Vestibulum sodales quam ut tempor tempor Donec sollicitudin imperdiet nec tortor nec, tempor semper metus..", 
      date      : new Date().getFullYear().toString(), 
      comments        :[{
          comment : "good point",
          date : new Date().getFullYear().toString()
      }]
  }];
/* GET users listing. */
router.get('/post', function(req, res) {
  res.render(post, {title : "blog", posts : postProvider.data, author : "Akbar Mirzaei", job : "Web Developer"});
});

module.exports = router;
