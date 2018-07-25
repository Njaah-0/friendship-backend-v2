'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
const dbConnectionConfig = {
  debug: true,
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    host: '127.0.0.1',
    user: 'postgres',
    password: '',
    database: 'friendship',
    ssl: false,
  },
  pool: {
    min: 1,
    max: 1,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations',
  },
};

exports.default = dbConnectionConfig;
//# sourceMappingURL=db.js.map