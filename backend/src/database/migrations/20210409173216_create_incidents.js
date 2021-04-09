
// Método up é usado para criar tabelas
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    // Chave primária incrementável automaticamente
    table.increments()

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    // Campo para armazenar a chave estrangeira
    table.string('ong_id').notNullable();

    // Linkando a chave estrangeira da tabela ong com o campo dessa tabela
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

// Método down é usado para desfazer/deletar tabelas
exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
