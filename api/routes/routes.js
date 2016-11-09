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
      {
        character: "Coyote",
        picture: "./public/images/Coyote.jpg"
      }
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
      {
        seasonNum:"1",
        episodeNum:"1",
        title:"Simpsons Roasting on an Open Fire",
        character: ["Homer", "Marge"],
        picture1: "./public/images/Bart.jpg",
        picture2: "./public/images/Homer.jpg",
        picture3: "./public/image/Dog.jpg",
        Description: "While Christmas shopping Bart gets a tattoo, Marge uses the Christmas funds to remove it and in an attempt to get money for Christmas Homer bets at dog racing and ends up with Santas little helper."
      }
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

// _id: "5807a13bf03fff13dcfa4b36",
// character: "Homer",
// picture: "./public/images/Homer.jpg"


router.get('/delbyid', function(req, res, next) {
    Characters.remove({ _id: "580a3ade94e0ae50713d4479" }, function(err){
      res.json({
        Message: "Deleted"
      });
    });
  });


module.exports = router;
