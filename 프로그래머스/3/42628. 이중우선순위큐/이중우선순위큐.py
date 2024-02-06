import heapq

def solution(operations):
    answer = []
    
    heap = []
    
    for i in operations:
        a,b = i.split(' ')
        b = int(b)
        
        if a == 'I':
            heapq.heappush(heap,b)
        
        if a == 'D':
            if b == -1 and len(heap) != 0:
                heapq.heappop(heap)
            if b == 1 and len(heap) != 0:
                heap.remove(max(heap))
    
    if len(heap) == 0:
        return [0,0]
        
    return [max(heap),heapq.heappop(heap)]