const tableName = '_nango_accounts';

exports.up = async function (knex, _) {
    await knex.schema.withSchema('nango').alterTable(tableName, function (table) {
        table.uuid('uuid').defaultTo(knex.raw('uuid_generate_v4()'));
    });
};

exports.down = async function (knex, _) {
    await knex.schema.withSchema('nango').table(tableName, function (table) {
        table.dropColumn('uuid');
    });
};


