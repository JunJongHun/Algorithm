select a.ANIMAL_ID,a.name
from animal_ins as a
join animal_outs as b
on a.ANIMAL_ID = b.ANIMAL_ID
order by b.datetime - a.datetime desc
limit 2