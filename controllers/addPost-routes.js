const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Record } = require("../models");

router.get("/", (req, res) => {
  res.render("addPost");
});

module.exports = router;
