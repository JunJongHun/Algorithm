select PRODUCT_ID,PRODUCT_NAME, sum(price*amount) as t
from FOOD_PRODUCT as a
join FOOD_ORDER as b
using (PRODUCT_ID)
where substring(PRODUCE_DATE,1,7) = '2022-05'
group by 1,2
order by t desc, 1 asc
