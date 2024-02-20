 with t as (select member_id
                    from REST_REVIEW
                   group by member_id
                   order by count(*) desc
                   limit 1
            )

select MEMBER_NAME,REVIEW_TEXT,substring(REVIEW_DATE,1,10)
from MEMBER_PROFILE
join REST_REVIEW
using (MEMBER_ID)
where MEMBER_ID = (select t.member_id from t)
order by 3 asc, 2 asc
                   
                   