const db = require('../config/db');
const multer = require('multer');
const path = require('path');

// Configuração do multer para upload de imagens
const storage = multer.memoryStorage(); // Armazena o arquivo na memória como buffer
const upload = multer({ storage: storage });

const buscarContas = async (req, res) => {
  try {
    // Consulta SQL para buscar contas com JOIN nas tabelas relacionadas
    const [contas] = await db.query(`
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
    res.json(contas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const adicionarConta = async (req, res) => {
  const { nome_usuario, senha, conta_cs_id, conta_macaco_nome, conta_mapa_nome } = req.body;
  const perfil = req.file ? req.file.buffer : null; // Armazena a imagem como buffer

  try {
    // Verifica se o conta_cs_id existe na tabela conhecimentosimio
    if (conta_cs_id) {
      const [rows] = await db.query('SELECT id FROM conhecimentosimio WHERE id = ?', [conta_cs_id]);
      if (rows.length === 0) {
        throw new Error('O ID de conhecimento símio não existe na tabela conhecimentosimio.');
      }
    }

    // Insere a conta e os relacionamentos
    await db.query(
      'INSERT INTO conta (nome_usuario, senha, perfil) VALUES (?, ?, ?)',
      [nome_usuario, senha, perfil]
    );
    if (conta_cs_id) await db.query('INSERT INTO conta_cs (nome_usuario, id) VALUES (?, ?)', [nome_usuario, conta_cs_id]);
    if (conta_macaco_nome) await db.query('INSERT INTO conta_macaco (nome_usuario, nome) VALUES (?, ?)', [nome_usuario, conta_macaco_nome]);
    if (conta_mapa_nome) await db.query('INSERT INTO conta_mapa (nome_usuario, nome) VALUES (?, ?)', [nome_usuario, conta_mapa_nome]);

    res.json({ message: 'Conta e relacionamentos adicionados com sucesso' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const editarConta = async (req, res) => {
  const { nome_usuario } = req.params;
  const { senha, conta_cs_id, conta_macaco_nome, conta_mapa_nome } = req.body;
  const perfil = req.file ? req.file.buffer : null; // Armazena a imagem como buffer

  try {
    await db.query(
      'UPDATE conta SET senha = ?, perfil = ? WHERE nome_usuario = ?',
      [senha, perfil, nome_usuario]
    );
    if (conta_cs_id) await db.query('UPDATE conta_cs SET id = ? WHERE nome_usuario = ?', [conta_cs_id, nome_usuario]);
    if (conta_macaco_nome) await db.query('UPDATE conta_macaco SET nome = ? WHERE nome_usuario = ?', [conta_macaco_nome, nome_usuario]);
    if (conta_mapa_nome) await db.query('UPDATE conta_mapa SET nome = ? WHERE nome_usuario = ?', [conta_mapa_nome, nome_usuario]);

    res.json({ message: 'Conta e relacionamentos atualizados com sucesso' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletarConta = async (req, res) => {
  const { nome_usuario } = req.params;

  try {
    await db.query('DELETE FROM conta_cs WHERE nome_usuario = ?', [nome_usuario]);
    await db.query('DELETE FROM conta_macaco WHERE nome_usuario = ?', [nome_usuario]);
    await db.query('DELETE FROM conta_mapa WHERE nome_usuario = ?', [nome_usuario]);
    await db.query('DELETE FROM conta WHERE nome_usuario = ?', [nome_usuario]);

    res.json({ message: 'Conta e relacionamentos deletados com sucesso' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  buscarContas,
  adicionarConta: [upload.single('perfil'), adicionarConta], // Middleware de upload
  editarConta: [upload.single('perfil'), editarConta], // Middleware de upload
  deletarConta
};