function solution(arr) {
    
    const answer = []
    
    for(const v of arr){
        if(v>=50 && v%2===0) answer.push(v/2);
        else if(v< 50 && v%2===1) answer.push(v*2);
        else answer.push(v);
    }
    
    return answer;
}