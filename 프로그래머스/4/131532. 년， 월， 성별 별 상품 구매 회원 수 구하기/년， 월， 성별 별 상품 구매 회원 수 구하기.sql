select year(SALES_DATE),month(SALES_DATE),a.gender,count(distinct(a.user_id))
from user_info as a
join ONLINE_SALE as b
on a.user_id = b.user_id
where a.gender is not NULL
group by 1,2,3
order by 1,2,3