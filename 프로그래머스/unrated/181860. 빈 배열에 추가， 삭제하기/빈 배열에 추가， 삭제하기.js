function solution(arr, flag) {
    let answer = [];
    
    flag.forEach((v,i)=>{
        if(v) answer = [...answer,...new Array(arr[i]*2).fill(arr[i])]
        else answer.splice(-arr[i]);
    })
    
    return answer;;
}