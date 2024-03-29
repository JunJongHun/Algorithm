select id
from (
    select id,temperature,recordDate,
    lag(recordDate) over(order by recordDate asc) as preDate,
    lag(temperature) over(order by recordDate asc) as preTemp
    from Weather
) as a
where date_add(preDate,interval 1 day) = recordDate and temperature > preTemp
