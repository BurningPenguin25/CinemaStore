'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('video_attributes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      video_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      short_description: {
        type: Sequelize.STRING
      },
      full_description: {
        type: Sequelize.STRING
      },
      format: {
        type: Sequelize.STRING
      },
      full_time: {
        type: Sequelize.STRING
      },
      actors: {
        type: Sequelize.STRING
      },
      creation_date: {
        type: Sequelize.DATE
      },
      kp_rating: {
        type: Sequelize.DOUBLE
      },
      imdb_rating: {
        type: Sequelize.DOUBLE
      },
      our_self_rating: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('video_attributes');
  }
};