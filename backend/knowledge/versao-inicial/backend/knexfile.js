// Update with your config settings.
//contem a configuracao da conexao com o BD

module.exports = {
    client: 'postgresql',
    connection: {
        database: 'knowledge',
        user:     'postgres',
        password: '123456'
    },
  	pool: {
    	min: 2,
    	max: 10
  	},
  	migrations: {
    	tableName: 'knex_migrations'
  	}
};
