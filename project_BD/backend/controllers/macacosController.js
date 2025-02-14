// controllers/macacosController.js
const macacoModel = require('../models/macacosModels');

// Funções do controlador
const buscarMacacos = async (req, res) => {
  try {
    const macacos = await macacoModel.buscarMacacos();
    res.json(macacos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const adicionarMacaco = async (req, res) => {
  const { nome, terreno, custo, classe_nome } = req.body;

  try {
    const result = await macacoModel.adicionarMacaco(nome, terreno, custo, classe_nome);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const editarMacaco = async (req, res) => {
  const { nome } = req.params;
  const { terreno, custo, classe_nome } = req.body;

  try {
    const result = await macacoModel.editarMacaco(nome, terreno, custo, classe_nome);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletarMacaco = async (req, res) => {
  const { nome } = req.params;

  try {
    const result = await macacoModel.deletarMacaco(nome);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Exportando as funções
module.exports = { buscarMacacos, adicionarMacaco, editarMacaco, deletarMacaco };
