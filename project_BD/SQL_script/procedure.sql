CREATE PROCEDURE AumentarCustoMacacos(IN mapa_escolhido VARCHAR(255))
BEGIN
    DECLARE num_lanes INT;
    DECLARE aumento INT;

    -- Obtém o número de lanes do mapa escolhido
    SELECT lanes INTO num_lanes FROM Mapa WHERE nome = mapa_escolhido;

    -- Define o valor do aumento com base no número de lanes
    SET aumento = CASE 
        WHEN num_lanes = 2 THEN 50
        WHEN num_lanes = 3 THEN 100
        WHEN num_lanes = 4 THEN 200
        ELSE 0  -- Nenhum aumento se o mapa não tiver 2, 3 ou 4 lanes
    END;

    -- Atualiza o custo dos macacos se houver aumento
    IF aumento > 0 THEN
        UPDATE Macaco SET custo = custo + aumento;
    END IF;
END

CREATE PROCEDURE ResetarCustoMacacos()
BEGIN
    UPDATE Macaco SET custo = 
        CASE 
            WHEN nome = 'Dardo' THEN 170
            WHEN nome = 'sniper' THEN 300
            WHEN nome = 'barco' THEN 340
            WHEN nome = 'ninja' THEN 340
            WHEN nome = 'engenheiro' THEN 300
            ELSE custo -- Caso um macaco não esteja na lista, mantém o custo atual
        END;
END