-- Inserindo as classes
INSERT INTO tipo_classe (nome) VALUES
('primario'),
('militar'),
('magico'),
('suporte');

-- Inserindo as unidades
INSERT INTO unidades (NomePK, Terreno, Custo, TipoClasseFK) VALUES
('Dardo', 'terra', 170, 'primario'),
('sniper', 'terra', 300, 'militar'),
('barco', 'agua', 340, 'militar'),
('ninja', 'terra', 340, 'magico'),
('engenheiro', 'terra', 300, 'suporte');

-- Inserindo os valores de PopInato
INSERT INTO pop_inato (NomeUnidadeFK, PopInato) VALUES
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