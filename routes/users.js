var express = require("express");
var router = express.Router();
var blogHelpers = require("../helpers/blog-helper");
var userHelper = require("../helpers/user-helper");

const verifyLogin = (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("login");
  }
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
