select a.name,b.bonus
from (
    select empId,name
    from Employee
    where empId not in (
                        select empId
                        from Bonus
                        where bonus >= 1000
    )
) as a
left outer join Bonus as b
on a.empId = b.empId
