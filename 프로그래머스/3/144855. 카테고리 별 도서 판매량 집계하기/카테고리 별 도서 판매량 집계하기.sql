select a.CATEGORY	, sum(b.sales) as TOTAL_SALES
from book as a
join book_sales as b
using (book_id)
where date_format(b.sales_date,'%Y-%m') = '2022-01'
group by a.category
order by a.category asc