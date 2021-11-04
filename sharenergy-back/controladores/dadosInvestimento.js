const knex = require("../conexao");

const listaInvestimento = async (req, res) => {
  try {
    const data = await knex("participacaousinas")
      .join("clientes", "participacaousinas.numerocliente", "clientes.id")
      .join("usinas", "participacaousinas.usinaid", "usinas.id")
      .select(
        "clientes.nomecliente",
        "usinas.nomeusina",
        "percentualdeparticipacao"
      );

    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const cadastroInvestimento = async (req, res) => {
  const { numerocliente, usinaid, percentualdeparticipacao } = req.body;

  if (!numerocliente) {
    return res.status(400).json("Campo numeroCliente é obrigatorio!");
  }
  if (!usinaid) {
    return res.status(400).json("Campo usinaId é obrigatorio!");
  }
  if (!percentualdeparticipacao) {
    return res
      .status(400)
      .json("Campo percentualDeParticipacao é obrigatorio!");
  }

  try {
    const confirmaInvestimento = await knex("participacaousinas")
      .where({ id: usinaid })
      .first();
    if (!confirmaInvestimento) {
      return res
        .status(404)
        .json("Investimento correspondente ao id não encontrado");
    }

    const participacao = await knex("participacaousinas")
      .insert({ numerocliente, usinaid, percentualdeparticipacao })
      .returning("*");

    if (!participacao) {
      return res.status(400).json("O investimento não foi cadastrado.");
    }
    return res.status(200).json(participacao);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const editInvestimento = async (req, res) => {
  const { numerocliente, usinaid, percentualdeparticipacao } = req.body;
  const { id } = req.params;

  if (!numerocliente && !usinaId && !percentualDeParticipacao) {
    return res
      .status(404)
      .json("Informe ao menos um campo para atualizaçao do investimento");
  }
  try {
    const invest = await knex("participacaousinas").where({ id }).first();

    if (!invest) {
      return res.status(404).json("Investimento não encontrado");
    }
    const investimentoAtualizado = await knex("participacaousinas")
      .update({ numerocliente, usinaid, percentualdeparticipacao })
      .where({ id });

    if (!investimentoAtualizado) {
      return res.status(400).json("O investimento não foi atualizado");
    }

    return res.status(200).json("investimento foi atualizado com sucesso.");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const excluirInvestimento = async (req, res) => {
  const { id } = req.params;

  try {
    const investimento = await knex("participacaousinas").where({ id }).first();

    if (!investimento) {
      return res.status(404).json("investimento não encontrado");
    }

    const investimentoExcluido = await knex("participacaousinas")
      .del()
      .where({ id });

    if (!investimentoExcluido) {
      return res.status(400).json("O investimento não foi excluido");
    }

    return res.status(200).json("Investimento excluido com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  cadastroInvestimento,
  listaInvestimento,
  excluirInvestimento,
  editInvestimento,
};
