"use strict";
const { Model, DATE } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  history.init(
    {
      doctorsId: DataTypes.INTEGER,
      patiensId: DataTypes.INTEGER,
      descriptions: DataTypes.TEXT,
      files: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "history",
    }
  );
  return history;
};
