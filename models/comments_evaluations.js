'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments_evaluations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comments_evaluations.belongsTo(models.comment, {
        foreignKey: 'comment_id',
        as: 'comment'
      });
    }
  }
  comments_evaluations.init({
    evaluation_id: DataTypes.INTEGER,
    comment_id: DataTypes.INTEGER,
    evaluation_value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comments_evaluations',
  });
  return comments_evaluations;
};