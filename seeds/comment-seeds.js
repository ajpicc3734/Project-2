const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Where did you find that?',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I love this',
    user_id: 2,
    post_id: 2
  },
  
 
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
