-- Criando a tabela Classe
DROP TABLE IF EXISTS Classe CASCADE;
CREATE TABLE Classe (
    nome VARCHAR(255) PRIMARY KEY
);

INSERT INTO Classe (nome) VALUES
('Primario'),
('Militar'),
('Magico'),
('Suporte'),
('Heroi'),
('Poder');

-- Criando a tabela Conta
DROP TABLE IF EXISTS Conta CASCADE;
CREATE TABLE Conta (
    nome_usuario VARCHAR(255) PRIMARY KEY,
    senha VARCHAR(255) NOT NULL,
    perfil longblob
);

INSERT INTO Conta (nome_usuario, senha, perfil) VALUES
('Tbigongue', 'DatadeAniversario', NULL),
('SamiGranti', '12345678',NULL),
('Vitão', 'NomedoCachorro',NULL),
('Juninho', 'dfsng3n8wr87r2',NULL),
('Larry', 'BobEsponja',NULL);



-- Criando a tabela Mapa
DROP TABLE IF EXISTS Mapa CASCADE;
CREATE TABLE Mapa (
    nome VARCHAR(255) PRIMARY KEY,
    dificuldade VARCHAR(50) NOT NULL,
    lanes INT NOT NULL
);

INSERT INTO Mapa (nome, dificuldade, lanes) VALUES
('Monkey Meadow', 'iniciante', 1),
('Luminous Cove', 'intermediario', 2),
('Mesa', 'avançado', 3),
('#Ouch', 'especialista', 4),
('Logs', 'iniciante', 1);

-- Criando a tabela Heroi
DROP TABLE IF EXISTS Heroi CASCADE;
CREATE TABLE Heroi (
    nome VARCHAR(255) PRIMARY KEY,
    custo INT NOT NULL,
    classe_nome VARCHAR(255) NOT NULL,
    FOREIGN KEY (classe_nome) REFERENCES Classe(nome)
);

-- Criando a tabela Nivel
DROP TABLE IF EXISTS Nivel CASCADE;
CREATE TABLE Nivel (
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL,
    nivel INT NOT NULL,
    heroi_nome VARCHAR(255) NOT NULL,
    FOREIGN KEY (heroi_nome) REFERENCES Heroi(nome)
);

-- Inserindo dados na tabela Heroi
INSERT INTO Heroi (nome, custo, classe_nome) VALUES
('Quincy', 460, 'Heroi'),
('Gwendolin', 615, 'Heroi'),
('Striker Jones', 595, 'Heroi'),
('Obyn GreenFoot', 550, 'Heroi'),
('Benjamim', 1020, 'Heroi');

-- Inserindo dados na tabela Nivel
INSERT INTO Nivel (descricao, nivel, heroi_nome) VALUES
('As flechas de Quincy ricocheteiam em até 3 alvos diferentes.', 1, 'Quincy'),
('O ataque base ricocheteia em até 4 alvos.', 2, 'Quincy'),
('Tiro Rápido: Velocidade de ataque tripla por um curto período de tempo.', 3, 'Quincy'),
('Alcance um pouco maior.', 4, 'Quincy'),
('Usa sua visão aguçada para atirar Bloons Camuflados.', 5, 'Quincy'),
('Atira 2 flechas por vez.', 6, 'Quincy'),
('Dispara flechas explosivas a cada 3 tiros.', 7, 'Quincy'),
('Flechas causam o triplo de dano em Bloons da classe MOAB.', 8, 'Quincy'),
('O ataque base ricocheteia em até 6 alvos.', 9, 'Quincy'),
('Tempestade de Flechas: Cobre uma grande área com uma chuva mortal de flechas.', 10, 'Quincy'),
('Velocidade de ataque aumentada.', 11, 'Quincy'),
('Cada flecha ganha mais poder de estouro.', 12, 'Quincy'),
('Pequeno aumento de alcance e Tiro Rápido dura mais.', 13, 'Quincy'),
('Flechas causam dano quádruplo em Bloons da classe MOAB.', 14, 'Quincy'),
('Tiro Rápido ganha velocidade de ataque x4 e o tempo de recarga é reduzido.', 15, 'Quincy'),
('Maior velocidade de ataque.', 16, 'Quincy'),
('Flechas duram 25% mais. Dispara flechas explosivas a cada 2º tiro.', 17, 'Quincy'),
('Quincy ataca mais rápido e a Tempestade de Flechas é bastante aprimorada.', 18, 'Quincy'),
('Atira 3 flechas por vez, e cada flecha ganha ainda mais poder de explosão.', 19, 'Quincy'),
('Quincy ataca ainda mais rápido. Storm of Arrows causa mais dano por flecha e dispara ainda mais flechas.', 20, 'Quincy'),
('Atira Bloons com fogo de sua arma pirotécnica.', 1, 'Gwendolin'),
('Potência de estouro ligeiramente aumentada por tiro.', 2, 'Gwendolin'),
('Coquetel de Fogo: Arremessa um frasco de líquido inflamável, queimando Bloons que passam pelo fogo.', 3, 'Gwendolin'),
('Esquente - A cada 40 ataques, Gwendolin cria uma poderosa onda de fogo que estoura Bloons e adiciona fogo aos ataques de Macacos próximos.', 4, 'Gwendolin'),
('Poder de estouro aumentado. Velocidade de ataque e raio de ataque 10% melhores para Anel de Fogo, Sinalizador e Sopro do Dragão.', 5, 'Gwendolin'),
('Os ataques causam um efeito de queimadura no Bloon alvo.', 6, 'Gwendolin'),
('Aqueça o raio, Coquetel de Fogo é mais eficaz.', 7, 'Gwendolin'),
('Dispara 2 rajadas de fogo por tiro.', 8, 'Gwendolin'),
('O golpe inicial por explosão estoura 1 camada extra.', 9, 'Gwendolin'),
('Tempestade de fogo: incendeia a tela inteira, queimando todos os Bloons e concedendo o bônus Aqueça a todos os Macacos.', 10, 'Gwendolin'),
('Alcance de ataque aumentado e Coquetel de Fogo é mais eficaz.', 11, 'Gwendolin'),
('Aumenta a velocidade de ataque e aumenta o dano de Heat it Up.', 12, 'Gwendolin'),
('Poder de estouro bastante aumentado, além de projéteis se moverem mais rápido e durarem mais.', 13, 'Gwendolin'),
('Coquetel de Fogo causa dano extra e incendeia Bloons da classe MOAB.', 14, 'Gwendolin'),
('Aumenta a velocidade de ataque e aumenta o dano de Heat it Up.', 15, 'Gwendolin'),
('Firestorm aumentou a duração e causa mais dano. Purple Bloons não são mais imunes aos ataques de Gwendolin.', 16, 'Gwendolin'),
('Aquecê-lo permite que os macacos afetados estourem 1 camada extra e causem +2 de dano aos Bloons de Chumbo.', 17, 'Gwendolin'),
('Velocidade de ataque aumentada e dano aumentado de Heat it Up. Velocidade de ataque e raio de melhoria de 20% para Ring of Fire, Signal Flare e Dragons Breath.', 18, 'Gwendolin'),
('Dispara 3 rajadas de fogo por tiro.', 19, 'Gwendolin'),
('Firestorm causa um dano muito maior.', 20, 'Gwendolin'),
('Striker Jones dispara uma poderosa bazuca para explodir os Bloons.', 1, 'Striker Jones'),
('Raio de explosão aumentado.', 2, 'Striker Jones'),
('Concha Concussiva: Dispara uma concha guiada no maior Bloon na tela, atordoando-o.', 3, 'Striker Jones'),
('Todos os atiradores de bombas e macacos de morteiro na tela atiram 10% mais rápido.', 4, 'Striker Jones'),
('Torna todos os Bloons Negros menos resistentes a danos explosivos de todos os Macacos.', 5, 'Striker Jones'),
('O raio de explosão e o poder de explosão dos ataques normais de Jones aumentam muito.', 6, 'Striker Jones'),
('Estoura 2 camadas por tiro e o raio de explosão do Mortar Monkeys é aumentado em 10%. Foco no Alvo: Por 15 segundos, o Mortar Monkeys mira no toque/cursor com precisão aumentada.', 7, 'Striker Jones'),
('Torres próximas ao herói ganham +5% de alcance e +25% de perfuração.', 8, 'Striker Jones'),
('Velocidade de ataque aumentada e perfuração, dano e atordoamento do Concha Concussiva aumentados.', 9, 'Striker Jones'),
('Comando de Artilharia: Reinicia o tempo de espera de todos os Atiradores de Bombas e Macacos de Morteiro.', 10, 'Striker Jones'),
('Velocidade de ataque aumentada.', 11, 'Striker Jones'),
('Alcance de ataque ligeiramente aumentado e explosão de camada extra.', 12, 'Striker Jones'),
('Velocidade de ataque aumentada.', 13, 'Striker Jones'),
('Concussive Shell afeta uma área maior e por mais tempo.', 14, 'Striker Jones'),
('Tempo de recarga do Concha Concussiva reduzido para 11 segundos.', 15, 'Striker Jones'),
('Velocidade de ataque aumentada.', 16, 'Striker Jones'),
('Alcance aumentado e estoura 4 camadas por tiro.', 17, 'Striker Jones'),
('Todos os Atiradores de Bombas e Macacos de Morteiro atacam 10% mais rápido.', 18, 'Striker Jones'),
('Aumenta a velocidade de ataque e torna todos os Bloons Negros vulneráveis ​​a danos explosivos.', 19, 'Striker Jones'),
('O Comando de Artilharia também causa o dobro de dano e estouros por tiro a todos os Atiradores de Bombas e Macacos de Morteiro por 10 segundos.', 20, 'Striker Jones'),
('Envia espíritos de lobo para atacar os Bloons.', 1, 'Obyn GreenFoot'),
('Ira da Natureza - todos os druidas no alcance recebem +1 de perfuração.', 2, 'Obyn GreenFoot'),
('Brambles: Cria um arbusto com espinhos na pista que pode estourar 50 bloons. Dura várias rodadas se não for destruído.', 3, 'Obyn GreenFoot'),
('A cada 18 segundos cria um totem que desacelera todos os bloons próximos ao totem em 30%. Menos efetivo contra Bloons da classe MOAB.', 4, 'Obyn GreenFoot'),
('Velocidade de ataque aumentada. Druidas da Selva têm alcance aumentado. Concede geração de dinheiro bônus para Druidas.', 5, 'Obyn GreenFoot'),
('Maior poder de explosão e projéteis se movem mais rápido.', 6, 'Obyn GreenFoot'),
('Os arbustos espinhosos podem estourar 100 bloons.', 7, 'Obyn GreenFoot'),
('Os totens de proteção da natureza desaceleram Bloons em 40%. Todos os druidas no alcance recebem detecção de camuflagem.', 8, 'Obyn GreenFoot'),
('Obyn causa mais dano. Druidas da Tempestade criam tempestades maiores com mais frequência.', 9, 'Obyn GreenFoot'),
('Wall of Trees: Invoca um muro de árvores na pista que destrói todos os Bloons que entram. Quando cheio, as árvores explodem em dinheiro.', 10, 'Obyn GreenFoot'),
('Clareza da Natureza - todos os Macacos Mágicos dentro do alcance recebem +5 de alcance e +2 de perfuração, e os Druidas recebem +1 de perfuração adicional.', 11, 'Obyn GreenFoot'),
('Velocidade de ataque aumentada e tempo de recarga dos Macacos Mágicos reduzido em 5%.', 12, 'Obyn GreenFoot'),
('Aumento ainda maior do poder de explosão e da velocidade do projétil.', 13, 'Obyn GreenFoot'),
('O ataque estoura camadas extras.', 14, 'Obyn GreenFoot'),
('Proteção da Natureza reduz a velocidade dos Bloons em 60% e tem tempo de recarga reduzido.', 15, 'Obyn GreenFoot'),
('Os arbustos estouram 500 bloons cada e podem causar dano a todos os tipos de Bloons.', 16, 'Obyn GreenFoot'),
('Velocidade de ataque aumentada.', 17, 'Obyn GreenFoot'),
('Ira aprimorada - todos os pops do Druida da Ira começam cada rodada em 200.', 18, 'Obyn GreenFoot'),
('O ataque estoura camadas extras.', 19, 'Obyn GreenFoot'),
('Muralha de Árvores pode conter muito mais Bloons e tem tempo de recarga mais curto.', 20, 'Obyn GreenFoot'),
('Hacks por US$ 90 a cada rodada.', 1, 'Benjamim'),
('Gera US$ 140 por rodada em vez de US$ 90.', 2, 'Benjamim'),
('Biohack: 4 Monkeys mais próximos estouram uma camada extra por ataque por 6 segundos. Monkeys afetados não podem atacar por 2 segundos após o efeito terminar.', 3, 'Benjamim'),
('Segurança cibernética - Restaura 5 vidas no final de cada rodada.', 4, 'Benjamim'),
('Hack bancário - todos os bancos ganham +5% de renda.', 5, 'Benjamim'),
('Skimming - ganha +$1 para cada novo Bloon gerado.', 6, 'Benjamim'),
('Bloon Trojan - A cada poucos segundos envia um vírus de software Trojan para Bloons aleatórios. Bloons afetados não geram filhos quando destruídos e produzem 1 dinheiro extra para cada camada.', 7, 'Benjamim'),
('A renda aumentou para US$ 250 por rodada.', 8, 'Benjamim'),
('O hack do banco aumentou para 12%', 9, 'Benjamim'),
('Financiamento de Sifão: Reduz a maioria dos Bloons recém-gerados em 1 classificação. O dinheiro por pop de Bloons afetados é o dobro. Dura 10 segundos.', 10, 'Benjamim'),
('A renda aumentou para US$ 1.000 por rodada.', 11, 'Benjamim'),
('O skimming aumentou para US$ 2 por Bloon.', 12, 'Benjamim'),
('Biohack aumenta o dano bônus e afeta 6 macacos por 8 segundos.', 13, 'Benjamim'),
('A Segurança Cibernética adiciona 10 vidas por rodada e pode ir até 100 além das vidas iniciais.', 14, 'Benjamim'),
('A renda aumentou para US$ 2.500 por rodada.', 15, 'Benjamim'),
('O Trojan Bloon é enviado com mais frequência e rende mais dinheiro.', 16, 'Benjamim'),
('A renda aumentou para US$ 5.000 por rodada.', 17, 'Benjamim'),
('O Trojan Bloon pode afetar os Bloons BFB e DDT.', 18, 'Benjamim'),
('O biohack dura 9 segundos e os macacos afetados estouram 3 camadas extras em vez de 2.', 19, 'Benjamim'),
('O financiamento do Sifão dura 20 segundos e o dinheiro por pop é o triplo do normal para Bloons afetados.', 20, 'Benjamim');


-- Criando a tabela Macaco
DROP TABLE IF EXISTS Macaco CASCADE;
CREATE TABLE Macaco (
    nome VARCHAR(255) PRIMARY KEY,
    terreno VARCHAR(255) NOT NULL,
    custo INT NOT NULL,
    classe_nome VARCHAR(255) NOT NULL,
    FOREIGN KEY (classe_nome) REFERENCES Classe(nome)
);

INSERT INTO Macaco (nome, terreno, custo, classe_nome) VALUES
('Dardo', 'terra', 170, 'Primario'),
('sniper', 'terra', 300, 'Militar'),
('barco', 'agua', 340, 'Militar'),
('ninja', 'terra', 340, 'Magico'),
('engenheiro', 'terra', 300, 'Suporte');

-- Criando a tabela Macaco_PopInato
DROP TABLE IF EXISTS Macaco_PopInato CASCADE;
CREATE TABLE Macaco_PopInato (
    macaco_nome VARCHAR(255) NOT NULL,
    pop_inato VARCHAR(255) NOT NULL,
    PRIMARY KEY (macaco_nome, pop_inato),
    FOREIGN KEY (macaco_nome) REFERENCES Macaco(nome)
);

INSERT INTO Macaco_PopInato (macaco_nome, pop_inato) VALUES
('Dardo', 'roxo'),
('Dardo', 'preto'),
('Dardo', 'branco'),
('sniper', 'roxo'),
('sniper', 'preto'),
('sniper', 'branco'),
('barco', 'roxo'),
('barco', 'preto'),
('barco', 'branco'),
('ninja', 'camuflado'),
('ninja', 'roxo'),
('ninja', 'preto'),
('ninja', 'branco'),
('engenheiro', 'roxo'),
('engenheiro', 'preto'),
('engenheiro', 'branco');

-- Criando a tabela ConhecimentoSimio
DROP TABLE IF EXISTS ConhecimentoSimio CASCADE;
CREATE TABLE ConhecimentoSimio (
    id VARCHAR(255) PRIMARY KEY,
    tier INT NOT NULL,
    custo INT NOT NULL,
    descricao TEXT NOT NULL,
    classe_nome VARCHAR(255) NOT NULL,
    FOREIGN KEY (classe_nome) REFERENCES Classe(nome)
);

INSERT INTO ConhecimentoSimio (id, tier, custo, descricao, classe_nome) VALUES
('More Cash', 6, 1000, 'Aumente o dinheiro inicial em 200.*', 'Primario'),
('Extra dardo estoura', 1, 0, 'Macacos Dardos recebem +1 de perfuração em todos os disparos.', 'Primario'),
('Macaco bônus!', 6, 1000, 'Comece cada jogo com um Macaco Dardo grátis!', 'Primario'),
('Bolsas de estudo', 2, 0, 'Custos de treinamento de heróis reduzidos em 10%.', 'Heroi'),
('Só mais um', 1, 0, 'As estacas de pregos de estrada têm 21 pregos.', 'Poder');

-- Criando a tabela Poderes
DROP TABLE IF EXISTS Poderes CASCADE;
CREATE TABLE Poderes (
    id VARCHAR(255) PRIMARY KEY,
    custo INT NOT NULL,
    efeito TEXT NOT NULL,
    classe_nome VARCHAR(255) NOT NULL,
    FOREIGN KEY (classe_nome) REFERENCES Classe(nome)
);

INSERT INTO Poderes (id, custo, efeito, classe_nome) VALUES
('Super Monkey Storm', 100, 'Super Monkey Storms instantaneamente da 4000 de dano em todos os bloons da tela', 'Poder'),
('Monkey Boost', 100, 'Quando usado, aumenta a velocidade de ataque de todas as torres em 100% por 15 segundos', 'Poder'),
('Cash Drop', 200, 'Ao usar um Cash Drop, a caixa de dinheiro homônima cai do céu, recompensando $2500 quando coletada.', 'Poder'),
('Road Spikes', 50, 'Road Spikes tem 20 espinhos cada e estouram qualquer tipo de bloon.', 'Poder'),
('Glue Trap', 50, 'Glue Trap aplica cola encharcada em até 300 bloons que passam por ele, desacelerando-os em 50% e durando até 30 segundos.', 'Poder');

-- Criando a tabela Upgrade
DROP TABLE IF EXISTS Upgrade CASCADE;
CREATE TABLE Upgrade (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    tier INT NOT NULL,
    custo INT NOT NULL,
    descricao TEXT NOT NULL,
    macaco_nome VARCHAR(255) NOT NULL,
    FOREIGN KEY (macaco_nome) REFERENCES Macaco(nome)
);

INSERT INTO Upgrade (id, nome, tier, custo, descricao, macaco_nome) VALUES
(1, 'Upgrade 1', 1, 120, 'Pode estourar 1 Bloon extra por tiro.', 'Dardo'),
(2, 'Upgrade 2', 2, 185, 'Pode estourar mais 2 balões por tiro.', 'Dardo'),
(3, 'Spike-o-pult', 3, 255, 'Converte o Dart Monkey em um Spike-o-pult de ataque mais lento que arremessa grandes bolas com espinhos. Cada bola pode estourar muitos Bloons e ricochetear em obstáculos.', 'Dardo'),
(4, 'Super Juggernaut', 4, 1530, 'Arremessa uma bola gigante com espinhos que estoura chumbo e é excelente para esmagar Bloons de Cerâmica e Fortificados.', 'Dardo'),
(5, 'Ultra Juggernaut', 5, 12750, 'Uma bola gigante com espinhos se divide duas vezes em 6 bolas Juggernaut para um poder ainda mais destrutivo contra Bloons de Cerâmica, Fortificados e de Chumbo.', 'Dardo');

-- Criando a tabela Upgrade_Pop
DROP TABLE IF EXISTS Upgrade_Pop CASCADE;
CREATE TABLE Upgrade_Pop (
    upgrade_id INT NOT NULL,
    tipo_bloon VARCHAR(255) NOT NULL,
    PRIMARY KEY (upgrade_id, tipo_bloon),
    FOREIGN KEY (upgrade_id) REFERENCES Upgrade(id) ON DELETE CASCADE
);

INSERT INTO Upgrade_Pop (upgrade_id, tipo_bloon) VALUES
(1, 'roxo'),
(1, 'preto'),
(1, 'branco'),
(2, 'roxo'),
(2, 'preto'),
(2, 'branco'),
(3, 'congelado'),
(3, 'roxo'),
(3, 'preto'),
(3, 'branco'),
(4, 'chumbo'),
(4, 'congelado'),
(4, 'roxo'),
(4, 'preto'),
(4, 'branco'),
(5, 'chumbo'),
(5, 'congelado'),
(5, 'roxo'),
(5, 'preto');

-- Criando a tabela Bloon
DROP TABLE IF EXISTS Bloon CASCADE;
CREATE TABLE Bloon (
    nome VARCHAR(255) PRIMARY KEY,
    tier INT NOT NULL
);

INSERT INTO Bloon (nome, tier) VALUES
('Bloon vermelho', 1),
('Bloon Azul', 2),
('Bloon verde', 3),
('Bloon Amarelo', 4),
('Bloon Rosa', 5),
('Bloon preto', 6),
('Bloon Branco', 6),
('Bloon roxo', 6),
('Bloon de chumbo', 7),
('Zebra Bloon', 7),
('Bloon arco-íris', 8),
('Bloon de cerâmica', 9),
('MOAB', 10),
('BFB', 11),
('ZOMG', 12),
('DDT', 13),
('BAD', 14);

-- Criando a tabela Resistencias
DROP TABLE IF EXISTS Resistencias CASCADE;
CREATE TABLE Resistencias (
    bloon_nome VARCHAR(255) NOT NULL,
    resistencia VARCHAR(255) NOT NULL,
    PRIMARY KEY (bloon_nome, resistencia),
    FOREIGN KEY (bloon_nome) REFERENCES Bloon(nome)
);

INSERT INTO Resistencias (bloon_nome, resistencia) VALUES
('Bloon preto', 'preto'),
('Bloon Branco', 'branco'),
('Bloon roxo', 'roxo'),
('Bloon de chumbo', 'chumbo'),
('Zebra Bloon', 'preto'),
('Zebra Bloon', 'branco'),
('DDT', 'camuflado'),
('DDT', 'chumbo');

CREATE TABLE Conta_Mapa (
    nome_usuario VARCHAR(255),
    nome VARCHAR(255),
    PRIMARY KEY (nome_usuario, nome),
    FOREIGN KEY (nome_usuario) REFERENCES Conta(nome_usuario),
    FOREIGN KEY (nome) REFERENCES Mapa(nome)
);

INSERT INTO Conta_Mapa (nome_usuario, nome) VALUES
('Tbigongue', 'Monkey Meadow'),
('SamiGranti', 'Luminous Cove'),
('Vitão', 'Mesa'),
('Juninho', '#Ouch'),
('Larry', 'Logs');

CREATE TABLE Conta_Heroi (
    nome_usuario VARCHAR(255),
    nome VARCHAR(255),
    PRIMARY KEY (nome_usuario, nome),
    FOREIGN KEY (nome_usuario) REFERENCES Conta(nome_usuario),
    FOREIGN KEY (nome) REFERENCES Heroi(nome)
);

INSERT INTO Conta_Heroi (nome_usuario, nome) VALUES
('Tbigongue', 'Quincy'),
('SamiGranti', 'Gwendolin'),
('Vitão', 'Striker Jones'),
('Juninho', 'Obyn GreenFoot'),
('Larry', 'Benjamim');

CREATE TABLE Conta_CS (
    nome_usuario VARCHAR(255),
    id VARCHAR(255),
    PRIMARY KEY (nome_usuario, id),
    FOREIGN KEY (nome_usuario) REFERENCES Conta(nome_usuario),
    FOREIGN KEY (id) REFERENCES ConhecimentoSimio(id)
);

INSERT INTO Conta_CS (nome_usuario, id) VALUES
('Tbigongue', 'More Cash'),
('SamiGranti', 'Extra dardo estoura'),
('Vitão', 'Macaco bônus!'),
('Juninho', 'Bolsas de estudo'),
('Larry', 'Só mais um');

CREATE TABLE Conta_Macaco (
    nome_usuario VARCHAR(255),
    nome VARCHAR(255),
    PRIMARY KEY (nome_usuario, nome),
    FOREIGN KEY (nome_usuario) REFERENCES Conta(nome_usuario),
    FOREIGN KEY (nome) REFERENCES Macaco(nome)
);

INSERT INTO Conta_Macaco (nome_usuario, nome) VALUES
('Tbigongue', 'Dardo'),
('SamiGranti', 'Dardo'),
('Vitão', 'Dardo'),
('Juninho', 'Dardo'),
('Larry', 'Dardo')

