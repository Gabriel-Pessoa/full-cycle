'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const jane = {
      name: 'Jane Doe',
      birthday: '1980-06-20',
    };
    const joe = {
      name: 'Joe Doe',
      birthday: '1986-09-15',
    };
    const peter = {
      name: 'Peter Parker',
      birthday: '2001-08-10',
    };

    return queryInterface.bulkInsert('Users', [jane, joe, peter]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
