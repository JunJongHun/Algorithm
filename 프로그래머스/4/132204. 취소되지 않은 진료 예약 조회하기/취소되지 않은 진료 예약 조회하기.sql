-- 코드를 입력하세요
SELECT b.APNT_NO,a.PT_NAME,a.PT_NO,b.MCDP_CD,c.DR_NAME,b.APNT_YMD
from PATIENT as a
join APPOINTMENT as b
on a.PT_NO = b.PT_NO
join DOCTOR as c
on c.DR_ID = b.MDDR_ID
where c.MCDP_CD in ('CS') and date_format(b.APNT_YMD,'%Y-%m-%d') = '2022-04-13' and b.APNT_CNCL_YN = 'N'
order by b.APNT_YMD asc