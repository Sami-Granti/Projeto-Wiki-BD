// controllers/mapasController.js
const mapaModel = require('../models/mapasModels');

// Funções do controlador
const buscarMapas = async (req, res) => {
  try {
    const mapas = await mapaModel.buscarMapas();
    res.json(mapas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const adicionarMapa = async (req, res) => {
  const { nome, dificuldade, lanes } = req.body;

  try {
    const result = await mapaModel.adicionarMapa(nome, dificuldade, lanes);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const editarMapa = async (req, res) => {
  const { nome } = req.params;
  const { dificuldade, lanes } = req.body;

  try {
    const result = await mapaModel.editarMapa(nome, dificuldade, lanes);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletarMapa = async (req, res) => {
  const { nome } = req.params;

  try {
    const result = await mapaModel.deletarMapa(nome);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Exportando as funções
module.exports = { buscarMapas, adicionarMapa, editarMapa, deletarMapa };
