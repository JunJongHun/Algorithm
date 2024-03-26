select x,y,z,
    case when x < y+z and y < z+x and z < y+x then 'Yes'
    else 'No'
    end as triangle
from Triangle