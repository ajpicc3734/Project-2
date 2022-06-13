const express = require("express");
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const routes = require("./controllers");

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
