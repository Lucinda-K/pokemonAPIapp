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
    res.render('index', { pokemon: pok, title: 'Pokélympics' });
    //pokedex.toTitleCase(pok[0].name), pokeSpeed: pok[0].speed, pokeFrontPicURL: pok[0].fpic
  });
});


router.get('#/race', function(req, res, next) {
console.log("RACE");
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
    res.render('index', { pokemon: pok, title: 'Pokélympics', race: true });
    //pokedex.toTitleCase(pok[0].name), pokeSpeed: pok[0].speed, pokeFrontPicURL: pok[0].fpic
  });
});

module.exports = router;
