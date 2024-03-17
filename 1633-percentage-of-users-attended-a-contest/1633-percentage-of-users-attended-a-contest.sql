select a.contest_id, round(a.rc / b.uc * 100,2) as percentage
from (
    select contest_id, count(user_id) as rc
    from Register
    group by contest_id
) as a,
(
    select count(user_id) as uc
    from Users
) as b
order by a.rc / b.uc * 100 desc, contest_id asc

