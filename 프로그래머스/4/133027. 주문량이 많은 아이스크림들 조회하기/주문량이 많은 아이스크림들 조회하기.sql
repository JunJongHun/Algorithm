select FLAVOR
from (
select *
from FIRST_HALF
union
select *
from july
) as t
group by flavor
order by sum(total_order) desc
limit 3