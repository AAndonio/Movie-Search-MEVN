const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    color: String,
    movie_title: String,
    title_year: Number,
    duration: Number,
    language: String,
    country: String,
    content_rating: String,
    genres: Array,
    director_name: String,
    actors: Array,
    director_facebook_likes: Number,
    actor_1_facebook_likes: Number,
    actor_2_facebook_likes: Number,
    actor_3_facebook_likes: Number,
    cast_total_facebook_likes: Number,
    movie_facebook_likes: Number,
    budget: Number,
    gross: Number,
    facenumber_in_poster: Number,
    num_critic_for_reviews: Number,
    num_voted_users: Number,
    num_user_for_reviews: Number,
    imdb_score: Number,
    aspect_ratio: String,
    plot_keywords: Array,
    movie_imdb_link: String
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;