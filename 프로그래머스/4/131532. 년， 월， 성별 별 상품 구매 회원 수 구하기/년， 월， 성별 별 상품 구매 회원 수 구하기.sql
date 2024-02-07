-- 코드를 입력하세요
SELECT year(b.SALES_DATE) as year,month(b.SALES_DATE) as month, a.GENDER
,count(distinct a.USER_ID)
from USER_INFO as a
join ONLINE_SALE as b
on a.user_id = b.user_id
where a.gender is not null
group by year,month,a.gender
order by year,month,a.gender