with t as (
select car_id
from car_rental_company_rental_history
where date_format(start_date,'%Y-%m') between '2022-08' and '2022-10'
group by car_id
having count(car_id) >= 5
)

select month(start_date) as MONTH,CAR_ID,count(car_id) as RECORDS
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where car_id in (select car_id from t) and date_format(start_date,'%Y-%m') between '2022-08' and '2022-10'
group by car_id, month(start_date)
order by month(start_date) asc, car_id desc