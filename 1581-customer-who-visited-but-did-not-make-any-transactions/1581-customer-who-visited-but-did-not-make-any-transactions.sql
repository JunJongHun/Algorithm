select a.customer_id, count(customer_id) as count_no_trans
from Visits as a
left outer join Transactions as b
on  a.visit_id = b.visit_id
where b.transaction_id is null
group by a.customer_id
order by count(customer_id) asc