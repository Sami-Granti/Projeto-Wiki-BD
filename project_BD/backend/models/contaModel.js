// models/contaModel.js
const db = require('../config/db');

// Função para buscar todas as contas com JOIN
const buscarContas = async () => {
  const [rows] = await db.query(`
    SELECT 
      conta.*, 
      conta_cs.id AS conta_cs_id, 
      conta_macaco.nome AS conta_macaco_nome, 
      conta_mapa.nome AS conta_mapa_nome
    FROM conta
    LEFT JOIN conta_cs ON conta.nome_usuario = conta_cs.nome_usuario
    LEFT JOIN conta_macaco ON conta.nome_usuario = conta_macaco.nome_usuario
    LEFT JOIN conta_mapa ON conta.nome_usuario = conta_mapa.nome_usuario
  `);
  return rows;
};

// Função para adicionar uma nova conta e seus relacionamentos
const adicionarConta = async (nome_usuario, senha, perfil, conta_cs_id, conta_macaco_nome, conta_mapa_nome) => {
  try {
    await db.query('INSERT INTO conta (nome_usuario, senha, perfil) VALUES (?, ?, ?)', [nome_usuario, senha, perfil]);
    if (conta_cs_id) await db.query('INSERT INTO conta_cs (nome_usuario, id) VALUES (?, ?)', [nome_usuario, conta_cs_id]);
    if (conta_macaco_nome) await db.query('INSERT INTO conta_macaco (nome_usuario, nome) VALUES (?, ?)', [nome_usuario, conta_macaco_nome]);
    if (conta_mapa_nome) await db.query('INSERT INTO conta_mapa (nome_usuario, nome) VALUES (?, ?)', [nome_usuario, conta_mapa_nome]);
    return { message: 'Conta e relacionamentos adicionados com sucesso' };
  } catch (error) {
    throw new Error('Erro ao adicionar conta: ' + error.message);
  }
};

// Função para editar uma conta e seus relacionamentos
const editarConta = async (nome_usuario, senha, perfil, conta_cs_id, conta_macaco_nome, conta_mapa_nome) => {
  try {
    await db.query('UPDATE conta SET senha = ?, perfil = ? WHERE nome_usuario = ?', [senha, perfil, nome_usuario]);
    await db.query('UPDATE conta_cs SET id = ? WHERE nome_usuario = ?', [conta_cs_id, nome_usuario]);
    await db.query('UPDATE conta_macaco SET nome = ? WHERE nome_usuario = ?', [conta_macaco_nome, nome_usuario]);
    await db.query('UPDATE conta_mapa SET nome = ? WHERE nome_usuario = ?', [conta_mapa_nome, nome_usuario]);
    return { message: 'Conta e relacionamentos atualizados com sucesso' };
  } catch (error) {
    throw new Error('Erro ao editar conta: ' + error.message);
  }
};

// Função para deletar uma conta e seus relacionamentos
const deletarConta = async (nome_usuario) => {
  try {
    await db.query('DELETE FROM conta_cs WHERE nome_usuario = ?', [nome_usuario]);
    await db.query('DELETE FROM conta_macaco WHERE nome_usuario = ?', [nome_usuario]);
    await db.query('DELETE FROM conta_mapa WHERE nome_usuario = ?', [nome_usuario]);
    await db.query('DELETE FROM conta WHERE nome_usuario = ?', [nome_usuario]);
    return { message: 'Conta e relacionamentos deletados com sucesso' };
  } catch (error) {
    throw new Error('Erro ao deletar conta: ' + error.message);
  }
};

module.exports = { buscarContas, adicionarConta, editarConta, deletarConta };