var express = require('express');
var router = express.Router();

const MENU = 
[
    {
        id : 1,
        title : "The Shawshank Redemption",
        duration : 142,
        budget : 10,
        link : "https://www.moviemeter.nl/film/273",
    },

    {
        id : 2,
        title : "The Godfather",
        duration : 175,
        budget : 11,
        link : "https://www.moviemeter.nl/film/320",
    },
    
    {
        id : 3,
        title : "The Godfather: Part II",
        duration : 202, 
        budget : 15,
        link : "https://www.moviemeter.nl/film/321",
    }
]

router.get('/', function(req, res, next) {
    console.log('GET /films');
    res.json(MENU);
  });
  
  module.exports = router;
  