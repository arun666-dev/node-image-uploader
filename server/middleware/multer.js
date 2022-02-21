const multer = require("multer");

// set storage
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    // image.jpg, below code will return jpg in ext var.
    let ext = file.originalname.substring(file.originalname.lastIndexOf("."));
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});

let store = multer({ storage: storage });

module.exports = store;
