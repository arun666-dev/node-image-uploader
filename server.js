const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");

const app = express();

app.use(express.json());

// serving static files
app.use(express.static(path.join(__dirname, "public")));

// connect mongodb
require("./server/database/db")();

// setup view engine
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultView: "default",
    layoutsDir: path.join(__dirname, "views"),
    partialsDir: path.join(__dirname, "views/partials"),
  })
);

// calling routes
app.use("/", require("./server/router/router"));
const port = process.env.PORT || 5000;

app.listen(5000, () =>
  console.log(`server is started on http://localhost:${port}`)
);
