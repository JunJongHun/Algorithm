select s.student_id, s.student_name, b.subject_name,
(select count(student_id) 
from Examinations as e
where s.student_id = e.student_id and b.subject_name = e.subject_name) as attended_exams
from Students as s, Subjects as b
order by s.student_id,b.subject_name