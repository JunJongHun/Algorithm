select p.firstName, p.lastName,
    case when a.city is null then Null
    else a.city end as city,
    case when a.state is null then Null
    else a.state end as state
from Person as p
left join Address as a
on p.personId = a.personId
