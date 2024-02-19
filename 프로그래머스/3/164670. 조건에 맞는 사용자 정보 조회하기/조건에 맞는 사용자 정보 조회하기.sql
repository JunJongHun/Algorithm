select USER_ID,NICKNAME,
concat(CITY,' ',STREET_ADDRESS1,' ',STREET_ADDRESS2) as '전체주소',
concat(substring(TLNO,1,3),'-',substring(TLNO,4,4),'-',substring(TLNO,8,4))
from USED_GOODS_BOARD as a
join USED_GOODS_USER as b
on a.writer_id = b.user_id
group by a.writer_id
having count(a.writer_id) >=3
order by user_id desc