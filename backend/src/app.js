// Express
const express = require('express');

// Celebrate para validação
const { errors } = require('celebrate')

// Módulo com as rotas da aplicação
const routes = require('./routes');

// CORS
const cors = require('cors');



// Iniciando/criando a aplicação express
const app = express();
const port = 3333;

// Definindo domínios que podem acessar a aplicação (desativado para desenvolvimento)
app.use(cors());
// Definindo o uso de json como parser para o corpo de todas as requisições
app.use(express.json());
// Definindo o uso do módulo de rotas
app.use(routes);
app.use(errors());

module.exports = app;
