const express = require("express");
const dadosUsina = require("./controladores/dadosUsinas");
const dadosCliente = require("./controladores/dadosClientes");
const dadosInvestimento = require("./controladores/dadosInvestimento");

const rotas = express();

rotas.get("/graficoUsina", dadosUsina.dadosUsina);
rotas.post("/usina", dadosUsina.cadastroUsina);
rotas.get("/usina", dadosUsina.listaUsinas);
rotas.put("/usina/:id", dadosUsina.editUsina);
rotas.delete("/usina/:id", dadosUsina.excluirUsina);

rotas.post("/cliente", dadosCliente.cadastroCliente);
rotas.get("/cliente", dadosCliente.listaClientes);
rotas.put("/cliente/:id", dadosCliente.editClientes);
rotas.delete("/cliente/:id", dadosCliente.excluirCliente);

rotas.post("/investimento", dadosInvestimento.cadastroInvestimento);
rotas.get("/investimento", dadosInvestimento.listaInvestimento);
rotas.put("/investimento/:id", dadosInvestimento.editInvestimento);
rotas.delete("/investimento/:id", dadosInvestimento.excluirInvestimento);

module.exports = rotas;
