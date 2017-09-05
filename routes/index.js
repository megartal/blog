var express = require('express');
var Provider = require('../contentProvider').Provider;
var postProvider = new Provider();
var router = express.Router();


// test data
postProvider.data = [
  {
      author          :"Akbar",
      title           :"Hi, it's me! Akbar", 
      body            :"I am in the website field since 2004 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam at orci commodo hendrerit vitae nec eros. Vestibulum neque est, imperdiet nec tortor nec, tempor semper metus. I am a developer, et accumsan nisi. Duis laoreet pretium ultricies. Curabitur rhoncus auctor nunc congue sodales. Sed posuere nisi ipsum, eget dignissim nunc dapibus eget. Aenean elementum sollicitudin sapien ut sapien fermentum aliquet mollis. Curabitur ac quam orci sodales quam ut tempor. suspendisse, gravida in augue in, interdum Work bibendum dui. Suspendisse sit amet justo sit amet diam fringilla commodo. Praesent ac magna at metus malesuada tincidunt non ac arcu. Nunc gravida eu felis vel elementum. Vestibulum sodales quam ut tempor tempor Donec sollicitudin imperdiet nec tortor nec, tempor semper metus..", 
      date      : new Date().getFullYear().toString(), 
      comments        :[{
          isLiked :true,
          comment : "good point",
          date : new Date().getFullYear().toString()
      }]
  },
  {
      author          :"mohsen",
      title           :"politics", 
      body            :"readying politics is awesome!", 
      date      : new Date().getFullYear().toString(), 
      comments        :[{
          isLiked :false,
          comment : "dis agree",
          date : new Date().getFullYear().toString()
      }]
  },
  {
      author          :"hadi",
      title           :"sport", 
      body            :"readying sport is awesome!", 
      date      : new Date().getFullYear().toString(), 
      comments        :[{
          isLiked :true,
          comment : "sometimes :)",
          date : new Date().getFullYear().toString()
      }]
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
    postProvider.findAll(function(data){
      if (data !== undefined){
        res.render('index', {title : 'blog' , posts : data})        
      }
    });
});

module.exports = router;
