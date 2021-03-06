const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Record, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get all users
router.get("/", (req, res) => {
  Record.findAll({
    attributes: ["id", "title", "artist", "filename", "created_at"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbRecordData) => res.json(dbRecordData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Record.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "artist", "filename", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbRecordData) => {
      if (!dbRecordData) {
        res.status(404).json({ message: "No record found with this id" });
        return;
      }
      res.json(dbRecordData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Record.create({
    title: req.body.title,
    artist: req.body.artist,
    filename: req.body.filename,
    user_id: req.session.user_id,
  })
    .then((dbRecordData) => res.json(dbRecordData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Record.update(
    {
      title: req.body.title,
      artist: req.body.artist,
      filename: req.body.filename,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbRecordData) => {
      if (!dbRecordData) {
        res.status(404).json({ message: "No record found with this id" });
        return;
      }
      res.json(dbRecordData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Record.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRecordData) => {
      if (!dbRecordData) {
        res.status(404).json({ message: "No record found with this id" });
        return;
      }
      res.json(dbRecordData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
