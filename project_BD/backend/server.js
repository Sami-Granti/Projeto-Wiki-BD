const express = require("express");
const cors = require("cors");
const path = require("path");

const macacosRoutes = require("./routes/macacosRoutes"); // Rotas dos macacos
const mapasRoutes = require("./routes/mapasRoutes"); // Rotas dos mapas
const bloonsRoutes = require("./routes/bloonsRoutes"); // Rotas dos bloons
const contaRoutes = require("./routes/contaRoutes"); // Rotas das contas

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Permite receber JSON no corpo das requisições

// Configura o Express para servir arquivos estáticos da pasta "uploads"
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Definição de rotas
app.get("/", (req, res) => {
  res.send('Bem-vindo ao servidor! Acesse <a href="/dados">/dados</a> para ver os dados.');
});

app.use("/macacos", macacosRoutes);
app.use("/mapas", mapasRoutes);
app.use("/bloons", bloonsRoutes);
app.use("/conta", contaRoutes);

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));