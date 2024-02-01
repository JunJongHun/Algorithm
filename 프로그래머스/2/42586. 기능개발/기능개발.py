from collections import deque

def solution(progresses, speeds):
    answer = []
    queue = deque()
    
    for i in range(len(speeds)):
        queue.append([progresses[i],speeds[i]])
    
    print(queue)
   
    while queue:
        count = 0
        while queue and queue[0][0]>=100:
            queue.popleft()
            count+=1
            
        
        if count != 0:
            answer.append(count);
            
        for i in range(len(queue)):
            queue[i][0]+=queue[i][1]
             
    
    return answer