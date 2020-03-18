//up serve para evoluir o DB - criar/excluir tabela, alterar coluna... ir para as versoes mais novas
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => { //criar todos os campos da tabela
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.string('admin').notNull().defaultTo(false)

  })
};

//down server para desfazer uma versao
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
