-- 코드를 입력하세요
SELECT hour(DATETIME) as hour,count(*)
from animal_outs
where hour(DATETIME) between 9 and 19
group by hour(DATETIME)
order by hour(datetime)
