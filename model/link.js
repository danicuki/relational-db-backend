const Sequelize = require('sequelize');
const database = require('./database');

const Link = database.define('link', {
  link_type: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
});

module.exports = Link;