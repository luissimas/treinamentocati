const knex = require('knex');

// Importando as configurações do knexfile
const configuration = require('../../knexfile');

// Criando a conexão usando as configurações do campo development
const connection = knex(configuration.development);

module.exports = connection;
