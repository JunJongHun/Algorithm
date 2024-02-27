-- 코드를 입력하세요
SELECT ANIMAL_ID,a.NAME
from animal_ins as a
join animal_outs as b
using (animal_id)
order by datediff(b.DATETIME,a.DATETIME) desc
limit 2