const knex = require("../conexao");

const cadastroCliente = async (req, res) => {
  const { nomecliente, telefone, cpf, email } = req.body;
  if (!nomecliente) {
    return res.status(400).json("Campo nomeCliente obrigatorio!");
  }
  if (!telefone) {
    return res.status(400).json("Campo telefone obrigatorio!");
  }
  if (!cpf) {
    return res.status(400).json("Campo cpf obrigatorio!");
  }
  if (!email) {
    return res.status(400).json("Campo email obrigatorio!");
  }

  try {
    const confirmaEmail = await knex("clientes").where({ email }).first();
    if (confirmaEmail) {
      return res.status(400).json("O email já existe");
    }
    const cliente = await knex("clientes")
      .insert({ nomecliente, telefone, cpf, email })
      .returning("*");

    if (!cliente) {
      return res.status(400).json("O cliente não foi cadastrado.");
    }
    return res.status(200).json(cliente);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const listaClientes = async (req, res) => {
  try {
    const data = await knex("clientes").orderBy("id");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const editClientes = async (req, res) => {
  const { nomecliente, telefone, cpf, email } = req.body;
  const { id } = req.params;

  if (!nomecliente && !telefone && !cpf && !email) {
    return res
      .status(404)
      .json("Informe ao menos um campo para atualizaçao do cliente");
  }
  try {
    const cliente = await knex("clientes").where({ id }).first();

    if (!cliente) {
      return res.status(404).json("Produto não encontrado");
    }
    const clienteAtualizado = await knex("clientes")
      .update({ nomecliente, telefone, cpf, email })
      .where({ id });

    if (!clienteAtualizado) {
      return res.status(400).json("O cliente não foi atualizado");
    }

    return res.status(200).json("cliente foi atualizado com sucesso.");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
const excluirCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const cliente = await knex("clientes").where({ id }).first();

    if (!cliente) {
      return res.status(404).json("Cliente não encontrado");
    }

    const clienteExcluido = await knex("clientes").del().where({ id });

    if (!clienteExcluido) {
      return res.status(400).json("O cliente não foi excluido");
    }

    return res.status(200).json("Cliente excluido com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  cadastroCliente,
  listaClientes,
  editClientes,
  excluirCliente,
};
