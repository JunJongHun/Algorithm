function solution(a, d, included) {
    const data = [a];
    
    for(let i=0; i<included.length-1; i++){
        data.push(data[i]+d);
    }
    
    return data.filter((v,i)=>included[i]).reduce((a,b)=>a+b);
}