select contest_id, round(rc/uc*100,2) as percentage
from (
    select contest_id, count(user_id) as rc
    from Register
    group by contest_id
) as a
cross join (
    select count(user_id) as uc
    from Users
) as b
order by rc/uc*100 desc, contest_id asc