const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/"});
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const Image = require("../../models/image");
console.log(cloudinary.config());
router.post("/image", upload.single("image"), (req, res) => {
    cloudinary.uploader.upload(req.file.path, (err, result) => {
        console.log(result, err);
        if (err) throw err;
        Image.create({
            imageName: req.body.fileName,
            imageURL: result.secure_url,
        }).then((imageData) => {
            res.send("complete!");
        });
    });
});

module.exports = router;