function solution(n) {
    let answer = [n];
    let data = n;
    
    while(data!==1){
        if(data%2===0) data=data/2;
        else data=3*data+1;
        
        answer.push(data);
    }
    return answer;
}