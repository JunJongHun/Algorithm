from collections import defaultdict
import heapq

def solution(N, road, K):
    answer = 0
    
    graph = defaultdict(list)
    pq = []
    cost = {}
    
    for a,b,c in road:
            graph[a].append((c,b))
            graph[b].append((c,a))
            
    heapq.heappush(pq,(0,1))
    
    while pq:
        curr_val,curr_pos = heapq.heappop(pq)
        
        if curr_pos not in cost:
            cost[curr_pos] = curr_val
            
            for v,next in graph[curr_pos]:
                heapq.heappush(pq,(curr_val+v,next))
    
    for val in cost.values():
        if val <= K:
            answer+=1
    

    return answer