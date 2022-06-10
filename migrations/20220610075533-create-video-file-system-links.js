'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('video_file_system_links', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      video_id: {
        type: Sequelize.INTEGER
      },
      torrent_file_path: {
        type: Sequelize.STRING
      },
      video_file_path: {
        type: Sequelize.STRING
      },
      creator_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('video_file_system_links');
  }
};