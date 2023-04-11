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
   await queryInterface.bulkInsert('Airports',[
    {
      name:'Kempegowda International Airport',
      createdAt:new Date(),
      updatedAt:new Date(),
      cityid:'1'
    },
    {
      name:'Mysore Airport',
      createdAt:new Date(),
      updatedAt:new Date(),
      cityid:'1'
    },
    {
      name:'Indira Gandhi National Airport',
      createdAt:new Date(),
      updatedAt:new Date(),
      cityid:'2'
    },
    {
      name:'Jaipur International Airport',
      createdAt:new Date(),
      updatedAt:new Date(),
      cityid:'3'
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
