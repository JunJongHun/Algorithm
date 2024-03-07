with t as (
    select player_id, min(event_date) as e
    from Activity
    group by player_id
)

select round(sum(if(t.e,1,0))/count(distinct(c.player_id)),2) as fraction
from Activity as c
left join t
on c.player_id = t.player_id and DATE_ADD(t.e, INTERVAL 1 DAY) = c.event_date


