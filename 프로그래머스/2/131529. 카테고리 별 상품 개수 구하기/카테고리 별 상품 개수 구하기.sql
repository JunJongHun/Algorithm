select substring(product_code,1,2) as a, count(*)
from product
group by a
order by product_code asc