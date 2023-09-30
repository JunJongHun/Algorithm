function solution(arr, query) {
    
    let copy = [...arr];
    
    query.forEach((v,i)=>{
        copy = i%2===0 ? copy.slice(0,v+1) : copy.slice(v)
    })
    
    
    
    
    return copy;
}