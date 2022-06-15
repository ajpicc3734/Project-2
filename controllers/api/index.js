const router = require("express").Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const recordRoutes = require('./record-routes');
const imageController = require("./imageupload");
const frontEndController = require("./frontend");

router.use('/records', recordRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use("/api", imageController);
router.use("/", frontEndController);

module.exports = router;

