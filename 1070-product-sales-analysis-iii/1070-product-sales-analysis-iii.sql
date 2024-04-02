select product_id, year as first_year, quantity, price
from (
    select *, rank() over(partition by product_id order by year asc) as rnk
    from Sales
) as a
where rnk = 1

