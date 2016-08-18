var Pokedex = require('pokedex-promise-v2');
var Q = require('q');
var P = new Pokedex();

function getPokemon(cb) {
    pok_prom = [];
    for (var i = 0; i < 1; i++) {
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
                    console.log("test");
                } else {
                    var reason = result.reason;
                    console.log(reason);
                }
            });
            cb(pok);
        });
}

module.exports = getPokemon;
