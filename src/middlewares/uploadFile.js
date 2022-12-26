const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        const fileExtension = path.extname(file.originalname);
        const randomName = Date.now() + fileExtension;
        cb(null, randomName)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        const fileExtension = path.extname(file.originalname);
        if (![".jpg", ".png", ".gif"].includes(fileExtension)) {
            return cb(null, false);
        }
        cb(null, true);
    }
});

module.exports = upload;