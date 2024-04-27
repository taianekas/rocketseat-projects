
exports.up = knex => knex.schema.createTable('Tags', table => {
  table.increments('id');
  table.integer('note_id').references('id').inTable('Notes').onDelete('CASCADE');
  table.integer('user_id').references('id').inTable('Users');
  table.integer('name').notNullable();
});

exports.down = knex => knex.schema.dropTable('Tags');
