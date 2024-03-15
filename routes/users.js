const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//new route under users
router.get("/cool", function (req, res, next) {
  res.send("Man, what a COOL DUDE");
});
//new route under users
router.get("/secret", function (req, res, next) {
  res.send("GEEET OOOUUUTTT!!!");
});

module.exports = router;
