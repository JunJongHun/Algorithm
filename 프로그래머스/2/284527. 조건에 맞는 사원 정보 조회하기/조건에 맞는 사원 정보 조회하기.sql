select sum(b.SCORE) as SCORE,	a.EMP_NO,	a.EMP_NAME, a.POSITION,	a.EMAIL
from HR_EMPLOYEES as a
join HR_GRADE as b
using(EMP_NO)
group by a.EMP_NO
order by sum(b.SCORE) desc
limit 1