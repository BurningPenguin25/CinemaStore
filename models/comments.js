'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comments.belongsTo(models.video_attributes, {
        foreignKey: 'video_id',
        through: 'video_file_system_links',
        as: 'comments'
      });
    }
  }
  comments.init({
    comment_id: DataTypes.INTEGER,
    video_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    stars: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};