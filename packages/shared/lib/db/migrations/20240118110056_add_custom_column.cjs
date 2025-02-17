const tableName = '_nango_configs';

exports.up = function(knex) {
    return knex.schema.withSchema('nango').alterTable(tableName, function (table) {
        table.json('custom');
    });
};

exports.down = function(knex) {
    return knex.schema.withSchema('nango').alterTable(tableName, function (table) {
        table.dropColumn('custom');
    });
};
