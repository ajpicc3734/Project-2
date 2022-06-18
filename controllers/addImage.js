const router = require("express").Router();
const sequelize = require("../config/connection");
const Image = require("../models/image");

// router.get("/", (req, res) => {
//   res.render("homepage");
// });

router.get("/", (req, res) => {
  Image.findAll()
    .then((images) => {
      const pictures = images.map((image) => image.get({ plain: true }));
      console.log(pictures);
      res.render("image", { pictures });
    })
    .catch((err) => {
      res.send(err);
    });
});

// router.get("/images", (req, res) => {
//   Image.findAll()
//     .then((images) => {
//       const pictures = images.map((image) => image.get({ plain: true }));
//       console.log(pictures);
//       res.render("image", { pictures });
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

module.exports = router;
