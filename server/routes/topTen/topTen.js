const express = require('express');
const Movie = require('../../models/movie');

const router = express.Router();


router.get('/type=:toptype&genres=:genre', async (req, res) => {

    await Movie.where('genres').
    all(req.params.genre).
    sort('-'+req.params.toptype).
    limit(10).
    select('movie_title title_year imdb_score movie_facebook_likes movie_imdb_link').
    exec((err, movie) => {
        if(err){
            res.status(500).send(err);
        }
        if(movie) {
            res.status(200).send(movie);
        } else {
            res.status(200).send("Film non presente all'interno del database");
        }
    });
});

module.exports = router;