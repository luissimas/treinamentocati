// Imports
const express = require('express');

// Validação
const { celebrate, Segments, Joi } = require('celebrate');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

// Session
routes.post(
  '/sessions',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  sessionController.create
);

// Ongs
routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  ongController.create
);
routes.get('/ongs', ongController.index);

// Incidents
routes.post(
  '/incidents',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object({
      title: Joi.string().required().min(4),
      description: Joi.string().required().min(10),
      value: Joi.number().greater(0),
    }),
  }),
  incidentController.create
);

routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  incidentController.index
);

routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  incidentController.delete
);

// Ong profile
routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  profileController.index
);

// Exportando o módulo
module.exports = routes;
