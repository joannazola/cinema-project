var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const config = require("./config.js");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

MongoClient.connect(`mongodb://${config.dbHost}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    const db = client.db(config.dbName);
    const collection1 = db.collection(config.dbCollection1);
    app.locals[config.dbCollection1] = collection1;
    const collection2 = db.collection(config.dbCollection2);
    app.locals[config.dbCollection2] = collection2;
  })
  .catch((error) => {
    console.log(error);
  });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use((req, res, next) => {
  const collection1 = req.app.locals[config.dbCollection1];
  req.collection = collection1;
  next();
});
app.use((req, res, next) => {
  const collection2 = req.app.locals[config.dbCollection2];
  req.collection = collection2;
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
