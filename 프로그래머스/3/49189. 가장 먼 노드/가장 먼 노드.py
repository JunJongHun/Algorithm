from collections import defaultdict,deque,Counter

def solution(n, edge):
    
    memo = defaultdict(list)
    
    queue = deque()
    distance = [0]*(n+1)
    visited = [False]*(n+1)
    
    for a,b in edge:
        memo[a].append(b)
        memo[b].append(a)
        
    queue.append(1)
    distance[1] = 1
    visited[1] = True
    
    while queue:
        cur = queue.popleft()
        
        for next in memo[cur]:
            if visited[next] == False:
                queue.append(next)
                distance[next]=distance[cur]+1
                visited[next] = True
            
    
    return Counter(distance).get(max(distance))