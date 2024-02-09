-- 코드를 입력하세요
SELECT a.PRODUCT_ID,a.PRODUCT_NAME, (a.price * sum(b.amount)) as TOTAL_SALES
from food_product as a
join food_order as b
on a.product_id = b.product_id
where year(b.produce_date) = 2022 and month(b.produce_date) = 5
group by a.product_id
order by total_sales desc, a.product_id asc
