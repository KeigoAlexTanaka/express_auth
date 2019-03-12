const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'auth_demo_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: { 
    underscored: true
  }
});


const User = sequelize.define('user', {
  name: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  email: Sequelize.STRING
});

const Tweet = sequelize.define('tweet', {
  text: Sequelize.STRING,
  author_id: Sequelize.INTEGER
});

module.exports = {
  User,
  Tweet,
  sequelize
};
