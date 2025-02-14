// controllers/bloonsController.js
const bloonModel = require('../models/bloonsModel');

const buscarBloons = async (req, res) => {
  try {
    const bloons = await bloonModel.buscarBloons();
    res.json(bloons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const adicionarBloon = async (req, res) => {
    const { nome, tier } = req.body;

    if (!nome || !tier) {
        return res.status(400).json({ message: "Nome e Tier são obrigatórios." });
    }

    try {
        const result = await bloonModel.adicionarBloon(nome, tier);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: "Erro ao adicionar Bloon: " + error.message });
    }
};


const editarBloon = async (req, res) => {
  const { nome } = req.params;
  const { tier } = req.body;

  try {
    const result = await bloonModel.editarBloon(nome, tier);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletarBloon = async (req, res) => {
  const { nome } = req.params;

  try {
    const result = await bloonModel.deletarBloon(nome);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { buscarBloons, adicionarBloon, editarBloon, deletarBloon };