select BOOK_ID,AUTHOR_NAME,substring(PUBLISHED_DATE,1,10) as c
from BOOK 
join AUTHOR
using (author_id)
where category = '경제'
order by c asc