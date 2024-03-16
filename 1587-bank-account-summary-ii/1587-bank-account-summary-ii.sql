select u.name as NAME, sum(amount) as BALANCE
from Users as u
inner join Transactions as t
on u.account = t.account
group by u.name
having sum(amount) > 10000
