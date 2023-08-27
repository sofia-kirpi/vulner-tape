module.exports = {
  async up(queryInterface, Sequelize) {
    const [{ id: platformId }] = await queryInterface.sequelize.query(
      "SELECT * FROM types WHERE name LIKE 'Platform' LIMIT 1",
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    const [{ id: defaultId }] = await queryInterface.sequelize.query(
      "SELECT * FROM types WHERE name LIKE 'Default' LIMIT 1",
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    const [{ id: wordPressId }] = await queryInterface.sequelize.query(
      "SELECT * FROM types WHERE name LIKE 'WordPress' LIMIT 1",
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    await queryInterface.bulkInsert("descriptions", [
      {
        name: "Check using HTTPS",
        description: "This check verifies the usage of HTTPS for secure communication.",
        uniqueKey: "default-1",
        typeId: defaultId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fingerprint web server",
        description: "This check involves fingerprinting the web server to identify its characteristics.",
        uniqueKey: "default-2",
        typeId: defaultId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Check security headers",
        description: "This check assesses the presence and effectiveness of security-related HTTP headers.",
        uniqueKey: "default-3",
        typeId: defaultId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Check HTTP methods",
        description: "This check examines the HTTP methods supported by the web application for security evaluation.",
        uniqueKey: "default-4",
        typeId: defaultId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fingerprint web application",
        description: "This check involves fingerprinting the web application to understand its attributes.",
        uniqueKey: "default-5",
        typeId: defaultId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Check WordPress version",
        description: "This check is designed to verify the current version of WordPress installed on the website.",
        uniqueKey: "wordpress-1",
        typeId: wordPressId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Check plugins versions",
        description: "This check evaluates the versions of plugins installed in the WordPress instance for potential security vulnerabilities.",
        uniqueKey: "wordpress-2",
        typeId: wordPressId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Check themes versions",
        description: "This check examines the versions of themes being used in the WordPress environment for security assessment.",
        uniqueKey: "wordpress-3",
        typeId: wordPressId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Check forgetten directories",
        description: "This check scans for any forgotten or exposed directories within the WordPress installation that might pose security risks.",
        uniqueKey: "wordpress-4",
        typeId: wordPressId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Check admin interfaces",
        description: "This check aims to identify and assess security aspects related to WordPress admin interfaces.",
        uniqueKey: "wordpress-5",
        typeId: wordPressId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "WordPress",
        description: "WordPress is a famous content management system. This scope of checks tests basic vulnerabilities.",
        uniqueKey: "platform-1",
        typeId: platformId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Default",
        description: "This scope tests default vulnerabilities, which can be on every site.",
        uniqueKey: "platform-2",
        typeId: platformId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("descriptions", null, {});
  },
};
