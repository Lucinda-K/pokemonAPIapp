var express = require('express');
var pokedex = require('./API/Pokedex.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pokélympics' });
});


router.get('/pok', function(req, res, next) {
  pokedex(function(pok) {
    res.json(pok);
  });
});

module.exports = router;
