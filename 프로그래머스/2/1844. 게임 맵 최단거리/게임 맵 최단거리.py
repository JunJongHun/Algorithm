from collections import deque

def solution(maps):
    
    col = len(maps)
    row = len(maps[0])
    visited = [[False]*row for _ in range(col)]
    
    dy = [-1,1,0,0]
    dx = [0,0,-1,1]
    
    queue = deque()
    queue.append([0,0,1])
    visited[0][0] = True
    
    while queue:
        cy,cx,distance = queue.popleft()
        
        if cy == col-1 and cx == row -1:
            return distance
        
        for i in range(4):
            ny = cy+dy[i]
            nx = cx+dx[i]
            
            if 0<= ny < col and 0<= nx < row:
                if visited[ny][nx] == False and maps[ny][nx] == 1:
                    queue.append([ny,nx,distance+1])
                    visited[ny][nx]=True
 
    return -1