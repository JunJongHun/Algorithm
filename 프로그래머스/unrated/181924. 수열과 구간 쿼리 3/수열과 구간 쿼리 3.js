function solution(arr, queries) {
    
    const copyArr = [...arr];
    
    queries.forEach(([i,j])=>[copyArr[i],copyArr[j]]=[copyArr[j],copyArr[i]])
    
    return copyArr;
}