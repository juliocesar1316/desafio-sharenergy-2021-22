const knex = require("../conexao");

const dadosUsina = async (req, res) => {
  try {
    const data = await knex("usina");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const cadastroUsina = async (req, res) => {
  const { nomeusina, endereco, segmento } = req.body;
  if (!nomeusina) {
    return res.status(400).json("Campo nomeUsina é obrigatorio!");
  }
  if (!endereco) {
    return res.status(400).json("Campo endereco é obrigatorio!");
  }
  if (!segmento) {
    return res.status(400).json("Campo segmento é obrigatorio!");
  }

  try {
    const usina = await knex("usinas")
      .insert({ nomeusina, endereco, segmento })
      .returning("*");

    if (!usina) {
      return res.status(400).json("A usina não foi cadastrado.");
    }
    return res.status(201).json(usina);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const listaUsinas = async (req, res) => {
  try {
    const data = await knex("usinas").orderBy("id");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const editUsina = async (req, res) => {
  const { nomeusina, endereco, segmento } = req.body;
  const { id } = req.params;

  if (!nomeusina && !endereco && !segmento) {
    return res
      .status(404)
      .json("Informe ao menos um campo para atualizaçao da usina");
  }
  try {
    const usina = await knex("usinas").where({ id }).first();

    if (!usina) {
      return res.status(404).json("Usina não encontrado");
    }
    const usinaAtualizado = await knex("usinas")
      .update({ nomeusina, endereco, segmento })
      .where({ id });

    if (!usinaAtualizado) {
      return res.status(400).json("A usina não foi atualizado");
    }

    return res.status(200).json("Usina foi atualizado com sucesso.");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const excluirUsina = async (req, res) => {
  const { id } = req.params;

  try {
    const usina = await knex("usinas").where({ id }).first();

    if (!usina) {
      return res.status(404).json("Usina não encontrado");
    }

    const usinaExcluido = await knex("usinas").del().where({ id });

    if (!usinaExcluido) {
      return res.status(400).json("A usina não foi excluido");
    }

    return res.status(200).json("Usina excluido com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  dadosUsina,
  cadastroUsina,
  listaUsinas,
  editUsina,
  excluirUsina,
};
