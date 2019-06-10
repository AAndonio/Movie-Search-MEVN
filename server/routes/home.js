const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

/* Funzione per estrarre tutti i generi
router.get('/distincGenres', async (req,res) => {
    await Movie.distinct('genres').exec((err,genres) => {
        if(err){
            res.status(500).send(err);
        }
        if(genres) {
            res.status(200).send(genres);
            if(genres === [])
                res.status(200).send("Nessun film soddisfa i requisiti");
        }
    });
});*/



router.get('/title=:movie_title', async (req, res) => {

    await Movie.findOne({movie_title: req.params.movie_title}).
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


router.post('/', async (req,res) => {

    var query = Movie.find({});

    if(req.body.color)
        query.where('color').in(req.body.color);

    if(req.body.min_year)
        query.where('title_year').gte(req.body.min_year).lte(req.body.max_year);

    if(req.body.max_duration)
        query.where('duration').gte(req.body.min_duration).lte(req.body.max_duration);

    if(req.body.max_rating)
        query.where('imdb_score').gte(req.body.min_rating).lte(req.body.max_rating);

    if(req.body.content_rating)
        query.where('content_rating').in(req.body.content_rating);

    if(req.body.genres)
        query.where('genres').all(req.body.genres);
    
    if(req.body.actors){

        regex = req.body.actors.map(function (e) { return new RegExp(e, "i"); });

        if(req.body.actors==1)
            query.where('actors').in(regex);
        else 
            query.where('actors').all(regex);
    }
    
    if(req.body.director_name)
        query.where('director_name').equals({ $regex: req.body.director_name, $options: 'i' });

    if(req.body.max_budget){
        query.where('budget').gte(req.body.min_budget).lte(req.body.max_budget);
    }
    if(req.body.max_gross)
        query.where('gross').gte(req.body.min_gross).lte(req.body.max_gross);

    if(req.body.max_critic)
        query.where('num_critic_for_reviews').gte(req.body.min_critic).lte(req.body.max_critic);

    query.select('movie_title title_year director_name duration imdb_score movie_imdb_link budget gross').exec((err, movies) => {
        if(err){
            res.status(500).send(err);
        }
        if(movies) {
            res.status(200).send(movies);
            if(movies === [])
                res.status(200).send("Nessun film soddisfa i requisiti");
        }
    });
}); 


module.exports = router;