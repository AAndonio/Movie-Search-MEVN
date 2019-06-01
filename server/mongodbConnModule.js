const mongoose = require('mongoose');
const uri = '';

module.exports.connect = function() {
    mongoose.connect(uri, {useNewUrlParser: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('once', function() {
        console.log('Connessione stabilita con successo! ');
    });    

    //ritorniamo il db
    return db;
}