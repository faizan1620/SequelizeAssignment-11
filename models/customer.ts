const user=require("./users");
module.exports = (sequelize,Sequelize)=>{
   const customer = sequelize.define("customer", {
    cid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
 
    cname:{
        type: Sequelize.STRING
    },
    website: {
        type:Sequelize.STRING
 
    },
 
    caddress:{
        type: Sequelize.STRING
    }
 });


 

 return customer;

}