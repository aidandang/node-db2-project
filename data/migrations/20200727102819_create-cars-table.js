exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('vin')
      .unique()
      .notNullable();
    tbl.text('make')
      .notNullable();
    tbl.text('model')
      .notNullable();
    tbl.float('mileage')
      .notNullable();
    tbl.text('transmission');
    tbl.text('status');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};