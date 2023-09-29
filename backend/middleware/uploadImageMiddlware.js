const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        const uploadFolder = path.join(__dirname,'../uploads');
        cb(null, uploadFolder); // Set your desired upload folder here
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${path.extname(file.originalname)}`);
    }
});

const uploadImage = multer({
    storage : storage
});

module.exports = uploadImage;