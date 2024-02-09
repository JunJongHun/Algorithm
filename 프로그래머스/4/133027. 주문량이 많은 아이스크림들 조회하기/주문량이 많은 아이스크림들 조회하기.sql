select a.flavor
from first_half as a
join july as b
on a.flavor = b.flavor
group by a.flavor
order by sum(b.total_order) + a.total_order desc
limit 3
