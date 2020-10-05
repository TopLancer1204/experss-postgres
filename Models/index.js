const dbConfig = require("../config/db-config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false, // masih bingung ini di pakai atau engga??
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userGame = require("./user/user-game")(sequelize, Sequelize);
db.userGameBiodata = require("./user/user-game-biodata")(sequelize, Sequelize);
db.userGameHistory = require("./user/user-game-history")(sequelize, Sequelize);

module.exports = db;