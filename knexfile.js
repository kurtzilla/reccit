// require('dotenv').config();

var dotenv = require('dotenv');
dotenv.load();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
