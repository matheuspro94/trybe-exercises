SELECT 
    C.customer_id,
    C.first_name,
    C.email,
    C.address_id,
    A.address
FROM
    sakila.customer AS C
        INNER JOIN
    sakila.address AS A ON C.address_id = A.address_id
order by C.first_name desc
limit 100;