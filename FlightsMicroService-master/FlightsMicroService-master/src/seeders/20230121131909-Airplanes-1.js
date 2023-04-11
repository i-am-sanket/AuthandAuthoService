'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airplanes',[
    {
      name:'Boeing 747',
      FuelCapacity:'1000',
      model:'A830',
      totalSeats:'500',
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      name:'Boeing 797',
      FuelCapacity:'1000',
      model:'A930',
      totalSeats:'900',
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      name:'Boeing 787',
      FuelCapacity:'1000',
      model:'A920',
      totalSeats:'600',
      createdAt:new Date(),
      updatedAt:new Date(),
    }
   ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
