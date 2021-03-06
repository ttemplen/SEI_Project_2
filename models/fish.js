'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fish.belongsTo(models.User,{
        foreignKey:"userid"
        
      })
    }
  };
  Fish.init({
    species: DataTypes.STRING,
    img: DataTypes.STRING,
    caughtby: DataTypes.STRING,
    wherecaught: DataTypes.STRING,
    text: DataTypes.STRING,
    userid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Fish',
  });
  return Fish;
};