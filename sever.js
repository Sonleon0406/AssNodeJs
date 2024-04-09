const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

// app.use(express.static(path.join(__dirname, "public")));

app.engine(
  ".hbs",
  handlebars.engine({ extname: ".hbs", defaultLayout: "main" })
);
app.set("view engine", ".hbs");

app.set("views", path.join(__dirname, "resouces", "views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
