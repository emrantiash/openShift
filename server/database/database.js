var Sequelize = require('sequelize');

var sequelize = new Sequelize('angular_node','root','',{
    dialect: "mysql",
    port:    3306
  }
);


module.exports = sequelize ; 