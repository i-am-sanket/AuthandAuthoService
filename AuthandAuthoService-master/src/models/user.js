'use strict';
const {
  Model
} = require('sequelize');
const bcrypt=require('bcrypt');
const {SALT}=require('../config/serverConfig');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role,{
        through:'User_Role'
        
      }
      );
    }
  }
  User.init({
    Email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    Password: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        len: [2,10]
      }
    }

  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user)=>{
    const encryptedPassword=bcrypt.hashSync(user.Password,SALT);
    user.Password=encryptedPassword;
  });
  return User;
};