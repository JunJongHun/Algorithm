with t as (
    select emp_no, sum(score) as score
from HR_GRADE
group by EMP_NO
)


select sum(b.SCORE) as score,	a.EMP_NO,	a.EMP_NAME,	a.POSITION,	a.EMAIL
from HR_EMPLOYEES as a
join HR_GRADE as b
on a.EMP_NO = b.EMP_NO
group by a.EMP_NO
having sum(b.score) = (select max(score) from t)