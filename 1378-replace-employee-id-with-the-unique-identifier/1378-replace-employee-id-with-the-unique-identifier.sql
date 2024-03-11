select unique_id,name
from Employees as a
left outer join EmployeeUNI as b
using (id)

