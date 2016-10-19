var express = require('express');
var router = express.Router();
var Episodes = require('../models/episodeSchema.js')
var Characters = require('../models/characterSchema.js')


/* GET home page. */

router.get('/episodes', function(req, res, next) {
    Episodes.find({}, function(err, Episode){
    res.json({
      Episodes: Episode
    });
  });
});

router.get('/characters', function(req, res, next) {
    Characters.find({}, function(err, Character){
    res.json({
      Characters: Character
    });
  });
});


router.get('/addchar', function(req, res, next) {
    Characters.find({}, function(err, Character){
      //create a new user called chris
    var char = new Characters(


    );
    char.save(function(err) {
      if (err) throw err;
      console.log('User saved successfully!');
    });
    res.json({
      Message: "Added"
    });
  });
});

router.get('/addeps', function(req, res, next) {
    Episodes.find({}, function(err, Episode){
      //create a new user called chris
    var ep = new Episodes(
      // {
      //   seasonNum:"3",
      //   episodeNum:"12",
      //   title:"I married Marge",
      //   character: ["Homer", "Marge"],
      //   picture1: "./public/images/Homer.jpg",
      //   picture2: "./public/images/Marge.jpg"
      // }
    );
    ep.save(function(err) {
      if (err) throw err;
      console.log('User saved successfully!');
    });
    res.json({
      Message: "Added"
    });
  });
});



router.get('/delmartin', function(req, res, next) {
    Characters.remove({ _id: "5807a206aa08a6142c56f270" }, function(err){
      res.json({
        Message: "Added"
      });
    });
  });


module.exports = router;
