def solution(n, arr1, arr2):
    answer = []
    
    # print(format(9,'b').zfill(n))
    
    map1 = []
    map2 = []
    
    for a1,a2 in zip(arr1,arr2):
        s1 = format(a1,'b').zfill(n)
        s2 = format(a2,'b').zfill(n)
        
        map1.append(s1)
        map2.append(s2)
        
    print(map1)
    
    for m1,m2 in zip(map1,map2):
        res = ""
        for k1,k2 in zip(m1,m2):
            if k1 == '1' or k2 == '1':
                res+="#"
            else:
                res+=" "
        answer.append(res)
    
    return answer