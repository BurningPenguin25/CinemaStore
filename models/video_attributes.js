'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video_attributes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  video_attributes.init({
    video_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    short_description: DataTypes.STRING,
    full_description: DataTypes.STRING,
    format: DataTypes.STRING,
    full_time: DataTypes.STRING,
    actors: DataTypes.STRING,
    creation_date: DataTypes.DATE,
    kp_rating: DataTypes.STRING,
    imdb_rating: DataTypes.STRING,
    our_self_rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'video_attributes',
  });
  return video_attributes;
};