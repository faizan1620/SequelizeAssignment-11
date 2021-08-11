var users1 = require("./users");
module.exports = function (sequelize, Sequelize) {
    var role = sequelize.define("roles", {
        rid: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        rname: {
            type: Sequelize.STRING
        },
        key: {
            type: Sequelize.ENUM(['Admin', 'SuperAdmin', 'Subscriber'])
        },
        description: {
            type: Sequelize.STRING
        }
    });
    return role;
};
