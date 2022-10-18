'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('follows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idFollow: {
        type: Sequelize.INTEGER,
        references:{
          model: "channels",
          key: "id"
        },
        onUpdate:'cascade',
        onDelete:'cascade',
      },
      idUser: {
        type: Sequelize.INTEGER,
        references:{
          model: "channels",
          key: "id"
        },
        onUpdate:'cascade',
        onDelete:'cascade',
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
    await queryInterface.dropTable('follows');
  }
};