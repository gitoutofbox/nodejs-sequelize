const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'sqlite',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    storage: './database/sequelize.db'
  });

  sequelize.authenticate()
  .then(()=> console.log("DB connected"))
  .catch(error => console.log(error));

  const db = {}
  db.sequelize = sequelize;

  db.User = require("../models/User")(sequelize, DataTypes)
  module.exports = db;