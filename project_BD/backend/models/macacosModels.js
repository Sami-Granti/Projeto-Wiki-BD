// models/macacosModels.js
const db = require('../config/db');

// Função para buscar todos os macacos
const buscarMacacos = async () => {
  const [rows] = await db.query('SELECT * FROM Macaco');
  return rows;
};

// Função para adicionar um novo macaco
const adicionarMacaco = async (nome, terreno, custo, classe_nome) => {
  try {
    const result = await db.query(
      'INSERT INTO Macaco (nome, terreno, custo, classe_nome) VALUES (?, ?, ?, ?)',
      [nome, terreno, custo, classe_nome]
    );
    return { message: 'Macaco adicionado com sucesso', id: result.insertId };
  } catch (error) {
    throw new Error('Erro ao adicionar macaco: ' + error.message);
  }
};

// Função para editar um macaco
const editarMacaco = async (nome, novoTerreno, novoCusto, novaClasse) => {
  try {
    await db.query(
      'UPDATE Macaco SET terreno = ?, custo = ?, classe_nome = ? WHERE nome = ?',
      [novoTerreno, novoCusto, novaClasse, nome]
    );
    return { message: 'Macaco atualizado com sucesso' };
  } catch (error) {
    throw new Error('Erro ao editar macaco: ' + error.message);
  }
};

// Função para deletar um macaco
const deletarMacaco = async (nome) => {
  try {
    await db.query('DELETE FROM Macaco WHERE nome = ?', [nome]);
    return { message: 'Macaco deletado com sucesso' };
  } catch (error) {
    throw new Error('Erro ao deletar macaco: ' + error.message);
  }
};

module.exports = { buscarMacacos, adicionarMacaco, editarMacaco, deletarMacaco };
