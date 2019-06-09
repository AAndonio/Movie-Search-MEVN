const express = require('express');
const Movie = require('../../models/movie');

const router = express.Router();


router.get('/genre=:genre', async (req, res) => {

    await Movie.aggregate([
        {$project: {movie_title: 1, genres: 1, actors: 1}},
        {$unwind : "$actors" },
        {$unwind : "$genres" },
        {$match: {genres: req.params.genre}},
        {$group: {_id: "$actors", total : {$sum : 1}}},
        //{$match: {total: {$gt: Number(req.params.number)}}},
        {$sort: {total: -1}}
    ]).exec( (err, movies) =>{
        if(err){
            res.status(500).send(err);
        }
        if(movies) {
            console.log(movies);
                res.status(200).send(movies);
            if(movies === [])
                res.status(200).send("Nessun film soddisfa i requisiti");
        }
    });

});

module.exports = router;