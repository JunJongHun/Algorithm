with t as (
SELECT max(a.views) as views
from USED_GOODS_BOARD as a
join USED_GOODS_FILE as b
using (board_id)
)

select concat('/home/grep/src/',b.board_id,'/',b.FILE_ID,b.FILE_NAME,b.FILE_EXT) as FILE_PATH
from USED_GOODS_BOARD as a
join USED_GOODS_FILE as b
using (board_id)
where views = (select t.views from t)
ORDER BY FILE_ID DESC