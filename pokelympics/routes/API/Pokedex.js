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
            var pok = [];
            var i = 0;
            results.forEach(function (result) {
                if (result.state === "fulfilled") {
                    console.log("pokemon fetch start");
                    p = result.value;

                    var baseSpeed = parseInt(p.stats[0].base_stat);

                    var rand1 = (Math.random() * .5) - .25;
                    var rand2 = (Math.random() * .5) - .25;
                    var rand3 = (Math.random() * .5) - .25;
                    var rand4 = (Math.random() * .5) - .25;
                    console.log("random done");
                    var s1 = Math.floor((1 / baseSpeed) * 100000);
                    var s2 = Math.floor((1 / baseSpeed) * 100000);
                    var s3 = Math.floor((1 / baseSpeed) * 100000);
                    var s4 = Math.floor((1 / baseSpeed) * 100000);
                    console.log("speeds set");

                    var mSpeed1 = Math.floor(s1 + (s1 * rand1));
                    var mSpeed2 = Math.floor(s1 + (s1 * rand2));
                    var mSpeed3 = Math.floor(s1 + (s1 * rand3));
                    var mSpeed4 = Math.floor(s1 + (s1 * rand4));
                    console.log("speeds saved");

                    stats = {
                            position: i++,
                            name: p.name,
                            speed: parseInt(p.stats[0].base_stat),
                            moveSpeed1: mSpeed1,
                            moveSpeed2: mSpeed2,
                            moveSpeed3: mSpeed3,
                            moveSpeed4: mSpeed4,
                            fpic: p.sprites.front_default,
                            bpick: p.sprites.back_default,
                            isWinner: 0
                    }
                    console.log("stats set");
                    pok.push(stats);
                    //console.log(stats);
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
