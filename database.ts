
let configuration = {
    user:"postgres",
    password:"Faiz1616@",
    DB:"sequelizeassignment",
    host:"localhost",
    port:5432,
    dialect:"postgres"
};

const Sequelize=require("sequelize");
const sequelize = new Sequelize(configuration.DB,configuration.user,configuration.password,{
    host:configuration.host,
    dialect:configuration.dialect,
    operatorsAliases:false
})









const roles=require("./models/role")(sequelize,Sequelize);

const customers=require("./models/customer")(sequelize,Sequelize);


const users=require("./models/users")(sequelize,Sequelize);

let db={Sequelize:Sequelize,
          sequelize:sequelize,
          rmodel:roles,
     cmodel:customers,
    umodel:users};
users.hasOne(roles,{
    onDelete:'CASCADE',
    foreignKey:'rid'
});
users.hasOne(customers,{
    onDelete: 'CASCADE',
    foreignKey:'cid'
});


module.exports = db;




