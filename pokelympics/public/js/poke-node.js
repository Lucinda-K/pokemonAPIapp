// Pokémon API calls
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

/*P.getPokemonByName(34, function(response, error) {
  if(!error) {
    console.log(response);
    var pokedata = JSON.parse(response);
    console.log( pokedata.name );
  } else {
    console.log(error)
  }
});*/

P.getEvolutionChainById(1)
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  }
);
