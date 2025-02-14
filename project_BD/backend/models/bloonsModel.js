const db = require('../config/db');

const buscarBloons = async () => {
  const [rows] = await db.query('SELECT * FROM Bloon');
  return rows;
};

const adicionarBloon = async (nome, tier) => {
    try {
        const result = await db.query(
            "INSERT INTO Bloon (nome, tier) VALUES (?, ?)",
            [nome, tier]
        );
        return { message: "Bloon adicionado com sucesso", id: result.insertId };
    } catch (error) {
        throw new Error("Erro ao adicionar Bloon: " + error.message);
    }
};


const editarBloon = async (nome, tier) => {
  try {
    await db.query('UPDATE Bloon SET tier = ? WHERE nome = ?', [tier, nome]);
    return { message: 'Bloon atualizado com sucesso' };
  } catch (error) {
    throw new Error('Erro ao editar bloon: ' + error.message);
  }
};

const deletarBloon = async (nome) => {
  try {
    await db.query('DELETE FROM Bloon WHERE nome = ?', [nome]);
    return { message: 'Bloon deletado com sucesso' };
  } catch (error) {
    throw new Error('Erro ao deletar bloon: ' + error.message);
  }
};

module.exports = { buscarBloons, adicionarBloon, editarBloon, deletarBloon };