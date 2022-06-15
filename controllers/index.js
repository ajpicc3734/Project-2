const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const imageController = require("./api/imageupload");
const frontEndController = require("./api/frontend");


router.use("/api", imageController);
router.use("/", frontEndController);
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;