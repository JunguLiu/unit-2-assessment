var express = require("express");
var router = express.Router();
var indexCtrl = require("../controllers/index");

/* GET home page. */

router.post("/:todo", indexCtrl.deleteOne);
module.exports = router;
