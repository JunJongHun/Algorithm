select a.author_id, a.author_name, b.category, sum(s.sales*b.price)
from book as b
join book_sales as s
on b.book_id = s.book_id
join author as a
on b.author_id = a.author_id
where s.sales_date between '2022-01-01' and '2022-01-31'
group by a.author_name, b.category
order by a.author_id asc, b.category desc