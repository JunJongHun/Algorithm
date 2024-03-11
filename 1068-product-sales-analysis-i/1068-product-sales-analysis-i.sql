select product_name, year,price
from sales as a
join product as b
using (product_id)