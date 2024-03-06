select date_format(trans_date,'%Y-%m') as month,
        country,
        count(*) as trans_count,
        count(if(state = 'approved',true,null)) as approved_count,
        sum(amount) as trans_total_amount,
        sum(if(state = 'approved',amount,0)) as approved_total_amount

from transactions
group by month, country