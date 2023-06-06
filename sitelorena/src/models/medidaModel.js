var database = require("../database/config");

function obterDados() {
       var instrucaoSql = `SELECT fksaberSobre, COUNT(idUsuario) 'saberdanca' FROM usuario group by fksaberSobre;`
       console.log("Executando a instrução SQL: \n" + instrucaoSql); 
       return database.executar(instrucaoSql);
}

module.exports = {
    obterDados
}