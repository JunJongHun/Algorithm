def solution(n, computers):
    answer = 0
    memo = {}
    visited = [False]*len(computers)
    
    for i,c in enumerate(computers):
        memo[i] = c
    
    def dfs(computer):
        if visited[computer] == True:
            return
        
        visited[computer] = True
        
        for i,v in enumerate(memo[computer]):
            if visited[i] == False and v == 1:
                dfs(i)
        
    for i in range(len(computers)):
        if visited[i] == False:
            dfs(i)
            answer+=1
    
    
    return answer