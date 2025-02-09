const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

// Configuração da conexão com o MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MacacoDruida@052',
  database: 'meu_banco'
});

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor! Acesse <a href="/dados">/dados</a> para ver os dados.');
});

// Rota /dados
app.get('/dados', (req, res) => {
  const query = 'SELECT * FROM tipo_classe'; // Substitua pelo nome da sua tabela
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar a query:', err.stack);
      res.status(500).send('Erro ao buscar dados');
      return;
    }
    res.json(results); // Retorna os dados da tabela em formato JSON
  });
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});