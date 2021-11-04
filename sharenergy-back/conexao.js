const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    port : 5432,
    user : 'postgres',
    password : '123456789',
    database : 'sharenergy'
  }
});
module.exports = knex