from collections import deque

def solution(maps):

    row = len(maps)
    col = len(maps[0])
    visited = [[False]*col for _ in range(row)]
    distance = [[0]*col for _ in range(row)]
    
    queue =deque()
    queue.append((0,0))
    visited[0][0] = True
    distance[0][0] = 1
    
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    
    while queue:
        curX,curY = queue.popleft()
        
        for i in range(4):
            nextX = curX + dx[i]
            nextY = curY + dy[i]
            
            if 0<= nextX < row and 0<= nextY < col:
                if visited[nextX][nextY] == False and maps[nextX][nextY] == 1:
                    queue.append((nextX,nextY))
                    visited[nextX][nextY] = True
                    distance[nextX][nextY] = distance[curX][curY] + 1
        
    if distance[row-1][col-1] == 0:
        return -1
    
    
    return distance[row-1][col-1]