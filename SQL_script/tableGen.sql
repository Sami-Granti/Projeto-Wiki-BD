CREATE DATABASE IF NOT EXISTS meu_banco;
USE meu_banco;

-- Criando a tabela de classes (referenciada por chave estrangeira)
CREATE TABLE tipo_classe (
    nome VARCHAR(50) PRIMARY KEY
);

-- Criando a tabela principal "unidades"
CREATE TABLE unidades (
    NomePK VARCHAR(50) PRIMARY KEY,
    Terreno ENUM('terra', 'agua', 'ar') NOT NULL,
    Custo INT NOT NULL,
    TipoClasseFK VARCHAR(50),
    FOREIGN KEY (TipoClasseFK) REFERENCES tipo_classe(nome)
);

-- Criando a tabela para armazenar os valores de "PopInato" (multivalorado)
CREATE TABLE pop_inato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    NomeUnidadeFK VARCHAR(50),
    PopInato VARCHAR(50),
    FOREIGN KEY (NomeUnidadeFK) REFERENCES unidades(NomePK) ON DELETE CASCADE
);