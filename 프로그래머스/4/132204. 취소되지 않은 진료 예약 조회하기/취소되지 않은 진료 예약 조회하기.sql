with t as (
SELECT APNT_NO, PT_NO, 	MCDP_CD, APNT_YMD,MDDR_ID
from APPOINTMENT
where MCDP_CD = 'CS' and left(APNT_YMD,10) = '2022-04-13' and APNT_CNCL_YN = 'N')

select APNT_NO,	PT_NAME,	a.PT_NO,	t.MCDP_CD,	DR_NAME	,APNT_YMD
from PATIENT as a
join t
join DOCTOR as b
on a.pt_no = t.pt_no and t.MDDR_ID = b.DR_ID
order by APNT_YMD asc
