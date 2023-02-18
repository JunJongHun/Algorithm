// 1. 정렬한다
// 2. n과 배열에서 최소값이 가장 작은 수를 찾는다

function solution(array, n) {
    let answer = 0;
    let minNum = 1000;
    let minNumIndex = 0;
    array.sort((a,b)=>a-b);
    
    for(let i = 0; i<array.length;i++){
        
        if(minNum > Math.abs(n-array[i])) {
            minNum = Math.abs(n-array[i]);   
            minNumIndex = i;
        }
    }
    
  
    
    
    return array[minNumIndex];
}