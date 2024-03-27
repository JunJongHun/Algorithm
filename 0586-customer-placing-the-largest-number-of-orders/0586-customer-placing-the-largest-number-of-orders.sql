with t as (
    select customer_number, count(customer_number) as cnt
    from Orders
    group by customer_number
)

select customer_number
from t
where cnt = (
    select max(cnt) from t
) 