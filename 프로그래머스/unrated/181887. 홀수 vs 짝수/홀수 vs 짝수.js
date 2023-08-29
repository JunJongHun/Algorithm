function solution(num_list) {
    let sumEven = 0;
    let sumOdd = 0;
    
    num_list.forEach((v,i)=>i%2===0 ? sumOdd+=v : sumEven+=v);
    
    return Math.max(sumEven,sumOdd);
}