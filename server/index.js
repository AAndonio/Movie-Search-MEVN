const express = require('express');
const bodyParser = require('body-parser'); //serve a ottenere roba dal body della richiesta
const cors = require('cors');
const app = express();

// aggiungiamo strati di middleware necessari.
app.use(bodyParser.json());
app.use(cors());

//const con percorsi delle routes
const home = require('./routes/home');
const topTen = require('./routes/topTen/topTen');

//definiamo le routes
app.use('/', home);
app.use('/topten', topTen);

//connessione al db
const moduloConnessione = require('./mongodbConnModule');
var db = moduloConnessione.connect();


/* definiamo una costante per la porta che, se disponibile, 
piglia il valore dalla variabile d'ambiente PORT altrimenti 
usa la porta 5000.
*/
const port = process.env.PORT || 5000;

//server in ascolto
app.listen(port, () => console.log('Server in ascolto su ' + port));