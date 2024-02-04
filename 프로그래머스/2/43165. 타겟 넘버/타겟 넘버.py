from collections import deque

def solution(numbers, target):
    
    count = 0
    
    queue = deque()
    queue.append([0,-1])
    
    while queue:
        n,depth = queue.popleft()
        

        if depth == len(numbers)-1:
            if target == n:
                count+=1
        
        if depth < len(numbers)-1:
            queue.append([n+numbers[depth+1],depth+1])
            queue.append([n-numbers[depth+1],depth+1])
        
    
    return count