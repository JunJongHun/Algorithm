with t as (
select history_id,car_type,
    case when datediff(b.end_date,b.start_date)+1 >= 90 then '90일 이상'
    when datediff(b.end_date,b.start_date)+1 >= 30 then '30일 이상'
    when datediff(b.end_date,b.start_date)+1 >= 7 then '7일 이상'
    else NULL
    end as DURATION_TYPE, DAILY_FEE*(datediff(b.end_date,b.start_date)+1) as fee
from CAR_RENTAL_COMPANY_CAR as a
join CAR_RENTAL_COMPANY_RENTAL_HISTORY as b
using(car_id)
where a.car_type = '트럭'
)

select history_id, floor(t.fee*(1-ifnull(discount_rate,0)/100)) as FEE
from t
left join CAR_RENTAL_COMPANY_DISCOUNT_PLAN as c
on t.car_type = c.car_type and t.DURATION_TYPE = c.DURATION_TYPE
order by 2 desc,1 desc