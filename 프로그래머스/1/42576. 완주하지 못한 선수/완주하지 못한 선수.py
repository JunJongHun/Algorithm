def solution(participant, completion):
    memo = {}
    
    for i in completion:
        if i in memo:
            memo[i]+=1
        else:
            memo[i]=1
            
    for i in participant:
        if i in memo:
            if memo[i] == 0:
                return i
            else:
                memo[i]-=1
        else:
            return i

    return 0
    

    