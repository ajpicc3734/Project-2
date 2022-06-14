const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'joana45',
    email: 'joanaaa56@yahoo.net',
    password: 'password123'
  },
  {
    username: 'charlieloves',
    email: 'charlie78@gmail.com',
    password: 'password123'
  },
  {
    username: 'mike1',
    email: 'mike2345@last.fm',
    password: 'password123'
  },
 
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
