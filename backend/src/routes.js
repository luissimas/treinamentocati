// Imports
const express = require('express');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')

const routes = express.Router();

// Session
routes.post('/sessions', sessionController.create);

// Ongs
routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);

// Incidents
routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

// Ong profile
routes.get('/profile', profileController.index);



// Exportando o módulo
module.exports = routes;
