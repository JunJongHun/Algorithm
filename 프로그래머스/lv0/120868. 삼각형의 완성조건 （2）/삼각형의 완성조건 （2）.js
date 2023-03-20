function solution(sides) {
    let answer = 0;
    let max = Math.max(...sides);
    let min = Math.min(...sides);
    
    //가장 긴 변이 두 수중에 있는 경우
    answer+= max-(max-min);
    
    //가장 긴 변이 두 수가 아닌 경우
    answer+= (max+min)-max-1;
    
    
    return answer;
}