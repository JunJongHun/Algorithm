select ITEM_ID,ITEM_NAME
from ITEM_INFO
where ITEM_ID in (
select ITEM_ID
from ITEM_TREE
where parent_item_id is null
    )
order by 1 asc