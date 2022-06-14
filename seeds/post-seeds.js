const { Post } = require("../models");

const postdata = [
  {
    title: "Beyonce",
    post_url: "https://www.amazon.com/BEYONC%C3%89-Beyonce/dp/B00KCOMBJC",
    user_id: 1,
  },
  {
    title: "Prince",
    post_url: "https://store.prince.com/dept/vinyl?cp=103229_103233_103248",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
