function solution(arr, queries) {
    
    const copyArr = [...arr];
    
    for(const [s,e] of queries){
        for(let i=s; i<=e; i++){
            copyArr[i]++;
        }
    }
    
    return copyArr;
}