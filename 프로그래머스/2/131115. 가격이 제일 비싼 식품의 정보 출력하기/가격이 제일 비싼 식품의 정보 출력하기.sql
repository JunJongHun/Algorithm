select *
from FOOD_PRODUCT
where price = (select max(price) as price
              from FOOD_PRODUCT)