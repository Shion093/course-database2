const tableName = 'users';

exports.up = function(knex, Promise) {
  return knex.schema.createTable(tableName, table => {
    table.charset('utf8');
    table.collate('utf8_unicode_ci');

    table.increments('id').primary();
    table.string('nombre');
    table.string('apellido');
    table.string('telefono');
    // table.integer('user_id').unsigned().references('users.id').onUpdate('cascade').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  const Schema = knex.schema;
  return Promise.all([
    Schema.dropTableIfExists(tableName)
  ]);
};
