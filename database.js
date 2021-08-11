var configuration = {
    user: "postgres",
    password: "Faiz1616@",
    DB: "sequelizeassignment",
    host: "localhost",
    port: 5432,
    dialect: "postgres"
};
var Sequelize = require("sequelize");
var sequelize = new Sequelize(configuration.DB, configuration.user, configuration.password, {
    host: configuration.host,
    dialect: configuration.dialect,
    operatorsAliases: false
});
var roles = require("./models/role")(sequelize, Sequelize);
var customers = require("./models/customer")(sequelize, Sequelize);
var users = require("./models/users")(sequelize, Sequelize);
var db = { Sequelize: Sequelize,
    sequelize: sequelize,
    rmodel: roles,
    cmodel: customers,
    umodel: users };
users.hasOne(roles, {
    onDelete: 'CASCADE',
    foreignKey: 'rid'
});
users.hasOne(customers, {
    onDelete: 'CASCADE',
    foreignKey: 'cid'
});
module.exports = db;
