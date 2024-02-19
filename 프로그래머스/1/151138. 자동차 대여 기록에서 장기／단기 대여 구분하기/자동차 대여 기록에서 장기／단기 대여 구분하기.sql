SELECT HISTORY_ID,car_id,date_format(START_DATE,'%Y-%m-%d'),date_format(end_date,'%Y-%m-%d'),
case when datediff(end_date,start_date)+1 >= 30 then '장기 대여'
else '단기 대여' end as RENT_TYPE
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where date_format(START_DATE,'%Y-%m') = '2022-09'
order by history_id desc