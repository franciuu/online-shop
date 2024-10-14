const path = require("path");
const express = require("express");
const csrf = require("csurf");
const expressSesion = require("express-session");

const createSessionConfig = require("./config/session");
const db = require("./data/database");
const addDoubleCsrfTokenMiddleware = require("./middlewares/csrf-token");
const authRoutes = require("./routes/auth.routes");
const errorHandlerMiddleware = require("./middlewares/error-handler");

const { error } = require("console");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const sessionConfig = createSessionConfig();

app.use(expressSesion(sessionConfig));

app.use(csrf());

app.use(addDoubleCsrfTokenMiddleware);

app.use(authRoutes);

app.use(errorHandlerMiddleware);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function () {
    console.log("Failed to connect to the database!");
    console.log(error);
  });
