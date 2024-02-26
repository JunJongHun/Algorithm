select a.ITEM_ID	,ITEM_NAME,	RARITY
from ITEM_INFO as a
left join ITEM_TREE as b
on a.ITEM_ID = b.PARENT_ITEM_ID
where b.PARENT_ITEM_ID is null
order by 1 desc