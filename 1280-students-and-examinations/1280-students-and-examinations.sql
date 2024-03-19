select *,
(
    select count(*)
    from Examinations as e
    where a.student_id = e.student_id and b.subject_name = e.subject_name
) as attended_exams
from Students as a
cross join Subjects as b
order by a.student_id asc, b.subject_name asc
