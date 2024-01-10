// bfs
// 지나간 자리는 방문기록을 남기자
// 지나간 자리에 거리의 합을 남기자
// 오른쪽 하단 좌표의 값을 반환하자

function solution(maps) {
    // 세로, 가로 길이
    const yLen = maps.length;
    const xLen = maps[0].length;
    
    // 상,상좌,좌 길 없으면 무조건 -1
    if(yLen >= 2 && xLen >= 2 &&  maps[yLen-2][xLen-1]===0 && maps[yLen-2][xLen-2]===0 && maps[yLen-1][xLen-2]===0){
        return -1;
    }
    
    // 방문기록
    const visit = Array.from(Array(yLen), () => Array(xLen).fill(false));
    
    // 거리기록 (최소를 구해야하므로 가장 큰 수를 세팅해주자)
    const distance = Array.from(Array(yLen), () => Array(xLen).fill(Number.MAX_SAFE_INTEGER));
    
    // 좌표 넣을 큐
    const queue = [];
    
    // 상하좌우
    const pos = [[-1,0],[1,0],[0,-1],[0,1]];

    // 출발 지점 세팅
    queue.push([0,0]);
    distance[0][0]=1;
   
  
    while(queue.length > 0){
        const [nowY,nowX] = queue.shift();
         visit[nowY][nowX]=true;
        
        // 현재 좌표에서 상하좌우 더하기
        for(const [y,x] of pos){
            let resY = nowY+y;
            let resX = nowX+x;
            
            // 범위 벗어나는지 체크 
            if((0 <= resY && resY < yLen ) && ( 0<= resX && resX < xLen)) {
                // 방문 여부, 길 있는지 여부 확인
                if(maps[resY][resX] === 1 && visit[resY][resX] === false){
                    queue.push([resY,resX]);
                    visit[resY][resX] = true;
                    distance[resY][resX] = Math.min(distance[resY][resX],distance[nowY][nowX]+1);
                }
            }
          
        }
    }
    
    return visit[yLen-1][xLen-1] === true ?  distance[yLen-1][xLen-1] : -1;
}
