/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('results', function (table) {
        table.increments('id');
        table.double('latency');
        table.double('jitter');
        table.integer('download');
        table.integer('upload');
        table.double('packetLoss');
        table.string('host');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("results");
};
