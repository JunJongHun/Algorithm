select distinct(a.CAR_ID)
from CAR_RENTAL_COMPANY_CAR as a
join CAR_RENTAL_COMPANY_RENTAL_HISTORY as b
using (car_id)
where month(START_DATE) = 10 and car_type = '세단'
order by a.car_id desc