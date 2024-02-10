def solution(name, yearning, photo):
    answer = []
    memo = {}
    for n,y in zip(name,yearning):
        memo[n] = y
    
    for p in photo:
        sum = 0
        for n in p:
            if n in memo:
               sum+=memo[n]
        
        answer.append(sum)
    
    return answer