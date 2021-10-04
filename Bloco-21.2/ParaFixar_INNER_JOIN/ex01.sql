-- select  film_id from sakila.film;
SELECT 
    a.actor_id, a.fisrt_name, f.film_id
FROM
    sakila.actor AS a
        INNER JOIN
    sakila.film_actor AS f ON a.actor_id = f.film_id;
    
    SELECT 
    A.actor_id, A.first_name, F.film_id
FROM
    sakila.actor AS A
        INNER JOIN
    sakila.film_actor AS F ON A.actor_id = F.actor_id;