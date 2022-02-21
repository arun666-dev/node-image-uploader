const route = require("express").Router();
const { home, uploads } = require("../controllers/controller");
const store = require("../middleware/multer");

// routes
route.get("/", home);

// we pass array as we upload multiple files and also we have mention input name attr. as images in index.hbs file
route.post("/uploadmultiple", store.array("images", 12), uploads);

module.exports = route;
