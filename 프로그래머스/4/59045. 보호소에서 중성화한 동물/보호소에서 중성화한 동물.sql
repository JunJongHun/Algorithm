-- 코드를 입력하세요
SELECT a.ANIMAL_ID, a.ANIMAL_TYPE, a.NAME
from ANIMAL_INS as a
join ANIMAL_OUTS as b
on a.ANIMAL_ID = b.ANIMAL_ID
where b.SEX_UPON_OUTCOME not like 'Intact%' and a.SEX_UPON_INTAKE like 'Intact%'
order by  a.ANIMAL_ID asc