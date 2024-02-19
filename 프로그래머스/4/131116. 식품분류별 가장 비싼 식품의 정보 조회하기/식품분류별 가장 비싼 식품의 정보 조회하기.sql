with t as(
SELECT category,max(price) as price
from food_product
where category in ('과자', '국', '김치', '식용유')
group by CATEGORY)

select CATEGORY,price as MAX_PRICE,PRODUCT_NAME
from FOOD_PRODUCT as a
join t
using (category,price)
order by MAX_PRICE desc