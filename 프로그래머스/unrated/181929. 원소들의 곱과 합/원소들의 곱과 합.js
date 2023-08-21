function solution(num_list) {
    const k = num_list.reduce((a,b)=>a+b);
    const j = num_list.reduce((a,b)=>a*b);
    
    return +(j < k*k);
}