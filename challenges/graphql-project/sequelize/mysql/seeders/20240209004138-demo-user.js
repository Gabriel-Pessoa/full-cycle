'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const jane = {
      user_name: 'Jane Doe',
      user_date_of_birth: '1980-06-20',
    };
    const joe = {
      user_name: 'Joe Doe',
      user_date_of_birth: '1986-09-15',
    };
    const peter = {
      user_name: 'Peter Parker',
      user_date_of_birth: '2001-08-10',
    };

    return queryInterface.bulkInsert('Users', [jane, joe, peter]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
