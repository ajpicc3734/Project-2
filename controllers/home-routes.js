const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Record } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/post", (req, res) => {
  Post.findAll({
    attributes: ["id", "post_url", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("posts", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/rec", (req, res) => {
  Record.findAll({
    attributes: ["id", "title", "artist", "filename", "created_at"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username", "email"],
      },
    ],
  })
    .then((dbPostData) => {
      const records = dbPostData.map((record) => record.get({ plain: true }));
      console.log(records);
      res.render("records", { records });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/use", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Record,
        attributes: ["id", "title", "artist", "filename", "created_at"],
      },
    ],
  })
    .then((dbUserData) => {
      const users = dbUserData.map((user) => user.get({ plain: true }));
      console.log(users);
      res.render("users", { users });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  //   if (req.session.loggedIn) {
  //     res.redirect("/");
  //     return;
  //   }

  res.render("login");
});

module.exports = router;
