select DEPT_ID,	DEPT_NAME_EN, round(avg(SAL),0)	as AVG_SAL
from HR_DEPARTMENT as a
join HR_EMPLOYEES as b
using (DEPT_ID)
group by 1
order by round(avg(SAL),0) desc