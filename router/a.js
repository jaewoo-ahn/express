const express = require("express");
const router = express.Router();

router.get("/1", function (req, res, next) {
  res.send("path : /a/1");
});

router.put("/2", function (req, res, next) {
  res.send("path : /a/2");
});

router.delete("/3", function (req, res, next) {
  res.send("path : /a/3");
});

module.exports = router;
