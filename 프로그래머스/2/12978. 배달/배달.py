from collections import defaultdict
import heapq

def solution(N, road, K):
    answer = 0
    
    costs = {}
    graph = defaultdict(list)
    heap = []
    
    for a,b,c in road:
        graph[a].append((c,b))
        graph[b].append((c,a))
        
    heapq.heappush(heap,(0,1))
    
    while heap:
        cur_v,cur_node = heapq.heappop(heap)
        
        if cur_node not in costs:
            costs[cur_node] = cur_v
            
            for v,next_node in graph[cur_node]:
                next_v = cur_v+v
                heapq.heappush(heap,(next_v,next_node))
    
    for i in costs.values():
        if i <= K:
            answer+=1

    return answer