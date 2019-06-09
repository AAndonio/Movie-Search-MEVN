const express = require('express');
const Movie = require('../../models/movie');

const router = express.Router();


router.get('/movieNumber', async (req, res) => {

    await Movie.aggregate([
        {$project: {genres: 1, actors: 1}},
        {$unwind : "$actors" },
        {$unwind : "$genres" },
        {$match: {genres: "Action"}},
        {$group: {_id: "$actors", total : {$sum : 1}}},
        {$match: {total: {$gt: 3}}}
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