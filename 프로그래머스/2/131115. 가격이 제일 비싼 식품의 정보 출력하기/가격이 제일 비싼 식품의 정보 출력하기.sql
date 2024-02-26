# select *
# from FOOD_PRODUCT
# where PRODUCT_ID = (select PRODUCT_ID
#                     from FOOD_PRODUCT
#                     group by )


select PRODUCT_ID,	PRODUCT_NAME,	PRODUCT_CD,	CATEGORY,	PRICE
from FOOD_PRODUCT
order by price desc
limit 1
