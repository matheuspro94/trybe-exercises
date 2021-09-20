-- Monte um query que exiba:
-- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
-- A duração mínima dos filmes como 'Duração Mínima';
-- A duração máxima dos filmes como 'Duração Máxima';
-- A soma de todas as durações como 'Tempo de Exibição Total';
-- E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
-- Solução:

SELECT AVG(length) as 'Media de Duração',
	MIN(length) as 'Duração Minima',
	MAX(length) as 'Dueação Maxima',
	SUM(length) as 'Tempo de Exibição total',
	COUNT(*) as 'Filmes Registrados'
from sakila.film;