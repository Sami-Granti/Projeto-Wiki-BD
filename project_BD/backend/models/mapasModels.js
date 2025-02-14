// models/mapasModels.js
const db = require('../config/db');

// Função para buscar todos os mapas
const buscarMapas = async () => {
  try {
    const [rows] = await db.query('SELECT nome, dificuldade, lanes FROM mapa');
    return rows;
  } catch (error) {
    console.error(error);  // Logando erro da consulta SQL
    throw new Error('Erro ao buscar mapas: ' + error.message);
  }
};

// Função para adicionar um novo mapa
const adicionarMapa = async (nome, dificuldade, lanes) => {
  try {
    const result = await db.query(
      'INSERT INTO mapa (nome, dificuldade, lanes) VALUES (?, ?, ?)',
      [nome, dificuldade, lanes]
    );
    return { message: 'Mapa adicionado com sucesso', id: result.insertId };
  } catch (error) {
    throw new Error('Erro ao adicionar mapa: ' + error.message);
  }
};

// Função para editar um mapa
const editarMapa = async (nome, dificuldade, lanes) => {
  try {
    await db.query(
      'UPDATE mapa SET dificuldade = ?, lanes = ? WHERE nome = ?',
      [dificuldade, lanes, nome]
    );
    return { message: 'Mapa atualizado com sucesso' };
  } catch (error) {
    throw new Error('Erro ao editar mapa: ' + error.message);
  }
};

// Função para deletar um mapa
const deletarMapa = async (nome) => {
  try {
    await db.query('DELETE FROM mapa WHERE nome = ?', [nome]);
    return { message: 'Mapa deletado com sucesso' };
  } catch (error) {
    throw new Error('Erro ao deletar mapa: ' + error.message);
  }
};

module.exports = { buscarMapas, adicionarMapa, editarMapa, deletarMapa };