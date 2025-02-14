const mysql = require("mysql2");

// Criar um pool de conexões (melhor para múltiplas requisições)
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "MacacoDruida@052", // Coloque sua senha
  database: "btd",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Promisify para usar async/await
const promisePool = pool.promise();

module.exports = promisePool;
