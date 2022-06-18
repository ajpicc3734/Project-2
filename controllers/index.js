const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
//const imageController = require("./api/imageupload");
const frontEndController = require("./addImage.js");

const addPostRoutes = require("./addPost-routes");

//router.use("/api", imageController);
router.use("/images", frontEndController);
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/addpost", addPostRoutes);

module.exports = router;
