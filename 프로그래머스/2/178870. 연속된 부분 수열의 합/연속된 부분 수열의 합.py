import heapq

def solution(sequence, k):
    answer = []
    dp = [sequence[0]]
    length = len(sequence)
    
    start = 0 
    end = 0
    
    pq = []
    
    for i in range(1,length):
        dp.append(sequence[i]+dp[i-1])        
    
    while start <= end and end < length:

        
        if  start == 0:
            s = dp[end]
        else:
            s = dp[end]-dp[start-1]

 
        if s == k:
            if not pq or pq[0][0] > end-start+1:
                heapq.heappush(pq,(end-start+1,[start,end]))
            end+=1
        elif s > k:
            start+=1
        else:
            end+=1
    
    
    return heapq.heappop(pq)[1]