select machine_id, round((sum(if(activity_type = 'end', timestamp, 0)) - sum(if(activity_type = 'start', timestamp, 0))) / count(distinct process_id),3) as processing_time
from Activity
group by machine_id