(select substring(SALES_DATE,1,10)as a,product_id,user_id,sales_amount
from online_sale
where sales_date like '2022-03%'
 )
union
 (
select substring(SALES_DATE,1,10) as a,product_id,NULL as user_id,sales_amount
from offline_sale
where sales_date like '2022-03%'
)
order by a asc, product_id asc, user_id asc