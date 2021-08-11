var role = require("./role");
var customer = require("./customer");
module.exports = function (sequelize, Sequelize) {
    var users = sequelize.define("users", {
        uid: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        first_name: {
            type: Sequelize.STRING
        },
        middle_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        }
    });
    return users;
};
