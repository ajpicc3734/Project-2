const { Post } = require('../models');

const postdata = [
  {
    title: 'Beyonce',
    post_url: 'www.sjfe',
    user_id: 1
  },
  {
    title: 'Prince',
    post_url: 'kefngsg',
    user_id: 3
  },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
