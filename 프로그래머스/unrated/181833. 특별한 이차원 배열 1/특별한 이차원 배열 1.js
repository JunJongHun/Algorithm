function solution(n) {
    const arr = Array.from({length:n},()=>new Array(n).fill(0));
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i===j) arr[i][j]=1;
        }
    }
    
    return arr;
}