select b.INGREDIENT_TYPE, sum(TOTAL_ORDER) as t
from first_half as a
join icecream_info as b
using (flavor)
group by b.INGREDIENT_TYPE
order by t asc