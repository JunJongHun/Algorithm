select a.AUTHOR_ID,c.AUTHOR_NAME,a.	CATEGORY, sum(a.price*b.sales) as 	TOTAL_SALES
from book as a
join book_sales as b
join author as c
on a.book_id = b.book_id and a.author_id = c.author_id
where substring(b.sales_date,1,7) = '2022-01'
group by a.category, a.author_id
order by a.author_id asc, a.category desc