const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");
const Record = require("./Record");
const Image = require("./Image");

User.hasMany(Post, {
  foreignKey: "user_id",
});
User.hasMany(Record, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Record.belongsTo(User, {
  foreignKey: "user_id",
});
Post.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment, Record, Image };
