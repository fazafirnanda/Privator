'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category)
    }
  }
  Course.init({
    name: DataTypes.STRING,
    detail: DataTypes.TEXT,
    level: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    InstructorId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};