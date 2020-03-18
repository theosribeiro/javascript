const config = require('../knexfile')
const knex = require('knex')(config) // ja passa o arquivo de configuracao para o knex


knex.migrate.latest([config]) // no momento que carregar o back, ele passa a configuracao para fazer o migrate
//exportar o knex para usar no arquivo index.js
module.exports = knex