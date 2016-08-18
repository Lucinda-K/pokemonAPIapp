var Pokedex = require('pokedex-promise-v2');
var Q = require('q');
var P = new Pokedex();

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function getPokemon(cb) {
    console.log("Fetching Pokémon data...");
    pok_prom = [];
    for (var i = 0; i < 4; i++) {
        pok_prom.push(P.getPokemonByName(Math.floor((Math.random() * 100) + 1)));
    }

    Q.allSettled(pok_prom)
        .then(function (results) {
            var pok = []
            results.forEach(function (result) {
                if (result.state === "fulfilled") {
                    p = result.value;
                    stats = {
                            name: p.name,
                            speed: p.stats[0].base_stat,
                            fpic: p.sprites.front_default,
                            bpick: p.sprites.back_default,
                    }
                    pok.push(stats);
                    console.log(stats);
                    console.log("...successful fetch!");
                } else {
                    var reason = result.reason;
                    console.log(reason);
                }
            });
            cb(pok);
        });
}

module.exports = {getPokemon:getPokemon, toTitleCase:toTitleCase};
