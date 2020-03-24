
exports.up = function(knex, Promise) { //alterar tabela, criando coluna
    return knex.schema.alterTable('users',table => {
        table.timestamp('deletedAt')
    })
};

exports.down = function(knex, Promise) {//alterar tabela, excluir coluna
  return knex.schema.alterTable('users',table=>{
      table.dropColumn('deletedAt')
  })
};
