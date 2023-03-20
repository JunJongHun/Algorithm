function solution(n) {
    let answer = [];
    let count =2;
    while(n>=2){
        if(n%count===0){
            n/=count;
            answer.push(count);
        } 
        else count++;
    }
    
    return [...new Set(answer)];
}