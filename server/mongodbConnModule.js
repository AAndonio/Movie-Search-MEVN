const mongoose = require('mongoose');
const uri = 'mongodb+srv://admin:admin@movie-search-jeze4.mongodb.net/moviesearch?retryWrites=true&w=majority';

module.exports.connect = function() {
    mongoose.connect(uri, {useNewUrlParser: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connessione stabilita con successo! ');
    });    

    //ritorniamo il db
    return db;
}