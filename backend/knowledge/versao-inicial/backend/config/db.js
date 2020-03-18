const config = require('../knexfile')
const knex = require('knex')(config) // ja passa o arquivo de configuracao para o knex

//exportar o knex para usar no arquivo index.js
module.exports = knex