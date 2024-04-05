select distinct(num) as  ConsecutiveNums
from(
    select num, lag(num) over(order by id) as pre, lead(num) over(order by id) as next
    from Logs
) as a
where num = pre and pre = next
