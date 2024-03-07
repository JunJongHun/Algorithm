select a.product_id , a.year as first_year , a.quantity , a.price 
from sales as a
where (a.product_id, a.year) IN (
    SELECT product_id, MIN(year)
    FROM Sales
    GROUP BY product_id)
