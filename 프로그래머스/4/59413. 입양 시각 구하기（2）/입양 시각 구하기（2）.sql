-- 코드를 입력하세요
set @ho = -1;
select (@ho := @ho +1) as hour,(select count(datetime)
                                from animal_outs
                                where hour(datetime) = @ho) as c
from ANIMAL_OUTS
where @ho < 23
