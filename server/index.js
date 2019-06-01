const express = require('express');
const bodyParser = require('body-parser'); //serve a ottenere roba dal body della richiesta

const app = express();

// aggiungiamo strati di middleware necessari.
app.use(bodyParser.json());
app.use(cors());

//const con percorsi delle routes
const home = require('./routes/home');

//definiamo le routes
app.use('/', home);

/* definiamo una costante per la porta che, se disponibile, 
piglia il valore dalla variabile d'ambiente PORT altrimenti 
usa la porta 5000.
*/
const port = process.env.PORT || 5000;

//server in ascolto
app.listen(port, () => console.log('Server in ascolto su ' + port));