const router = require("express").Router();
const { Image } = require("../../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/images", (req, res) => {
  Image.findAll()
    .then((images) => {
      const plain = images.map((image) => image.get({ plain: true }));
      console.log(plain);
      res.render("image", { images: plain });
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
