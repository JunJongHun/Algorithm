-- with t as (
--     select *,if(order_date = customer_pref_delivery_date,1,0) as c
--     from delivery
--     order by customer_id asc, order_date asc
-- ),
-- a as (
--     select *
--     from t
--     group by customer_id
-- )



-- select *
-- from t


with t as (
    select customer_id, min(order_date) as recently_order_date
    from delivery
    group by 1
)

select round(avg(case when d.order_date = d.customer_pref_delivery_date then 1 else 0 end) * 100,2) as immediate_percentage
from delivery as d
join t
on d.customer_id = t.customer_id and d.order_date = t.recently_order_date