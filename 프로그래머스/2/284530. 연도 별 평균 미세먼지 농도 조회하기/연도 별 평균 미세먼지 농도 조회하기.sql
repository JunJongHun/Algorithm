select year(YM) as YEAR, round(avg(PM_VAL1),2) as 'PM10',  round(avg(PM_VAL2),2) as 'PM2.5'
from AIR_POLLUTION
where '수원' in (location1,location2)
group by 1
order by 1 asc
