from collections import deque

def solution(priorities, location):
    answer = 0
    
    queue = deque()
    prior = deque()
    
    for i,p in enumerate(priorities):
        queue.append([i,p])
        prior.append(p)
    

        
    while queue:
        if queue[0][1] >= max(prior):
            answer+=1
            prior.popleft()
            if queue[0][0]==location:
                return answer
            queue.popleft()
        else:
            queue.rotate(-1)
            prior.rotate(-1)
    
    return answer