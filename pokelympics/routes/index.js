var express = require('express');
var pokedex = require('./API/Pokedex.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("INDEX");
  pokedex.getPokemon(function(pok) {
    //res.json(pok);
    //res.render('index', { json: pok.name });
    //res.render('index', { testland: 'HI THERE' });
    console.log("Reached callback");
    //res.render('index', {test: json});
    //console.log(json);
    for (var i = 0; i < pok.length; i++) {
      pok[i].name = pokedex.toTitleCase(pok[i].name);
    }
    res.render('index', { pokemon: pok, title: 'Pokélympics2' });
    //pokedex.toTitleCase(pok[0].name), pokeSpeed: pok[0].speed, pokeFrontPicURL: pok[0].fpic
  });

});


router.get('#/pok', function(req, res, next) {
  console.log("POK");
  pokedex(function(pok) {
    res.json(pok);
    res.render('index', { test: 'test2' });
  });
});

module.exports = router;
