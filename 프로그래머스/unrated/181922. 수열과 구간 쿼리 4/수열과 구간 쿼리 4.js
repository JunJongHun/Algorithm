function solution(arr, queries) {
    
    const copyArr = [...arr];
    
    for(const [s,e,k] of queries){
        for(let i = s; i<=e; i++){
            if(i%k===0) copyArr[i]++;
        }
    }
    
    return copyArr;
}