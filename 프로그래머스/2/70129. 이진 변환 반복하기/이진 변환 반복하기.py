def solution(s):
    answer = [0,0]

    
    while s!='1':
        
        k = len(s)
        s = s.replace('0','')
        
        c = len(s)
        answer[1]+=k-c
        
        s = format(c,'b')
        answer[0]+=1
    
    return answer