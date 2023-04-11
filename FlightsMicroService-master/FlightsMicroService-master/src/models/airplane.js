'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    name: {allowNull:false,type:DataTypes.STRING},
    model: {allowNull:false,type:DataTypes.STRING},
    FuelCapacity:{allowNull:false,type:DataTypes.INTEGER},
    totalSeats: {allowNull:false,type:DataTypes.INTEGER}
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};