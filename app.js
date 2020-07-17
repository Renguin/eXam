const express = require("express"),
          app = express(),
   bodyParser = require("body-parser"),
     mongoose = require("mongoose"),
 cookieParser = require("cookie-parser"),
         csrf = require("csurf");

const csrfMiddleware = csrf({ cookie: true });

app.use(bodyParser.urlencoded({extended: true}));
const PORT = process.env.PORT || 8000;

app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrfMiddleware);

app.all("*", (req, res, next) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  next();
})

app.get("/", function (req, res) {
  res.render("index.html");
});

app.get("/login", function (req, res) {
  res.render("login.html");
});

app.get("/signup", function (req, res) {
  res.render("signup.html");
});

app.listen(PORT, () => {
  console.log(`app is listening on PORT ${PORT}`);
});
