// var createError = require('http-errors');
const express = require("express");
const cors = require("cors");
const routerApi = require("./api");
const app = express();

/*
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
*/

// view engine setup
app.use(express.json());

// cors
app.use(cors());
app.use("/api", routerApi);
app.use((_, res, __) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Use api in router: /api/tasks",
    data: "Not found",
  });
});
app.use((err, _, res, __) => {
  console.log(err.stack);
  res.status(500).json({
    status: "fail",
    code: 500,
    message: err.message,
    data: "Internet server error",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server running. Use our API on port: ${PORT}`);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

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
