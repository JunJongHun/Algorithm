select item_id,item_name
from ITEM_INFO as a 
left join ITEM_TREE as b
using (item_id)
where parent_item_id is null
order by 1 asc