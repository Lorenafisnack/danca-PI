var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/obterDados", function (req, res) {
    medidaController.obterDados(req, res);
});



module.exports = router;