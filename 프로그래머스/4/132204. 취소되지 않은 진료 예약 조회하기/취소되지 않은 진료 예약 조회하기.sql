with t as (
    select pt_no,mddr_id,APNT_NO,APNT_YMD	
    from APPOINTMENT
    where mcdp_cd = 'CS' and APNT_CNCL_YN = 'N' and substring(APNT_YMD,1,10) = '2022-04-13'
)

select APNT_NO,PT_NAME,a.PT_NO,MCDP_CD,DR_NAME,APNT_YMD
from t
join PATIENT as a
join DOCTOR as b
on t.pt_no = a.pt_no and b.DR_ID = t.MDDR_ID
order by APNT_YMD asc