const express = require('express');
const Movie = require('../../models/movie');

const router = express.Router();


router.get('/movieNumber', async (req, res) => {

    /*
    await Movie.
    where('genres').
    all('Action').
    distinct('actors').
    exec((err, actors) => {
        if(err){
            res.status(500).send(err);
        }
        if(actors) {
            var attori = [];
            actors.forEach((actor) => {
                var oggettoAttore = {}
                oggettoAttore.attore = actor;

                var query = async (err, attori) => { await Movie.
                    where('genres').
                    all('Action').
                    where('actors').in(actor).countDocuments().
                    exec((err, count) => {
                        oggettoAttore.apparizioni = count;
                        attori.push(oggettoAttore);
                    })};
                query();
            });
            console.log(attori);

            res.status(200).send(attori);
        } 
    });

    await Movie.aggregate([
        {$match: {"filmazione": {$in:["Action" ,"$genres"]}}}
    ]).exec((err, response) => {
        if(err){
            res.status(500).send(err);
        }
        if(response) {
            console.log(response);
            res.status(200).send(response);
        }
    });*/

    await Movie.mapReduce(
        function() {emit(this.actors, 1)},
        function(key, values) {return Array.sum(values)},
        {
            query: {$in:["Action" ,"$genres"]},
            out: {attori, apparizioni}
        }
    );

});

module.exports = router;