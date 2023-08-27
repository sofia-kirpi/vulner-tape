module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("descriptions", "typeId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: { tableName: "types" },
        key: "id",
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("descriptions", "typeId");
  }
};
