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

    console.log('determine winner');
    // get winner
    var minScore = 10000000;
    var winDel = 0;
    var winner = 0;
    var currScore = 0;
    for (var i = 0; i < pok.length; i++) {
      currScore = pok[i].totalTime;
      if (minScore > currScore) {
        minScore = currScore;
        winDel = pok[i].totalTime;
        winner = i;
        console.log("new winner");
      }
    }
    console.log(pok[winner].name);
    var winName = pok[winner].name;
    var winModalImage = pok[winner].fpic;
    console.log(minScore);

    var losDel = 0;
    var maxScore = 0;
    currScore = 0;
    var loser = 0;
    for (var i = 0; i < pok.length; i++) {
      currScore = pok[i].totalTime;
      if (maxScore < currScore) {
        console.log("test");
        maxScore = currScore;
        loseDel = pok[i].totalTime;
        loser = i;
      }
    }
    console.log(pok[loser].name);
    console.log(maxScore);
    var loseModalImage = pok[loser].fpic;

    res.render('index', { pokemon: pok, title: 'Pokélympics', winnerDelay: winDel, winnerName: winName, loserDelay: maxScore, winModImg: winModalImage, loseModImg: loseModalImage });
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
