const multer  = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/products')
    },
    filename: function (req, file, cb) {
        cb(null,  file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage
    // limits: {
    //     fieldSize: 1024 * 1024 * 5
    // }
})

const productImagesUpload = upload.fields([ {name: 'image1', maxCount: 1}, {name: 'image2', maxCount: 1}, {name: 'image3', maxCount: 1}, {name: 'image4', maxCount: 1}, {name: 'image5', maxCount: 1}, {name: 'image6', maxCount: 1}, {name: 'image7', maxCount: 1}, {name: 'image8', maxCount: 1}, {name: 'image9', maxCount: 1}, {name: 'image10', maxCount: 1}, ])


exports.productImagesUpload = productImagesUpload;
