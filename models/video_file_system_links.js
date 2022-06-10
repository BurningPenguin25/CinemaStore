'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video_file_system_links extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      video_file_system_links.belongsTo(models.creators, { //   связь  creators == video_file_system_links
        foreignKey: 'creator_id',
        as: 'creator'
      });
      video_file_system_links.belongsTo(models.video_attributes, { //   связь  creators == video_file_system_links
        foreignKey: 'video_id',
        as: 'video_attribute'
      });
    }
  }
  video_file_system_links.init({
    video_id: DataTypes.INTEGER,
    torrent_file_path: DataTypes.STRING,
    video_file_path: DataTypes.STRING,
    creator_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'video_file_system_links',
  });
  return video_file_system_links;
};