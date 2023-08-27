module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("types", [
      {
        name: "Platform",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Default",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "WordPress",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("types", null, {});
  },
};
