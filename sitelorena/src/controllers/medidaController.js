var medidaModel = require("../models/medidaModel");

function obterDados(req, res) {

    medidaModel.obterDados()
    .then(
        function (resultado) {
            res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    obterDados
}