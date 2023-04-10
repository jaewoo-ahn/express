const express = require("express");
const router = express.Router();

router.get("/1", function (req, res, next) {
  res.send("path : /b/1");
});

router.put("/2", function (req, res, next) {
  res.send("path : /b/2");
});

router.delete("/3", function (req, res, next) {
  res.send("path : /b/3");
});

module.exports = router;
